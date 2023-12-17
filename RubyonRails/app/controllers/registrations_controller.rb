class RegistrationsController < Devise::RegistrationsController
  def create
    super do |user|
      if user.persisted?
        key = Key.find_by(activation_code: user.registration_key***REMOVED***
        if valid_registration_key?(key***REMOVED***
          tenant = Tenant.create!
          user.update(tenant_id: tenant.id, role: 'local_moderator'***REMOVED***
          key.update(used: true***REMOVED***
        else
          user.destroy # Optional: Destroy the user if the key is invalid
          flash[:alert] = 'Invalid registration key.'
          redirect_to new_user_registration_path and returnc
        end
      end
    end
  end

  private
  def valid_registration_key?(key***REMOVED***
    key.present? && !key.used && (key.expiration.nil? || key.expiration > Time.current***REMOVED***
  end
end
