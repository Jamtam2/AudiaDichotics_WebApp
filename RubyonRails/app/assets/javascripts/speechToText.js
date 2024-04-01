const { Readable } = require('stream');
const { AssemblyAI } = require('assemblyai');
const recorder = require('node-record-lpcm16');

const run = async () => {
  const client = new AssemblyAI({
    apiKey: '8323e4c46ab24be5822b111c7fd30635'
  });

  const transcriber = client.realtime.transcriber({
    sampleRate: 16000
  });

  transcriber.on('open', ({ sessionId }) => {
    console.log(`Session opened with ID: ${sessionId}`);
  });

  transcriber.on('error', (error) => {
    console.error('Error:', error);
  });

  transcriber.on('close', (code, reason) =>
    console.log('Session closed:', code, reason)
  );

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