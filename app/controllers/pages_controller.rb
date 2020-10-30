class PagesController < ApplicationController
  def index
  end

  def show
  end

  def products
    unknown =  RestClient.get 'https://reqres.in/api/unknown'
    unknown_products = JSON.parse unknown
    product = RestClient.get 'https://reqres.in/api/products/'
    known_products = JSON.parse product
    ## Key get updated with latest values on merge
    final_products = unknown_products.merge(known_products)
    render json: final_products
  end
end
