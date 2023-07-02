# db/seeds.rb

keys = Key.create!([
  { code: 'key1', used: false ***REMOVED***,
  { code: 'key2', used: false ***REMOVED***,
]***REMOVED***

puts "keys: #{keys.inspect***REMOVED***"

tenants = Tenant.create!([
  { subdomain: 'tenant1' ***REMOVED***,
  { subdomain: 'tenant2' ***REMOVED***,
]***REMOVED***
puts "tenant: #{tenants.inspect***REMOVED***"



users = User.create!([
  { email: "globalmod@gmail.com", password: "password", fname: "Global", lname:"Mod", role: :global_moderator, tenant: tenants.first,registration_key: keys.first.code, subdomain: 'subdomain1'***REMOVED***,
    
  { email: "localmod@gmail.com", password: "password",fname: "Local", lname:"Mod", role: :local_moderator, tenant: tenants.second,registration_key: keys.second.code, subdomain: 'subdomain2'
  ***REMOVED***
]***REMOVED***

puts "Users: #{users.inspect***REMOVED***"

clients = Client.create!([
  { 
    first_name: 'Client1',
    last_name: 'Test',
    email: 'client1@test.com',
    date_of_birth: 30.years.ago,
    address1: '123 Street',
    country: 'US',
    state: 'NY',
    city: 'New York',
    zip: '10001',
    phone1: '1234567890',
    tenant: tenants.first 
  ***REMOVED***,
  { 
    first_name: 'Client2',
    last_name: 'Test',
    email: 'client2@test.com',
    date_of_birth: 35.years.ago,
    address1: '456 Street',
    country: 'US',
    state: 'CA',
    city: 'Los Angeles',
    zip: '90001',
    phone1: '9876543210',
    tenant: tenants.second
  ***REMOVED***,
]***REMOVED***

puts "Clients: #{clients.inspect***REMOVED***"

emergency_contacts = EmergencyContact.create!([
  { 
    first_name: 'Contact1',
    last_name: 'Test',
    phone_number: '1234567890',
    address: '123 Street',
    email: 'contact1@test.com',
    city: 'New York',
    state: 'NY',
    client: clients.first,
    tenant: tenants.first
  ***REMOVED***,
  { 
    first_name: 'Contact2',
    last_name: 'Test',
    phone_number: '9876543210',
    address: '456 Street',
    email: 'contact2@test.com',
    city: 'Los Angeles',
    state: 'CA',
    client: clients.second,
    tenant: tenants.second
  ***REMOVED***,
]***REMOVED***

puts "Emergency Contacts: #{emergency_contacts.inspect***REMOVED***"

tests = Test.create!([
  {
    client_name: 'Client1 Test',
    test_type: 'Type1',
    client: clients.first,
    tenant: tenants.first,
    user: users.first
  ***REMOVED***,
  {
    client_name: 'Client2 Test',
    test_type: 'Type2',
    client: clients.second,
    tenant: tenants.second,
    user: users.second
  ***REMOVED***,
]***REMOVED***

puts "Tests: #{tests.inspect***REMOVED***"
