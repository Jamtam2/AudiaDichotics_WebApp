class StripeCheckoutController < ApplicationController
    before_action :set_stripe_api_key, only: [:create]
    def create
      price_id = params[:price_id]
      puts "price id: #{price_id}"
      discount_code = params[:discount_code]
      mode_type = params[:mode_type]
      test_quantity = params[:test_quantity].to_i || 1 #defaults to 1 for license key buying, else takes num tests
      is_test_purchase = params[:test_purchase] == 'true'
      puts "mode_type: #{mode_type}"
      puts "price id: #{price_id}"
      puts "test_quantity: #{test_quantity}"
      puts "is_test_purchase: #{is_test_purchase}"

      # Prepare the discounts array if a discount code is provided
      discounts = discount_code.present? ? [{coupon: discount_code}] : []

      idempotency_key = "setup_#{SecureRandom.hex(15)}_#{Time.now.to_i}"
      license_type = params[:license_type] # Assuming you are passing this from the form

      @session = Stripe::Checkout::Session.create({
        payment_method_types: ['card'],
        line_items: [{
          price: price_id, # Replace with the actual price ID from Stripe
          quantity: test_quantity,
        }],
        mode: mode_type,
        # mode: 'subscription',
        success_url: success_stripe_payment_url(host: request.base_url) + '?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: failure_stripe_payment_url(host: request.base_url),
        metadata: {
          license_type: license_type, # Store the license_type in Stripe metadata
          test_purchase: is_test_purchase, # Mark this as a test purchase in metadata
          test_quantity: test_quantity

        },

        # Include the discounts array in the session creation
        allow_promotion_codes: true,
      }, {
        idempotency_key: idempotency_key
      })

      respond_to do |format|
        # render "stripe_checkout/create.js.erb"
        format.js # Render create.js.erb to redirect to Stripe Checkout

      end
    end


    def set_stripe_api_key
        Stripe.api_key = ENV['API_KEY_TEST']
    end
    def success
      session_id = params[:session_id]
      session = Stripe::Checkout::Session.retrieve(session_id)

      if session.metadata.test_purchase == 'true'
        if user_signed_in?
        tenant = current_user.tenant
        curr_tests = tenant.test_limit
        test_quantity = session.metadata.test_quantity.to_i
        puts "Adding: #{test_quantity} tests"
        tenant.update(test_limit: curr_tests + test_quantity)
        # tenant.increment(:test_limit, test_quantity)
        puts "New test limit: #{tenant.test_limit}"
        puts "tenant should be incremented...: #{tenant}"
        flash[:notice] = "Successfully purchased #{test_quantity} tests!"
        redirect_to('/billing_dashboard')
        else
          redirect_to new_user_session_path, alert: "Please sign in to apply your test credits."
        end
      else
        email = session.customer_details.email
        user = User.find_by(email: email)
        tenant = user&.tenant


        license_type = session.metadata.license_type
        puts "#{license_type}"


        # Assuming you have a method `generate_license_key` implemented
        # license_key = generate_license_key
        license_key = SecureRandom.hex(15)

        # Assuming `Key` is your model for storing license keys info
        key = Key.create!(
          activation_code: license_key,
          email: session.customer_details.email,
          customer_id: session.customer,
          expiration: 1.year.from_now,
          used: false,
          license_type: license_type # Add license_type for the plan
        )
        puts "#{license_key}"

        #Linking tenant to Stripe customer
        tenant.update!(stripe_customer_id: key.customer_id) if tenant


        # Send the license key to the user's email
        UserMailer.license_key_purchase(session.customer_details.email, license_key).deliver_now


        flash[:notice] = 'Please check your email for your verification key.'
        redirect_to root_path
        
      end
      # Redirect or render success message
    end
      def failure
          if current_user
            redirect_to('/billing_dashboard')
          else
            redirect_to('/users/sign_in')
          end
          
      end

end
