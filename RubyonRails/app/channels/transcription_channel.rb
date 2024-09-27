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

    @mutex.synchronize do
      if @assemblyai_ws.nil?
        Rails.logger.info "handle_audio_data() --> new AssemblyAiWebSocket()"

        @assemblyai_ws = AssemblyAiWebSocket.new(current_user.id, self, @sample_rate)
        Rails.logger.info "Started new AssemblyAI session for user #{current_user.id}"
      else
        Rails.logger.debug "Using existing AssemblyAI session for user #{current_user.id}"
      end
    end
    Rails.logger.info "Sending audio data: leaving handle_audio_data() -- > send_audio()"

    @assemblyai_ws.send_audio(audio_data_base64)
    Rails.logger.info "Sent audio data to AssemblyAI for user #{current_user.id}"
  rescue => e
    Rails.logger.error "Error handling audio data: #{e.message}"
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
