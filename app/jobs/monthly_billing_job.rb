# app/jobs/monthly_billing_job.rb

class MonthlyBillingJob < ApplicationJob
    queue_as :default
  
    def perform(*args***REMOVED***
      User.find_each do |user|
        next unless user.stripe_customer_id && user.usage_this_month.positive? && user.local_moderator?
  
        invoice = Stripe::Invoice.create({
          customer: user.stripe_customer_id,
          auto_advance: true, # Automatically finalize the invoice
        ***REMOVED******REMOVED***
  
        Stripe::InvoiceItem.create({
          customer: user.stripe_customer_id,
          amount: calculate_monthly_cost(user***REMOVED***, # in cents
          currency: 'usd',
          description: 'Monthly tests usage',
          invoice: invoice.id
        ***REMOVED******REMOVED***
  
        Stripe::Invoice.finalize_invoice(invoice.id***REMOVED***
      end
    end
  
    private
  
    def calculate_monthly_cost(user***REMOVED***
        # Logic to calculate the user's total cost for the month
        current_month_tests = current_tests(user***REMOVED***
        total_cost = calculate_total_cost(current_month_tests***REMOVED***

  end
  

#   ---------------------------
    def current_tests(user***REMOVED***
        current_month = Time.now.beginning_of_month..Time.now.end_of_month
        fetch_tests(current_month,user***REMOVED***
    end
 
    def fetch_tests(range,user***REMOVED***
        {
        rddt_tests: RddtTest.where(created_at: range, tenant_id: user.tenant_id***REMOVED***,
        dnw_tests: DnwTest.where(created_at: range, tenant_id: user.tenant_id***REMOVED***,
        dwt_tests: DwtTest.where(created_at: range, tenant_id: user.tenant_id***REMOVED***
        ***REMOVED***
    
    end

    def calculate_total_cost(tests***REMOVED***
        total_cost = 0
        tests.values.flatten.each do |test|
            total_cost += test.price
        end
        total_cost
        end
end

