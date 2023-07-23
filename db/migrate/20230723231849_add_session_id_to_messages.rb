class AddSessionIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :session_id, :string
  end
end
