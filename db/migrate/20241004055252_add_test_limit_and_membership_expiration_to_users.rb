class AddTestLimitAndMembershipExpirationToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :test_limit, :integer
    add_column :users, :membership_expiration, :datetime
  end
end
