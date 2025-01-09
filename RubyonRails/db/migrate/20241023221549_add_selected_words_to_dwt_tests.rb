class AddSelectedWordsToDwtTests < ActiveRecord::Migration[6.1]
  def change
    add_column :dwt_tests, :selected_words, :jsonb
    add_column :rddt_tests, :selected_words, :jsonb
    add_column :dnw_tests, :selected_words, :jsonb
  end
end
