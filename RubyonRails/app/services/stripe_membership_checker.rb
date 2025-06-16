# app/services/stripe_membership_checker.rb
class StripeMembershipChecker
  def self.call
    # Go through all tenants with a Stripe ID
    Tenant.where.not(stripe_customer_id: nil).find_each do |tenant|
      begin
        customer_id = tenant.stripe_customer_id
        Rails.logger.info("Checking Stripe customer: #{customer_id}")

        # Get the active Stripe subscription
        subscriptions = Stripe::Subscription.list(customer: customer_id).data
        subscription = subscriptions.find { |sub| sub.status == 'active' }
        if subscription.nil?
          Rails.logger.info "No active subscription for tenant #{tenant.id} — skipping."
          next
        end
        # Make sure the latest invoice is paid
        invoice = Stripe::Invoice.retrieve(subscription.latest_invoice)
        unless invoice.status == 'paid'
          Rails.logger.info "Latest invoice not paid for tenant #{tenant.id} — skipping."
          next
        end


       # Get when the current Stripe period ends
        current_period_end = Time.at(subscription.current_period_end)
        if subscription.status != 'active'
          Rails.logger.info "Subscription is not active for tenant #{tenant.id} — skipping."
          next
        end
        # Skip if already renewed
        if tenant.membership_expiration.present? && tenant.membership_expiration >= current_period_end
          Rails.logger.info "Tenant #{tenant.id} already renewed for this billing period — skipping."
          next
        end

        # Get license info
        key = Key.where(customer_id: tenant.stripe_customer_id).order(created_at: :desc).first
        unless key&.license_type
          Rails.logger.warn "No valid license key found for customer #{customer_id}"
          next
        end

        # Determine test count
        test_count = case key.license_type
                     when 'tests_15' then 15
                     when 'tests_45' then 45
                     when 'tests_100' then 100
                     else
                       Rails.logger.warn "Invalid license type #{key.license_type} for customer #{customer_id}"
                       next
                     end

        new_expiration = current_period_end 
        tenant.update!(
          membership_expiration: new_expiration,
          test_limit: (tenant.test_limit || 0) + test_count,
        )

        Rails.logger.info "Updated #{tenant.users.first&.email || "tenant ##{tenant.id}"}: +#{test_count} tests, expires on #{new_expiration}"
        user_email = tenant.users.first&.email
        tenant_identifier = user_email || "tenant ##{tenant.id}"
        Rails.logger.info "Updated #{tenant_identifier}: +#{test_count} tests, expires on #{new_expiration}"

      rescue Stripe::StripeError => e
        Rails.logger.error "Stripe error for customer #{tenant.stripe_customer_id}: #{e.message}"
      rescue StandardError => e
        Rails.logger.error "Unexpected error for tenant #{tenant.id}: #{e.message}"
        raise e
      end
    end
  end
end
