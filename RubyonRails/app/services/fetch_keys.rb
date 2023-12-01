# app/services/fetch_keys.rb

require 'httparty'
require 'active_support/all'

class FetchKeys
  include HTTParty
  base_uri 'api.dichoticsinc.com/api'

  def self.call
    response = get("/license", query: { apiKey: 'ears_lobo_audia_dichotic_capstone_winter23' ***REMOVED******REMOVED***
    if response.success?
      response.parsed_response.each do |data|
        create_key(data***REMOVED*** if data['expiration'] && Time.parse(data['expiration']***REMOVED*** > Time.now
        
      end
    else
      Rails.logger.error("FetchKeys: Error fetching data - #{response.message***REMOVED***"***REMOVED***
    end
  end

  private

  def self.create_key(data***REMOVED***
    Key.find_or_create_by(license_id: data['licenseID']***REMOVED*** do |key|
      key.activation_code = data['activationCode']
      key.license_type = data['licenseType']
      key.expiration = data['expiration']
      key.product_id = data['productID']
      key.customer_id = data['customerID']
      key.subscription_id = data['subscriptiontID']
      puts "this license expires: #{data['expiration']***REMOVED***"

    end
  end
end
