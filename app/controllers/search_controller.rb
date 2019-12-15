require 'open-uri'
require 'net/http'

class SearchController < ApplicationController

  def new_search

    if params[:searchType] === 'normal'

      response = Faraday.new(url: 'http://suggestqueries.google.com/complete/search?client=firefox&q=' + params[:keyword],
                 headers: { 'User-Agent' => 'Mozilla/5.0'}).get

      json_response = JSON.parse(response.body)

      render json: { :query => params[:keyword], :status => "200", :results => json_response[1] }

    elsif params[:searchType] === 'deep-dive'

      results = deep_dive_search(params[:keyword])


      render json: { :query => params[:keyword], :status => "200", :results => results }
    end


  end

  def single_search(keyword)

  end

  def deep_dive_search(keyword)

    alphabet = ('a'..'g').to_a
    results = []

    alphabet.each do |letter|

      puts '*** STARTING DEEP DIVE | keyword => ' + keyword.strip + ' ' + letter + ' ***'
      query_results = new_query(keyword.strip + " " + letter.strip)

      query_results.each  {|result| results << result }

      puts '*** HARVESTED: ' + query_results.length.to_s + ' | TOTAL => ' + results.length.to_s + ' ***'

      sleepTime = rand(0.8..1.9)

      puts '*** HARVESTED: ' + query_results.length.to_s + ' | TOTAL => ' + results.length.to_s + ' ***'

      sleep sleepTime

    end

    results


  end

  def new_query(query)

    response = Faraday.new(url: 'http://suggestqueries.google.com/complete/search?client=firefox&q=' + query,
               headers: { 'User-Agent' => 'Mozilla/5.0'}).get

    json_response = JSON.parse(response.body)

    json_response[1]

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
