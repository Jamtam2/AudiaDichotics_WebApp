const { Readable } = require('stream');
const { AssemblyAI } = require('assemblyai');
const recorder = require('node-record-lpcm16');
const express = require('express');
const WebSocket = require('ws');
const app = express();
const server = require('http').createServer(app);
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs'); // File system module to save the WAV file

// Define the maximum chunk size
const MAX_CHUNK_SIZE = 131072; // slightly less than the buffer limit
const KEEP_ALIVE_INTERVAL = 30000; // 30 seconds
const SILENT_DURATION_SEC = 0.1; // Duration of silence in seconds
const BYTES_PER_SECOND = 16000 * 1 * 2; // SampleRate * Channels * BytesPerSample
const SILENT_BUFFER_SIZE = Math.floor(SILENT_DURATION_SEC * BYTES_PER_SECOND); // 3,200 bytes
const SILENT_BUFFER = Buffer.alloc(SILENT_BUFFER_SIZE, 0); // Fill buffer with zeros (silence)

// Custom words to give more probability
const CUSTOM_GRAMMAR = [
  "Fun", "Pig", "Vine", "Sheep", "Cake", "Buy", "Round", "Storm", "Say", "Tan",
  "Yes", "Fast", "Pen", "Most", "Bet", "One", "Green", "Booth", "Store", "Glass", 
  "Soap", "Teeth", "Bring", "Share", "Rug", "Book", "Want", "Soft", "Tow", "Kite", 
  "Why", "Quack", "Comb", "For", "That", "Love", "Bug", "Wet", "Quiz", "Juice", 
  "Camp", "Light", "Hand", "Goose", "Lip", "Dad", "Fall", "Room", "Old", "Chef", 
  "Bell", "Farm", "Same", "Cast", "Child", "Bowl", "How", "Plug", "Lick", "Top", 
  "Watch", "Horse", "Ham", "Day", "When", "Truck", "Drink", "Rhyme", "Sleep", "Yard",
  "Greek", "Stop", "Den", "Red", "Song", "Math", "Dog", "More", "Spoon", "North", 
  "But", "Chip", "Year", "Nice", "Cloud", "Make", "Tag", "Heart", "Pot", "Ball", 
  "Door", "Set", "Cup", "Pat", "Close", "Shine", "Ring", "Test", "Rough", "Corn", 
  "Post", "Rim", "Two", "Look", "Cook", "Bite", "Car", "Lamp", "Skip", "Kiss", 
  "Dream", "Floor", "Phone", "Damp", "Sit", "Gold", "Bear", "Sun", "Knife", "Bath", 
  "Leg", "Milk", "Young", "Brush", "See", "Law", "Cat", "Hug", "Grass", "Square", 
  "Weird", "Globe", "Bird", "Fork", "Bus", "Swing", "Snow", "Race", "Moon", "Wall", 
  "Heel", "Five", "Mud", "Sheet", "Mat", "Nail", "Gum", "Pie", "Pill", "Key",
  "Bar", "Head", "Box", "Shelf", "Will", "Pan", "Work", "Dive", "Knit", "Where", 
  "Down", "Vase", "Food", "Judge", "Gas", "Sand", "Van", "Game", "Joke", "Need", 
  "New", "Late", "Plate", "Rope", "Jar", "Fish", "First", "Black", "Voice", "Rose", 
  "Bed", "Catch", "Couch", "Best", "Type", "Big", "Rain", "Mouse", "Cow", "Her", 
  "Neat", "Rock", "Sing", "Plain", "Learn", "Dark", "Yell", "White", "Help", "Knee"
];

const wss = new WebSocket.Server({ server });

const run = async () => {
  const client = new AssemblyAI({
    apiKey: '8323e4c46ab24be5822b111c7fd30635'
  });

  const transcriber = client.realtime.transcriber({
    sampleRate: 16000,
    custom_vocabularies: [
      { phrases: CUSTOM_GRAMMAR }
    ]
  });

  // Inside your `run` function, after establishing the transcriber connection
  // Variable to track the connection state
  let isTranscriberOpen = false;

  // Keep-alive interval, just sends a ping every KEEP_ALIVE_INTERVAL to ensure that the websocket doesn't close if a person idles
  // Keep-alive interval
  const keepAlive = setInterval(() => {
    if (isTranscriberOpen) {
      transcriber.sendAudio(SILENT_BUFFER); // Send silent audio to keep the connection alive
      console.log('Sent keep-alive silent buffer');
    } else {
      console.warn('Transcriber is not open. Skipping keep-alive.');
      run();
    }
  }, KEEP_ALIVE_INTERVAL);


  // Event handler for when the connection is opened
  transcriber.on('open', ({ sessionId }) => {
    isTranscriberOpen = true;
    console.log(`Session opened with ID: ${sessionId}`);
  });

  // Event handler for errors
  transcriber.on('error', (error) => {
    console.error('Error:', error);
  });

  // Event handler for when the connection is closed
  transcriber.on('close', (code, reason) =>{
    isTranscriberOpen = false;
    console.log('Session closed:', code, reason)

  }
  );

  // Event handler for receiving transcripts
  transcriber.on('transcript', (transcript) => {
    console.log(`Got answer back from AssemblyAI`);
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
         // Split the buffer into chunks if it exceeds the maximum chunk size
    for (let i = 0; i < audioBuffer.length; i += MAX_CHUNK_SIZE) {
      let chunk = audioBuffer.slice(i, i + MAX_CHUNK_SIZE);
      console.log('Sending chunk of size:', chunk.length);
      transcriber.sendAudio(chunk);
    }
      // transcriber.sendAudio(message);
        });
  
    
    transcriber.on('transcript', (transcript) => {
      // if (transcript.message_type === 'FinalTranscript') {
        if (transcript.message_type === 'FinalTranscript' | transcript.message_type === 'PartialTranscript') {
        // Serialize and send the transcript data
        console.log(`Sending data back...`);
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
      clearInterval(keepAlive);

      console.log();
      console.log('Stopping recording');
      recording.stop();

      console.log('Closing real-time transcript connection');
      await transcriber.close();

      process.exit();
    });
  } catch (error) {
    console.error(error);
    clearInterval(keepAlive);

  }
};

run();

server.listen(8080, () => {
  console.log('Server started on port 8080');
});