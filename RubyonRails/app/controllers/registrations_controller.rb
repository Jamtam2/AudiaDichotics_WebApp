class RegistrationsController < Devise::RegistrationsController

  def create
    case params[:account_type]
    when 'regular_user'
      create_regular_user
    when 'local_moderator'
      create_local_moderator
    else
      flash[:alert] = 'Invalid account type.'
      redirect_to new_user_registration_path and return
    end
  end

  def create_regular_user
    user = User.new(sign_up_params***REMOVED***
    user.role = :regular_user
    local_moderator = User.find_by(role: User.roles[:local_moderator], moderator_code: params[:user][:moderator_code]***REMOVED***

    if local_moderator.present?
      # Assign regular user with the local moderator group tenant_id
      user.tenant_id = local_moderator.tenant_id

      if user.save
        secret_key = ROTP::Base32.random_base32
        user.user_mfa_sessions.create!(secret_key: secret_key, activated: false***REMOVED***
        sign_in(:user, user***REMOVED***
        redirect_to root_path, notice: 'User was successfully created set up 2FA auth.'
      else
        flash.now[:alert] = user.errors.full_messages.join(', '***REMOVED***
        render :new
      end
    else
      flash[:alert] = 'Invalid moderator code.'
      redirect_to new_user_registration_path and nil
    end
  end

  def create_local_moderator
    tenant = Tenant.create!

    ActsAsTenant.with_tenant(tenant***REMOVED*** do
      user = User.new(sign_up_params***REMOVED*** # Initialize new user
      user.role = :local_moderator    # Set the role
      key = Key.find_by(activation_code: user.registration_key***REMOVED***

      if valid_registration_key?(key***REMOVED***
        # Save the user, which will trigger before_create callback
        if user.save
          # Handler for successful save actions
          key.update(used: true, email: user.email***REMOVED***
          user.verification_key = key.activation_code
          secret_key = ROTP::Base32.random_base32
          user.user_mfa_sessions.create!(secret_key: secret_key, activated: false***REMOVED***
          sign_in(:user, user***REMOVED***
          redirect_to root_path, notice: 'User was successfully created set up 2FA auth.'
        else
          # Handler for save failures
          flash[:alert] = 'An internal error occurred.'
          Rails.logger.info("DEBUG: Failed to save user: #{user.errors.full_messages***REMOVED***"***REMOVED***
          redirect_to new_user_registration_path and return
        end
      else
        # Handler for save failures
        flash[:alert] = 'Invalid registration key.'
        redirect_to new_user_registration_path and return
      end
    end
  end

  private

  def valid_registration_key?(key***REMOVED***
    key.present? && !key.used && (key.expiration.nil? || key.expiration > Time.current***REMOVED***
  end

  private

  def sign_up_params
    allowed_params = [:fname, :lname, :email, :password, :password_confirmation]
    allowed_params << :registration_key if params[:account_type] == 'local_moderator'
    allowed_params << :moderator_code if params[:account_type] == 'regular_user'
    params.require(:user***REMOVED***.permit(allowed_params***REMOVED***
  end

end
