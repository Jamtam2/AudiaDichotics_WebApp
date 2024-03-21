# In your controller
require 'assemblyai'

class TranscriptionsController < ApplicationController
  def create
    client = AssemblyAI::Client.new(api_key: ENV['8323e4c46ab24be5822b111c7fd30635'])
    audio_data = params[:audio_data] # This should contain the audio data captured from the microphone

    # Access the recorder.js file and capture audio data
    recorder_js_path = Rails.root.join('app', 'assets', 'javascripts', 'recorder.js')
    audio_data = `node #{recorder_js_path}`

    # Submit the audio data for transcription
    response = client.transcribe(audio_data)
    
    # Return the transcription
    render json: { transcript: response['text'] }
  end
end
