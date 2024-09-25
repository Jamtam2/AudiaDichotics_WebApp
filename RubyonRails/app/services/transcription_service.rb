# app/services/transcription_service.rb
require 'grpc'
require 'tempfile'
require 'streamio-ffmpeg'
require 'net/http'
require 'json'
require 'open3'
require 'fileutils'  # Add this at the top of your file

unless defined?(Transcription::TranscriptionService)
  require_relative 'transcription_pb.rb'
  require_relative 'transcription_services_pb.rb'
end


# Check if transcription_pb.rb exists
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

  def process_audio(audio_data)

    puts "#{audio_data.unpack('H*').first}"  # Hexadecimal representation of the raw data
    # hex_data = audio_data[0..100].unpack('H*').first # Limit to first 100 bytes for readability
    # puts "Raw audio data (first 100 bytes): #{hex_data}"

    # Write the audio data to a temporary WebM file
    webm_file = Tempfile.new(['audio', '.webm'])
    webm_file.binmode
    webm_file.write(audio_data)
    webm_file.rewind


    # Save a copy of the WebM file for testing
    test_webm_path = Rails.root.join("public", "test_audio.webm") # This will save it to the public folder
    FileUtils.cp(webm_file.path, test_webm_path)

    puts "---------------------------------"
    puts "--------SAVING?-------------------------"
    File.open("test_audio.webm", "wb") do |file|
      file.write(audio_data)
    end

    puts "\n Saved test WebM file to #{test_webm_path} \n"
    puts "--------SAVED-------------------------"

    puts "WebM fileS size: #{File.size(webm_file.path)} bytes"
      # Create a temporary WAV file
    wav_file = Tempfile.new(['audio', '.wav'])
    wav_file.binmode

    # Convert WebM to WAV using ffmpeg
    success = convert_webm_to_wav(webm_file.path, wav_file.path)

    unless success
      puts 'FFmpeg conversion failed.'
      return ''
    end

    # Read the WAV data
    wav_file.rewind
    wav_data = wav_file.read

    # Send WAV data to AssemblyAI
    transcript = send_to_assemblyai(wav_data)

    # Clean up temporary files
    webm_file.close
    webm_file.unlink
    wav_file.close
    wav_file.unlink

    transcript
  end

  def convert_webm_to_wav(input_path, output_path)
    command = "ffmpeg -i #{input_path} -ac 1 -ar 16000 #{output_path} -y"
    stdout_and_stderr, status = Open3.capture2e(command)
    unless status.success?
      puts "FFmpeg conversion failed with error:\n#{stdout_and_stderr}"
      return false
    end
    true
  end

  def send_to_assemblyai(wav_data)
    api_key = '8323e4c46ab24be5822b111c7fd30635'  # Replace with your AssemblyAI API key

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
