class AddTimestampToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :timestamp, :datetime
  end
end
