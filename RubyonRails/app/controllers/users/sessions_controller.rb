class Users::SessionsController < Devise::SessionsController  
  before_action :check_terms_accepted, if: :user_signed_in?

  def create
    super do |user|
      if user.valid_password?(params[:user][:password])
        # Check if MFA is enabled for the user and the user has already set up MFA
        if user.google_secret.present? && user.user_mfa_sessions.any?
          # Redirect to MFA input page
          redirect_to new_user_mfa_session_path and return
        end
      end
    end
  end
  
  private

  def check_terms_accepted
    if current_user.terms_accepted.nil?
      redirect_to existing_user_accept_tos_path, alert: "You must accept the terms of service."
    end
  end

  def destroy
    if current_user
      # Update email_verified status
      current_user.user_mfa_sessions.update_all(email_verified: false, activated: false)
    end

    # Proceed with the normal sign out process
    super
  end
end
