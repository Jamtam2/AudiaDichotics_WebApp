class StripeCheckoutController < ApplicationController
    before_action :set_stripe_api_key, only: [:create]
    def create
      @session = Stripe::Checkout::Session.create({
        payment_method_types: ['card'],
        line_items: [{
          price: '[PRICE_KEY]', # Replace with the actual price ID from Stripe
          quantity: 1,
        ***REMOVED***],
        mode: 'subscription',
        success_url: success_stripe_payment_url(host: request.base_url***REMOVED*** + '?session_id={CHECKOUT_SESSION_ID***REMOVED***',
        cancel_url: failure_stripe_payment_url(host: request.base_url***REMOVED***,
      ***REMOVED******REMOVED***
  
      respond_to do |format|
        format.js # Render create.js.erb to redirect to Stripe Checkout
      end
    end

    def set_stripe_api_key
        Stripe.api_key = '[API_KEY]'
    end
    def success
        # Redirect or render success message
      end  
end
  