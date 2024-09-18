# app/controllers/recordings_controller.rb
class RecordingsController < ApplicationController
  # This prevents Rails from blocking your request because it doesn’t recognize the authenticity token
  skip_before_action :verify_authenticity_token, only: [:start, :stop]

  def start
    # This command runs Node.js script
    puts "------------------------------------------------"
    puts "Started"
    puts "------------------------------------------------"

    pid = spawn("node #{Rails.root.join('app/assets/javascripts/speechToText.js')}")

    Process.detach(pid)

    #save pid to stop later
    session['recording_pid'] = pid
    render json: { status: 'recording started' }
  end

  def stop
    puts "------------------------------------------------"
    puts "Stopping"
    puts "------------------------------------------------"

    if session['recording_pid']
      Process.kill("TERM", session['recording_pid'])
      session['recording_pid'] = nil
      render json: {status: 'recording stopped'}
    else
      render json: {status: 'no recording to stop'}
    # Here you would add logic to stop the recording, if needed
    end
  end
end
