# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""***REMOVED***, not null
#  encrypted_password     :string           default(""***REMOVED***, not null
#  fname                  :string
#  lname                  :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email***REMOVED*** UNIQUE
#  index_users_on_reset_password_token  (reset_password_token***REMOVED*** UNIQUE
#
require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end