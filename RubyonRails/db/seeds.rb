# db/seeds.rb
# Seeds file with 3 tenants, 50 users, clients, and registration keys for each tenant

keybruh = Key.create!(code: "keyamill", used: false***REMOVED***

tenants = []
3.times { |i| tenants << Tenant.find_or_create_by!(subdomain: "tenant#{i + 1***REMOVED***"***REMOVED*** ***REMOVED***
ActsAsTenant.with_tenant(tenants.first***REMOVED*** do

  user = User.create!(
    email: "globalmod@gmail.com",
    password: "password",
    fname: "Global",
    lname:"Mod",
    role: :global_moderator,
    registration_key: 'keyamill',
  ***REMOVED***
end 
# require 'faker'

# keys = []
# 150.times { |i| keys << Key.create!(code: "key#{i + 1***REMOVED***", used: false***REMOVED*** ***REMOVED***
# puts "keys: #{keys.inspect***REMOVED***"

# tenants = []
# 3.times { |i| tenants << Tenant.find_or_create_by!(subdomain: "tenant#{i + 1***REMOVED***"***REMOVED*** ***REMOVED***
# puts "tenants: #{tenants.inspect***REMOVED***"

# tenants.each do |tenant|
#   ActsAsTenant.with_tenant(tenant***REMOVED*** do
#     # Create 50 Users and assign registration keys
#     50.times do |i|
#       user = User.create!(
#         email: Faker::Internet.unique.email,
#         password: "password",
#         fname: Faker::Name.first_name,
#         lname: Faker::Name.last_name,
#         role: :local_moderator,
#         registration_key: keys.pop.code,
#       ***REMOVED***
      
#       # Create 50 Clients and related Emergency Contacts and Tests for each user
#       50.times do |j|
#         client = Client.create!(
#           first_name: Faker::Name.first_name,
#           last_name: Faker::Name.last_name,
#           email: Faker::Internet.unique.email,
#           gender: Faker::Gender.binary_type,
#           date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65***REMOVED***,
#           address1: Faker::Address.street_address,
#           country: Faker::Address.country_code,
#           state: Faker::Address.state_abbr,
#           city: Faker::Address.city,
#           zip: Faker::Address.zip_code,
#           phone1: Faker::PhoneNumber.cell_phone_in_e164,
#           race: Faker::Demographic.race
#         ***REMOVED***

#         EmergencyContact.create!(
#           first_name: Faker::Name.first_name,
#           last_name: Faker::Name.last_name,
#           phone_number: Faker::PhoneNumber.cell_phone_in_e164,
#           address: Faker::Address.street_address,
#           email: Faker::Internet.unique.email,
#           city: Faker::Address.city,
#           state: Faker::Address.state_abbr,
#           client: client
#         ***REMOVED***

#         Test.create!(
#           client_name: "#{client.first_name***REMOVED*** #{client.last_name***REMOVED***",
#           test_type: "Type#{j + 1***REMOVED***",
#           client: client,
#           user: user
#         ***REMOVED***
#       end
#     end
#   end
# end




















# keys = []
# keys << Key.create!(code: 'key1', used: false***REMOVED***
# keys << Key.create!(code: 'key2', used: false***REMOVED***
# keys << Key.create!(code: 'key3', used: false***REMOVED***


# puts "keys: #{keys.inspect***REMOVED***"

# tenants = []
# tenants << Tenant.find_or_create_by!(subdomain: 'tenant1'***REMOVED***
# tenants << Tenant.find_or_create_by!(subdomain: 'tenant2'***REMOVED***

# puts "tenant: #{tenants.inspect***REMOVED***"



# ActsAsTenant.with_tenant(tenants.first***REMOVED*** do

#   user = User.create!(
#     email: "globalmod@gmail.com",
#     password: "password",
#     fname: "Global",
#     lname:"Mod",
#     role: :global_moderator,
#     registration_key: keys.third.code,
#   ***REMOVED***
#   user = User.create!(
#     email: "testa@gmail.com",
#     password: "password",
#     fname: "local",
#     lname:"Mod",
#     role: :local_moderator,
#     registration_key: keys.first.code,
#   ***REMOVED***

#   puts "user: #{user.inspect***REMOVED***"

    
#     client = Client.create!(
#     first_name: 'Client1',
#     last_name: 'Test',
#     gender: 'Male',
#     email: 'client1@test.com',
#     date_of_birth: 30.years.ago,
#     address1: '123 Street',
#     country: 'US',
#     state: 'NY',
#     city: 'New York',
#     zip: '10001',
#     phone1: '1234567890',
#     race: 'Asian'

#   ***REMOVED***
  
#   puts "client: #{client.inspect***REMOVED***"

  
#   EmergencyContact.create!(
#     first_name: 'Contact1',
#     last_name: 'Test',
#     phone_number: '1234567890',
#     address: '123 Street',
#     email: 'contact1@test.com',
#     city: 'New York',
#     state: 'NY',
#     client: client
#   ***REMOVED***
#   Test.create!(
#     client_name: 'Client1 Test',
#     test_type: 'Type1',
#     client: client,
#   ***REMOVED***


#   3.times do |i|
#     Test.create!(
#       client_name: "Client #{i + 1***REMOVED***",
#       ear_advantage: "Left",
#       ear_advantage_score: 0.8 + i * 0.1,
#       image_path: "path/to/image#{i + 1***REMOVED***.jpg",
#       label: "Sample Label #{i + 1***REMOVED***",
#       left_score: 0.6 + i * 0.1,
#       notes: "Sample notes for test #{i + 1***REMOVED***.",
#       right_score: 0.7 + i * 0.1,
#       test_type: "Type A",
#       client: client,
#       user: user
#     ***REMOVED***
#   end
  
# end


# ActsAsTenant.with_tenant(tenants.second***REMOVED*** do

#   user = User.create!(
#     email: "globalmod12312@gmail.com",
#     password: "password",
#     fname: "Globaler",
#     lname:"Modda",
#     role: :global_moderator,
#     registration_key: keys.second.code,
#   ***REMOVED***


    
#     client = Client.create!(
#     first_name: 'Client1',
#     last_name: 'Test',
#     email: 'client12@test.com',
#     gender: 'Male',
#     date_of_birth: 30.years.ago,
#     address1: '123 Street',
#     country: 'US',
#     state: 'NY',
#     city: 'New York',
#     zip: '10001',
#     phone1: '1234567890',
#     race: 'Asian'
#   ***REMOVED***
  
#   puts "client: #{client.inspect***REMOVED***"

  
#   EmergencyContact.create!(
#     first_name: 'Coasdasdasntact1',
#     last_name: 'Test',
#     phone_number: '1234567890',
#     address: '123 Street',
#     email: 'contact1@test.com',
#     city: 'New York',
#     state: 'NY',
#     client: client
#   ***REMOVED***
#   Test.create!(
#     client_name: 'Client1 Test',
#     test_type: 'Type1',
#     client: client,
#     user: user
#   ***REMOVED***
# end


# user = User.create!(
#   email: "globalmod1@gmail.com",
#   password: "password",
#   fname: "Global1",
#   lname:"Mod1",
#   role: :global_moderator,
#   registration_key: keys.second.code
# ***REMOVED***
# user.validate_registration_key
# puts "user: #{user.inspect***REMOVED***"
# puts "keys: #{keys.inspect***REMOVED***"
# ActsAsTenant.with_tenant(user.tenant***REMOVED*** do
  
#   client = Client.create!(
#     first_name: 'Client1',
#     last_name: 'Test',
#     email: 'client11@test.com',
#     date_of_birth: 30.years.ago,
#     address1: '123 Street',
#     country: 'US',
#     state: 'NY',
#     city: 'New York',
#     zip: '10001',
#     phone1: '1234567890'
#   ***REMOVED***
#   puts "client: #{client.inspect***REMOVED***"
  
#   EmergencyContact.create!(
#     first_name: 'Contact11',
#     last_name: 'Test',
#     phone_number: '1234567890',
#     address: '123 Street',
#     email: 'contact1@test.com',
#     city: 'New York',
#     state: 'NY',
#     client: client
#   ***REMOVED***
#   Test.create!(
#     client_name: 'Client1 Test',
#     test_type: 'Type1',
#     client: client,
#     user: user
#   ***REMOVED***
