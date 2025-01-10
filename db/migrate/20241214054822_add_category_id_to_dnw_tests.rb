class AddCategoryIdToDnwTests < ActiveRecord::Migration[6.1]
  def change
    add_column :dnw_tests, :category_id, :integer
  end
end
