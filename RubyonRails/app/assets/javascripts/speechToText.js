const { Readable } = require('stream');
const { AssemblyAI } = require('assemblyai');
const recorder = require('node-record-lpcm16');
const express = require('express');
const WebSocket = require('ws');
const app = express();
const server = require('http').createServer(app);

const wss = new WebSocket.Server({ server });
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

  // Event handler for receiving transcripts
  transcriber.on('transcript', (transcript) => {
    if (!transcript.text) {
      return;
    }

    if (transcript.message_type === 'PartialTranscript') {
      console.log('Partial:', transcript.text);
    } else {
      console.log('Final:', transcript.text);
    }
  });

  // Event handler for WebSocket connection
  wss.on('connection', (ws) => {

    console.log('WebSocket connection established');
    
    // Listen for incoming audio data from the client
    ws.on('message', (message) => {
        // console.log('Received audio data from client:', message);
        // Here, you can send the data to AssemblyAI if needed
    });

    transcriber.on('transcript', (transcript) => {
      if (transcript.message_type === 'FinalTranscript') {
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
    console.log('Past this recording?');

    Readable.toWeb(recording.stream()).pipeTo(transcriber.stream());

    // Stop recording and close connection using Ctrl-C.
    process.on('SIGINT', async function () {
      console.log();
      console.log('Stopping recording');
      recording.stop();

      console.log('Closing real-time transcript connection');
      await transcriber.close();
      console.log('Closing recording');

      process.exit();
    });
  } catch (error) {
    console.error(error);
    console.log('We got an error in the try');
  }
};

run();

server.listen(5000, '0.0.0.0', () => {
  console.log('Server started on port 5000');
});