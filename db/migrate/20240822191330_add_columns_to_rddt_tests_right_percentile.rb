class AddColumnsToRddtTestsRightPercentile < ActiveRecord::Migration[6.1]
  def change
    add_column :rddt_tests, :right_percentile, :string
  end
end
