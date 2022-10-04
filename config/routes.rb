Rails.application.routes.draw do
  resources :avatars
  resources :users
  resources :logs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  get "/users/:username", to: "users#user_info"

  post "new-log", to: "logs#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/new-avatar", to: "avatars#create"
  post "/edit-avatar", to: "avatars#update"
  get "/avatar", to: "avatars#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
