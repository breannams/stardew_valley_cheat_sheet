Rails.application.routes.draw do
  resources :quests
  resources :festivals
  resources :animals
  resources :crops
  resources :buildings
  resources :villagers
  resources :games
  
  resources :users, only: [:create]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
