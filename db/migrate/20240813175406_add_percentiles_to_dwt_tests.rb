class AddPercentilesToDwtTests < ActiveRecord::Migration[6.1]
  def change
    add_column :dwt_tests, :advantage_percentile, :string
    add_column :dwt_tests, :left_percentile, :string
    add_column :dwt_tests, :right_percentile, :string
  end
end
