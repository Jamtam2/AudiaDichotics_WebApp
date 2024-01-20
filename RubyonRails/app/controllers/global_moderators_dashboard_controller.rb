class GlobalModeratorsDashboardController < ApplicationController
    before_action :verify_global_moderator
  
    def index
      # Dashboard view
        # @keys = Key.all.order(created_at: :desc***REMOVED***
        @keys = Key.where(created_by_id: current_user.id***REMOVED***.order(created_at: :desc***REMOVED***

        @discounts = Discount.all.order(created_at: :desc***REMOVED***

    end
  
    def create_discount
        discount = Discount.new(discount_params***REMOVED***
        if discount.save
          redirect_to global_moderators_dashboard_index_path, notice: 'Discount created successfully.'
        else
          redirect_to global_moderators_dashboard_index_path, alert: discount.errors.full_messages.to_sentence
        end
    end
    
    def destroy_discount
        discount = Discount.find(params[:id]***REMOVED***
        discount.destroy
        redirect_to global_moderators_dashboard_index_path, notice: 'Discount deleted successfully.'
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
  
end
