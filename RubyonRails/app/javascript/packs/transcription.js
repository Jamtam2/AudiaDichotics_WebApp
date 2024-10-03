// app/javascript/packs/transcription.js

// Import necessary modules
import consumer from "../channels/consumer" // Import the ActionCable consumer
import Recorder from 'recorder-js';
const listType = document.body.getAttribute('data-list-type')
console.log('In page: ', listType)



// Define lookup objects for each list
const dwtList1 = {
    'y': 'Why',
    'four': 'For',
    'pick': 'Pig',
    'rome': 'Room',
    'around': 'Round',
    'toe': 'Tow',
    'anten': 'Tan',
    'broom': 'Room',
    'blip': 'Lip',
    'ball': 'Fall',
    'po': 'Tow',
    'whack': 'Quack',
    'she': 'Sheep',
    'take': 'Cake',
    'black': 'Quack',
    'blast': 'Glass',
    'piece': 'Teeth',
    'li': 'Why',
    'fawn': 'Fun',
    'ground': 'Round',
    'both': 'Booth',
    'ten': 'Pen',
    'ohm': 'Comb',
    'bets': 'Bet'
};

const dwtList2 = {
    'form': 'Farm',
    'ben': 'Den',
    'hoarse': 'Horse',
    'butt': 'But',
    'cag': 'Tag',
    'fall': 'Ball',
    'ow': 'How',
    'freak': 'Greek',
    'moon': 'Spoon',
    'coin': 'Corn',
    'horn': 'Corn',
    'born': 'Corn',
    'corn': 'Corn',
    'po': 'Corn',
    'gear': 'Year',
    'hat': 'Pat',
    'corrupt': 'Rough',
    'then': 'Den',
    'all': 'Ball',
    'hot': 'Pot',
    'clothes': 'Close',
    'sop': 'Stop',
    'rink': 'Ring',
    'house': 'How',
    'am': 'Ham',
    'l': 'Bell',
    'fame': 'Same',
    'read': 'Red',
    'night': 'Nice',
    'mice': 'Nice',
    'rank': 'Ring',
    'force': 'Horse',
    'they': 'Day'
};

const dwtList3 = {
    'rem': 'Rim',
    'c': 'See',
    'to': 'Two',
    'too': 'Two',
    'pillant': 'Pill',
    'heal': 'Heel',
    'third': 'Bird'
};

const dwtList4 = {
    'wear': 'Where',
    'knead': 'Need',
    'lane': 'Plain',
    'plane': 'Plain',
    'reign': 'Rain',
    'blaine': 'Plain',
    'eat': 'Neat',
    'lane?': 'Plain'
};

// Create a map for easy lookup based on listType
const lookupTable = {
    'dwt_list1': dwtList1,
    'dwt_list2': dwtList2,
    'dwt_list3': dwtList3,
    'dwt_list4': dwtList4
};

// import { SoxRecording } from './sox.js'; // Import SoxRecording
  // Access the words array passed from the ERB template
