class AssemblyAiWebSocket
  ASSEMBLYAI_STREAMING_URL = 'wss://api.assemblyai.com/v2/realtime/ws'

  def initialize(user_id, channel, sample_rate)
    raise ArgumentError, "user_id cannot be nil" if user_id.nil?

    @user_id = user_id
    @channel = channel
    @sample_rate = sample_rate

    Rails.logger.info "Initializing AssemblyAiWebSocket for user #{@user_id}"

    api_key = ENV['ASSEMBLY_API']
    ws_url = "#{ASSEMBLYAI_STREAMING_URL}?sample_rate=#{@sample_rate}"

    @message_queue = Queue.new
    Rails.logger.info "Initialized message queue for user #{@user_id}"
    @closed = false
    @connected = false
    @mutex = Mutex.new

    # Start the WebSocket client in a separate thread
    Rails.logger.info "Starting new thread for websocket"
    Rails.logger.info "new AssemblyAiWebSocket() --> connect()"

    @thread = Thread.new { connect(ws_url, api_key) }
  end


  def send_audio(audio_data_base64)
    Rails.logger.info "In send_audio"

    unless @closed
      # message = { audio_data: audio_data_base64 }.to_json
      chunk_size = 130000
      audio_data = Base64.decode64(audio_data_base64).force_encoding('ASCII-8BIT')

      # Split audio_data into chunks
      chunks = audio_data.bytes.each_slice(chunk_size).map { |chunk| chunk.pack('C*') }
      # Enqueue each chunk
      chunks.each do |chunk|
        @message_queue << chunk
      end
      # @message_queue << audio_data
      Rails.logger.info "Added audio data to chunks, then put in message queue for user #{@user_id}"
    else
      Rails.logger.warn "Cannot send audio, WebSocket is closed for user #{@user_id}"
    end
  end

  def send_terminate
    unless @closed
      message = { terminate_session: true }.to_json
      @message_queue << message
      Rails.logger.info "Added terminate message to message queue for user #{@user_id}"
    else
      Rails.logger.warn "Cannot terminate, WebSocket is already closed for user #{@user_id}"
    end
  end

  def handle_message(data)
    Rails.logger.info "IN HANDLE_MESSAGE() YIPEE!!"
    Rails.logger.info "Data: #{data}"
    begin
    parsed = JSON.parse(data)
    Rails.logger.info "Received message from AssemblyAI for user #{@user_id}: #{parsed}"

    case parsed['message_type']
    when 'PartialTranscript'
      transcript = parsed['text']
      @channel.send_partial_transcript(transcript) if transcript
    when 'FinalTranscript'
      transcript = parsed['text']
      @channel.send_transcript(transcript) if transcript&.strip&.present?
      # Optionally, close the connection after final transcript
      close
    else
      Rails.logger.debug "Unhandled message type: #{parsed['message_type']}"
    end
  rescue JSON::ParserError => e
    Rails.logger.error "JSON parsing error for user #{@user_id}: #{e.message}"
  rescue => e
    Rails.logger.error "Error processing message for user #{@user_id}: #{e.message}"
  end
end


# Accessor methods for testing and clarity
attr_reader :user_id, :message_queue, :ws, :closed
end

  def close
    unless @closed
      @closed = true
      @ws.close if @ws
      Rails.logger.info "WebSocket connection is being closed for user #{@user_id}"
    end
  end

  private

  def connect(ws_url, api_key)
    Rails.logger.info "In connect()"
    begin
      @ws = WebSocket::Client::Simple.connect(ws_url, headers: { 'Authorization' => api_key })
      Rails.logger.info "Initialized websocket @ws for user: #{@user_id}"
    rescue => e
      Rails.logger.error "Failed to connect to AssemblyAI WebSocket for user #{@user_id}: #{e.message}"
      @closed = true
      return
    end

    user_id = @user_id
    message_queue = @message_queue
    mutex = @mutex
    closed_flag = @closed
    connected_flag = @connected
    instance = self
    ws = @ws         # Capture @ws in a local variable

    # Capture the instance of AssemblyAiWebSocket
    Rails.logger.info "Monitoring ws asynchronously for user #{@user_id}..."
    Rails.logger.info "Should be parsing through the message queue..."

    ws.on :open do
      # user_id = @user_id

      Rails.logger.info "Connected to AssemblyAI WebSocket for user #{user_id} <------- should be a number"
      @connected = true

      # Start a new thread to process the message queue
      Thread.new do
        if ws
          Rails.logger.info "Connected to ws btw..."
        end
        until closed?
          # Rails.logger.info "Checking message queue [OUTER LOOP]..."
          begin
            # Rails.logger.info "Checking message queue [INNER LOOP]..."
            if !message_queue.empty?
              message = message_queue.pop
              Rails.logger.debug "Sending message to AssemblyAI for user #{user_id}"
              Rails.logger.debug "Message: #{message}"
              ws.send(message)
              Rails.logger.debug "Sent message to AssemblyAI for user #{user_id}"
            else
              sleep 0.01
            end
          rescue => e
            # Rails.logger.error "Error sending message to AssemblyAI for user #{@user_id}: #{e.message}"
            Rails.logger.error "Error sending message to AssemblyAI for user #{user_id}"
            close
          end
        end

      end
    end

    ws.on :message do |msg|
      Rails.logger.info "WS TRIGGER: WE GPT SOMETHING BACK FROM ASSEMBLY AI. SENDING HANDLE_MESSAGE #{msg.data}"
      instance.handle_message(msg.data)
      Rails.logger.info "Sent handle_msg()"
    end

    ws.on :error do |e|
      # Rails.logger.error "AssemblyAI WebSocket Error for user #{@user_id}: #{e.message}"
      Rails.logger.error "AssemblyAI WebSocket Error for user #{@user_id}"
      close
    end

    ws.on :close do |e|
      Rails.logger.info "AssemblyAI WebSocket connection closed for user #{@user_id}"
      # Rails.logger.info "AssemblyAI WebSocket Error for user #{@user_id}"
      close
    end

    # Keep the thread alive until the WebSocket is closed
    sleep 0.1 until @closed
  end
