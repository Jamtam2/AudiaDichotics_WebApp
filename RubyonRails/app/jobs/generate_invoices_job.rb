class GenerateInvoicesJob < ApplicationJob
  queue_as :default

   def perform
    Stripe.api_key = 'API KEY' # Set the API key

    User.local_moderators.find_each do |user|
      total_cost = calculate_total_cost_for_user(user***REMOVED***

      if user.stripe_customer_id
        puts "creating stripe invoice for user #{user.inspect***REMOVED*** with a cost of #{total_cost***REMOVED***"
        user.update(outstanding_balance: false***REMOVED***
        create_stripe_invoice_for_user(user, total_cost***REMOVED*** if total_cost.positive?
      elsif total_cost.positive?
        puts "couldn't find stripe id for user #{user.inspect***REMOVED*** yet they have a balance of #{total_cost***REMOVED***"
        user.update(outstanding_balance: true***REMOVED***
      end
    end
  end


  private

  def calculate_total_cost_for_user(user***REMOVED***
    current_month = Time.now.beginning_of_month..Time.now.end_of_month
    total_cost = 0

    # Assuming RddtTest, DnwTest, and DwtTest have a 'price' attribute
    [RddtTest, DnwTest, DwtTest].each do |test_model|
      total_cost += test_model.where(created_at: current_month, tenant_id: user.tenant_id***REMOVED***.sum(:price***REMOVED***
    end

    total_cost
  end

  def create_stripe_invoice_for_user(user, total_cost***REMOVED***

    amount_in_cents = (total_cost * 100***REMOVED***.to_i

    # Add an invoice item for the total cost
    Stripe::InvoiceItem.create({
      customer: user.stripe_customer_id,
      amount: amount_in_cents, # Stripe amounts are in cents
      currency: 'usd',
      description: 'Monthly test usage'
    ***REMOVED******REMOVED***

    # Create and finalize the invoice
    Stripe::Invoice.create({
      customer: user.stripe_customer_id,
      auto_advance: true # Automatically finalize and pay the invoice
    ***REMOVED******REMOVED***
  end
end
