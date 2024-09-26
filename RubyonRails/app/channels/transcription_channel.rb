# app/channels/transcription_channel.rb
class TranscriptionChannel < ApplicationCable::Channel
  def subscribed
    sample_rate = params[:sample_rate] || 16000
    stream_from "transcription_channel_#{current_user.id}"
    @sample_rate = sample_rate
    @mutex = Mutex.new  # Initialize a mutex for thread safety
    @assemblyai_ws = nil
  end

  def receive_audio(data)
    if data['audio_data']
      @mutex.synchronize do
        if @assemblyai_ws.nil?
          @assemblyai_ws = AssemblyAiWebSocket.new(current_user.id, self, @sample_rate)
          puts "Started new AssemblyAI session"
        else
          puts "Using existing AssemblyAI session"
        end
      end
      @assemblyai_ws.send_audio(data['audio_data'])
      puts "Sent audio data to AssemblyAI"
    end
  end

  def terminate
    if @assemblyai_ws
      @assemblyai_ws.send_terminate
      puts "Sent terminate signal to AssemblyAI"
      @mutex.synchronize do
        @assemblyai_ws = nil  # Reset the instance after termination
      end
    else
      puts "No AssemblyAI session to terminate"
    end
  end

  def unsubscribed
    # Cleanup when channel is unsubscribed
    if @assemblyai_ws
      @assemblyai_ws.close
      @assemblyai_ws = nil
      puts "Closed AssemblyAI WebSocket on unsubscribe"
    end
  end

  def send_transcript(transcript)
    # Send transcription result back to the client
    ActionCable.server.broadcast("transcription_channel_#{current_user.id}", { type: 'transcript', message: transcript })
  end

  def send_partial_transcript(transcript)
    ActionCable.server.broadcast(
      "transcription_channel_#{current_user.id}",
      { type: 'partial_transcript', message: transcript }
    )
  end
end
