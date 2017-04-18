Rails.application.routes.draw do
  get 'errors/not_found'

  get 'errors/internal_server_error'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#portfolio'
  get 'about', to: 'pages#about'
  resources :contacts, only: :create
  get 'contact-me', to: 'contacts#new', as: 'new_contact'
  get 'stella', to: 'pages#stella'
  get 'nick', to: 'pages#nick'
  get 'eligh', to: 'pages#eligh'
  get 'larry', to: 'pages#larry'
  get 'steakface', to: 'pages#steakface'
  get 'screwed', to: 'pages#screwed'
  get 'dinosaurus', to: 'pages#dinosaurus'
  get 'mmm', to: 'pages#mmm'
  get 'test', to: 'pages#test'
  match "/404", to: "errors#not_found", :via => :all
  match "/500", to: "errors#internal_server_error", :via => :all
  # copypasta get '', to: 'pages#'
end
