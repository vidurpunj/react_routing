Rails.application.routes.draw do
  root to: 'pages#index'
  get '/pages', to: 'pages#show', as: 'pages'
  get '/products', to: 'pages#products', as: 'products'
end
