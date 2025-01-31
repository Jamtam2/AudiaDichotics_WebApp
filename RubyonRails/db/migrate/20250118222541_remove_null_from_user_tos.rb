class RemoveNullFromUserTos < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :terms_accepted, true
  end
end
