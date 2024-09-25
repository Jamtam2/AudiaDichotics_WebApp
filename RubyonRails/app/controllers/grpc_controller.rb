# app/controllers/grpc_controller.rb
require 'socket'
# require 'grpc'
# require 'transcription_services_pb' # Load the gRPC service definitions
# require_relative '../../app/services/transcription_service' # Path to your transcription service

class GrpcController < ApplicationController
  @@grpc_server = nil  # Class variable to store the server instance

  def start_server
    if server_running?
      render json: { message: 'gRPC server is already running' }
    else
      @@grpc_server = GRPC::RpcServer.new
      Thread.new do
        begin
          @@grpc_server.add_http2_port('0.0.0.0:50052', :this_port_is_insecure)
          @@grpc_server.handle(TranscriptionService)
          puts 'gRPC server running on port 50052...'
          @@grpc_server.run_till_terminated
        rescue => e
          puts "Error starting gRPC server: #{e.message}"
        end
      end
      render json: { message: 'gRPC server started' }
    end
  end

  def stop_server
    if server_running?
      @@grpc_server.stop
      @@grpc_server = nil
      render json: { message: 'gRPC server stopped' }
    else
      render json: { message: 'gRPC server is not running' }
    end
  end

  private

  def server_running?
    @@grpc_server && @@grpc_server.running?
  end
end
