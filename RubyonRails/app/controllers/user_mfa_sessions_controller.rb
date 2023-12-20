class UserMfaSessionsController < ApplicationController
  skip_before_action :check_mfa, only: [:new, :create]

  def new
    # Initialization code (if any***REMOVED***
  end
  
  def create
    user = current_user
    secret_key = user.user_mfa_sessions.first.secret_key
    user.google_secret = secret_key
  
    user.save!
    if user.google_authentic?(params[:mfa_code]***REMOVED***
      user.user_mfa_sessions.first.update(activated: true***REMOVED***
      redirect_to root_path, notice: "MFA setup successful"
    else
      attempted_time = Time.now
      server_code = ROTP::TOTP.new(secret_key***REMOVED***.at(attempted_time***REMOVED***
      flash.now[:alert] = "Invalid code. Attempted Code: #{params[:mfa_code]***REMOVED***, Server Code: #{server_code***REMOVED***, Time: #{attempted_time***REMOVED***"
      # flash.now[:alert] = specific_error_message(user, params[:mfa_code]***REMOVED***

      render :new
    end
  end

  
  

  private

  def specific_error_message(user, mfa_code***REMOVED***
    if mfa_code.blank?
      "MFA code cannot be blank."
    elsif !user.google_secret.present?
      "MFA setup not completed."
    else
      "Invalid MFA code. Please try again."
    end
  end
end
