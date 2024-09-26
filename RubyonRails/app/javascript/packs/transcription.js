import { encode } from 'base64-arraybuffer';
import consumer from '../channels/consumer'; // Adjust the import path as needed

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let isSpeaking = false;
    let silenceTimeout;
    let audioContext;
    let scriptProcessor;
    let stream;
    let subscription;

    const silenceDuration = 2000; // Increased to 2 seconds
    const silenceThreshold = 0.01; // Adjust this threshold as needed

    startBtn.onclick = async () => {
        // Request microphone access
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log('Stream obtained');
        } catch (err) {
            console.error('Error accessing microphone:', err);
            return;
        }
        // Initialize Audio Context and ScriptProcessor
        audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
        console.log('AudioContext initialized with sample rate:', audioContext.sampleRate);

        const source = audioContext.createMediaStreamSource(stream);
        scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
        source.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        // Initialize WebSocket connection using Action Cable consumer
        subscription = consumer.subscriptions.create('TranscriptionChannel', {
            connected() {
                console.log('WebSocket connection established via Action Cable');
            },
            disconnected() {
                console.log('WebSocket connection closed');
            },
            received(data) {
                if (data.type === 'transcript') {
                    const transcript = data.message;
                    if (transcript.trim() !== '') {
                        console.log('Received transcript:', transcript);
                        checkAnswer(transcript);
                    } else {
                        console.log('Received empty transcript, ignoring.');
                    }
                } else if (data.type === 'partial_transcript') {
                    const transcript = data.message;
                    if (transcript.trim() !== '') {
                        console.log('Received partial transcript:', transcript);
                        // Optionally display partial transcript to the user
                    } else {
                        console.log('Received empty partial transcript, ignoring.');
                    }
                }
            },
            receive_audio(data) {
                this.perform('receive_audio', data);
            }
        });

        scriptProcessor.onaudioprocess = function (event) {
            const inputData = event.inputBuffer.getChannelData(0);
            let total = 0;

            // Calculate the average amplitude for silence detection
            for (let i = 0; i < inputData.length; i++) {
                total += Math.abs(inputData[i]);
            }
            const average = total / inputData.length;

            if (average > silenceThreshold) {
                // Audio is above the threshold; reset the silence timer
                if (silenceTimeout) {
                    clearTimeout(silenceTimeout);
                    silenceTimeout = null;
                }

                if (!isSpeaking) {
                    console.log('Started speaking');
                    isSpeaking = true;
                }
                // Send audio data when speaking
                sendAudioData(inputData);
            } else {
                // Audio is below the threshold
                if (!silenceTimeout && isSpeaking) {
                    silenceTimeout = setTimeout(() => {
                        console.log('Stopped speaking');
                        isSpeaking = false;
                        silenceTimeout = null;
                        subscription.perform('terminate');
                        console.log('Terminated');
                    }, silenceDuration);
                }
            }
        };

        startBtn.disabled = true;
        stopBtn.disabled = false;
    };

    stopBtn.onclick = async () => {
        // Unsubscribe from the channel
        if (subscription) {
            subscription.unsubscribe();
            console.log('Unsubscribed from TranscriptionChannel');
        }

        // Disconnect audio nodes
        if (scriptProcessor) {
            scriptProcessor.disconnect();
            console.log('Disconnected script processor');
        }
        if (audioContext) {
            audioContext.close();
            console.log('Closed AudioContext');
        }

        startBtn.disabled = false;
        stopBtn.disabled = true;
        console.log('Recording stopped');
    };

    // Modify sendAudioData to use subscription
    function sendAudioData(inputData) {
        // Convert Float32Array to Int16Array (PCM 16-bit)
        let pcmData = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
            let s = Math.max(-1, Math.min(1, inputData[i]));
            pcmData[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }

        // Convert Int16Array to ArrayBuffer
        let buffer = pcmData.buffer;

        // Encode to Base64
        const base64String = encode(buffer);

        // Send audio data to server
        subscription.perform('receive_audio', { audio_data: base64String });
        console.log('Sending audio data to server');
    }

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
