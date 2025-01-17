require 'date'
class SubscriptionChecker
    def self.perform_check
        # Find all users whose membership expire today
        users = User.local_moderators.joins(:tenants).where('DATE(tenants.membership_expiration) = ?', Date.today)

        # For each user, use their stripe_customer_id to locate their subscription and update their membership expiration date if needed
        users.each do |user|
            subscription = retrieve_active_subscription(user.stripe_customer_id)
            if subscription
                if Time.at(subscription.current_period_end).to_date > Date.today && subscription.status == "active"
                    update_membership_expiration(user, Time.at(subscription.current_period_end))
                end
            end
        end 
    end

    def self.detect_status_change
        # Find all users whose membership has expired before today
        expired_users = User.local_moderators.joins(:tenants).where('DATE(tenants.membership_expiration) < ?', Date.today)
        expired_users.each do |expired_user|
            subscription = retrieve_active_subscription(expired_user.stripe_customer_id)
            if subscription
                if Time.at(subscription.current_period_end).to_date > Date.today && subscription.status == "active"
                    update_membership_expiration(expired_user, Time.at(subscription.current_period_end))
                end
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

    def self.update_membership_expiration(user, date_time)
        user.tenant.update(membership_expiration: date_time)
    end
end