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
    render :new
  end


  def create
    @user = User.new(user_params***REMOVED***
    key = Key.find_by(activation_code: params[:registration_key]***REMOVED***
  
    if valid_registration_key?(key***REMOVED*** || params[:role] == 'local_moderator'
      if params[:role] == 'local_moderator'
        tenant = Tenant.create!  # Create tenant for local moderator
        @user.tenant_id = tenant.id
      end
  
      if @user.save
        # Optional: key.update(used: true***REMOVED***
        puts "New user (local moderator***REMOVED*** was saved with Tenant ID: ##{tenant.id***REMOVED***"
      else
        # Handle user creation failure
        puts "Failed to create user"
        Rails.logger("DEBUG: FAILED TO CREATE USER: #{@user.role.inspect***REMOVED***"***REMOVED***
        render :new
      end
    else
      # Handle invalid key
      flash[:alert] = 'Invalid registration key.'
      render :new
    end
  end
  def show
    @user = User.find(params[:id]***REMOVED***
    render :show
  end
  def location_moderator_clients
    @location_moderator = LocationModerator.find(params[:id]***REMOVED***
    # Retrieve clients for the location moderator and current user's tenant
    @clients = @location_moderator.clients.where(tenant_id: client.tenant_id***REMOVED***
    render :location_moderator_clients
  end
  def destroy
    @user = User.find(params[:id]***REMOVED***
    @user.destroy
  
    redirect_to users_path, notice: "User was successfully deleted."
  end

  private

  def valid_registration_key?(key***REMOVED***
    key.present? && !key.used && (key.expiration.nil? || key.expiration > Time.current***REMOVED***
  end

  private

  def check_permission
    unless current_user.local_moderator? || current_user.global_moderator? || action_name == 'location_moderator_clients'
      redirect_to users_path, alert: "You don't have permission to perform this action."
    end
  end

  def user_params
    params.require(:user***REMOVED***.permit(:fname, :lname, :email, :password, :password_confirmation, :tenant_id, :registration_key***REMOVED***
    Rails.logger("DEBUG: #{@user.email.inspect***REMOVED***"***REMOVED***
  end

  # def assign_location_moderator
  #   @user = User.find(params[:id]***REMOVED***
  #   @location = Location.find(params[:id]***REMOVED***
  #
  #   if @user.location_moderator?
  #     @location.users << @user unless @location.users.include?(@user***REMOVED***
  #     flash[:notice] = "Location moderator assigned successfully."
  #   else
  #     flash[:alert] = "Only location moderators can be assigned."
  #   end
  # end
end