# README

Small messaging app that utilizes twilio api. 

Written with ruby on rails as backend and angular for frontend.

# PreReqs:
1. Ruby: 2.7.6p219 (2022-04-12 revision c9c2245c0a) [x64-mingw32]
2. Rails: 5.2.8.1
3. Node: v18.16.1
4. Angular CLI 

# Setup 
1. bundle install
2. rails db:create && rails db:migrate
2. rails server
3. cd city-messenger-frontend
4. npm install && npm install -g @angular/cli
5. ng serve

# Run
1. Go to localhost:4200
2. Optional (Hit "Generate new session id")
3. Enter in a valid phone number and message
4. Hit submit... Enjoy...