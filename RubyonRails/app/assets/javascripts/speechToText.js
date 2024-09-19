const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const { Readable } = require('stream');
const { AssemblyAI } = require('assemblyai');
const recorder = require('node-record-lpcm16');
const express = require('express');
const WebSocket = require('ws');
const app = express();
const server = require('http').createServer(app);

const wss = new WebSocket.Server({ 
  server,
  maxPayload: 256 * 1024 // Increase max payload size to 256KB
});
wss.onopen = () => console.log('WebSocket connection established');
wss.onerror = (error) => console.error('WebSocket error:', error);
wss.onclose = (event) => console.log('WebSocket connection closed:', event.reason);


const run = async () => {
  const client = new AssemblyAI({
    apiKey: '8323e4c46ab24be5822b111c7fd30635'
  });

  const transcriber = client.realtime.transcriber({
    sampleRate: 16000
  });

  // Event handler for when the connection is opened
  transcriber.on('open', ({ sessionId }) => {
    console.log(`Session opened with ID: ${sessionId}`);
  });

  // Event handler for errors
  transcriber.on('error', (error) => {
    console.error('Error:', error);
  });

  // Event handler for when the connection is closed
  transcriber.on('close', (code, reason) =>
    console.log('Session closed:', code, reason)
  );

  // // Event handler for receiving transcripts
  // transcriber.on('transcript', (transcript) => {
  //   if (!transcript.text) {
  //     return;
  //   }

  //   if (transcript.message_type === 'PartialTranscript') {
  //     console.log('Partial:', transcript.text);
  //   } else {
  //     console.log('Final:', transcript.text);
  //   }
  // });

  // Event handler for WebSocket connection
    wss.on('connection', (ws) => {
      console.log('WebSocket connection established');

      // Create a file to store the WebM data
      const webmFile = fs.createWriteStream('audio.webm');

      ws.on('message', async (message) => {
        console.log('Received audio data from client:', message);

        // Write the WebM data to a file
        webmFile.write(message);

        webmFile.end();
          // Convert WebM to WAV
          ffmpeg('audio.webm')
            .toFormat('wav')
            .on('end', async () => {
              console.log('Conversion finished, sending to AssemblyAI.');

              const audioData = fs.readFileSync('audio.wav');
              transcriber.sendAudio(audioData);
              console.log('Sent WAV audio chunk to AssemblyAI!');
            })
            .on('error', (err) => {
              console.error('Error during conversion:', err);
            })
            .save('audio.wav'); // Save the output file as WAV
        });
      });
    ;
    transcriber.on('transcript', (transcript) => {
      // Serialize and send the transcript data
      console.log('In transcript:', JSON.stringify(transcript));
      ws.send(JSON.stringify(transcript));
    
  });

    try {
      console.log('Connecting to real-time transcript service');
      await transcriber.connect();

      process.on('SIGINT', async function () {
        console.log('Stopping transcription');
        await transcriber.close();
        console.log('Transcription service stopped');
        process.exit();
      });
    } catch (error) {
      console.error('Error during setup:', error);
    }
  };


run();

server.listen(5000, '0.0.0.0', () => {
  console.log('Server started on port 5000');
});