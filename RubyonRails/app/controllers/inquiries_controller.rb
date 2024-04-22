class InquiriesController < ApplicationController
  def create
    @inquiry = Inquiry.new(inquiry_params***REMOVED***
    puts 'GOT INTO CONTROLLER'

    if @inquiry.save
      InquiryMailer.inquiry_email(@inquiry***REMOVED***.deliver_now
      InquiryMailer.confirmation_email(@inquiry***REMOVED***.deliver_now
      flash[:notice] = 'Inquiry sent! We will respond within 24-48 hours.'
      puts 'shouldve sent...'
      
      redirect_to home_path 
    else
      flash.now[:alert] = 'Failed to send inquiry: ' + @inquiry.errors.full_messages.to_sentence
      render 'pages/about'
    end
  end

  private

  def inquiry_params
    params.require(:inquiry***REMOVED***.permit(:email, :company, :purpose, :inquiry_type***REMOVED***
    end
end
