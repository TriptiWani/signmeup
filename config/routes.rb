Rails.application.routes.draw do
  root :to => 'pages#home'

  resources :videos
  get '/search_video' => 'videos#search_video'
  get '/text_to_speech' => 'pages#text_to_speech'
end
