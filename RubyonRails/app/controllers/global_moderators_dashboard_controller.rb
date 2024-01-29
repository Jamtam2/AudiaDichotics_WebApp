class GlobalModeratorsDashboardController < ApplicationController
    before_action :verify_global_moderator
    before_action :set_stripe_api_key

  
    def index
      # Dashboard view
        # @keys = Key.all.order(created_at: :desc***REMOVED***
        @keys = Key.where(created_by_id: current_user.id***REMOVED***.order(created_at: :desc***REMOVED***

        @discounts = Discount.all.order(created_at: :desc***REMOVED***

    end

    def create_discount
      discount = Discount.new(discount_params***REMOVED***
    
      if discount.save
        begin
          # Check if the Stripe coupon exists
          stripe_coupon = begin
                            Stripe::Coupon.retrieve(discount.code***REMOVED***
                          rescue Stripe::InvalidRequestError
                            # Coupon does not exist, create a new one
                            Stripe::Coupon.create({
                              id: discount.code,
                              percent_off: discount.percentage_off,
                              duration: 'once',  # Adjust as needed
                              max_redemptions: discount.redemption_quantity,
                              redeem_by: discount.expiration_date
                            ***REMOVED******REMOVED***
                          end
    
          # Handle promotion codes
          promotion_codes = Stripe::PromotionCode.list({coupon: discount.code***REMOVED******REMOVED***
          if promotion_codes.data.empty?
            # No existing promotion codes, create a new one
            Stripe::PromotionCode.create({
              coupon: stripe_coupon.id,
              code: discount.code,
            ***REMOVED******REMOVED***
          else
            # Reactivate existing promotion codes if any are inactive
            promotion_codes.data.each do |promo_code|
              Stripe::PromotionCode.update(promo_code.id, {active: true***REMOVED******REMOVED*** unless promo_code.active
            end
          end
    
          redirect_to global_moderators_dashboard_index_path, notice: 'Discount created/updated successfully.'
        rescue Stripe::StripeError => e
          # Rollback discount creation in your system if Stripe operation fails
          discount.destroy
          redirect_to global_moderators_dashboard_index_path, alert: "Stripe error: #{e.message***REMOVED***"
        end
      else
        redirect_to global_moderators_dashboard_index_path, alert: discount.errors.full_messages.to_sentence
      end
    end
    
      
    # def create_discount
    #   discount = Discount.new(discount_params***REMOVED***
    
    #   if discount.save
    #     # Create a Stripe coupon
    #     stripe_coupon = Stripe::Coupon.create({
    #       id: discount.code, # Use your discount code as the ID for easy reference
    #       percent_off: discount.percentage_off,
    #       duration: 'once', # or 'repeating' or 'forever', depending on your needs
    #       # For 'repeating', you should also specify 'duration_in_months'
    #     ***REMOVED******REMOVED***
    
    #     promotion_code = Stripe::PromotionCode.create({
    #       coupon: stripe_coupon.id,
    #       code: discount.code,  # This is the code users will enter at checkout
    #     ***REMOVED******REMOVED***
    #     redirect_to global_moderators_dashboard_index_path, notice: 'Discount created successfully.'
    #   else
    #     redirect_to global_moderators_dashboard_index_path, alert: discount.errors.full_messages.to_sentence
    #   end
    # rescue Stripe::StripeError => e
    #   # Handle Stripe errors (e.g., invalid parameters or API errors***REMOVED***
    #   redirect_to global_moderators_dashboard_index_path, alert: "Stripe error: #{e.message***REMOVED***"
    # end
    
    
    def destroy_discount
      discount = Discount.find(params[:id]***REMOVED***
    
      begin
        # Attempt to find and deactivate the Stripe promotion code associated with the discount
        promotion_codes = Stripe::PromotionCode.list({coupon: discount.code***REMOVED******REMOVED***
        promotion_codes.data.each do |promo_code|
          Stripe::PromotionCode.update(promo_code.id, {active: false***REMOVED******REMOVED***
        end
      rescue Stripe::InvalidRequestError => e
        # If the specific error message indicates "No such coupon", proceed with deletion
        if e.message.include?("No such coupon"***REMOVED***
          Rails.logger.info "Stripe coupon not found for discount code #{discount.code***REMOVED***, proceeding with deletion."
        else
          # If the error is due to another issue, re-raise it to be handled by the next rescue block
          raise
        end
      rescue Stripe::StripeError => e
        # Handle other Stripe errors without deleting the discount
        redirect_to global_moderators_dashboard_index_path, alert: "Stripe error: #{e.message***REMOVED***"
        return  # Return early to avoid attempting to delete the discount
      end
    
      # Delete the discount from your database, regardless of Stripe coupon existence
      discount.destroy
      redirect_to global_moderators_dashboard_index_path, notice: 'Discount deleted successfully.'
    rescue => e
      # Handle other errors, such as the discount not found in your database
      redirect_to global_moderators_dashboard_index_path, alert: 'Error deleting discount: #{e.message***REMOVED***'
    end
        

    
      def create_key
        key = Key.new(activation_code: generate_unique_activation_code, 
                  license_type: key_params[:license_type], 
                  used: false, 
                  expiration: Time.zone.now + 1.year,
                  created_by_id: current_user.id***REMOVED*** # Assign the key to deborah to only show the keys she's generated.

    
        if key.save
          redirect_to global_moderators_dashboard_index_path, notice: 'License key created successfully.'
        else
          redirect_to global_moderators_dashboard_index_path, alert: key.errors.full_messages.to_sentence
        end
      end
    
  
    private

    def discount_params
    params.require(:discount***REMOVED***.permit(:code, :percentage_off***REMOVED***
    end

    def key_params
    params.require(:key***REMOVED***.permit(:license_type***REMOVED***
    end

    def generate_unique_activation_code
    loop do
        code = SecureRandom.hex(10***REMOVED*** # adjust the length as needed
        break code unless Key.exists?(activation_code: code***REMOVED***
    end
    end

  
    def verify_global_moderator
           # Ensure the user is a local moderator
        @user = current_user
        puts "DEBUG: USER CUSTOMER ID: #{current_user.inspect***REMOVED***"
        
        redirect_to(root_url***REMOVED*** unless @user.global_moderator?
      # Logic to verify if the current user is a global moderator
    end
    def set_stripe_api_key
      Stripe.api_key = '[API_KEY]'
  end
end
