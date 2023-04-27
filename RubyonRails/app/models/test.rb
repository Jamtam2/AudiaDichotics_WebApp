# == Schema Information
#
# Table name: tests
#
#  id                  :bigint           not null, primary key
#  client_name         :string
#  ear_advantage       :string
#  ear_advantage_score :float
#  label               :string
#  left_score          :float
#  notes               :text
#  right_score         :float
#  test_type           :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  client_id           :bigint           not null
#
# Indexes
#
#  index_tests_on_client_id  (client_id***REMOVED***
#
# Foreign Keys
#
#  fk_rails_...  (client_id => clients.id***REMOVED***
#
class Test < ApplicationRecord
  belongs_to :client
end
