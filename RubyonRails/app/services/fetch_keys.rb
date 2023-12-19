# app/services/fetch_keys.rb

require 'httparty'
require 'active_support/all'

class FetchKeys
  include HTTParty
  base_uri 'api.dichoticsinc.com/api'

  def self.call
    fetch_keys
    fetch_customers
  end

  private

  def self.fetch_keys
    response = get("/license", query: { apiKey: 'ears_lobo_audia_dichotic_capstone_winter23' ***REMOVED******REMOVED***
    if response.success?
      response.parsed_response.each do |data|
        create_key(data***REMOVED*** if data['expiration'] && Time.parse(data['expiration']***REMOVED*** > Time.now
      end
    else
      Rails.logger.error("FetchKeys: Error fetching license data - #{response.message***REMOVED***"***REMOVED***
    end
  end

  def self.fetch_customers
    response = get("/customer", query: { apiKey: 'ears_lobo_audia_dichotic_capstone_winter23' ***REMOVED******REMOVED***
    if response.success?
      response.parsed_response.each do |data|
        update_key_email(data***REMOVED***
      end
    else
      Rails.logger.error("FetchKeys: Error fetching customer data - #{response.message***REMOVED***"***REMOVED***
    end
  end

  def self.create_key(data***REMOVED***
    key = Key.find_or_initialize_by(license_id: data['licenseID']***REMOVED***
    key.assign_attributes(
      activation_code: data['activationCode'],
      license_type: data['licenseType'],
      expiration: data['expiration'],
      product_id: data['productID'],
      customer_id: data['customerID'],
      subscription_id: data['subscriptiontID']
    ***REMOVED***
    key.save if key.new_record? || key.changed?
  end

  def self.update_key_email(customer_data***REMOVED***
    key = Key.find_by(customer_id: customer_data['customerID']***REMOVED***
    key.update(email: customer_data['email']***REMOVED*** if key
  end
end
