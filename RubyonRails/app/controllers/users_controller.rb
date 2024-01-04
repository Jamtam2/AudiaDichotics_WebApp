class UsersController < ApplicationController
  before_action :check_permission, only: [:new, :create]

  def index
    local_users = User.where(tenant_id: current_user.tenant_id***REMOVED***

    if params[:query]
      split_query = params[:query].split(' '***REMOVED***
      if split_query.length > 1
        # Case when both first name and last name are typed
        @users = local_users.where('lower(fname***REMOVED*** LIKE :first AND lower(lname***REMOVED*** LIKE :last', 
                            first: "#{split_query.first.downcase***REMOVED***%", 
                            last: "#{split_query.last.downcase***REMOVED***%"***REMOVED***
      else
        # Case when either first name, last name, or email is typed
        @users = local_users.where('lower(fname***REMOVED*** LIKE :query OR lower(lname***REMOVED*** LIKE :query OR lower(email***REMOVED*** LIKE :query', 
                            query: "%#{params[:query].downcase***REMOVED***%"***REMOVED***
      end
    else
      @users = User.where(tenant_id: current_user.tenant_id***REMOVED***
    end
  end

  def new
    @user = User.new
  end

  # def create
  #   @user = User.new(user_params***REMOVED***
  #   key = Key.find_by(activation_code: params[:registration_key]***REMOVED***
  #
  #   # Rails.logger("DEBUG: User: #{@user.inspect***REMOVED***"***REMOVED***
  #   # Rails.logger("DEBUG: key: #{key.inspect***REMOVED***"***REMOVED***
  #
  #   if valid_registration_key?(key***REMOVED***
  #     # Rails.logger("DEBUG: KEY IS VALID!!!"***REMOVED***
  #
  #     tenant = Tenant.create!
  #     # Rails.logger("DEBUG: Created tenant #{tenant.inspect***REMOVED***"***REMOVED***
  #     @user.tenant_id = tenant.id
  #     @user.role = 'local_moderator'
  #
  #     # Rails.logger("DEBUG: tenant_id: #{@user.tenant_id.inspect***REMOVED***"***REMOVED***
  #     # Rails.logger("DEBUG: user role: #{@user.role.inspect***REMOVED***"***REMOVED***
  #
  #     if @user.save
  #       # Rails.logger("DEBUG: Saving user: #{@user.inspect***REMOVED***"***REMOVED***
  #
  #
  #       # key.update(used: true***REMOVED***
  #       # User, tenant, and key update successful
  #       puts "New user (local moderator***REMOVED*** was saved with Tenant ID: #{tenant.id***REMOVED***"
  #     else
  #       # Handle user creation failure
  #       puts "Failed to create user"
  #       Rails.logger("DEBUG: FAILED TO CREATE USER: #{@user.role.inspect***REMOVED***"***REMOVED***
  #       render :new
  #     end
  #   else
  #     # Handle invalid key
  #     flash[:alert] = 'Invalid registration key.'
  #     render :new
  #   end
  # end

  private

  def valid_registration_key?(key***REMOVED***
    key.present? && !key.used && (key.expiration.nil? || key.expiration > Time.current***REMOVED***
  end

  private

  def check_permission
    unless current_user.local_moderator? || current_user.global_moderator?
      redirect_to users_path, alert: "You don't have permission to perform this action."
    end
  end

  def user_params
    params.require(:user***REMOVED***.permit(:fname, :lname, :email, :password, :password_confirmation, :tenant_id, :registration_key***REMOVED***
    Rails.logger("DEBUG: #{@user.email.inspect***REMOVED***"***REMOVED***
  end
end