class SpeechController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:save_audio]

  def start_script
    # Start the Node.js script
    @pid = spawn('NODE_OPTIONS=--openssl-legacy-provider node app/assets/javascripts/speechToText.js')
    Process.detach(@pid)  # Detach so the Rails server doesn’t hang
    session[:script_pid] = @pid  # Save the process ID in session
    render plain: "Speech script started."
  end

  def save_audio
    if params[:audio].present?
      uploaded_file = params[:audio]

      # Validate content type
      unless uploaded_file.content_type == 'audio/wav'
        render json: { error: 'Invalid file type. Only WAV files are allowed.' }, status: :unprocessable_entity
        return
      end

      # Validate file size (e.g., max 10MB)
      if uploaded_file.size > 10.megabytes
        render json: { error: 'File size exceeds the 10MB limit.' }, status: :unprocessable_entity
        return
      end

      original_filename = uploaded_file.original_filename
      original_path = Rails.root.join('storage', 'uploads', 'audio', "original_#{original_filename}")

      # Ensure the uploads directory exists
      FileUtils.mkdir_p(Rails.root.join('storage', 'uploads', 'audio')) unless Dir.exist?(Rails.root.join('storage', 'uploads', 'audio'))

      # Save the original uploaded file
      File.open(original_path, 'wb') do |file|
        file.write(uploaded_file.read)
      end

      # Define the path for the converted file
      converted_filename = "converted_#{original_filename}"
      converted_path = Rails.root.join('storage', 'uploads', 'audio', converted_filename)

      begin
        # Initialize the movie object using streamio-ffmpeg
        movie = FFMPEG::Movie.new(original_path.to_s)

        # Define conversion options
        options = {
          audio_codec: 'pcm_s16le',   # PCM 16-bit little endian
          audio_channels: 1,          # Mono
          custom: %w(-ar 16000)       # Set audio sampling rate to 16kHz
        }

        # Perform the conversion
        movie.transcode(converted_path.to_s, options)

        if File.exist?(converted_path)
          # Read the converted audio data
          converted_audio_data = File.read(converted_path)

          # Encode to base64
          encoded_audio = Base64.encode64(converted_audio_data)

          # Optionally, delete the original and/or converted file to save space
          File.delete(original_path) if File.exist?(original_path)
          # File.delete(converted_path) if File.exist?(converted_path) # Uncomment if you want to delete the converted file as well

          # Respond with the audio data
          render json: {
            message: 'File converted successfully',
            audio_data: encoded_audio,
            file_name: converted_filename
          }, status: :ok
        else
          render json: { error: 'File conversion failed' }, status: :unprocessable_entity
        end
      rescue => e
        Rails.logger.error "Error converting audio: #{e.message}"
        render json: { error: 'Failed to convert audio', details: e.message }, status: :internal_server_error
      end
    else
      render json: { error: 'No file uploaded' }, status: :unprocessable_entity
    end
  end


  def stop_script
    if session[:script_pid]
      Process.kill('TERM', session[:script_pid])  # Kill the process by PID
      session[:script_pid] = nil
      render plain: "Speech script stopped."
    else
      render plain: "No script running.", status: 400
    end
  end
end
