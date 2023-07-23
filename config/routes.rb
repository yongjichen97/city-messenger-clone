Rails.application.routes.draw do
  namespace :api do
    resources :messages, only: [:index, :create, :destroy]
  end
  get 'messages/by_session/:session_id', to: 'messages#messages_by_session'
end