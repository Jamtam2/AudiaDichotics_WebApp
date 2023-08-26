# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""***REMOVED***, not null
#  encrypted_password     :string           default(""***REMOVED***, not null
#  fname                  :string
#  lname                  :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  role                   :integer
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

  belongs_to :tenant
  enum role: { regular_user: 0, local_moderator: 1, global_moderator: 2 ***REMOVED***
  attr_accessor :registration_key
  before_validation :validate_registration_key, on: :create


  has_many :dwt_tests,dependent: :destroy
  has_many :dnw_tests,dependent: :destroy
  has_many :rddt_tests,dependent: :destroy
  has_many :clients, foreign_key: :tenant_id, primary_key: :tenant_id

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable




  # function checks to see if the role of the user is a global moderator
  def global_moderator?
    role == 'global_moderator'
  end
  
  # functions finds the code for the registration key and checks to see if the key has been used or not. 
  # This determines if the key for registration has been used or not.

  private
  def validate_registration_key
    key = Key.find_by(code: registration_key***REMOVED***
    puts "key checker: #{key.inspect***REMOVED***"
  
    if key.present? && !key.used
      key.update(used: true***REMOVED***
      puts "Valid registration key found: #{key.inspect***REMOVED***"
      return 
    else
      errors.add(:registration_key, "is invalid."***REMOVED***
      puts "Invalid registration key: #{registration_key***REMOVED***"
      return false
    end
  end
  
  
  def generate_subdomain
    # You may want to generate a subdomain based on some user's data (for example, email***REMOVED***.
    # This is a very basic implementation which takes a part before '@' symbol from the email.
    # Be aware this might not be unique. You will need to add validations or create more sophisticated logic.
    self.email.split('@'***REMOVED***.first
  end
end

