const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const AssemblyAI = require('assemblyai');
const ffmpeg = require('fluent-ffmpeg');
const { PassThrough } = require('stream');

// Load protobuf definitions
const PROTO_PATH = __dirname + '/app/proto/transcription.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const transcriptionProto = grpc.loadPackageDefinition(packageDefinition).TranscriptionService;

// Initialize AssemblyAI client
const client = new AssemblyAI({ apiKey: 'your_api_key' });

// Create the gRPC server
const server = new grpc.Server();

// Function to convert WebM to WAV in-memory
const convertWebMToWav = (webmData) => {
  return new Promise((resolve, reject) => {
    const wavStream = new PassThrough(); // In-memory stream for WAV
    const webmStream = new PassThrough(); // In-memory stream for WebM input

    // Feed the incoming WebM data to the WebM stream
    webmStream.end(webmData);

    // Use FFmpeg to convert WebM to WAV without saving the file
    ffmpeg(webmStream)
      .inputFormat('webm')
      .audioCodec('pcm_s16le')
      .format('wav')
      .on('error', (err) => {
        console.error('Error converting WebM to WAV:', err);
        reject(err);
      })
      .on('end', () => {
        console.log('Conversion to WAV finished');
      })
      .pipe(wavStream); // Output the WAV audio to an in-memory stream

    // Collect WAV data from the stream
    const chunks = [];
    wavStream.on('data', (chunk) => chunks.push(chunk));
    wavStream.on('end', () => resolve(Buffer.concat(chunks)));
  });
};

// gRPC service implementation
server.addService(transcriptionProto.TranscriptionService.service, {
  Transcribe: async (call) => {
    let accumulatedAudioBuffer = [];

    call.on('data', async (audioChunk) => {
      // Collect incoming WebM audio chunks
      accumulatedAudioBuffer.push(audioChunk.audio_data);

      try {
        // Convert accumulated WebM data to WAV in-memory
        const webmData = Buffer.concat(accumulatedAudioBuffer);
        const wavData = await convertWebMToWav(webmData);

        // Send the WAV data to AssemblyAI
        const transcriber = client.realtime.transcriber({ sampleRate: 16000 });
        transcriber.sendAudio(wavData);

        transcriber.on('transcript', (transcript) => {
          // Send the transcript back to the client
          call.write({ transcript: transcript.text });
        });
        
        transcriber.on('close', () => {
          console.log('Transcription session closed');
          call.end();
        });

      } catch (error) {
        console.error('Error processing audio data:', error);
        call.end();
      }
    });

    call.on('end', () => {
      console.log('Client stopped sending audio');
    });
  }
});

// Start the gRPC server
server.bindAsync('0.0.0.0:50052', grpc.ServerCredentials.createInsecure(), () => {
  console.log('gRPC server running at http://0.0.0.0:50052');
  server.start();
});
