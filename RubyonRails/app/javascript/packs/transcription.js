import { TranscriptionServiceClient } from './proto/transcription_grpc_web_pb.js';
import { AudioChunk } from './proto/transcription_pb.js';
import { grpc } from '@improbable-eng/grpc-web';

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let audioContext;
    let microphone;
    let mediaRecorder;
    let audioChunks = [];
    let silenceTimeout;
    let scriptProcessor;
    let client = null;
    let num_chunks;

    let isSpeaking = false;
    const silenceDuration = 1000; // 1 second in milliseconds
    const silenceThreshold = 0.01; // Adjust this threshold as needed
  
    startBtn.onclick = async () => {

              // Initialize the gRPC-Web client

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


        
      // Request permissions and get stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      microphone = audioContext.createMediaStreamSource(stream);
  
      // Initialize the gRPC-Web client
      const client = new TranscriptionServiceClient('http://localhost:8080'); // Adjust the URL and port as needed
  
      // Create a ScriptProcessorNode to analyze audio data
      scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
      microphone.connect(scriptProcessor);
      scriptProcessor.connect(audioContext.destination);
  
      // Set up the audio analyzer
      scriptProcessor.onaudioprocess = function (event) {
        const inputData = event.inputBuffer.getChannelData(0);
        let total = 0;
      
        // Calculate the average amplitude
        for (let i = 0; i < inputData.length; i++) {
          total += Math.abs(inputData[i]);
        }
        const average = total / inputData.length;
      
        // Log the average amplitude for debugging
        // console.log('Average amplitude:', average);
      
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
            // Start accumulating audio chunks
            audioChunks = [];
          }
        } else {
          // Audio is below the threshold
          if (!silenceTimeout) {
            silenceTimeout = setTimeout(() => {
              // Silence has been detected for the specified duration
              if (isSpeaking) {
                console.log('Stopped speaking');
                isSpeaking = false;
                sendAudioData(client);
                // Reset the audio chunks
                audioChunks = [];
              }
              silenceTimeout = null;
            }, silenceDuration);
          }
        }
      };
        
      // Start recording and accumulating audio chunks
      mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm;codecs=opus' });

      mediaRecorder.onstart = () => {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        console.log('Recording started');
    };

    mediaRecorder.onstop = () => {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        console.log('Recording stopped');
    };


    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0 && isSpeaking) {
          audioChunks.push(event.data);
          console.log('Accumulating audio chunk');
        }
      };
        
      mediaRecorder.start(100); // Capture data every 100ms
    };
  
    stopBtn.onclick = async () => {
        // Stop recording
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
        }
      
        // Disconnect audio nodes
        if (microphone) {
          microphone.disconnect();
        }
        if (scriptProcessor) {
          scriptProcessor.disconnect();
        }
      
        // Send any remaining audio data
        if (audioChunks.length > 0) {
          sendAudioData(client);
          console.log('Sending remaining audio');
          audioChunks = [];
        }
      
        // Send AJAX request to stop the gRPC server
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
      };
  
    function sendAudioData(client) {
        if (audioChunks.length === 0) {
            console.log('No audio chunks to send.');
            return;
            }
        
        // audioChunks = audioChunks.slice(-1).pop()

        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        // console.log('Blob type:', blob.type);
        // console.log('Blob size:', blob.size);

                // Check if the blob size is greater than zero
        // if (blob.size === 0) {
        //     console.log('Blob size is zero. No data to send.');
        //     return;
        // }

      const reader = new FileReader();
      reader.onloadend = () => {
        const rawData = new Uint8Array(reader.result);
        console.log("Audio data being sent:", reader.result);
            
        const audioChunk = new AudioChunk();
        audioChunk.setAudioData(rawData);

        // Unary gRPC call (single request, single response)
        client.transcribe(audioChunk, {}, (err, response) => {
          if (err) {
            console.error('Error:', err);console.log("Audio data being sent:", reader.result);

          } else {
            const transcript = response.getTranscript();
            console.log('Received response:', response);
            console.log('Received transcript:', transcript);
            checkAnswer(transcript);
          }
        });
      };
      reader.readAsArrayBuffer(blob);
    }
  
    // The checkAnswer function remains the same
    function checkAnswer(transcribedText) {
      console.log('Checking answer.....start!');
  
      let answer = transcribedText.replace(/\./, ''); // Clean up the transcript
      let allLabels = document.querySelectorAll('label');
  
      allLabels.forEach((label) => {
        if (label.textContent.trim() === answer) {
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
  