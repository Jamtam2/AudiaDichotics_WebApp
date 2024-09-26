// Import necessary modules
import { TranscriptionServiceClient } from './proto/transcription_grpc_web_pb.js';
import { AudioChunk } from './proto/transcription_pb.js';
import { grpc } from '@improbable-eng/grpc-web';
import Recorder from 'recorder-js';
import { encode } from 'base64-arraybuffer';

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let audioContext;
    let recorder;
    let client = null;

    // Silence detection variables
    let silenceTimeout;
    let scriptProcessor;
    let isSpeaking = false;
    const silenceDuration = 1000; // 1 second in milliseconds
    const silenceThreshold = 0.01; // Adjust this threshold as needed

    startBtn.onclick = async () => {
        // Start the gRPC server
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const response = await fetch('/grpc/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
        });
        if (!response.ok) {
            console.error(`Server error: ${response.status} ${response.statusText}`);
            return;
        }
        const result = await response.json();
        console.log(result.message); // Should print "gRPC server started"

        // Request microphone access
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Stream obtained:', stream);
        } catch (err) {
            console.error('Error accessing microphone:', err);
            return;
        }

        // Initialize the gRPC-Web client
        client = new TranscriptionServiceClient('http://localhost:8080'); // Adjust the URL and port as needed

        // Initialize Recorder.js
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        recorder = new Recorder(audioContext, { numChannels: 1 });
        await recorder.init(stream);

        // Set up the audio analyzer for silence detection
        const source = audioContext.createMediaStreamSource(stream);
        scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
        source.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        scriptProcessor.onaudioprocess = function (event) {
            const inputData = event.inputBuffer.getChannelData(0);
            let total = 0;

            // Calculate the average amplitude
            for (let i = 0; i < inputData.length; i++) {
                total += Math.abs(inputData[i]);
            }
            const average = total / inputData.length;

            // Check if the average amplitude is above the silence threshold
            if (average > silenceThreshold) {
                // Audio is above the threshold; reset the silence timer
                if (silenceTimeout) {
                    clearTimeout(silenceTimeout);
                    silenceTimeout = null;
                }
                if (!isSpeaking) {
                    console.log('Started speaking');
                    isSpeaking = true;
                    // Start recording when the user starts speaking
                    recorder.start();
                }
            } else {
                // Audio is below the threshold
                if (!silenceTimeout && isSpeaking) {
                    silenceTimeout = setTimeout(() => {
                        // Silence has been detected for the specified duration
                        console.log('Stopped speaking');
                        isSpeaking = false;
                        // Stop recording and send the audio data
                        recorder.stop().then(({ blob }) => {
                            sendAudioData(client, blob);
                            // Clear the recorder to avoid accumulating old data
                            // recorder.clear();
                        });
                        silenceTimeout = null;
                    }, silenceDuration);
                }
            }
        };

        startBtn.disabled = true;
        stopBtn.disabled = false;
    };

    stopBtn.onclick = async () => {
        // Stop recording
        if (recorder && isSpeaking) {
            const { blob } = await recorder.stop();
            if (blob && blob.size > 0) {
                sendAudioData(client, blob);
                recorder.stop();
            }
        }

        // Disconnect audio nodes
        if (scriptProcessor) {
            scriptProcessor.disconnect();
        }

        // Stop the gRPC server
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const response = await fetch('/grpc/stop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
        });

        if (!response.ok) {
            console.error(`Server error: ${response.status} ${response.statusText}`);
            return;
        }

        const result = await response.json();
        console.log(result.message); // Should print "gRPC server stopped"

        startBtn.disabled = false;
        stopBtn.disabled = true;
        console.log('Recording stopped');
    };

    function sendAudioData(client, blob) {
        if (!blob || blob.size === 0) {
            console.log('No audio data to send.');
            return;
        }
        console.log(`Blob size: `,blob.size)

        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            // Encode the audio data to Base64
            const base64String = encode(arrayBuffer);

            const audioChunk = new AudioChunk();
            audioChunk.setAudioData(base64String);

            // Unary gRPC call (single request, single response)
            client.transcribe(audioChunk, {}, (err, response) => {
                if (err) {
                    console.error('Error:', err);
                } else {
                    const transcript = response.getTranscript();
                    console.log('Received transcript:', transcript);
                    checkAnswer(transcript);
                }
            });
        };
        reader.readAsArrayBuffer(blob);
    }

    // The checkAnswer function remains the same
    function checkAnswer(transcribedText) {
        console.log('Checking answer...');

        let answer = transcribedText.replace(/\./, '').trim(); // Clean up the transcript
        let allLabels = document.querySelectorAll('label');

        allLabels.forEach((label) => {
            if (label.textContent.trim().toLowerCase() === answer.toLowerCase()) {
                let checkbox = label.querySelector('input[type="checkbox"]');
                if (checkbox && !checkbox.checked) {
                    // Check if not already checked
                    checkbox.checked = true;
                    checkbox.dispatchEvent(
                        new Event('change', {
                            bubbles: true,
                            cancelable: true,
                        })
                    );
                    label.classList.add('active'); // Provide visual feedback
                }
            }
        });
    }
});
