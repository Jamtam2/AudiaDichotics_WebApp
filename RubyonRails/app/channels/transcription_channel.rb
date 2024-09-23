class TranscriptionChannel < ApplicationCable::Channel
  def subscribed
    tenant_id = params[:tenant_id]
    user_id = params[:user_id]

    stream_for User.find(user_id)

    # stream_from "transcription_channel_#{params[:tenant_id]}_#{params[:user_id]}"
  end
  def receive(data)
    # Handle receiving data and broadcasting to the client
    ActionCable.server.broadcast(
      "transcription_channel_#{params[:user_id]}",
      transcript: data['transcript']
    )
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
