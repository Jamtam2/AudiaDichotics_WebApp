# app/workers/transcription_worker.rb
require 'assemblyai'

class TranscriptionWorker
  include Sidekiq::Worker

  def perform(audio_data, user_id)
    # Here you can place the transcription logic
    # For example, sending audio to AssemblyAI for transcription
    client = AssemblyAI::Client.new(api_key: '8323e4c46ab24be5822b111c7fd30635')

    # Process audio data and send it to the transcription API
    transcript = client.transcribe(audio_data)

    # Store or log the results
    Rails.logger.info("Transcription complete for user #{user_id}: #{transcript}")

    # Here you can handle what to do with the transcription (e.g., save it)
  end
end
