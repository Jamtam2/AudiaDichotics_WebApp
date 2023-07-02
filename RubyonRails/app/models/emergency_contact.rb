# == Schema Information
#
# Table name: emergency_contacts
#
#  id           :bigint           not null, primary key
#  address      :string
#  city         :string
#  email        :string
#  first_name   :string
#  last_name    :string
#  phone_number :string
#  state        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  client_id    :bigint           not null
#  tenant_id    :bigint
#
# Indexes
#
#  index_emergency_contacts_on_client_id  (client_id***REMOVED***
#  index_emergency_contacts_on_tenant_id  (tenant_id***REMOVED***
#
# Foreign Keys
#
#  fk_rails_...  (client_id => clients.id***REMOVED***
#  fk_rails_...  (tenant_id => tenants.id***REMOVED***
#
class EmergencyContact < ApplicationRecord
  acts_as_tenant(:tenant***REMOVED***

  belongs_to :client
  
  validates :first_name, :last_name, :phone_number, :address, :email, :city, :state, presence: true

end
