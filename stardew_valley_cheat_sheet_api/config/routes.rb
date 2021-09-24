Rails.application.routes.draw do
  resources :quests
  resources :festivals
  resources :animals
  resources :crops
  resources :buildings
  resources :villagers
  resources :games
  
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
