class UsersController < ApplicationController
  before_action :check_permission, only: [:new, :create]
  
  def index
    if params[:query]
      split_query = params[:query].split(' '***REMOVED***
      if split_query.length > 1
        # Case when both first name and last name are typed
        @users = User.where('lower(fname***REMOVED*** LIKE :first AND lower(lname***REMOVED*** LIKE :last', 
                            first: "#{split_query.first.downcase***REMOVED***%", 
                            last: "#{split_query.last.downcase***REMOVED***%"***REMOVED***
      else
        # Case when either first name, last name, or email is typed
        @users = User.where('lower(fname***REMOVED*** LIKE :query OR lower(lname***REMOVED*** LIKE :query OR lower(email***REMOVED*** LIKE :query', 
                            query: "%#{params[:query].downcase***REMOVED***%"***REMOVED***
      end
    else
      @users = User.all
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params***REMOVED***
    # @user.role = current_user.local_moderator? ? "regular_user" : @user.role
    puts "Current user #{@user.inspect***REMOVED***"

    key = Key.find_by(activation_code: params[:registration_key]***REMOVED***
    if valid_registration_key?(key***REMOVED***
      tenant = Tenant.create!
      @user.tenant_id = tenant.id
      @user.role = 'local_moderator'

      if @user.save
        key.update(used: true***REMOVED***
        # User, tenant, and key update successful
        puts "New user (local moderator***REMOVED*** was saved with Tenant ID: #{tenant.id***REMOVED***"
        # redirect_to users_path, notice: 'User was successfully created.'
      else
        # Handle user creation failure
        puts "Failed to create user"
        render :new
      end
    else
      # Handle invalid key
      flash[:alert] = 'Invalid registration key.'
      render :new
    end
  end

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
    params.require(:user***REMOVED***.permit(:fname, :lname, :email, :password, :password_confirmation***REMOVED***
    Rails.logger("DEBUG: #{@user.email.inspect***REMOVED***"***REMOVED***
  end
end