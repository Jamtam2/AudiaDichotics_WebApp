class InquiryMailer < ApplicationMailer
    default from: 'dichoticdataresearch@gmail.com'
  
    def inquiry_email(inquiry***REMOVED***
      @inquiry = inquiry
      puts "Got here: #{inquiry.inspect***REMOVED***"

      mail(to: 'dichoticdataresearch@gmail.com', subject: 'New Dataset Inquiry'***REMOVED***
    end
  
    def confirmation_email(inquiry***REMOVED***
      @inquiry = inquiry
      mail(to: @inquiry.email, subject: 'We have received your inquiry'***REMOVED***
    end
  end
  