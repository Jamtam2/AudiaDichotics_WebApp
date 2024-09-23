# config/initializers/grpc_server.rb
require 'grpc'
require 'transcription_services_pb.rb' # Load the gRPC service definitions
require_relative '../../app/services/transcription_service.rb' # Path to your transcription service

Thread.new do
  begin
    # Create a new gRPC server
    server = GRPC::RpcServer.new

    # Bind the server to a port
    server.add_http2_port('0.0.0.0:50052', :this_port_is_insecure)

    # Add the service handler (TranscriptionService) to the server
    server.handle(TranscriptionService)

    # Start the gRPC server and run it until terminated
    puts 'gRPC server running on port 50052...'
    server.run_till_terminated
  rescue => e
    puts "Error starting gRPC server: #{e.message}"
  end
end
