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
          price: 'price_1ObIdZEdjXO5pqxuHxTg7lcC', # Replace with the actual price ID from Stripe
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
        Stripe.api_key = 'sk_test_51OXZ5bEdjXO5pqxuePO6DT10pZtW1Lr23vxeUFw1Kxwc6cucGy5RO9cBe7g7eGnNJSuf7Rwrbrg7eTNibZMWsmOR00ll5PAxeH'
    end
    def success
      flash[:notice] = 'Please check your email for your verification key.'

      # Redirect or render success message
      end  
    def failure
        redirect_to sign_in, flash[:failure] = "Failed to complete transaction."
    # Redirect or render success message
    end  

end
  