# == Schema Information
#
# Table name: keys
#
#  id         :bigint           not null, primary key
#  code       :string
#  used       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_keys_on_code  (code***REMOVED*** UNIQUE
#
require "test_helper"

class KeyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
