class InquiryMailer < ApplicationMailer
  default from: 'dichoticdataresearch@gmail.com'

  def inquiry_email(inquiry***REMOVED***
    @inquiry = inquiry
    puts "Got here: #{inquiry.inspect***REMOVED***"

    mail(to: 'dichoticdataresearch@gmail.com', subject: 'New Inquiry Received'***REMOVED***
  end

  def confirmation_email(inquiry***REMOVED***
    @inquiry = inquiry

    if @inquiry.inquiry_type == 'dataset_access'
      mail(to: @inquiry.email, subject: 'Dataset Access Inquiry Confirmation', template_name: 'confirmation_email_dataset'***REMOVED***
    elsif @inquiry.inquiry_type == 'bug_report'
      mail(to: @inquiry.email, subject: 'Bug Report Confirmation', template_name: 'confirmation_email_bug'***REMOVED***
    end
  end
end
