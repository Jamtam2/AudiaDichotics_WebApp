# app/controllers/billing_dashboard_controller.rb

class BillingDashboardController < ApplicationController
    before_action :set_local_moderator
  
    def index

      @current_month_tests = current_tests
      @previous_tests = previous_tests
      @total_cost = calculate_total_cost(@current_month_tests***REMOVED***

    end
  
    private
  
    def set_local_moderator
      # Ensure the user is a local moderator
      @user = current_user
      puts "DEBUG: USER CUSTOMER ID: #{current_user.stripe_customer_id***REMOVED***"
      
      redirect_to(root_url***REMOVED*** unless @user.local_moderator?
    end
  
    def current_tests
      current_month = Time.now.beginning_of_month..Time.now.end_of_month
      fetch_tests(current_month***REMOVED***
    end
  
    def previous_tests
      previous_month = 1.month.ago.beginning_of_month..1.month.ago.end_of_month
      fetch_tests(previous_month***REMOVED***
    end
  
    def fetch_tests(range***REMOVED***
      {
        rddt_tests: RddtTest.where(created_at: range, tenant_id: @user.tenant_id***REMOVED***,
        dnw_tests: DnwTest.where(created_at: range, tenant_id: @user.tenant_id***REMOVED***,
        dwt_tests: DwtTest.where(created_at: range, tenant_id: @user.tenant_id***REMOVED***
      ***REMOVED***
    
    end
  
    private

    
  def calculate_total_cost(tests***REMOVED***
    total_cost = 0
    tests.values.flatten.each do |test|
      total_cost += test.price
    end
    total_cost
  end
end

  