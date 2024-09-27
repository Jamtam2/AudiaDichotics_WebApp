# app/channels/transcription_channel.rb
class TranscriptionChannel < ApplicationCable::Channel
  def subscribed
    sample_rate = params[:sample_rate] || 16000
    stream_from "transcription_channel_#{current_user.id}"
    @sample_rate = sample_rate
    @mutex = Mutex.new
    @assemblyai_ws = nil
    Rails.logger.info "User #{current_user.id} subscribed to TranscriptionChannel"
  end

  def receive(data)
    if data['audio_data']
      Rails.logger.info "Received data from user #{current_user.id}"
      Rails.logger.info "leaving receive() -- > handle_audio_data()"
      handle_audio_data(data['audio_data'])
    elsif data['terminate']
      terminate_session
    end
  end

  def handle_audio_data(audio_data_base64)
    Rails.logger.info "In handle_audio_data()"

    # Decode the Base64 audio data
    audio_data = Base64.decode64(audio_data_base64)

    # Save the audio to a temporary file
    raw_file_path = Rails.root.join('tmp', "user_#{current_user.id}_raw_audio.wav")
    File.open(raw_file_path, 'wb') do |file|
      file.write(audio_data)
    end

    Rails.logger.info "Saved raw audio file to #{raw_file_path}"

    # Convert the audio to 16kHz mono using FFmpeg
    converted_file_path = Rails.root.join('tmp', "user_#{current_user.id}_audio_converted.wav")
    ffmpeg_command = "ffmpeg -i #{raw_file_path} -ar 16000 -ac 1 #{converted_file_path} -y"

    # Execute the FFmpeg command
    Rails.logger.info "Converting audio file with FFmpeg..."
    system(ffmpeg_command)

    if File.exist?(converted_file_path)
      Rails.logger.info "Converted audio file saved to #{converted_file_path}"

      # Read the converted audio data and send it to the transcription service
      converted_audio_data = File.read(converted_file_path)

      @mutex.synchronize do
        if @assemblyai_ws.nil?
          Rails.logger.info "handle_audio_data() --> new AssemblyAiWebSocket()"
          @assemblyai_ws = AssemblyAiWebSocket.new(current_user.id, self, @sample_rate)
          Rails.logger.info "Started new AssemblyAI session for user #{current_user.id}"
        else
          Rails.logger.debug "Using existing AssemblyAI session for user #{current_user.id}"
        end
      end

      # Send the converted audio data (Base64-encoded) to AssemblyAI or your transcription service
      @assemblyai_ws.send_audio(Base64.encode64(converted_audio_data))
      Rails.logger.info "Sent converted audio data to AssemblyAI for user #{current_user.id}"
      File.delete(raw_file_path) if File.exist?(raw_file_path)
      File.delete(converted_file_path) if File.exist?(converted_file_path)

    else
      Rails.logger.error "Failed to convert audio file for user #{current_user.id}"
    end
  rescue => e
    Rails.logger.error "Error handling audio data"
    # Rails.logger.error "Error handling audio data: #{e.message}"
  end

  def terminate_session
    if @assemblyai_ws
      @assemblyai_ws.send_terminate
      Rails.logger.info "Sent terminate signal to AssemblyAI for user #{current_user.id}"
      @mutex.synchronize do
        @assemblyai_ws = nil
      end
    else
      Rails.logger.warn "No AssemblyAI session to terminate for user #{current_user.id}"
    end
  end

  def unsubscribed
    if @assemblyai_ws
      @assemblyai_ws.close
      @assemblyai_ws = nil
      Rails.logger.info "Closed AssemblyAI WebSocket on unsubscribe for user #{current_user.id}"
    end
  end

  def send_transcript(transcript)
    ActionCable.server.broadcast("transcription_channel_#{current_user.id}", { type: 'transcript', message: transcript })
  end

  def send_partial_transcript(transcript)
    ActionCable.server.broadcast(
      "transcription_channel_#{current_user.id}",
      { type: 'partial_transcript', message: transcript }
    )
  end
end
