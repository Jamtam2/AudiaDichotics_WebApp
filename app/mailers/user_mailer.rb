class UserMailer < ApplicationMailer
    def license_key_expired_mail(user, csv_data***REMOVED***
      @user = user
      # attachments['user_data.csv'] = { mime_type: 'application/octet-stream', content: Base64.encode64(csv_data***REMOVED*** ***REMOVED***
      mail(to: @user.email, subject: "AIDA: Your License Key Has Expired"***REMOVED***
    end

  def send_2fa_code(user, code***REMOVED***
    @user = user
    @code = code
    mail(to: @user.email, subject: 'Your 2FA Code'***REMOVED***
  end

  def license_key_purchase(user_email, license_key***REMOVED***
    @license_key = license_key
    mail(to: user_email, subject: 'Your License Key'***REMOVED***
  end

end