let words; 
    if (listType === "dwt_list1"){
     words = [
        ["Fun", "Pig"],
        ["Vine", "Sheep"],
        ["Cake", "Buy"],
        ["Round", "Storm"],
        ["Say", "Tan"],
        ["Yes", "Fast"],
        ["Pen", "Most"],
        ["Bet", "One"],
        ["Green", "Booth"],
        ["Store", "Glass"],
        ["Soap", "Teeth"],
        ["Bring", "Share"],
        ["Rug", "Book"],
        ["Want", "Soft"],
        ["Tow", "Kite"],
        ["Why", "Quack"],
        ["Comb", "For"],
        ["That", "Love"],
        ["Bug", "Wet"],
        ["Quiz", "Juice"],
        ["Camp", "Light"],
        ["Hand", "Goose"],
        ["Lip", "Dad"],
        ["Fall", "Room"],
        ["Old", "Chef"]
        ]
  }
    else if (listType === "dwt_list2"){
         words = [
            ["Bell", "Farm"],
            ["Same", "Cast"],
            ["Child", "Bowl"],
            ["How", "Plug"],
            ["Lick", "Top"],
            ["Watch", "Horse"],
            ["Ham", "Day"],
            ["When", "Truck"],
            ["Drink", "Rhyme"],
            ["Sleep", "Yard"],
            ["Greek", "Stop"],
            ["Den", "Red"],
            ["Song", "Math"],
            ["Dog", "More"],
            ["Spoon", "North"],
            ["But", "Chip"],
            ["Year", "Nice"],
            ["Cloud", "Make"],
            ["Tag", "Heart"],
            ["Pot", "Ball"],
            ["Door", "Set"],
            ["Cup", "Pat"],
            ["Close", "Shine"],
            ["Ring", "Test"],
            ["Rough", "Corn"]
            ]

    }
    else if (listType === "dwt_list3"){
         words = [
            ["Post", "Rim"],
            ["Two", "Look"],
            ["Cook", "Bite"],
            ["Car", "Lamp"],
            ["Skip", "Kiss"],
            ["Dream", "Floor"],
            ["Phone", "Damp"],
            ["Sit", "Gold"],
            ["Bear", "Sun"],
            ["Knife", "Bath"],
            ["Leg", "Milk"],
            ["Young", "Brush"],
            ["See", "Law"],
            ["Cat", "Hug"],
            ["Grass", "Square"],
            ["Weird", "Globe"],
            ["Bird", "Fork"],
            ["Bus", "Swing"],
            ["Snow", "Race"],
            ["Moon", "Wall"],
            ["Heel", "Five"],
            ["Mud", "Sheet"],
            ["Mat", "Nail"],
            ["Gum", "Pie"],
            ["Pill", "Key"]
            ]

    }
    else if (listType === "dwt_list4"){
         words = [
            ["Bar", "Head"],
            ["Box", "Shelf"],
            ["Will", "Pan"],
            ["Work", "Dive"],
            ["Knit", "Where"],
            ["Down", "Vase"],
            ["Food", "Judge"],
            ["Gas", "Sand"],
            ["Van", "Game"],
            ["Joke", "Need"],
            ["New", "Late"],
            ["Plate", "Rope"],
            ["Jar", "Fish"],
            ["First", "Black"],
            ["Voice", "Rose"],
            ["Bed", "Catch"],
            ["Couch", "Best"],
            ["Type", "Big"],
            ["Rain", "Mouse"],
            ["Cow", "Her"],
            ["Neat", "Rock"],
            ["Sing", "Plain"],
            ["Learn", "Dark"],
            ["Yell", "White"],
            ["Help", "Knee"]
            ]
    }
  console.log('Words array:', words);



document.addEventListener('DOMContentLoaded', function () {

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
    
      // Create wordTimeWindows
  let wordTimeWindows = words.map(function (pair, index) {
    let startTime = index * 5 +5; // Each word pair starts every 5 seconds
    let endTime = startTime + 15; // Each word pair is acceptable for 15 seconds
    return {
      words: pair,
      startTime: startTime,
      endTime: endTime,
    };
  });
  console.log('wordTimeWindows:', wordTimeWindows);


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
        let currentTime = audioPlayer.currentTime
        console.log('Checking answer...');
        console.log('Current audio file time: ', audioPlayer.currentTime)
        console.log('On file: ', listType)

        let validWords = [];

        wordTimeWindows.forEach(function (item) {
          if (
            currentTime >= item.startTime &&
            currentTime <= item.endTime
          ) {
            validWords = validWords.concat(item.words);
          }
        });
        console.log('Valid words for current time: ', validWords);

        // let wordList = transcribedText.replace(/[^\w\s]|_/g, '').trim().split(/\s+/);
        let wordList = transcribedText.replace(/\./, '').trim().split(/\s+/); // Clean up the transcript
        console.log('Mapping vocab...');
        
        wordList = wordList.map(word => {
            const list = lookupTable[listType];
            const lowerCaseWord = word.toLowerCase();

            if (list && lowerCaseWord in list){
                return list[lowerCaseWord];
            }
            return word; // Keep the word unchanged if no match
        });
        // console.log('Vocab mapped...');
        
        console.log('List of answers..? ', wordList);
        let allLabels = document.querySelectorAll('label');

    // Loop through each word in the wordList and check if it exists in the dictionary
    // Only check checkboxes for words that are in validWords
    wordList.forEach((word) => {
        let key = word.toLowerCase();
        if (validWords.map((w) => w.toLowerCase()).includes(key)) {
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
        }
      });
    }
  
        // Stop the Node.js script when the user leaves the page
        window.addEventListener('beforeunload', function() {
            navigator.sendBeacon('/stop_speech_script');
            console.log("Speech-to-text script stopped");
          });
      
});
