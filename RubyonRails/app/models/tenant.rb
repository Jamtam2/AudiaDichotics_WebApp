# == Schema Information
#
# Table name: tenants
#
#  id                    :bigint           not null, primary key
#  membership_expiration :datetime
#  subdomain             :string
#  test_limit            :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  stripe_customer_id    :string
#
class Tenant < ApplicationRecord
    has_many :users
    has_many :dwt_tests,dependent: :destroy
    has_many :dnw_tests,dependent: :destroy
    has_many :rddt_tests,dependent: :destroy
    has_many :clients,dependent: :destroy
    has_many :week_ones,dependent: :destroy
    has_many :week_twos,dependent: :destroy

    # Associate payments with tenant
    has_many :payments, dependent: :destroy

    validates :stripe_customer_id, uniqueness: true, allow_nil: true
    
    def can_take_test?
        # puts "can you take the test? #{test_limit}"
        test_limit > 0 && !membership_expired?
    end

      def membership_expired?
        membership_expiration < Time.current
      end

      # Call this method to reduce the test count
      def use_test!
        if can_take_test?
            self.test_limit -= 1
            save!
          true
        else
          errors.add(:base, "You have no remaining tests or your membership has expired.")
          false
        end
      end

end
