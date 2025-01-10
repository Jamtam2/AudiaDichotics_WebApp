class AddCategoryIdToRddtTests < ActiveRecord::Migration[6.1]
  def change
    add_column :rddt_tests, :category_id, :integer
  end
end
