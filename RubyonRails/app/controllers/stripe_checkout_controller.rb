class StripeCheckoutController < ApplicationController
    before_action :set_stripe_api_key, only: [:create]
    def create
      price_id = params[:price_id]
      puts "price id: #{price_id}"
      discount_code = params[:discount_code]
      mode_type = params[:mode_type]
      # Prepare the discounts array if a discount code is provided
      discounts = discount_code.present? ? [{coupon: discount_code}] : []

      idempotency_key = "setup_#{SecureRandom.hex(15)}_#{Time.now.to_i}"
      license_type = params[:license_type] # Assuming you are passing this from the form

      @session = Stripe::Checkout::Session.create({
        payment_method_types: ['card'],
        line_items: [{
          price: price_id, # Replace with the actual price ID from Stripe
          quantity: 1,
        }],
        mode: mode_type,
        # mode: 'subscription',
        success_url: success_stripe_payment_url(host: request.base_url) + '?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: failure_stripe_payment_url(host: request.base_url),
        metadata: {
          license_type: license_type # Store the license_type in Stripe metadata
        },

        # Include the discounts array in the session creation
        allow_promotion_codes: true,
      }, {
        idempotency_key: idempotency_key
      })

      respond_to do |format|
        format.js # Render create.js.erb to redirect to Stripe Checkout
      end
    end


    def set_stripe_api_key
        Stripe.api_key = ENV['API_KEY_TEST']
    end
    def success
      session_id = params[:session_id]
      session = Stripe::Checkout::Session.retrieve(session_id)
      license_type = session.metadata.license_type
      puts "#{license_type}"


      # Assuming you have a method `generate_license_key` implemented
      # license_key = generate_license_key
      license_key = SecureRandom.hex(15)

      # Assuming `Key` is your model for storing license keys info
      Key.create!(
        activation_code: license_key,
        email: session.customer_details.email,
        customer_id: session.customer,
        expiration: 1.year.from_now,
        used: false,
        license_type: license_type # Add license_type for the plan
      )
      puts "#{license_key}"

      # Send the license key to the user's email
      UserMailer.license_key_purchase(session.customer_details.email, license_key).deliver_now


      flash[:notice] = 'Please check your email for your verification key.'

      # Redirect or render success message
      end
    def failure
        redirect_to('/users/sign_in')
        # Redirect or render success message
    end

end
