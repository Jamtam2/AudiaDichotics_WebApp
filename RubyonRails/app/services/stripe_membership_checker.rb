# app/services/stripe_membership_checker.rb

class StripeMembershipChecker
  def self.call
    Tenant.where.not(stripe_customer_id: nil).find_each do |user|
      begin
        customer_id = user.stripe_customer_id

        # Get recent invoices
        invoices = Stripe::Invoice.list(customer: customer_id, limit: 10).data
        paid_renewal = invoices.find do |inv|
          inv.status == 'paid' && inv.billing_reason == 'subscription_cycle'
        end

        unless paid_renewal
          Rails.logger.info "No renewal found for #{user.email} — skipping."
          next
        end

        # Get license info
        key = Key.where(email: user.email).order(created_at: :desc).first
        unless key&.license_type
          Rails.logger.warn "No license key found for #{user.email}"
          next
        end

        # Determine test count
        test_count = case key.license_type
                     when 'tests_15' then 15
                     when 'tests_45' then 45
                     when 'tests_100' then 100
                     else
                       Rails.logger.warn "Invalid license type #{key.license_type} for #{user.email}"
                       next
                     end

        tenant = user.tenant
        new_expiration = Time.current + 1.year
        tenant.update!(
          membership_expiration: new_expiration,
          test_limit: tenant.test_limit + test_count
        )

        Rails.logger.info "Updated #{user.email}: +#{test_count} tests, expires on #{new_expiration}"

      rescue Stripe::StripeError => e
        Rails.logger.error "Stripe error for #{user.email}: #{e.message}"
      rescue => e
        Rails.logger.error "Unexpected error for #{user.email}: #{e.message}"
      end
    end
  end
end
