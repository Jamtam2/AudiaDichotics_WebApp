class AddBootcampToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :bootcamp_code, :string
  end
end
