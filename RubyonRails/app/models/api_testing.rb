require 'httparty'

class DichoticsFetcher
  include HTTParty

  BASE_URL = "https://www.dichoticsinc.com/Customers"

  # Add an initializer to accept and store email and password
  def initialize(email, password***REMOVED***
    @auth = { username: email, password: password ***REMOVED***
  end

  def fetch_licensing_code
    options = { basic_auth: @auth ***REMOVED*** # Pass the authentication details

    response = HTTParty.get(BASE_URL, options***REMOVED*** # Use the options in the GET request
    puts response.code

    # Check for successful response
    if response.success?
        puts response.body, response.code, response.message, response.headers.inspect
    else
      handle_error(response***REMOVED***
    end
  end

  private
  def handle_error(response***REMOVED***
    # Handle different HTTP status codes or log the error
    case response.code
    when 404
      puts "Not Found"
    when 500...600
      puts "Server Error"
    else
      puts "Unhandled error: #{response.code***REMOVED***"
    end
  end
end

# Initialize with credentials and use the data
fetcher = DichoticsFetcher.new('', ''***REMOVED***
data = fetcher.fetch_licensing_code

puts data

# require 'httparty'
# response = HTTParty.get('https://www.dichoticsinc.com/api', basic_auth: { username: '
#     ', password: '' ***REMOVED******REMOVED***

# puts response.body, response.code, response.message, response.headers.inspect