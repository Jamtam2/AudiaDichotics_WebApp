class ApiKeysController < ApplicationController
  def show
    render json: { assembly_api_key: ENV['ASSEMBLY_API'] }
  end
end
