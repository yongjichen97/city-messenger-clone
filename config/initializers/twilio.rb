# config/initializers/twilio.rb

require 'twilio-ruby'

Twilio.configure do |config|
  config.account_sid = 'ACb87176420c5591820938f7ab8d87933c'     # Replace with your Twilio Account SID
  config.auth_token = '9c91e7190891c63c1eee4c753ac368f4'       # Replace with your Twilio Auth Token
end
