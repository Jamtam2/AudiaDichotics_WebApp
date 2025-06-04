# The registration form's fields are dynamically updated based on the selected account type.
# See corresponding JavaScript in app/assets/javascripts/accountSignupButtons.js

# RegistrationsController handles user registration for different roles
# including regular users and local moderators. It includes custom logic
# for validating registration keys and moderator codes.
class RegistrationsController < Devise::RegistrationsController

  # create: Determines the type of user account to be created based on
  # the 'account_type' parameter and delegates to the appropriate method.
  def create
    case params[:account_type]
    when 'regular_user'
      create_regular_user
    when 'local_moderator'
      create_local_moderator
    end
  end

  # create_regular_user: Creates a regular user account. Requires a valid
  # local moderator code and a registration key. Associates the user with
  # a local moderator's tenant_id.
  def create_regular_user
    Rails.logger.info("DEBUG: Got in here")

    # The moderator code will be used for validation but will not be be stored under regular use.
    user = User.new(sign_up_params.except(:moderator_code))
    user.role = :regular_user
    local_moderator = User.find_by(role: User.roles[:local_moderator], moderator_code: params[:user][:moderator_code])
    # Validate the registration key for security purposes.
    # key = Key.find_by(activation_code: user.registration_key)
    Rails.logger.info("DEBUG: Set vars: User: #{user}")
    Rails.logger.info("DEBUG: Set vars: Local_Mod: #{local_moderator}")

    if local_moderator.present?
      Rails.logger.info("DEBUG: Local mod was present.")

      # The user is associated with the tenant of the local moderator whose code was entered.
      user.tenant_id = local_moderator.tenant_id

      # Check if user record was saved before proceeding.
      if user.save
        # key.update(used: true)
        flash[:notice] = 'Regular user was successfully created.'
        sign_in(:user, user)
        redirect_to root_path, notice: 'User was successfully created set up 2FA auth.'
      else
        # If user creation fails, render the registration form again with error messages.
        self.resource = user
        display_error_messages(user)
        render:new, status: :unprocessable_entity and return
      end
    else
      self.resource = user
      flash[:alert] = 'Invalid moderator code.'
      render:new, status: :unprocessable_entity and return
    end
  end

  # create_local_moderator: Creates a local moderator account. Requires a
  # valid, unused registration key. Creates a new tenant for the moderator.
  def create_local_moderator
    tenant = Tenant.create!

    ActsAsTenant.with_tenant(tenant) do
      user = User.new(sign_up_params) # Initialize new user
      user.role = :local_moderator    # Set the role
      key = Key.find_by(activation_code: user.verification_key)
      user.stripe_customer_id = key.customer_id
      if valid_registration_key?(key)
        # Save the user, which will trigger before_create callback
        if user.save
          # Handler for successful save actions
          key.update(used: true, email: user.email)
          Rails.logger.info("DEBUG: KEY: #{key.license_type}")
          tenant.membership_expiration = 12.months.from_now

          case key.license_type
          when 'tests_15'
            tenant.update(test_limit: 15, membership_expiration:12.months.from_now)

            Rails.logger.info("DEBUG: MADE 15 KEY TENANT: #{tenant}")

          when 'tests_45'
            tenant.update(test_limit: 45, membership_expiration:12.months.from_now)
            Rails.logger.info("DEBUG: MADE 45 KEY TENANT: #{tenant}")
          when 'tests_100'
            tenant.update(test_limit: 100, membership_expiration:12.months.from_now)
            Rails.logger.info("DEBUG: MADE 100 KEY TENANT: #{tenant}")
          end


          user.verification_key = key.activation_code
          secret_key = ROTP::Base32.random_base32
          user.user_mfa_sessions.create!(secret_key: secret_key, activated: false)
          sign_in(:user, user)
          redirect_to root_path, notice: 'Local moderator was successfully created set up 2FA auth.'
        else
          # Handler for save failures
          self.resource = user
          display_error_messages(user)
          render:new, status: :unprocessable_entity and return
        end
      else
        # Handler for save failures
        self.resource = user
        flash[:alert] = 'Invalid registration key.'
        render:new, status: :unprocessable_entity and return
      end
    end
  end

  private

  def valid_registration_key?(key)
    key.present? && !key.used && (key.expiration.nil? || key.expiration > Time.current)
  end

  def display_error_messages(user)
    @minimum_password_length = User.password_length.min
    flash.now[:alert] = "Registration failed because of the following reason(s):<br> #{user.errors.full_messages.join("<br>")}".html_safe
    Rails.logger.info("DEBUG: Failed to save user: #{user.errors.full_messages}")
  end

  private

  def sign_up_params
    allowed_params = [:fname, :lname, :email, :password, :password_confirmation, :verification_key, :terms_accepted]

    case params[:account_type]
    when 'regular_user'
      allowed_params << :moderator_code
    when 'bootcamp_user'
      allowed_params << :bootcamp_code
    end


    # allowed_params << :moderator_code if params[:account_type] == 'regular_user'
    Rails.logger.debug "Account Type: #{params[:account_type]}"
    params.require(:user).permit(allowed_params)
  end

end
