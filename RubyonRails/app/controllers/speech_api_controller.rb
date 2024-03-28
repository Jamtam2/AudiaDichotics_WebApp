require 'websocket-client-simple'
require 'base64'
require 'json'

# Sample audio
auth_header = {'Authorization': '{8323e4c46ab24be5822b111c7fd30635}'}
sample_rate = 16000
word_boost = ["HackerNews", "Twitter"]
url = "wss://api.assemblyai.com/v2/realtime/ws?word_boost=#{word_boost.to_json}&sample_rate=#{sample_rate}"
ws = WebSocket::Client::Simple.connect url, headers: auth_header

# Create a new session
ws.on :message do |msg|
  message = JSON.parse(msg.data)
  case message['message_type']
  when 'SessionBegins'
    session_id = message['session_id']
    expires_at = message['expires_at']
    puts "Session ID: #{session_id}, Expires At: #{expires_at}"
  when 'PartialTranscript'
    text = message['text']
    puts "Partial transcript received: #{text}"
  when 'FinalTranscript'
    text = message['text']
    puts "Final transcript received: #{text}"
  end
end

# Handle errors and close events
ws.on :error do |error|
  error_object = JSON.parse(error)
  if error_object['error_code'] == 1013
    puts "Temporary server condition forced blocking client's request"
  end
end

ws.on :close do |e|
  puts 'WebSocket closed'
end

# Send audio data to the WebSocket
def send_audio(socket, audio_data)
  payload = {
    "audio_data" => Base64.strict_encode64(audio_data)
  }
  socket.send(payload.to_json)
end

# Terminate the session
def terminate_session(socket)
  payload = {"terminate_session" => true}
  message = payload.to_json
  socket.send(message)
  socket.close
end
