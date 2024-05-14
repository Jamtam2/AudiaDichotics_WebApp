
# db/seeds.rb
# Seeds file with 3 tenants, 50 users, clients, and registration keys for each tenant
require 'faker'



#First just create a global mod and local mod for testing
# keybruh = Key.create!(activation_code: "localmodkey", used: false***REMOVED***
keybruh = Key.create!(
  activation_code: "bruh",
  used: false,
  license_type: 1,
  product_id: 1,
  customer_id: 1,
  subscription_id: 1,
  expiration: Time.zone.now + 1.year, # Set expiration to 1 year from the current time
***REMOVED***
puts "#{keybruh.inspect***REMOVED******REMOVED***..."
puts "Fetching keys and customer data..."
FetchKeys.call
puts "Data fetching complete."

keybruh = Key.create!(
  activation_code: "localmodkey",
  used: false,
  license_type: 1,
  product_id: 1,
  customer_id: 1,
  subscription_id: 1,
  expiration: Time.zone.now + 1.year, # Set expiration to 1 year from the current time
  email: "local@gmail.com"
***REMOVED***

keybruh = Key.create!(
  activation_code: "globalmodkey",
  used: false,
  license_type: 1,
  product_id: 1,
  customer_id: 1,
  subscription_id: 1,
  expiration: Time.zone.now + 1.year, # Set expiration to 1 year from the current time
  email: "global@gmail.com"
***REMOVED***

keybruh = Key.create!(
  activation_code: "expkey",
  used: false,
  license_type: 1,
  product_id: 1,
  customer_id: 1,
  subscription_id: 1,
  expiration: Time.zone.now + 1.year, # Set expiration to 1 year from the current time
  email: "exp@gmail.com"
***REMOVED***

tenants = []
3.times { |i| tenants << Tenant.find_or_create_by!(subdomain: "tenant#{i + 1***REMOVED***"***REMOVED*** ***REMOVED***
ActsAsTenant.with_tenant(tenants.first***REMOVED*** do

  user = User.create!(
    email: "global@gmail.com",
    password: "password",
    fname: "Locality",
    lname:"Mod",
    role: :global_moderator,
    verification_key: 'globalmodkey',
  ***REMOVED*** 

  user.user_mfa_sessions.create!(
    secret_key: ROTP::Base32.random_base32, # Generate a random secret key
    activated: false, # You can activate it later when the user sets up MFA
  ***REMOVED***


  user = User.create!(
    email: "local@gmail.com",
    password: "password",
    fname: "Locality",
    lname:"Mod",
    role: :local_moderator,
    verification_key: 'localmodkey',
  ***REMOVED*** 
  user.user_mfa_sessions.create!(
    secret_key: ROTP::Base32.random_base32, # Generate a random secret key
    activated: false, # You can activate it later when the user sets up MFA
  ***REMOVED***

  user = User.create!(
    email: "exp@gmail.com",
    password: "password",
    fname: "Locality",
    lname:"Mod",
    role: :local_moderator,
    verification_key: 'expkey',
  ***REMOVED*** 
  user.user_mfa_sessions.create!(
    secret_key: ROTP::Base32.random_base32, # Generate a random secret key
    activated: false, # You can activate it later when the user sets up MFA
  ***REMOVED***

end 
keybruh.update(expiration: Time.zone.now - 1.day***REMOVED*** # Set expiration to 1 day ago
keybruh.save


#Create multiple users and seeds

keys = []
15.times { |i| keys << Key.create!(activation_code: "key#{i + 1***REMOVED***", used: false, expiration: Time.zone.now + 1.year***REMOVED*** ***REMOVED***
# puts "keys: #{keys.inspect***REMOVED***"

tenants = [] 
3.times { |i| tenants << Tenant.find_or_create_by!(subdomain: "tenant#{i + 1***REMOVED***"***REMOVED*** ***REMOVED***
puts "tenants: #{tenants.inspect***REMOVED***"

tenants.each do |tenant|
  ActsAsTenant.with_tenant(tenant***REMOVED*** do
    # Create 50 Users and assign registration keys
    5.times do |i|
      user = User.create!(
        email: Faker::Internet.unique.email,
        password: "password",
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        role: :local_moderator,
        verification_key: keys.pop.activation_code,
      ***REMOVED***
      
      # Create 50 Clients and related Emergency Contacts and Tests for each user
      10.times do |j|
        client = Client.create!(
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.unique.email,
          gender: Faker::Gender.binary_type,
          date_of_birth: Faker::Date.birthday(min_age: 6, max_age: 15***REMOVED***,
          address1: Faker::Address.street_address,
          country: Faker::Address.country_code,
          state: Faker::Address.state_abbr,
          city: Faker::Address.city,
          zip: Faker::Address.zip_code,
          phone1: Faker::PhoneNumber.cell_phone_in_e164,
          race: Faker::Demographic.race
        ***REMOVED***

        EmergencyContact.create!(
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          phone_number: Faker::PhoneNumber.cell_phone_in_e164,
          address: Faker::Address.street_address,
          email: Faker::Internet.unique.email,
          city: Faker::Address.city,
          state: Faker::Address.state_abbr,
          client: client
        ***REMOVED***

        DnwTest.create(
          client: client,
          user: client.tenant.users.sample,
          test_type: "DNW",
          ear_advantage: "Left",
          ear_advantage_score: rand(0.0..100.0***REMOVED***,
          left_score: 8.5,
          right_score: 7.5,
          label: "Test#{j + 1***REMOVED***"
        ***REMOVED***
        RddtTest.create(
          client: client,
          user: client.tenant.users.sample,
          test_type: "RDDT",
          ear_advantage: "Left",
          ear_advantage_score: rand(0.0..100.0***REMOVED***,
          left_score1: rand(0.0..100.0***REMOVED***,
          left_score2: rand(0.0..100.0***REMOVED***,
          left_score3: rand(0.0..100.0***REMOVED***,
          right_score1: rand(0.0..100.0***REMOVED***,
          right_score2: rand(0.0..100.0***REMOVED***,
          right_score3: rand(0.0..100.0***REMOVED***,
          label: "Label#{j + 1***REMOVED***",
          notes: "Notes for RddtTest #{j + 1***REMOVED***"
        ***REMOVED***
    
        DwtTest.create(
          client: client,
          user: client.tenant.users.sample,
          test_type: "DWT",
          ear_advantage: "Left",
          ear_advantage_score: rand(0.0..100.0***REMOVED***,
          left_score: rand(0.0..100.0***REMOVED***,
          right_score: rand(0.0..100.0***REMOVED***,
          label: "Label#{j + 1***REMOVED***",
          notes: "Notes for DwtTest #{j + 1***REMOVED***"
        ***REMOVED***
    
    
      end
    end
  end
end
