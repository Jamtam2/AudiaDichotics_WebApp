# app/services/transcription_service.rb
require 'grpc'
require 'tempfile'
require 'net/http'
require 'json'
require 'fileutils'
require 'base64'

unless defined?(Transcription::TranscriptionService)
  require_relative 'transcription_pb.rb'
  require_relative 'transcription_services_pb.rb'
end

class TranscriptionService < Transcription::TranscriptionService::Service
  def transcribe(audio_chunk, _call)
    if audio_chunk.audio_data.nil? || audio_chunk.audio_data.empty?
      puts 'Received empty audio data.'
      return Transcription::TranscriptionResult.new(transcript: '')
    end

    # Process audio_chunk.audio_data
    transcript = process_audio(audio_chunk.audio_data)
    Transcription::TranscriptionResult.new(transcript: transcript)
  end

  private

  def process_audio(audio_data_base64)
    # Decode Base64 string into binary data
    audio_data = Base64.decode64(audio_data_base64)

    # Write the audio data to a temporary WAV file
    wav_file = Tempfile.new(['audio', '.wav'])
    wav_file.binmode
    wav_file.write(audio_data)
    wav_file.rewind

    # # Optionally, save a copy of the WAV file for testing
    # test_wav_path = Rails.root.join("public", "test_audio.wav")
    # FileUtils.cp(wav_file.path, test_wav_path)
    # puts "\n Saved test WAV file to #{test_wav_path} \n"

    # Send WAV data to AssemblyAI
    transcript = send_to_assemblyai(audio_data)

    # Clean up temporary files
    wav_file.close
    wav_file.unlink

    transcript
  end

  def send_to_assemblyai(wav_data)
    api_key = ENV['ASSEMBLY_API']

    # Step 1: Upload the WAV data to AssemblyAI
    upload_url = upload_to_assemblyai(wav_data, api_key)

    # Step 2: Request transcription
    transcription_id = request_transcription(upload_url, api_key)

    # Step 3: Poll for transcription result
    transcript = poll_transcription(transcription_id, api_key)

    transcript
  end

  def upload_to_assemblyai(wav_data, api_key)
    uri = URI('https://api.assemblyai.com/v2/upload')
    request = Net::HTTP::Post.new(uri)
    request['authorization'] = api_key
    request['transfer-encoding'] = 'chunked'
    request.body_stream = StringIO.new(wav_data)
    request.content_type = 'application/octet-stream'

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    if response.code == '200'
      data = JSON.parse(response.body)
      data['upload_url']
    else
      raise "Failed to upload audio: #{response.body}"
    end
  end

  def request_transcription(upload_url, api_key)
    uri = URI('https://api.assemblyai.com/v2/transcript')
    request = Net::HTTP::Post.new(uri)
    request['authorization'] = api_key
    request['content-type'] = 'application/json'
    request.body = { 'audio_url' => upload_url }.to_json

    response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
      http.request(request)
    end

    if response.code == '200' || response.code == '201'
      data = JSON.parse(response.body)
      data['id']
    else
      raise "Failed to request transcription: #{response.body}"
    end
  end

  def poll_transcription(transcription_id, api_key)
    uri = URI("https://api.assemblyai.com/v2/transcript/#{transcription_id}")

    loop do
      request = Net::HTTP::Get.new(uri)
      request['authorization'] = api_key

      response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
        http.request(request)
      end

      if response.code == '200'
        data = JSON.parse(response.body)
        status = data['status']
        case status
        when 'completed'
          return data['text']
        when 'error'
          raise "Transcription error: #{data['error']}"
        else
          sleep(1)  # Wait before polling again
        end
      else
        raise "Failed to get transcription result: #{response.body}"
      end
    end
  end
end
