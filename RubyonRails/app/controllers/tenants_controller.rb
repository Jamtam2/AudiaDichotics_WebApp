class TenantsController < ApplicationController
  before_action :set_tenant, only: [:edit, :update]
  before_action :require_global_moderator

  def edit
    # This will render the edit form to update membership_expiration and test_limit
    @tenant = Tenant.find(params[:id])

    @license_keys = Key.where(email: @tenant.users.pluck(:email))

  end

  def update
    if @tenant.update(tenant_params)
      flash[:success] = 'Tenant was successfully updated.'
      redirect_to tenants_path
    else
      flash[:error] = 'There was an issue updating the tenant.'
      render :edit
    end
  end

  def index
    @tenants = Tenant.left_joins(:users)
    .select('DISTINCT tenants.*,
             (SELECT email FROM users WHERE users.tenant_id = tenants.id ORDER BY users.id LIMIT 1) AS first_user_email,
             (SELECT fname FROM users WHERE users.tenant_id = tenants.id ORDER BY users.id LIMIT 1) AS user_fname,
             (SELECT lname FROM users WHERE users.tenant_id = tenants.id ORDER BY users.id LIMIT 1) AS user_lname,
             (
               SELECT string_agg(keys.activation_code, \', \')
               FROM keys
               WHERE keys.email IN (
                 SELECT email FROM users WHERE users.tenant_id = tenants.id
               )
             ) AS license_keys,
             (
               SELECT COUNT(*)
               FROM users
               WHERE users.tenant_id = tenants.id
             ) AS user_count')
    .where('tenants.membership_expiration IS NOT NULL')

    if params[:query].present?
      q = "%#{params[:query].downcase}%"
      @tenants = @tenants.where(
        "(LOWER(
            (SELECT fname FROM users WHERE users.tenant_id = tenants.id ORDER BY users.id LIMIT 1)
         ) LIKE ?
         OR LOWER(
            (SELECT lname FROM users WHERE users.tenant_id = tenants.id ORDER BY users.id LIMIT 1)
         ) LIKE ?)", q, q
      )
    end

    if params[:start_date].present?
      begin
        start_date = Date.parse(params[:start_date])
        @tenants = @tenants.where('tenants.created_at >= ?', start_date)
      rescue ArgumentError
        # ignore invalid date
      end
    end

    if params[:end_date].present?
      begin
        end_date = Date.parse(params[:end_date])
        @tenants = @tenants.where('tenants.created_at <= ?', end_date)
      rescue ArgumentError
        # ignore invalid date
      end
    end


  @tenants = @tenants.order(:id)
  end

  private

  def set_tenant
    @tenant = Tenant.find(params[:id])
  end

  def tenant_params
    params.require(:tenant).permit(:membership_expiration, :test_limit)
  end

  def require_global_moderator
    unless current_user.role == 'global_moderator'
      flash[:alert] = "You are not authorized to view this page."
      redirect_to root_path
    end
  end
end
