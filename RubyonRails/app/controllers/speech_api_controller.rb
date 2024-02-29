class SpeechAPIController < ApplicationController
    require 'assemblyai'
  
    AssemblyAI.settings.api_key = "f58c07c8b5574640a8d0c75e0db0356a"
  
    def on_open(session_opened)
      puts "Session ID: #{session_opened.session_id}"
    end
  
    def on_data(transcript)
      return if transcript.text.nil?
  
      if transcript.is_a?(AssemblyAI::RealtimeFinalTranscript)
        puts "#{transcript.text}\r\n"
      else
        puts "#{transcript.text}\r"
      end
    end
  
    def on_error(error)
      puts "An error occurred: #{error}"
    end
  
    def on_close
      puts "Closing Session"
    end
  
    def index
      transcriber = AssemblyAI::RealtimeTranscriber.new(
        on_data: method(:on_data),
        on_error: method(:on_error),
        sample_rate: 44_100,
        on_open: method(:on_open),
        on_close: method(:on_close)
      )
  
      # Start the connection
      transcriber.connect
  
      # Open a microphone stream
      microphone_stream = AssemblyAI::Extras::MicrophoneStream.new
  
      # Press CTRL+C to abort
      transcriber.stream(microphone_stream)
  
      transcriber.close
    end
  end
  