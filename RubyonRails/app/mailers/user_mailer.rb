class UserMailer < ApplicationMailer
  def license_key_expired_mail(user, csv_data***REMOVED***
    @user = user
    attachments['user_data.csv'] = {mime_type: 'text/csv', content: csv_data***REMOVED***
    # mail(to: @user.email, subject: "AIDA: Your License Key Has Expired"***REMOVED***
    mail(to: 'hunterjackson45@hotmail.com', subject: "AIDA: Your License Key Has Expired"***REMOVED***
  end
  
  def send_2fa_code(user, code***REMOVED***
    @user = user
    @code = code
    mail(to: @user.email, subject: 'Your 2FA Code'***REMOVED***
  end
end
  
