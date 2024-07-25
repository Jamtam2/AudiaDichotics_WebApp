Rails.application.routes.draw do

  get 'inquiries/new'
  get 'inquiries/create'
  get 'users/index'

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
  
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'users/sessions', passwords: 'users/passwords' }

  get 'pages/home'
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
    get 'users/password/verify_2fa_code', to: 'users/passwords#new_verify_2fa_code', as: :new_verify_2fa_code
    post 'users/password/verify_2fa_code', to: 'users/passwords#verify_2fa_code', as: :verify_2fa_code

  end

  root to: redirect('/home')
  get 'home', to: 'pages#home', as: 'home'
  get 'about', to: 'pages#about', as: 'about'
  
  get "/clients/new", to: "clients#new"
  get 'clients', to: 'clients#index'
  get 'clients/:id/edit', to: 'clients#edit', as: 'edit_client'
  get 'global_moderator_index', to: 'clients#global_moderator_index'
  get 'expired_license', to: 'clients#expired_license'
  post 'update_registration_key', to: 'clients#update_registration_key'
  post 'user_mfa_sessions/reset_qr_code', to: 'user_mfa_sessions#reset_qr_code', as: :reset_qr_code_user_mfa_sessions


  
  get 'users', to:'users#index'
  get 'combined', to: 'clients#combined'

  get 'clinicians', to:'clinicians#index'

  get "/clinicians/new", to: "clinicians#new", as: 'new_clinician'
  get 'clinicians/:id/edit', to: 'clinicians#edit', as: 'edit_clinician'

  post 'stripe_checkout', to: 'stripe_checkout#create'
  get 'stripe_checkout', to: 'stripe_checkout#new'
  get '/stripe_checkout/success', to: 'stripe_checkout#success', as: 'success_stripe_payment'
  get '/stripe_checkout/failure', to: 'stripe_checkout#failure', as: 'failure_stripe_payment'

  post '/webhooks/stripe', to: 'webhooks#stripe'


  resources :global_moderators_dashboard, only: [:index] do
    post :create_discount, on: :collection
    post :create_key, on: :collection
  end
  delete 'global_moderators_dashboard/destroy_discount/:id', to: 'global_moderators_dashboard#destroy_discount', as: 'destroy_discount_global_moderators_dashboard'

  # Route for new user MFA session
  get 'user_mfa_sessions/new', to: 'user_mfa_sessions#new', as: :new_user_mfa_session
  # You might also need to define the create route if not already done
  post 'user_mfa_sessions', to: 'user_mfa_sessions#create', as: :user_mfa_session

  resources :users, only: [:index, :new, :create]
  resources :inquiries, only: [:new, :create]

  resources :billing_dashboard, only: [:index]
  # post '/change_payment_method', to: 'billing_dashboard#change_payment_method'
  post 'customer_portal', to: 'billing_dashboard#customer_portal'

  # config/routes.rb
  resources :user_mfa_sessions do
    get 'setup_google_auth', on: :collection
    get 'setup_email_auth', on: :collection
    get 'enter_email_code', on: :collection
    post 'verify_email_2fa', on: :collection

  end


  resources :clients do
    resources :emergency_contacts, only: [:create, :destroy, :new, :edit, :update]
    resources :dwt_tests do
      collection do
        get 'new_dwt_list1', to: 'dwt_tests#new_dwt_list1', as: 'dwt_list1'
        get 'new_dwt_list2', to: 'dwt_tests#new_dwt_list2', as: 'dwt_list2'
        get 'new_dwt_list3', to: 'dwt_tests#new_dwt_list3', as: 'dwt_list3'
        get 'new_dwt_list4', to: 'dwt_tests#new_dwt_list4', as: 'dwt_list4'
        get 'dwt_tests/:id', to: 'dwt_tests#show', as: 'show'
      end
        member do
          post 'apply_discount'
        end
  
      end
    resources :dnw_tests do
      collection do
        get 'new_dnw_list1', to: 'dnw_tests#new_dnw_list1', as: 'dnw_list1'
        get 'new_dnw_list2', to: 'dnw_tests#new_dnw_list2', as: 'dnw_list2'
        get 'new_dnw_list3', to: 'dnw_tests#new_dnw_list3', as: 'dnw_list3'
        get 'new_dnw_list4', to: 'dnw_tests#new_dnw_list4', as: 'dnw_list4'
        get 'dnw_tests/:id', to: 'dnw_tests#show', as: 'show'
      end
      member do
        post 'apply_discount'
      end

    end
    resources :rddt_tests do
      collection do
        get 'new_rddt_list1', to: 'rddt_tests#new_rddt_list1', as: 'rddt_list1'
        get 'new_rddt_list2', to: 'rddt_tests#new_rddt_list2', as: 'rddt_list2'
        get 'rddt_tests/:id', to: 'rddt_tests#show', as: 'show'
      end
      member do
        post 'apply_discount'
      end
    end 
    resources :week_ones do
      post 'submit_with_counter', on: :member
      collection do
        get 'dwt_week_one_test5', to: 'week_ones#dwt_week_one_test5', as: 'week_one_test_five'
        get 'dnw_week_one_test6', to: 'week_ones#dnw_week_one_test6', as: 'week_one_test_six'
        get 'rddt_week_one_test1', to: 'week_ones#rddt_week_one_test1', as: 'week_one_test_one'
        get 'rddt_week_one_test2', to: 'week_ones#rddt_week_one_test2', as: 'week_one_test_two'
        get 'dwt_week_one_test3', to: 'week_ones#dwt_week_one_test3', as: 'week_one_test_three'
        get 'dwt_week_one_test4', to: 'week_ones#dwt_week_one_test4', as: 'week_one_test_four'
        get 'dnw_week_one_test7', to: 'week_ones#dnw_week_one_test7', as: 'week_one_test_seven' 
        get 'dwt_week_one_test8', to: 'week_ones#dwt_week_one_test8', as: 'week_one_test_eight'
        get 'rddt_week_one_test9', to: 'week_ones#rddt_week_one_test9', as: 'week_one_test_nine'
        get 'week_ones/:id', to: 'week_ones#show', as: 'show'
      end
    end
    
    resources :week_fours do
      post 'submit_with_counter', on: :member
      collection do
        get 'dwt_week_four_test1', to: 'week_fours#dwt_week_four_test1', as: 'week_four_test_one'
        get 'dwt_week_four_test2', to: 'week_fours#dwt_week_four_test2', as: 'week_four_test_two'
        get 'rddt_week_four_test3', to: 'week_fours#rddt_week_four_test3', as: 'week_four_test_three'
        get 'tales_week_four_test4', to: 'week_fours#tales_week_four_test4', as: 'week_four_test_four'
        get 'tales_week_four_test5', to: 'week_fours#tales_week_four_test5', as: 'week_four_test_five'
        get 'dnw_week_four_test6', to: 'week_fours#dnw_week_four_test6', as: 'week_four_test_six'
        get 'dwt_week_four_test7', to: 'week_fours#dwt_week_four_test7', as: 'week_four_test_seven'
        get 'dwt_week_four_test8', to: 'week_fours#dwt_week_four_test8', as: 'week_four_test_eight'
        get 'rddt_week_four_test9', to: 'week_fours#rddt_week_four_test9', as: 'week_four_test_nine'
        get 'week_fours/:id', to: 'week_fours#show', as: 'show'
      end
    end

    resources :week_threes do
      post 'submit_with_counter', on: :member
      collection do
        get 'rddt_week_three_test1', to: 'week_threes#rddt_week_three_test1', as: 'week_three_test_one'
        get 'tales_week_three_test2', to: 'week_threes#tales_week_three_test2', as: 'week_three_test_two'
        get 'tales_week_three_test3', to: 'week_threes#tales_week_three_test3', as: 'week_three_test_three'
        get 'dwt_week_three_test4', to: 'week_threes#dwt_week_three_test4', as: 'week_three_test_four'
        get 'dwt_week_three_test5', to: 'week_threes#dwt_week_three_test5', as: 'week_three_test_five'
        get 'dnw_week_three_test6', to: 'week_threes#dnw_week_three_test6', as: 'week_three_test_six'
        get 'dnw_week_three_test7', to: 'week_threes#dnw_week_three_test7', as: 'week_three_test_seven'
        get 'rddt_week_three_test8', to: 'week_threes#rddt_week_three_test8', as: 'week_three_test_eight'
        get 'dwt_week_three_test9', to: 'week_threes#dwt_week_three_test9', as: 'week_three_test_nine'
        get 'dwt_week_three_test10', to: 'week_threes#dwt_week_three_test10', as: 'week_three_test_ten'
        get 'week_threes/:id', to: 'week_threes#show', as: 'show'
      end
    end

    resources :week_twos do
      post 'submit_with_counter', on: :member
      collection do
        get 'rddt_week_two_test1', to: 'week_twos#rddt_week_two_test1', as: 'week_two_test_one'
        get 'dwt_week_two_test2', to: 'week_twos#dwt_week_two_test2', as: 'week_two_test_two'
        get 'dwt_week_two_test3', to: 'week_twos#dwt_week_two_test3', as: 'week_two_test_three'
        get 'dwt_week_two_test4', to: 'week_twos#dwt_week_two_test4', as: 'week_two_test_four'
        get 'rddt_week_two_test5', to: 'week_twos#rddt_week_two_test5', as: 'week_two_test_five'
        get 'dnw_week_two_test6', to: 'week_twos#dnw_week_two_test6', as: 'week_two_test_six'
        get 'dwt_week_two_test7', to: 'week_twos#dwt_week_two_test7', as: 'week_two_test_seven'
        get 'dwt_week_two_test8', to: 'week_twos#dwt_week_two_test8', as: 'week_two_test_eight'
        get 'week_twos/:id', to: 'week_twos#show', as: 'show'
      end
    end
  end
    get 'clients/:client_id/trainings', to: 'trainings#index', as: 'client_trainings'
    get 'clients/:client_id/trainings/:id', to: 'trainings#show', as: 'client_training'

  #ALLEARS Addition: Trying to fix audio path issues for Week_Ones
  get '/audio_files/:file_name', to: 'audio_files#show', as: :audio_file
    
  # Adding a route for the speech api
  get 'speech_api', to: 'speech_api#index'

end