class UserMfaSessionsController < ApplicationController
  skip_before_action :check_mfa, only: [:new, :create]

  def new
  end
  
def create
    user = current_user
  
    if params[:mfa_code].present?
      secret_key = user.user_mfa_sessions.first.secret_key
      user.google_secret = secret_key
      user.save!
      
      if user.google_authentic?(params[:mfa_code]***REMOVED***
        user.user_mfa_sessions.first.update(activated: true***REMOVED***
        redirect_to root_path, notice: "MFA setup successful"
        return
      end
    end
  
    # If neither condition is met, it's an invalid code
    attempted_time = Time.now
    server_code = ROTP::TOTP.new(user.user_mfa_sessions.first.secret_key***REMOVED***.at(attempted_time***REMOVED*** if user.user_mfa_sessions.first.present?
    flash.now[:alert] = "Invalid code. Attempted Code: #{params[:mfa_code] || params[:email_2fa_code]***REMOVED***, Server Code: #{server_code***REMOVED***, Time: #{attempted_time***REMOVED***"
    render :new
  end

  

  

  def setup_google_auth
    Rails.logger.debug "-----------------------------------------------"
    Rails.logger.debug "IN HERE AT LEAST, AUTH"
    Rails.logger.debug "-----------------------------------------------"
    # Assuming you already have logic for QR code generation


    @user_mfa_session = current_user.user_mfa_sessions.first_or_create(secret_key: ROTP::Base32.random_base32***REMOVED***

    # @qr_code = RQRCode::QRCode.new(current_user.generate_qr_code***REMOVED***
  end

  def setup_email_auth
    Rails.logger.debug "-----------------------------------------------"
    Rails.logger.debug "IN HERE AT LEAST, EMAIL"
    Rails.logger.debug "-----------------------------------------------"

    @user_mfa_session = current_user.user_mfa_sessions.first_or_create(secret_key: ROTP::Base32.random_base32, ***REMOVED***

    user = current_user
    user.email_2fa_code = SecureRandom.hex(4***REMOVED***
    user.save!
    Rails.logger.debug "Sending 2FA code via email"
    UserMailer.send_2fa_code(user, user.email_2fa_code***REMOVED***.deliver_now
    Rails.logger.debug "2FA code sent via email"

    redirect_to enter_email_code_user_mfa_sessions_path
  end

  def enter_email_code
    # This action might be empty if it's just displaying a form
  end



  
  def verify_email_2fa
    user = current_user
    

    if user.email_2fa_code == params[:email_2fa_code]
      # The code matches, handle successful verification
      user_mfa_session = user.user_mfa_sessions.first
      user_mfa_session.update(email_verified: true***REMOVED***  # Clear the code and set email_verified to true
      user.update(email_2fa_code: nil***REMOVED***  # Clear the code after successful verification
      puts "#{user_mfa_session.inspect***REMOVED***"
      puts "#{user.inspect***REMOVED***"

      redirect_to root_path, notice: "Email verification successful"
    else
      # The code does not match, handle the failure
      flash.now[:alert] = "Invalid verification code. Please try again."
      render :enter_email_code
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