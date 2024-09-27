// app/javascript/packs/transcription.js

// Import necessary modules
import consumer from "../channels/consumer" // Import the ActionCable consumer
import Recorder from 'recorder-js';

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let audioContext;
    let recorder;
    let transcriptionChannel = null;

    // Silence detection variables
    let silenceTimeout;
    let scriptProcessor;
    let isSpeaking = false;
    const silenceDuration = 1000; // 1 second in milliseconds
    const silenceThreshold = 0.01; // Adjust this threshold as needed

    startBtn.onclick = async () => {
        // Request microphone access
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Stream obtained:', stream);
        } catch (err) {
            console.error('Error accessing microphone:', err);
            return;
        }

        // Initialize Recorder.js
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        recorder = new Recorder(audioContext, { numChannels: 1 });
        await recorder.init(stream);

        // Set up the audio analyzer for silence detection
        const source = audioContext.createMediaStreamSource(stream);
        scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
        source.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        // Initialize ActionCable channel
        transcriptionChannel = consumer.subscriptions.create(
            { channel: "TranscriptionChannel", sample_rate: 16000 },
            {
                connected() {
                    console.log("Connected to TranscriptionChannel");
                },
                disconnected() {
                    console.log("Disconnected from TranscriptionChannel");
                },
                received(data) {
                    if (data.type === 'partial_transcript') {
                        console.log('Partial:', data.message);
                        // Optionally, display partial transcript in the UI
                    } else if (data.type === 'transcript') {
                        console.log('Final:', data.message);
                        checkAnswer(data.message);
                    }
                }
            }
        );

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
                            sendAudioData(blob);
                            // recorder.clear(); // Uncomment if you want to clear the recorder
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
                sendAudioData(blob);
                recorder.stop();
            }
        }

        // Disconnect audio nodes
        if (scriptProcessor) {
            scriptProcessor.disconnect();
        }

        // Terminate the ActionCable connection
        if (transcriptionChannel) {
            transcriptionChannel.perform('terminate');
            transcriptionChannel.unsubscribe();
            transcriptionChannel = null;
            console.log("Terminated TranscriptionChannel");
        }

        startBtn.disabled = false;
        stopBtn.disabled = true;
        console.log('Recording stopped');
    };

    function sendAudioData(blob) {
        if (!blob || blob.size === 0) {
            console.log('No audio data to send.');
            return;
        }
        console.log(`Blob size: `, blob.size);

        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;

            // Convert ArrayBuffer to Base64 without using spread operator
            const base64String = arrayBufferToBase64(arrayBuffer);

            // Send the audio data via ActionCable
            if (transcriptionChannel) {
                transcriptionChannel.send({ audio_data: base64String });
                console.log("Sent audio data to TranscriptionChannel");
            }
        };
        reader.readAsArrayBuffer(blob);
    }

    // Helper function to convert ArrayBuffer to Base64
    function arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        const chunkSize = 0x8000; // 32768

        for (let i = 0; i < len; i += chunkSize) {
            const chunk = bytes.subarray(i, i + chunkSize);
            binary += String.fromCharCode.apply(null, chunk);
        }

        return btoa(binary);
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
