# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""***REMOVED***, not null
#  encrypted_password     :string           default(""***REMOVED***, not null
#  fname                  :string
#  google_secret          :string
#  lname                  :string
#  mfa_secret             :integer
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer
#  verification_key       :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  tenant_id              :bigint
#
# Indexes
#
#  index_users_on_email                 (email***REMOVED*** UNIQUE
#  index_users_on_reset_password_token  (reset_password_token***REMOVED*** UNIQUE
#  index_users_on_tenant_id             (tenant_id***REMOVED***
#
# Foreign Keys
#
#  fk_rails_...  (tenant_id => tenants.id***REMOVED***
#
class User < ApplicationRecord
  acts_as_tenant(:tenant***REMOVED***
  
  acts_as_google_authenticated google_secret: :google_secret, mfa_secret: :mfa_secret

  belongs_to :tenant
  enum role: { regular_user: 0, local_moderator: 1, global_moderator: 2, owner: 3 ***REMOVED***

  attr_accessor :registration_key
  attr_accessor :email_2fa_code
  
  before_validation :validate_registration_key, on: :create

  # Will validate the verification key only for the owner.
  validates :verification_key, presence: true, if: :owner?


  has_many :dwt_tests,dependent: :destroy
  has_many :dnw_tests,dependent: :destroy
  has_many :rddt_tests,dependent: :destroy
  has_many :clients, foreign_key: :tenant_id, primary_key: :tenant_id
  has_many :user_mfa_sessions, dependent: :destroy

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # function checks to see if the role of the user is a global moderator
  def global_moderator?
    role == 'global_moderator'
  end

  # function checks to see if the role of the user is a local moderator
  def local_moderator?
    role == 'local_moderator'
  end

  # function checks to see if the role of the user is the owner
  def owner?
    role == 'owner'
  end
  
  def generate_qr_code
    totp = ROTP::TOTP.new(self.user_mfa_sessions.first.secret_key***REMOVED***
    label = "#{self.email***REMOVED***"
    totp.provisioning_uri(label***REMOVED***
  end
  
  def google_authentic?(provided_code***REMOVED***
    totp = ROTP::TOTP.new(google_secret***REMOVED***
    # Allow 30 seconds drift behind and ahead
    drift_behind = 30
    drift_ahead = 30
    totp.verify(provided_code, at: Time.now, drift_behind: drift_behind, drift_ahead: drift_ahead***REMOVED***
  end
  
  
  # functions finds the code for the registration key and checks to see if the key has been used or not. 
  # This determines if the key for registration has been used or not.

  private
  def validate_registration_key
    key = Key.find_by(activation_code: registration_key***REMOVED***
    # puts "key checker: #{key.inspect***REMOVED***"
  
    if key.present? && !key.used
      # key.update(used: true***REMOVED***
      puts "Valid registration key found: #{key.inspect***REMOVED***"
      return 
    else
      errors.add(:registration_key, "is invalid."***REMOVED***
      # puts "Invalid registration key: #{registration_key***REMOVED***"
      return false
    end
  end


  public
  def license_key
    Key.find_by(email: email***REMOVED***
  end
end

