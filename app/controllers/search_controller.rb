class SearchController < ApplicationController

  def new_search


    response = Faraday.new('http://suggestqueries.google.com/complete/search?client=firefox&q=' + params[:keyword], headers: { 'User-Agent' => 'Mozilla/5.0' }).get
    json_response = JSON.parse(response.body)

    data = json_response[1]

    render json: { results: data }


  end
end
