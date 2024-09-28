// app/javascript/packs/transcription.js

// Import necessary modules
import consumer from "../channels/consumer" // Import the ActionCable consumer
import Recorder from 'recorder-js';

// import { SoxRecording } from './sox.js'; // Import SoxRecording

    // Create a dictionary of labels and checkboxes
    let labelCheckboxMap = {};
    document.querySelectorAll('label').forEach((label) => {
        let checkbox = label.querySelector('input[type="checkbox"]');
        if (checkbox) {
            labelCheckboxMap[label.textContent.trim().toLowerCase()] = {
                checkbox: checkbox,
                label: label
            };
        }
    });
    console.log('created the label checkbox map: ', labelCheckboxMap)
document.addEventListener('DOMContentLoaded', function () {

    
    // Start the Node.js script when the page loads
    fetch('/start_speech_script')  
      .then(response => response.text())
      .then(data => console.log("Speech-to-text script started:", data))
      .catch(error => console.error("Error starting script:", error));


    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const ws = new WebSocket('ws://localhost:8080');
    const audioPlayer = document.getElementById('audioPlayer');
    let audioContext;
    let recorder;
    let transcriptionChannel = null;

    // Silence detection variables
    let silenceTimeout;
    let scriptProcessor;
    let isSpeaking = false;
    const silenceDuration = 1000; // 1 second in milliseconds
    const silenceThreshold = 0.01; // Adjust this threshold as needed

    ws.onopen = () => {
        console.log('WebSocket connection established');
      };
  
      ws.onmessage = function(event) {
        const transcript = JSON.parse(event.data);
        if (transcript.text) {
          checkAnswer(transcript.text.replace(/\./, ''));
          console.log('Transcript received:', transcript.text);
        }
      };
  
      ws.onerror = (error) => {
        console.error(`WebSocket error: ${error}`);
      };
  
      ws.onclose = () => {
        console.log('WebSocket connection closed');
      };
  

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
        // transcriptionChannel = consumer.subscriptions.create(
        //     { channel: "TranscriptionChannel", sample_rate: 16000 },
        //     {
        //         connected() {
        //             console.log("Connected to TranscriptionChannel");
        //         },
        //         disconnected() {
        //             console.log("Disconnected from TranscriptionChannel");
        //         },
        //         received(data) {
        //             if (data.type === 'partial_transcript') {
        //                 console.log('Partial:', data.message);
        //                 // Optionally, display partial transcript in the UI
        //             } else if (data.type === 'transcript') {
        //                 console.log('Final:', data.message);
        //                 checkAnswer(data.message);
        //             }
        //         }
        //     }
        // );

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
                            console.log('Sending audio data')
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
        fetch('/stop_speech_script')  
        .then(response => response.text())
        .then(data => console.log("Speech-to-text script ended:", data))
        .catch(error => console.error("Error starting script:", error));
  
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
        // console.log('In audio data');
    
        if (!blob || blob.size === 0) {
            console.log('No audio data to send.');
            return;
        }
    
        // Send the audio Blob to your server for saving and conversion
        // console.log('Starting to save and convert audio data....');
        const formData = new FormData();
        formData.append('audio', blob, 'audio.wav');
    
        fetch('/save_audio', {  // Ensure this matches your route
            method: 'POST',
            body: formData
            // If you implemented API key authentication, include headers here
            // headers: {
            //     'Authorization': 'your_api_key_here'
            // }
        })
        .then(response => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                return response.text().then(text => { throw new Error(text) });
            }
        })
        .then(data => {
            if (data.audio_data) {
                // console.log('Audio saved and converted successfully:', data);
    
                // Decode the Base64 audio data
                const decodedAudio = base64ToArrayBuffer(data.audio_data);
                console.log(`Blob size: `, decodedAudio.byteLength);

                // Log the size of the converted audio data
                // console.log('Converted audio size (bytes):', decodedAudio.byteLength);
    
                // Send the converted audio data via WebSocket
                // console.log('Sending converted audio to WebSocket...');
                ws.send(decodedAudio);
            } else {
                console.log('Audio saved successfully:', data);
            }
        })
        .catch(error => {
            console.error('Error saving audio:', error);
        });
    }
    
    // Helper function to convert Base64 to ArrayBuffer
    function base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
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
        console.log('Current audio file time: ', audioPlayer.currentTime)
        // let wordList = transcribedText.replace(/[^\w\s]|_/g, '').trim().split(/\s+/);
        let wordList = transcribedText.replace(/\./, '').trim().split(/\s+/); // Clean up the transcript
        console.log('Mapping vocab...');
        
        wordList = wordList.map(word => {
            if (word.toLowerCase() === 'y') {
                return 'Why';
            } else if (word.toLowerCase() === 'four') {
                return 'For';
            }
            else if (word.toLowerCase() === 'pick') {
                return 'Pig';
            }
            else if (word.toLowerCase() === 'rome') {
                return 'Room';
            }
            else if (word.toLowerCase() === 'around') {
                return 'Round';
            }
            else if (word.toLowerCase() === 'toe') {
                return 'Tow';
            }
            else if (word.toLowerCase() === 'to') {
                return 'Tow';
            }
            else if (word.toLowerCase() === 'broom') {
                return 'Room';
            }
            else if (word.toLowerCase() === 'blip') {
                return 'Lip';
            }
            else if (word.toLowerCase() === 'ball') {
                return 'Fall';
            }
            else if (word.toLowerCase() === 'po') {
                return 'Tow';
            }
            else if (word.toLowerCase() === 'whack') {
                return 'Quack';
            }
            else if (word.toLowerCase() === 'she') {
                return 'Sheep';
            }
            else if (word.toLowerCase() === 'take') {
                return 'Cake';
            }
            else if (word.toLowerCase() === 'black') {
                return 'Quack';
            }
            else if (word.toLowerCase() === 'blast') {
                return 'Glass';
            }
            else if (word.toLowerCase() === 'piece') {
                return 'Teeth';
            }
            else if (word.toLowerCase() === 'li') {
                return 'Why';
            }
            else if (word.toLowerCase() === 'fawn') {
                return 'Fun';
            }
            else if (word.toLowerCase() === 'ground') {
                return 'Round';
            }
            else if (word.toLowerCase() === 'both') {
                return 'Booth';
            }
            else if (word.toLowerCase() === 'ten') {
                return 'Pen';
            }
            else if (word.toLowerCase() === 'ohm') {
                return 'Comb';
            }
            else if (word.toLowerCase() === 'bets') {
                return 'Bet';
            }

            
            return word; // Keep the word unchanged if no match
        });
        // console.log('Vocab mapped...');
        
        console.log('List of answers..? ', wordList);
        let allLabels = document.querySelectorAll('label');

    // Loop through each word in the wordList and check if it exists in the dictionary
    wordList.forEach((word) => {
        let key = word.toLowerCase();
        if (labelCheckboxMap[key]) {
            let { checkbox, label } = labelCheckboxMap[key];
            if (!checkbox.checked) {
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

        // Stop the Node.js script when the user leaves the page
        window.addEventListener('beforeunload', function() {
            navigator.sendBeacon('/stop_speech_script');
            console.log("Speech-to-text script stopped");
          });
      
});
