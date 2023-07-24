# db/seeds.rb

keys = Key.create!([
  { code: 'key1', used: false ***REMOVED***,
  { code: 'key2', used: false ***REMOVED***,
]***REMOVED***


puts "keys: #{keys.inspect***REMOVED***"

# tenants = Tenant.create!([
#   { subdomain: 'tenant1' ***REMOVED***,
#   { subdomain: 'tenant2' ***REMOVED***
# ]***REMOVED***

# puts "tenant: #{tenants.inspect***REMOVED***"
user = User.create!(
  email: "globalmod@gmail.com",
  password: "password",
  fname: "Global",
  lname:"Mod",
  role: :global_moderator,
  registration_key: keys.first.code,
***REMOVED***
puts "user: #{user.inspect***REMOVED***"

ActsAsTenant.with_tenant(subdomain: "globalmod"***REMOVED*** do
  
  puts "keysERALREL: #{keys.inspect***REMOVED***"


    
    client = Client.create!(
    first_name: 'Client1',
    last_name: 'Test',
    email: 'client1@test.com',
    date_of_birth: 30.years.ago,
    address1: '123 Street',
    country: 'US',
    state: 'NY',
    city: 'New York',
    zip: '10001',
    phone1: '1234567890'
  ***REMOVED***
  
  puts "client: #{client.inspect***REMOVED***"

  
  EmergencyContact.create!(
    first_name: 'Contact1',
    last_name: 'Test',
    phone_number: '1234567890',
    address: '123 Street',
    email: 'contact1@test.com',
    city: 'New York',
    state: 'NY',
    client: client
  ***REMOVED***
  Test.create!(
    client_name: 'Client1 Test',
    test_type: 'Type1',
    client: client,
    user: user
  ***REMOVED***
end

user = User.create!(
  email: "globalmod1@gmail.com",
  password: "password",
  fname: "Global1",
  lname:"Mod1",
  role: :global_moderator,
  registration_key: keys.second.code
***REMOVED***
user.validate_registration_key
puts "user: #{user.inspect***REMOVED***"
puts "keys: #{keys.inspect***REMOVED***"
ActsAsTenant.with_tenant(user.tenant***REMOVED*** do
  
  client = Client.create!(
    first_name: 'Client1',
    last_name: 'Test',
    email: 'client11@test.com',
    date_of_birth: 30.years.ago,
    address1: '123 Street',
    country: 'US',
    state: 'NY',
    city: 'New York',
    zip: '10001',
    phone1: '1234567890'
  ***REMOVED***
  puts "client: #{client.inspect***REMOVED***"
  
  EmergencyContact.create!(
    first_name: 'Contact11',
    last_name: 'Test',
    phone_number: '1234567890',
    address: '123 Street',
    email: 'contact1@test.com',
    city: 'New York',
    state: 'NY',
    client: client
  ***REMOVED***
  Test.create!(
    client_name: 'Client1 Test',
    test_type: 'Type1',
    client: client,
    user: user
  ***REMOVED***
end
