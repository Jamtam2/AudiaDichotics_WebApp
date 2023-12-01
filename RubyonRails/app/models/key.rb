# == Schema Information
#
# Table name: keys
#
#  id              :bigint           not null, primary key
#  activation_code :string
#  code            :string
#  expiration      :datetime
#  license_type    :integer
#  used            :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  customer_id     :integer
#  license_id      :integer
#  product_id      :integer
#  subscription_id :integer
#
# Indexes
#
#  index_keys_on_code  (code***REMOVED*** UNIQUE
#
class Key < ApplicationRecord
end
