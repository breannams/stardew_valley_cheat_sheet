Rails.application.routes.draw do
  resources :farms
  resources :stardewvalleys
  resources :quests
  resources :festivals
  resources :animals
  resources :crops
  resources :buildings
  resources :villagers
  resources :games
  
  resources :users
  post '/login', to: 'users#login'
  get '/profile', to: "users#user_profile"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
