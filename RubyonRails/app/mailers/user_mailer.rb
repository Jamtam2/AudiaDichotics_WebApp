class UserMailer < ApplicationMailer
    default from: 'dichoticdataresearch@gmail.com'
  
    def send_2fa_code(user, code***REMOVED***
      @user = user
      @code = code
      mail(to: @user.email, subject: 'Your 2FA Code'***REMOVED***
    end
  end
  