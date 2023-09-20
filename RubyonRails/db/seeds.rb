
# db/seeds.rb
# Seeds file with 3 tenants, 50 users, clients, and registration keys for each tenant
require 'faker'


# #First just create a global mod and local mod for testing
# keybruh = Key.create!(code: "localmodkey", used: false***REMOVED***
# keybruh = Key.create!(code: "globalmodkey", used: false***REMOVED***

# tenants = []
# 3.times { |i| tenants << Tenant.find_or_create_by!(subdomain: "tenant#{i + 1***REMOVED***"***REMOVED*** ***REMOVED***
# ActsAsTenant.with_tenant(tenants.first***REMOVED*** do

# keybruh = Key.create!(code: "regularuserkey3", used: false***REMOVED***

#   user = User.create!(
#     email: "regular@gmail.com",
#     password: "password",
#     fname: "regular",
#   lname:"user",
#     role: :regular_user,
#     registration_key: 'regularuserkey3',
#   ***REMOVED*** 
# end

#   user = User.create!(
#     email: "global@gmail.com",
#     password: "password",
#     fname: "Locality",
#   lname:"Mod",
#     role: :global_moderator,
#     registration_key: 'globalmodkey',
#   ***REMOVED*** 

#   user = User.create!(
#     email: "local@gmail.com",
#     password: "password",
#     fname: "Locality",
#   lname:"Mod",
#     role: :local_moderator,
#     registration_key: 'localmodkey',
#   ***REMOVED*** 
# end 


# #Create multiple users and seeds

# keys = []
# 15.times { |i| keys << Key.create!(code: "key#{i + 1***REMOVED***", used: false***REMOVED*** ***REMOVED***
# # puts "keys: #{keys.inspect***REMOVED***"

# tenants = [] 
# 3.times { |i| tenants << Tenant.find_or_create_by!(subdomain: "tenant#{i + 1***REMOVED***"***REMOVED*** ***REMOVED***
# puts "tenants: #{tenants.inspect***REMOVED***"

# tenants.each do |tenant|
#   ActsAsTenant.with_tenant(tenant***REMOVED*** do
#     # Create 50 Users and assign registration keys
#     5.times do |i|
#       user = User.create!(
#         email: Faker::Internet.unique.email,
#         password: "password",
#         fname: Faker::Name.first_name,
#         lname: Faker::Name.last_name,
#         role: :local_moderator,
#         registration_key: keys.pop.code,
#       ***REMOVED***
      
#       # Create 50 Clients and related Emergency Contacts and Tests for each user
#       10.times do |j|
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

#         DnwTest.create(
#           client: client,
#           user: client.tenant.users.sample,
#           test_type: "Type#{j + 1***REMOVED***",
#           ear_advantage: "Left",
#           ear_advantage_score: rand(0.0..100.0***REMOVED***,
#           left_score: 8.5,
#           right_score: 7.5,
#           label: "Test#{j + 1***REMOVED***"
#         ***REMOVED***
#         RddtTest.create(
#           client: client,
#           user: client.tenant.users.sample,
#           test_type: "Type#{j + 1***REMOVED***",
#           ear_advantage: "Left",
#           ear_advantage_score: rand(0.0..100.0***REMOVED***,
#           left_score1: rand(0.0..100.0***REMOVED***,
#           left_score2: rand(0.0..100.0***REMOVED***,
#           left_score3: rand(0.0..100.0***REMOVED***,
#           right_score1: rand(0.0..100.0***REMOVED***,
#           right_score2: rand(0.0..100.0***REMOVED***,
#           right_score3: rand(0.0..100.0***REMOVED***,
#           label: "Label#{j + 1***REMOVED***",
#           notes: "Notes for RddtTest #{j + 1***REMOVED***"
#         ***REMOVED***
    
#         DwtTest.create(
#           client: client,
#           user: client.tenant.users.sample,
#           test_type: "Type#{j + 1***REMOVED***",
#           ear_advantage: "Left",
#           ear_advantage_score: rand(0.0..100.0***REMOVED***,
#           left_score: rand(0.0..100.0***REMOVED***,
#           right_score: rand(0.0..100.0***REMOVED***,
#           label: "Label#{j + 1***REMOVED***",
#           notes: "Notes for DwtTest #{j + 1***REMOVED***"
#         ***REMOVED***
    
    
#       end
#     end
#   end
# end

