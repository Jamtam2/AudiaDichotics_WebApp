class AddMembershipExpirationToTenant < ActiveRecord::Migration[6.1]
  def change
    add_column :tenants, :membership_expiration, :datetime, null: true
  end
end
