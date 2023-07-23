class Message < ApplicationRecord
  
    attribute :timestamp, :datetime
    attribute :session_id, :string

    # def self.allowed_params
    #     [:content, :sender, :receiver, :session_id]
    # end
end
  