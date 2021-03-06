Rails.application.routes.draw do
  resources :metabolic_panels
  resources :cholesterols
  resources :weights
  resources :vitamine_panels
  resources :blood_pressures
  resources :users, only: [:index, :create, :show, :update]


  resources :login, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
