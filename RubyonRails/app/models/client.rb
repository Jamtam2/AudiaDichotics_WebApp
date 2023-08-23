# == Schema Information
#
# Table name: clients
#
#  id            :bigint           not null, primary key
#  address1      :string
#  city          :string
#  country       :string
#  date_of_birth :date
#  email         :string
#  first_name    :string
#  gender        :string
#  last_name     :string
#  mgmt_ref      :string
#  phone1        :string
#  phone2        :string
#  race          :string
#  state         :string
#  zip           :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  tenant_id     :bigint
#
# Indexes
#
#  index_clients_on_tenant_id  (tenant_id***REMOVED***
#
# Foreign Keys
#
#  fk_rails_...  (tenant_id => tenants.id***REMOVED***
#
class Client < ApplicationRecord
  acts_as_tenant(:tenant***REMOVED***

  # Associations with emergency contacts and tests, with dependent destroy option
  has_many :emergency_contacts, dependent: :destroy
  has_many :tests, dependent: :destroy

  # Allow nested attributes for emergency contacts
  accepts_nested_attributes_for :emergency_contacts

    def full_name
      "#{first_name***REMOVED***#{last_name***REMOVED***"
    end
#age in years method that calculates a clients age based on DOB then passes it to the script test page
    def age_in_years
      now = Time.now.utc.to_date
      dob = date_of_birth
      age = now.year - dob.year
      age -= 1 if now < dob + age.years # for days before birthday
      age
    end


    def anonymized
      self.attributes.except('address1', 'email', 'phone1', 'phone2'***REMOVED***
        .merge({
          'address1' => Digest::SHA256.hexdigest(self.address1***REMOVED***,
          'email' => Digest::SHA256.hexdigest(self.email***REMOVED***,
          'phone1' => Digest::SHA256.hexdigest(self.phone1***REMOVED***,
          'phone2' => Digest::SHA256.hexdigest(self.phone2***REMOVED***
        ***REMOVED******REMOVED***
    end
  # Validations for various client attributes
  validates :first_name, :last_name, :email, :date_of_birth, :address1, :country, :state, :city, :zip, :phone1, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP ***REMOVED***
  validates :phone1, numericality: { only_integer: true ***REMOVED***

  # Allow these attributes to be searched through Ransack
  def self.ransackable_attributes(auth_object = nil***REMOVED***
    %w(id address1 city country date_of_birth email first_name gender last_name mgmt_ref phone1 phone2 state zip created_at updated_at tenant_id age_in_years age ***REMOVED*** + _ransackers.keys
  end

  # Allow these associations to be searched through Ransack
  def self.ransackable_associations(auth_object = nil***REMOVED***
    ["emergency_contacts", "tenant", "tests"]
  end

  # Controls the functionality behind thw advanced searching for this attribute of id
  ransacker :id do
    Arel.sql('id'***REMOVED***
  end

end
  


