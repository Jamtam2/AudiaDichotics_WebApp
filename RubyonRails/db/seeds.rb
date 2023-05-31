# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup***REMOVED***.
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' ***REMOVED***, { name: 'Lord of the Rings' ***REMOVED***]***REMOVED***
#   Character.create(name: 'Luke', movie: movies.first***REMOVED***

load(Rails.root.join('db', 'seeds', 'clients_seed.rb'***REMOVED******REMOVED***
# db/seeds.rb

# Generate Users
# Create 2 local moderators
2.times do
  User.create!(
    email: Faker::Internet.unique.email,
    password: 'password123',
    password_confirmation: 'password123',
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    role: :local_moderator
  ***REMOVED***
end

# Create 9 regular users
9.times do
  User.create!(
    email: Faker::Internet.unique.email,
    password: 'password123',
    password_confirmation: 'password123',
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    role: :regular_user
  ***REMOVED***
end

  
  users = User.all
    
  clients = Client.all
  
  # Generate Tests
  3.times do
    Test.create!(
      user: users.sample,
      client: clients.sample,
      client_name: "#{Faker::Name.first_name***REMOVED*** #{Faker::Name.last_name***REMOVED***",
      ear_advantage: %w[Left Right].sample,
      ear_advantage_score: rand(1.0..10.0***REMOVED***.round(2***REMOVED***,
      label: Faker::Lorem.word,
      left_score: rand(1.0..10.0***REMOVED***.round(2***REMOVED***,
      notes: Faker::Lorem.sentence,
      right_score: rand(1.0..10.0***REMOVED***.round(2***REMOVED***,
      test_type: %w[DWT RDT].sample
    ***REMOVED***
  end
  
User.create(email: "globalmod@gmail.com", password: "password", fname: "Global", lname:"Mod", role: :global_moderator***REMOVED***
User.create(email: "localmod@gmail.com", password: "password",fname: "Local", lname:"Mod", role: :local_moderator***REMOVED***
User.create(email: "user@gmail.com", password: "password",fname: "Regular", lname:"User", role: :regular_user***REMOVED***
