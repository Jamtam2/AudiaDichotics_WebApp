require 'date'
class SubscriptionChecker
    def self.perform_check
        # Find all tenants whose membership expire today
        tenants = Tenant.where('DATE(membership_expiration) = ?', Date.today)

        # For each tenant, use their stripe_customer_id to locate their subscription and update their membership expiration date if needed
        tenants.each do |tenant|
            update_expiration_if_needed(tenant)
        end 
    end

    def self.detect_status_change
        # Find all tenants whose membership has expired before today
        expired_tenants = Tenant.where('DATE(membership_expiration) < ?', Date.today)
        expired_tenants.each do |expired_tenant|
            update_expiration_if_needed(expired_tenant)
        end 
    end

    def self.update_expiration_if_needed(tenant)
        subscription = retrieve_active_subscription(tenant.stripe_customer_id)
        if subscription
            if Time.at(subscription.current_period_end).to_date > Date.today && subscription.status == "active"
                update_membership_expiration(tenant, Time.at(subscription.current_period_end))
            end
        end
    end

    def self.retrieve_active_subscription(customer_id)
        subscriptions = Stripe::Subscription.list(customer: customer_id).data
        if subscriptions.empty?
            return nil
        else 
            return subscriptions.first
    end 

    def self.update_membership_expiration(tenant, date_time)
        tenant.update(membership_expiration: date_time)
    end
end