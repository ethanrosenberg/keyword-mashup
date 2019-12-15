require 'open-uri'
require 'net/http'

class SearchController < ApplicationController

  def new_search

    if params[:searchType] === 'normal'

      response = Faraday.new(url: 'http://suggestqueries.google.com/complete/search?client=firefox&q=' + params[:keyword],
                 headers: { 'User-Agent' => 'Mozilla/5.0'}).get

      json_response = JSON.parse(response.body)

      render json: { :query => params[:keyword], :status => "200", :results => json_response[1] }

    elsif params[:searchType === 'deep-dive']


    end


  end

  def single_search(keyword)

  end

  def deep_dive_search(keyword)



  end






        #            request: { open_timeout: 1 }
  #html = open('http://suggestqueries.google.com/complete/search?client=firefox&q=how to start', 'User-Agent' => 'Mozilla/5.0').read
#response = Faraday.new('http://apple.com').get



    #response = Faraday.new('http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=' + params[:keyword], headers: { 'User-Agent' => 'Mozilla/5.0' }).get
  #  response = Faraday.new('http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=how to run', headers: { 'User-Agent' => 'Mozilla/5.0' }).get
    #response = Faraday.new('http://suggestqueries.google.com/complete/search?client=firefox&q=' + params[:keyword], headers: { 'User-Agent' => 'Mozilla/5.0' }).get
  #  json_response = JSON.parse(response.body)

  #  data = json_response[1]



  #  render json: data



end
