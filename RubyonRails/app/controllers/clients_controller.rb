class ClientsController < ApplicationController
 before_action:authenticate_user!, except: [:index]  
 require 'csv'
  
  def new
      @client = Client.new
      @client.emergency_contacts.build
    end

  
    def create
      @client = Client.new(client_params***REMOVED***
  
      if @client.save
        flash[:success] = "client successfully added!"
        redirect_to clients_path, notice: "client created successfully."
      else
        flash.now[:error] = "client creation failed"
        render :new
      end
    end

    
    def edit
        @client = Client.find(params[:id]***REMOVED***
        #is this way of doing id correct? or should it be split up into 3 lines?
        dwt_id = params[:dwt_test_id]
        dnw_id = params[:dnw_test_id]
        rddt_id = params[:rddt_test_id]
        @dwt_test = @client.dwt_tests.find_by(params[id: dwt_id]***REMOVED***
        @dnw_test = @client.dnw_tests.find_by(params[id: dnw_id]***REMOVED***
        @rddt_test = @client.rddt_tests.find_by(params[id: rddt_id]***REMOVED***
      end


    def update
        @client = Client.find(params[:id]***REMOVED***

        if @client.update(client_params***REMOVED***
            redirect_to clients_path, notice: "client updated successfully."
        else
            redirect_to edit_client_path(@client***REMOVED***, notice: "client was not updated."
        end
    end

    
    def destroy
      @client = Client.find(params[:id]***REMOVED***
      @client.destroy
  
      redirect_to clients_url, notice: "client was successfully deleted."
    end


    def index
      # Determine the scope based on the user role
      if current_user.global_moderator?
        # For a global moderator, all clients are accessible
        client_scope = Client.unscoped
      else
        # For regular users, only clients of the same tenant are accessible
        client_scope = current_user.clients.where(tenant_id: current_user.tenant_id***REMOVED***
      end

      # Set the selected sorting option based on params
      selected_sorting_name = params[:q]&.dig(:sort_by_name***REMOVED***
      selected_sort_by_client = params[:q]&.dig(:sort_by_client***REMOVED***
      selected_sort_by_date_birth = params[:q]&.dig(:sort_by_date_birth***REMOVED***
    
      # Initialize Ransack search object with the given scope
      @q = client_scope.ransack(params[:q]***REMOVED***
    
      # Set the sorting option based on the parameter
      if selected_sorting_name || selected_sort_by_client || selected_sort_by_date_birth
        @q.sorts = selected_sorting_name
        @q.sorts = selected_sort_by_client
        @q.sorts = selected_sort_by_date_birth
      end

      # Code below is used to allow user to filter clients on age, broken for now. FIX ME
      #   # Filter by age range
    # age_gteq = params[:q]&.dig(:age_gteq***REMOVED***
    # age_eq = params[:q]&.dig(:age_eq***REMOVED***
    # age_lteq = params[:q]&.dig(:age_lteq***REMOVED***

    # if age_gteq.present? && age_lteq.present?
    #   @q.result = @q.result.where("age_in_years >= ? AND age_in_years <= ?", age_gteq, age_lteq***REMOVED***
    # elsif age_gteq.present?
    #   @q.result = @q.result.where("age_in_years >= ?", age_gteq***REMOVED***
    # elsif age_eq.present?
    #   @q.result = @q.result.where(age_in_years: age_eq***REMOVED***
    # elsif age_lteq.present?
    #   @q.result = @q.result.where("age_in_years <= ?", age_lteq***REMOVED***
    # end

      # Execute the search query, ensuring distinct results
      @clients = @q.result(distinct: true***REMOVED***
    
      respond_to do |format|
        format.html
        format.csv { send_data generate_csv(@clients***REMOVED***, filename: "client_data-#{Date.today***REMOVED***.csv" ***REMOVED***
      end
        # Regular users can only access clients in their tenant
        client_scope = Client.where(tenant_id: current_user.tenant_id***REMOVED***
      end
    
    
    end
    
      
    def show
      @client = Client.find(params[:id]***REMOVED***
      @dwt_tests = @client.dwt_tests
      @dnw_tests = @client.dnw_tests
      @rddt_tests = @client.rddt_tests
      end
  
  
    def global_moderator_index
    if current_user.global_moderator?
      @clients = Client.includes(:dwt_tests***REMOVED***.all
      @clients = Client.includes(:dnw_tests***REMOVED***.all
      @clients = Client.includes(:rddt_tests***REMOVED***.all

      respond_to do |format|
        format.html
        format.csv { send_data generate_csv(@clients***REMOVED***, filename: "global_moderator_data-#{Date.today***REMOVED***.csv" ***REMOVED***
      end
    
    else
      # If the user is not a global moderator, redirect them
      redirect_to root_path, alert: 'You do not have access to this page.'
    end
  end


def generate_csv(clients***REMOVED***
  if current_user.global_moderator?
    return CSV.generate(headers: true***REMOVED*** do |csv|
      csv << ["Gender", "Age", "City", "Country", "State", "Race", "Ear Advantage", "Ear Advantage Score", "Left Score", "Right Score"]

      clients.each do |client|
        client.dwt_tests.each do |dwt_test|
          csv << [client.gender, client.age_in_years, client.city, client.country, client.state, client.race, dwt_test.ear_advantage, dwt_test.ear_advantage_score, dwt_test.left_score, dwt_test.right_score]
        end
        client.dnw_tests.each do |dnw_test|
          csv << [client.gender, client.age_in_years, client.city, client.country, client.state, client.race, dnw_test.ear_advantage, dnw_test.ear_advantage_score, dnw_test.left_score, dnw_test.right_score]
        end
        client.rddt_tests.each do |rddt_test|
          csv << [client.gender, client.age_in_years, client.city, client.country, client.state, client.race, rddt_test.ear_advantage, rddt_test.ear_advantage_score, rddt_test.left_score, rddt_test.right_score]
        end
      end
    end

  else
    return CSV.generate(headers: true***REMOVED*** do |csv|
      csv << ["First Name", "Last Name", "Gender", "Email", "Date of Birth", "Phone", "Address", "tenant_id"]

      clients.each do |client|
        csv << [client.first_name, client.last_name, client.gender, client.email, client.date_of_birth, client.phone1, client.address1, client.tenant_id]
      end
    end
  end
end


    private
    
    def client_params
        params.require(:client***REMOVED***.permit(:first_name, :last_name, :email, :date_of_birth, :gender, :address1, :country, :state, :city, :zip, :phone1,:mgmt_ref,:phone2, emergency_contacts_attributes: [
           :first_name, :last_name, :phone_number, :address,
          :email, :city, :state
        ]
  ***REMOVED***
      end
  