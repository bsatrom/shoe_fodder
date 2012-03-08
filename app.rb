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