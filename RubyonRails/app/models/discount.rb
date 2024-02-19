# == Schema Information
#
# Table name: discounts
#
#  id                  :bigint           not null, primary key
#  code                :string
#  expiration_date     :date
#  percentage_off      :integer
#  redemption_quantity :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Discount < ApplicationRecord
    attr_accessor :days_until_expiration

    validates :code, presence: true, uniqueness: true
    validates :percentage_off, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 100 ***REMOVED***
    validates :redemption_quantity, numericality: { only_integer: true, greater_than: 0 ***REMOVED***
    validates :days_until_expiration, numericality: { only_integer: true, greater_than: 0 ***REMOVED***, on: :create
    before_save :set_expiration_date, if: -> { days_until_expiration.present? ***REMOVED***

    private

    def set_expiration_date
        self.expiration_date = Date.today + days_until_expiration.to_i.days
    end
  
end
