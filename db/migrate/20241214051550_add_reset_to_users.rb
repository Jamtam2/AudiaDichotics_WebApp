class AddResetToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :reset, :boolean
  end
end
