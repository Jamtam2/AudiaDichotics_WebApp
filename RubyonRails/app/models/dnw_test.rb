# == Schema Information
#
# Table name: dnw_tests
#
#  id                       :bigint           not null, primary key
#  client_name              :string
#  ear_advantage            :string
#  ear_advantage_score      :float
#  encrypted_client_name    :string
#  encrypted_client_name_iv :string
#  interpretation           :string
#  label                    :string
#  left_score               :float
#  notes                    :text
#  price                    :decimal(10, 2***REMOVED***
#  right_score              :float
#  test_type                :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  client_id                :bigint           not null
#  tenant_id                :bigint
#  user_id                  :bigint           not null
#
# Indexes
#
#  index_dnw_tests_on_client_id  (client_id***REMOVED***
#  index_dnw_tests_on_tenant_id  (tenant_id***REMOVED***
#  index_dnw_tests_on_user_id    (user_id***REMOVED***
#
# Foreign Keys
#
#  fk_rails_...  (client_id => clients.id***REMOVED***
#  fk_rails_...  (tenant_id => tenants.id***REMOVED***
#  fk_rails_...  (user_id => users.id***REMOVED***
#
class DnwTest < ApplicationRecord
    acts_as_tenant(:tenant***REMOVED***
  
    belongs_to :client
    belongs_to :user
    before_save :set_default_price
    attr_encrypted :client_name, key: ENV['ENCRYPTION_KEY']


    def set_default_price
      self.price ||= 2.00 # set default price if not present
    end

    def apply_discount(discount_code***REMOVED***
      discount = Discount.find_by(code: discount_code***REMOVED***
      return unless discount
  
      self.price *= (1 - discount.percentage_off / 100.0***REMOVED***
    end
  end
  
  

