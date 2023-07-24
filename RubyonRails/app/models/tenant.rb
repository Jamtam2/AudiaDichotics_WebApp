# == Schema Information
#
# Table name: tenants
#
#  id         :bigint           not null, primary key
#  subdomain  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tenant < ApplicationRecord
    has_many :users,dependent: :destroy
    has_many :clients,dependent: :destroy


    validates :subdomain, uniqueness: true
    validates :subdomain, presence: true, uniqueness: true, 
            format: { with: /\A[\w+\-.]+\z/, message: "only allows letters, numbers, hyphens, underscores, and periods." ***REMOVED***

end
