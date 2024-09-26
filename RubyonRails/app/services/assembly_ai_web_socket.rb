# app/services/assembly_ai_web_socket.rb
require 'websocket-client-simple'
require 'json'
require 'base64'
require 'thread'

class AssemblyAiWebSocket
  ASSEMBLYAI_STREAMING_URL = 'wss://api.assemblyai.com/v2/realtime/ws'

  def initialize(user_id, channel, sample_rate)
    @user_id = user_id
    @channel = channel
    @sample_rate = sample_rate

    api_key = ENV['ASSEMBLY_API']
    ws_url = "#{ASSEMBLYAI_STREAMING_URL}?sample_rate=#{@sample_rate}"

    @message_queue = Queue.new
    puts "Initialized message queue: #{@message_queue}"
    @closed = false
    @connected = false  # Track connection status

    # Start the WebSocket client in a separate thread
    Thread.new do
      begin
        @ws = WebSocket::Client::Simple.connect(
          ws_url,
          headers: { 'Authorization' => api_key }
        )
      rescue => e
        puts "Failed to connect to AssemblyAI WebSocket: #{e.message}"
        @closed = true
        return
      end

      channel_ref = @channel

      @ws.on :message do |msg|
        begin
          data = JSON.parse(msg.data)
          puts "Received message from AssemblyAI: #{data}"
          if data['message_type'] == 'PartialTranscript'
            transcript = data['text']
            channel_ref.send_partial_transcript(transcript) if transcript
          elsif data['message_type'] == 'FinalTranscript'
            transcript = data['text']
            # Only send the transcript back if it's not empty or nil
            unless transcript.nil? || transcript.strip.empty?
              channel_ref.send_transcript(transcript)
            end
            # After receiving the final transcript, we can close the WebSocket
            close
          end
        rescue JSON::ParserError => e
          puts "JSON parsing error: #{e.message}"
        rescue => e
          puts "Error processing message: #{e.message}"
        end
      end

      @ws.on :open do
        puts 'Connected to AssemblyAI WebSocket API'
        @connected = true

        # Process messages from the queue
        until @closed
          begin
            if !@message_queue.empty?
              message = @message_queue.pop
              @ws.send(message)
              puts "Sent message to AssemblyAI: #{message}"
            else
              sleep 0.01
            end
          rescue => e
            puts "Error sending message to AssemblyAI: #{e.message}"
            close
          end
        end
      end

      @ws.on :error do |e|
        puts "AssemblyAI WebSocket Error: #{e.message}"
        puts e.backtrace.join("\n")  # Full stack trace for debugging
      end

      @ws.on :close do |e|
        puts 'AssemblyAI WebSocket connection closed'
        @closed = true
      end

      # Keep the thread alive until the WebSocket is closed
      sleep 0.1 until @closed
    end
  end

  def send_audio(audio_data_base64)
    unless @closed
      # Wait until the WebSocket is connected
      until @connected
        sleep 0.01
      end

      # Prepare the message
      audio_data = Base64.decode64(audio_data_base64)
      message = { audio_data: Base64.strict_encode64(audio_data) }.to_json
      @message_queue << message
      puts "Added audio data to message queue"
    else
      puts "Cannot send audio, WebSocket is closed."
    end
  end

  def send_terminate
    unless @closed
      # Wait until the WebSocket is connected
      until @connected
        sleep 0.01
      end

      message = { 'terminate_session' => true }.to_json
      @message_queue << message
      puts "Added terminate message to message queue"
    else
      puts "Cannot terminate, WebSocket is already closed."
    end
  end

  def close
    unless @closed
      @closed = true
      @ws.close if @ws
      puts "WebSocket connection is being closed."
    end
  end
end
