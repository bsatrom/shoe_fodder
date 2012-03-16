require 'rubygems'
require 'bundler/setup'
require 'sinatra'

get '/' do
	erb :index, :locals => { :title => 'Home', :assets => false }
end

get '/index' do
	erb :index, :locals => { :title => 'Home', :assets => false }
end

get '/track' do
	erb :track, :locals => { :title => 'Track', :assets => true }
end

get '/races' do
	erb :races, :locals => { :title => 'Races', :assets => true }
end

get '/races/:id' do
	erb :race, :locals => { :title => 'Race', :assets => true, :id => :id}
end