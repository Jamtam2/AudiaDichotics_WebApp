class AddColumnsToRddtTests < ActiveRecord::Migration[6.1]
  def change
    add_column :rddt_tests, :advantage_percentile, :string
    add_column :rddt_tests, :ear_advantage_score1, :float
    add_column :rddt_tests, :left_percentile, :string
    add_column :rddt_tests, :ear_advantage_score3, :float

  end
end
