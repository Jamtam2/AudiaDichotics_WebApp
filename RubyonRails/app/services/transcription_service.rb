# app/services/transcription_service.rb
require 'grpc'
transcription_pb_path = File.expand_path('transcription_pb.rb', __dir__)
transcription_services_pb_path = File.expand_path('transcription_services_pb.rb', __dir__)

puts "Checking for transcription_pb.rb at #{transcription_pb_path}: #{File.exist?(transcription_pb_path)}"
puts "Checking for transcription_services_pb.rb at #{transcription_services_pb_path}: #{File.exist?(transcription_services_pb_path)}"

# Only require if the files exist
if File.exist?(transcription_pb_path)
  require_relative 'transcription_pb.rb'
end

if File.exist?(transcription_services_pb_path)
  require_relative 'transcription_services_pb.rb'
end
# require 'app/services/transcription_pb.rb'
# require 'app/services/transcription_services_pb.rb'

# Check if transcription_pb.rb exists
class TranscriptionService < Transcription::TranscriptionService::Service
  def transcribe(call)
    assembly_ai = AssemblyAI::Client.new(api_key: '8323e4c46ab24be5822b111c7fd30635')

    call.each_remote_read do |audio_chunk|
      assembly_ai.send_audio(audio_chunk.audio_data) do |transcription|
        yield Transcription::TranscriptionResult.new(transcript: transcription)
      end
    end
  end
end
