class EmergencyContactsController < ApplicationController
  def new
    @user = User.find(params[:user_id]***REMOVED***
    @emergency_contact = EmergencyContact.new
  end

  def create
    @user = User.find(params[:user_id]***REMOVED***
    @emergency_contact = @user.emergency_contacts.build(emergency_contact_params***REMOVED***

    if @emergency_contact.save
      redirect_to edit_user_path(@user***REMOVED***, notice: "Emergency Contact created successfully."
    else
      flash.now[:error] = "Emergency Contact creation failed"
      render :new
    end
  end

  def edit
    @user = User.find(params[:user_id]***REMOVED***
    @emergency_contact = @user.emergency_contacts.find(params[:id]***REMOVED***
  end

  def update
    @user = User.find(params[:user_id]***REMOVED***
    @emergency_contact = @user.emergency_contacts.find(params[:id]***REMOVED***

    if @emergency_contact.update(emergency_contact_params***REMOVED***
      redirect_to edit_user_path(@user***REMOVED***, notice: "Emergency Contact updated successfully."
    else
      flash.now[:error] = "Emergency Contact update failed"
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:user_id]***REMOVED***
    @emergency_contact = @user.emergency_contacts.find(params[:id]***REMOVED***
    @emergency_contact.destroy
    redirect_to edit_user_path(@user***REMOVED***, notice: "Emergency contact successfully deleted."
  end

  private

  def emergency_contact_params
    params.require(:emergency_contact***REMOVED***.permit(:first_name, :last_name, :phone_number, :address, :email, :state, :city***REMOVED***
  end
end
