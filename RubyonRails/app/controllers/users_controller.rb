class UsersController < ApplicationController
    def new
      @user = User.new
    end
  
    def create
      @user = User.new(user_params***REMOVED***
  
      if @user.save
        flash[:success] = "User successfully added!"
        redirect_to home_path, notice: "User created successfully."
      else
        flash.now[:error] = "User creation failed"
        render :new
      end
    end
    def edit
        @user = User.find(params[:id]***REMOVED***
      end
    def update
        @user = User.find(params[:id]***REMOVED***

        if @user.update(user_params***REMOVED***
            redirect_to users_path, notice: "User updated successfully."
        else
            redirect_to edit_user_path(@user***REMOVED***, notice: "User was not updated."
        end
    end

    

    def index
        @users = User.all
      end
      
  
    private
    
    def user_params
        params.require(:user***REMOVED***.permit(:first_name, :last_name, :email, :date_of_birth, :gender, :address1, :country, :state, :city, :zip, :phone1, :emergency_contact_first_name, :emergency_contact_last_name, :emergency_contact_phone1, :emergency_contact_phone2, :emergency_contact_address1, :emergency_contact_city, :mgmt_ref,:phone2***REMOVED***
      end
      
      
  end
  