class TenantsController < ApplicationController
  before_action :set_tenant, only: [:edit, :update]
  before_action :require_global_moderator

  def edit
    # This will render the edit form to update membership_expiration and test_limit
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
                     .select('DISTINCT tenants.*, (SELECT email FROM users WHERE users.tenant_id = tenants.id ORDER BY users.id LIMIT 1) AS first_user_email')
                     .order(:id)


  end

  def destroy
    @tenant = Tenant.find(params[:id])
    @tenant.destroy
    redirect_to tenants_url, notice: "Tenant was successfully deleted."
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
