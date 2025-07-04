class AddPercentilesToDnwTests < ActiveRecord::Migration[6.1]
  def change
    add_column :dnw_tests, :advantage_percentile, :string
    add_column :dnw_tests, :left_percentile, :string
    add_column :dnw_tests, :right_percentile, :string
  end
end
