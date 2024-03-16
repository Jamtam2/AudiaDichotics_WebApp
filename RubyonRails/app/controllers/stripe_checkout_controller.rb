class StripeCheckoutController < ApplicationController
    before_action :set_stripe_api_key, only: [:create]
    def create
      discount_code = params[:discount_code]
    
      # Prepare the discounts array if a discount code is provided
      discounts = discount_code.present? ? [{coupon: discount_code***REMOVED***] : []
      
      idempotency_key = "setup_#{SecureRandom.hex(15***REMOVED******REMOVED***_#{Time.now.to_i***REMOVED***"
    
      @session = Stripe::Checkout::Session.create({
        payment_method_types: ['card'],
        line_items: [{
          price: ENV['PRICE_ID'], # Replace with the actual price ID from Stripe
          quantity: 1,
        ***REMOVED***],
        mode: 'subscription',
        success_url: success_stripe_payment_url(host: request.base_url***REMOVED*** + '?session_id={CHECKOUT_SESSION_ID***REMOVED***',
        cancel_url: failure_stripe_payment_url(host: request.base_url***REMOVED***,
        # Include the discounts array in the session creation
        allow_promotion_codes: true,  
      ***REMOVED***, {
        idempotency_key: idempotency_key
      ***REMOVED******REMOVED***
    
      respond_to do |format|
        format.js # Render create.js.erb to redirect to Stripe Checkout
      end
    end
    

    def set_stripe_api_key
        Stripe.api_key = ENV['API_KEY_TEST']
    end
    def success
      session_id = params[:session_id]
      session = Stripe::Checkout::Session.retrieve(session_id***REMOVED***

      # Assuming you have a method `generate_license_key` implemented
      license_key = generate_license_key

      # Assuming `Key` is your model for storing license keys info
      Key.create!(
        activation_code: license_key,
        email: session.customer_details.email,
        customer_id: session.customer,
        expiration: 1.year.from_now,
        used: false
      ***REMOVED***

      # Send the license key to the user's email
      UserMailer.license_key_purchase(session.customer_details.email, license_key***REMOVED***.deliver_now

      
      flash[:notice] = 'Please check your email for your verification key.'

      # Redirect or render success message
      end  
    def failure
        redirect_to sign_in, flash[:failure] = "Failed to complete transaction."
    # Redirect or render success message
    end  

end
  
