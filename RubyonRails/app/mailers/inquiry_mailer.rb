class InquiryMailer < ApplicationMailer
  default from: 'dichoticdataresearch@gmail.com'

  def inquiry_email(inquiry***REMOVED***
    @inquiry = inquiry
    # puts "Got here: #{inquiry.inspect***REMOVED***"

    mail(to: 'dichoticdataresearch@gmail.com', subject: 'New Inquiry Received'***REMOVED***
  end

  def confirmation_email(inquiry***REMOVED***
    @inquiry = inquiry

    case @inquiry.inquiry_type
    when 'dataset_access'
      mail(to: @inquiry.email, subject: 'Dataset Access Inquiry Confirmation', template_name: 'confirmation_email_dataset'***REMOVED***
    when 'bug_report'
      mail(to: @inquiry.email, subject: 'Bug Report Confirmation', template_name: 'confirmation_email_bug'***REMOVED***
    when 'discount_inquiry'
      mail(to: @inquiry.email, subject: 'Discount Inquiry Confirmation', template_name: 'confirmation_email_discount'***REMOVED***
    end
  end
  end
