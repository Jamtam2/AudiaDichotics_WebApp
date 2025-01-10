class AddCategoryIdToDwtTests < ActiveRecord::Migration[6.1]
  def change
    add_column :dwt_tests, :category_id, :integer
  end
end
