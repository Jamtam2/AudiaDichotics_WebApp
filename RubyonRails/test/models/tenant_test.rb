# == Schema Information
#
# Table name: tenants
#
#  id         :bigint           not null, primary key
#  subdomain  :string
#  test_limit :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class TenantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
