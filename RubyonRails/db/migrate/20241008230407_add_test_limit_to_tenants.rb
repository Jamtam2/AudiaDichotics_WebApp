class AddTestLimitToTenants < ActiveRecord::Migration[6.1]
  def change
    add_column :tenants, :test_limit, :integer
  end
end
