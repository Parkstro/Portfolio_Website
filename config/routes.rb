Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#portfolio'
  get 'about', to: 'pages#about'
  resources :contacts, only: :create
  get 'contact-me', to: 'contacts#new', as: 'new_contact'
  get 'stella', to: 'pages#stella'
  # copypasta get '', to: 'pages#'
end
