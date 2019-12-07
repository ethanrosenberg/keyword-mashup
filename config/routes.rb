Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api/v1' do
    post 'new_search', to: 'search#new_search'
  end

end
