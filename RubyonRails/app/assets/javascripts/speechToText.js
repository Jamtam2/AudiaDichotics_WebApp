const { Readable } = require('stream');
const { AssemblyAI } = require('assemblyai');
const recorder = require('node-record-lpcm16');
const express = require('express');
const WebSocket = require('ws');
const app = express();
const server = require('http').createServer(app);
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs'); // File system module to save the WAV file


const wss = new WebSocket.Server({ server });

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

  // Event handler for receiving transcripts
  transcriber.on('transcript', (transcript) => {
    if (!transcript.text) {
      return;
    }

    if (transcript.message_type === 'PartialTranscript') {
      // console.log('Partial:', transcript.text);
    } else {
      console.log('Final:', transcript.text);
    }
  });

  // Event handler for WebSocket connection
  wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
      console.log('Received audio data from WebSocket:', message);

      const audioBuffer = Buffer.from(message); // Convert WebSocket message to Buffer
      console.log('Buffer length:', audioBuffer.length);
      console.log('Buffer first bytes:', audioBuffer.slice(0, 20)); // Log first 20 bytes for inspection

      console.log('Got buffer, in websocket:', message);

      console.log('Sendfing audio to assembly ai.....:');

      transcriber.sendAudio(message);
        });
  
    
    transcriber.on('transcript', (transcript) => {
      if (transcript.message_type === 'FinalTranscript' | transcript.message_type === 'PartialTranscript') {
        // Serialize and send the transcript data
        ws.send(JSON.stringify(transcript));
      }
    });
  });

  try {
    console.log('Connecting to real-time transcript service');
    await transcriber.connect();

    console.log('Starting recording');
    const recording = recorder.record({
      channels: 1,
      sampleRate: 16000,
      audioType: 'wav' // Linear PCM
    });

    Readable.toWeb(recording.stream()).pipeTo(transcriber.stream());

    // Stop recording and close connection using Ctrl-C.
    process.on('SIGINT', async function () {
      console.log();
      console.log('Stopping recording');
      recording.stop();

      console.log('Closing real-time transcript connection');
      await transcriber.close();

      process.exit();
    });
  } catch (error) {
    console.error(error);
  }
};

run();

server.listen(8080, () => {
  console.log('Server started on port 8080');
});