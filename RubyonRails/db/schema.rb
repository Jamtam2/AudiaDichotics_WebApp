# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2025_03_12_210747) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "clients", force: :cascade do |t|
    t.string "encrypted_first_name"
    t.string "encrypted_last_name"
    t.string "encrypted_email"
    t.date "encrypted_date_of_birth"
    t.string "mgmt_ref"
    t.string "encrypted_gender"
    t.string "encrypted_address1"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "encrypted_zip"
    t.string "encrypted_phone1"
    t.string "encrypted_phone2"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tenant_id"
    t.string "encrypted_race"
    t.string "encrypted_email_iv"
    t.string "encrypted_address1_iv"
    t.string "encrypted_date_of_birth_iv"
    t.string "encrypted_first_name_iv"
    t.string "encrypted_last_name_iv"
    t.string "encrypted_phone1_iv"
    t.string "encrypted_phone2_iv"
    t.string "encrypted_gender_iv"
    t.string "encrypted_race_iv"
    t.string "encrypted_zip_iv"
    t.string "encrypted_dob_string"
    t.string "encrypted_dob_string_iv"
    t.integer "right_ear_decibel"
    t.integer "left_ear_decibel"
    t.index ["tenant_id"], name: "index_clients_on_tenant_id"
  end

  create_table "discounts", force: :cascade do |t|
    t.string "code"
    t.integer "percentage_off"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "redemption_quantity"
    t.date "expiration_date"
  end

  create_table "dnw_tests", force: :cascade do |t|
    t.string "label"
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score"
    t.float "right_score"
    t.float "ear_advantage_score"
    t.string "interpretation"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tenant_id"
    t.bigint "user_id", null: false
    t.string "encrypted_client_name"
    t.string "encrypted_client_name_iv"
    t.decimal "price", precision: 10, scale: 2
    t.string "advantage_percentile"
    t.string "left_percentile"
    t.string "right_percentile"
    t.jsonb "selected_words"
    t.integer "category_id"
    t.index ["client_id"], name: "index_dnw_tests_on_client_id"
    t.index ["tenant_id"], name: "index_dnw_tests_on_tenant_id"
    t.index ["user_id"], name: "index_dnw_tests_on_user_id"
  end

  create_table "dwt_tests", force: :cascade do |t|
    t.string "label"
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score"
    t.float "right_score"
    t.float "ear_advantage_score"
    t.string "left_percentile"
    t.string "right_percentile"
    t.string "advantage_percentile"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tenant_id"
    t.bigint "user_id", null: false
    t.string "interpretation"
    t.string "encrypted_client_name"
    t.string "encrypted_client_name_iv"
    t.decimal "price", precision: 10, scale: 2
    t.jsonb "selected_words"
    t.integer "category_id"
    t.index ["client_id"], name: "index_dwt_tests_on_client_id"
    t.index ["tenant_id"], name: "index_dwt_tests_on_tenant_id"
    t.index ["user_id"], name: "index_dwt_tests_on_user_id"
  end

  create_table "emergency_contacts", force: :cascade do |t|
    t.string "encrypted_first_name"
    t.string "encrypted_last_name"
    t.string "encrypted_phone_number"
    t.string "encrypted_address"
    t.string "encrypted_email"
    t.string "encrypted_city"
    t.string "encrypted_state"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tenant_id"
    t.string "encrypted_address_iv"
    t.string "encrypted_city_iv"
    t.string "encrypted_email_iv"
    t.string "encrypted_first_name_iv"
    t.string "encrypted_last_name_iv"
    t.string "encrypted_phone_number_iv"
    t.string "encrypted_state_iv"
    t.index ["client_id"], name: "index_emergency_contacts_on_client_id"
    t.index ["tenant_id"], name: "index_emergency_contacts_on_tenant_id"
  end

  create_table "hashed_data", primary_key: "record_id", force: :cascade do |t|
    t.string "source_model"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "hashable_type", null: false
    t.bigint "hashable_id", null: false
    t.string "hashed_first_name"
    t.string "hashed_last_name"
    t.string "hashed_email"
    t.string "hashed_gender"
    t.string "hashed_age"
    t.string "hashed_date_of_birth"
    t.string "hashed_address"
    t.string "hashed_country"
    t.string "hashed_state"
    t.string "hashed_city"
    t.string "hashed_tenant_id"
    t.string "hashed_zip"
    t.string "hashed_race"
    t.string "hashed_phone1"
    t.string "hashed_phone2"
    t.index ["hashable_type", "hashable_id"], name: "index_hashed_data_on_hashable"
  end

  create_table "inquiries", force: :cascade do |t|
    t.string "email"
    t.string "company"
    t.text "purpose"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "inquiry_type"
    t.string "bug_report"
  end

  create_table "keys", force: :cascade do |t|
    t.boolean "used"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "license_id"
    t.string "activation_code"
    t.integer "license_type"
    t.datetime "expiration"
    t.integer "product_id"
    t.string "customer_id"
    t.integer "subscription_id"
    t.string "email"
    t.integer "created_by_id"
  end

  create_table "payments", force: :cascade do |t|
    t.decimal "amount", precision: 10, scale: 2
    t.string "stripe_transaction_id"
    t.bigint "user_id", null: false
    t.bigint "tenant_id", null: false
    t.string "currency"
    t.string "status"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_payments_on_user_id"
  end

  create_table "rddt_tests", force: :cascade do |t|
    t.string "label"
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score1"
    t.float "left_score2"
    t.float "left_score3"
    t.float "right_score1"
    t.float "right_score2"
    t.float "right_score3"
    t.float "ear_advantage_score"
    t.float "ear_advantage_score1"
    t.float "ear_advantage_score3"
    t.string "interpretation"
    t.string "left_percentile"
    t.string "right_percentile"
    t.string "advantage_percentile"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tenant_id"
    t.bigint "user_id", null: false
    t.string "encrypted_client_name"
    t.string "encrypted_client_name_iv"
    t.decimal "price", precision: 10, scale: 2
    t.jsonb "selected_words"
    t.integer "category_id"
    t.index ["client_id"], name: "index_rddt_tests_on_client_id"
    t.index ["tenant_id"], name: "index_rddt_tests_on_tenant_id"
    t.index ["user_id"], name: "index_rddt_tests_on_user_id"
  end

  create_table "tenants", force: :cascade do |t|
    t.string "subdomain"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "test_limit"
    t.datetime "membership_expiration"
  end

  create_table "tests", force: :cascade do |t|
    t.string "label"
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score"
    t.float "right_score"
    t.float "ear_advantage_score"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.string "image_path"
    t.bigint "tenant_id"
    t.index ["client_id"], name: "index_tests_on_client_id"
    t.index ["tenant_id"], name: "index_tests_on_tenant_id"
    t.index ["user_id"], name: "index_tests_on_user_id"
  end

  create_table "trainings", force: :cascade do |t|
    t.integer "week"
    t.string "client_name"
    t.string "ear_advantage"
    t.string "ear_advanatage_score"
    t.string "left_score"
    t.string "right_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "client_id"
    t.index ["client_id"], name: "index_trainings_on_client_id"
  end

  create_table "user_mfa_sessions", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "secret_key"
    t.boolean "activated"
    t.bigint "user_id"
    t.boolean "email_verified"
    t.index ["user_id"], name: "index_user_mfa_sessions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "role"
    t.bigint "tenant_id"
    t.string "verification_key"
    t.integer "right_ear_decibel"
    t.integer "left_ear_decibel"
    t.string "google_secret"
    t.integer "mfa_secret"
    t.string "moderator_code"
    t.string "email_2fa_code"
    t.string "stripe_customer_id"
    t.boolean "outstanding_balance"
    t.datetime "email_2fa_code_sent_at"
    t.string "bootcamp_code"
    t.boolean "reset"
    t.boolean "terms_accepted", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["moderator_code"], name: "index_users_on_moderator_code"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["tenant_id"], name: "index_users_on_tenant_id"
  end

  create_table "week_fours", force: :cascade do |t|
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score"
    t.float "right_score"
    t.float "ear_advantage_score"
    t.integer "left_ear_decibel"
    t.integer "right_ear_decibel"
    t.integer "counter"
    t.bigint "client_id", null: false
    t.bigint "user_id", null: false
    t.bigint "tenant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_week_fours_on_client_id"
    t.index ["tenant_id"], name: "index_week_fours_on_tenant_id"
    t.index ["user_id"], name: "index_week_fours_on_user_id"
  end

  create_table "week_ones", force: :cascade do |t|
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score"
    t.float "right_score"
    t.float "ear_advantage_score"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.bigint "tenant_id"
    t.integer "counter"
    t.integer "right_ear_decibel"
    t.integer "left_ear_decibel"
    t.index ["client_id"], name: "index_week_ones_on_client_id"
    t.index ["tenant_id"], name: "index_week_ones_on_tenant_id"
    t.index ["user_id"], name: "index_week_ones_on_user_id"
  end

  create_table "week_threes", force: :cascade do |t|
    t.string "test_type"
    t.string "client_name"
    t.text "notes"
    t.string "ear_advantage"
    t.float "left_score"
    t.float "right_score"
    t.float "ear_advantage_score"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tenant_id"
    t.bigint "user_id", null: false
    t.integer "counter"
    t.integer "left_ear_decibel"
    t.integer "right_ear_decibel"
    t.index ["client_id"], name: "index_week_threes_on_client_id"
    t.index ["tenant_id"], name: "index_week_threes_on_tenant_id"
    t.index ["user_id"], name: "index_week_threes_on_user_id"
  end

  create_table "week_twos", force: :cascade do |t|
    t.string "client_name"
    t.string "ear_advantage"
    t.float "ear_advantage_score"
    t.float "left_ear_decibel"
    t.float "left_score"
    t.text "notes"
    t.float "right_ear_decibel"
    t.float "right_score"
    t.string "test_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "counter"
    t.bigint "tenant_id"
    t.bigint "user_id", null: false
    t.bigint "client_id", null: false
    t.index ["client_id"], name: "index_week_twos_on_client_id"
    t.index ["tenant_id"], name: "index_week_twos_on_tenant_id"
    t.index ["user_id"], name: "index_week_twos_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "clients", "tenants"
  add_foreign_key "dnw_tests", "clients"
  add_foreign_key "dnw_tests", "tenants"
  add_foreign_key "dnw_tests", "users"
  add_foreign_key "dwt_tests", "clients"
  add_foreign_key "dwt_tests", "tenants"
  add_foreign_key "dwt_tests", "users"
  add_foreign_key "emergency_contacts", "clients"
  add_foreign_key "emergency_contacts", "tenants"
  add_foreign_key "payments", "tenants"
  add_foreign_key "payments", "users"
  add_foreign_key "rddt_tests", "clients"
  add_foreign_key "rddt_tests", "tenants"
  add_foreign_key "rddt_tests", "users"
  add_foreign_key "tests", "clients"
  add_foreign_key "tests", "tenants"
  add_foreign_key "tests", "users"
  add_foreign_key "trainings", "clients"
  add_foreign_key "user_mfa_sessions", "users"
  add_foreign_key "users", "tenants"
  add_foreign_key "week_fours", "clients"
  add_foreign_key "week_fours", "tenants"
  add_foreign_key "week_fours", "users"
  add_foreign_key "week_ones", "clients"
  add_foreign_key "week_ones", "tenants"
  add_foreign_key "week_ones", "users"
  add_foreign_key "week_threes", "clients"
  add_foreign_key "week_threes", "tenants"
  add_foreign_key "week_threes", "users"
  add_foreign_key "week_twos", "clients"
  add_foreign_key "week_twos", "tenants"
  add_foreign_key "week_twos", "users"
end
