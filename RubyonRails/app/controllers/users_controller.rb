class UsersController < ApplicationController
    def new
      @user = User.new
    end
  
    def create
      @user = User.new(user_params***REMOVED***
      @emergency_contact = @user.emergency_contacts.build
  
      if @user.save
        flash[:success] = "User successfully added!"
        redirect_to users_path, notice: "User created successfully."
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
    def destroy
      @user = User.find(params[:id]***REMOVED***
      @user.destroy
  
      redirect_to users_url, notice: "User was successfully deleted."
    end
  

    

    def index
        @users = User.all
      end
      
    def show
      @user = User.find(params[:id]***REMOVED***
    end
  
    private
    
    def user_params
        params.require(:user***REMOVED***.permit(:first_name, :last_name, :email, :date_of_birth, :gender, :address1, :country, :state, :city, :zip, :phone1,:mgmt_ref,:phone2, emergency_contacts_attributes: [
          :first_name, :last_name, :phone, :address,
          :email, :city, :state
        ]
  ***REMOVED***
      end
      
      
  end
  