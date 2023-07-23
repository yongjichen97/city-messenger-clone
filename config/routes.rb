Rails.application.routes.draw do
  namespace :api do
    resources :messages, only: [:index, :create, :destroy]
  end
end