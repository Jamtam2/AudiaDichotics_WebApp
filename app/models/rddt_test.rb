# == Schema Information
#
# Table name: rddt_tests
#
#  id                       :bigint           not null, primary key
#  advantage_percentile     :string
#  client_name              :string
#  ear_advantage            :string
#  ear_advantage_score      :float
#  ear_advantage_score1     :float
#  ear_advantage_score3     :float
#  encrypted_client_name    :string
#  encrypted_client_name_iv :string
#  interpretation           :string
#  label                    :string
#  left_percentile          :string
#  left_score1              :float
#  left_score2              :float
#  left_score3              :float
#  notes                    :text
#  price                    :decimal(10, 2***REMOVED***
#  right_percentile         :string
#  right_score1             :float
#  right_score2             :float
#  right_score3             :float
#  test_type                :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  client_id                :bigint           not null
#  tenant_id                :bigint
#  user_id                  :bigint           not null
#
# Indexes
#
#  index_rddt_tests_on_client_id  (client_id***REMOVED***
#  index_rddt_tests_on_tenant_id  (tenant_id***REMOVED***
#  index_rddt_tests_on_user_id    (user_id***REMOVED***
#
# Foreign Keys
#
#  fk_rails_...  (client_id => clients.id***REMOVED***
#  fk_rails_...  (tenant_id => tenants.id***REMOVED***
#  fk_rails_...  (user_id => users.id***REMOVED***
#
class RddtTest < ApplicationRecord
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
