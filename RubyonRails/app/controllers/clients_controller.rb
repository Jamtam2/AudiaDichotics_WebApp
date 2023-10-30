class ClientsController < ApplicationController
 before_action :authenticate_user!, except: [:index]
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
      puts "Clients: #{Client.all.inspect***REMOVED***"
      if current_user.global_moderator?
        # For a global moderator, all clients are accessible
        client_scope = Client.unscoped.all
      else
        # For regular users, only clients of the same tenant are accessible
        client_scope = current_user.clients.where(tenant_id: current_user.tenant_id***REMOVED***
      end

      # Initialize instance variable to be used in clients > index.html.erb
      @clients = client_scope

      # Instance variable to be used to use scope from HashedData model for filtering
      hashed_datum_scope = HashedDatum.unscoped.all
      @active_hashed_data = hashed_datum_scope


      # Calling method that enables Ransack functionality
      # sort_and_filter_clients(client_scope***REMOVED***

      process_hashed_search_parameters

      respond_to do |format|
        format.html
        format.csv { send_data generate_csv(@clients***REMOVED***, filename: "client_data-#{Date.today***REMOVED***.csv" ***REMOVED***
      end

    end

    # Controller for global_moderator_index page functionality
    def global_moderator_index
      if current_user.global_moderator?

        # For a global moderator, all clients are accessible
        client_scope = Client.unscoped.all

        @clients = Client.includes(:dwt_tests, :dnw_tests, :rddt_tests***REMOVED***.all

    else
      # If the user is not a global moderator, redirect them
      redirect_to root_path, alert: 'You do not have access to this page.'
    end
  
        # Initialize instance variable to be used in clients > index.html.erb
        @clients = client_scope

        # Calling method that enables Ransack functionality
        # sort_and_filter_clients(client_scope***REMOVED***

      # process_hashed_search_parameters(client_scope***REMOVED***

        respond_to do |format|
          format.html
          format.csv { send_data generate_csv(@clients***REMOVED***, filename: "global_moderator_data-#{Date.today***REMOVED***.csv" ***REMOVED***
        end
      end
  end

    
# Method that contains functionality for ransack advanced search
private def sort_and_filter_clients(client_scope***REMOVED***
  
  # Initialize Ransack search object with the given scope
  @q = client_scope.ransack(params[:q], sort: params[:s]***REMOVED***
  
  # Controls search functionality for regular user
  if current_user.regular_user?

    # Dictionary of sorting options for a regular user
    sorting_options_regular = {
      age: params[:q]&.dig(:sort_by_age***REMOVED***,
      gender: params[:q]&.dig(:gender_eq***REMOVED***,
      name: params[:q]&.dig(:hashed_data_source_attribute***REMOVED***,
      client: params[:q]&.dig(:sort_by_client***REMOVED***,
      date_birth: params[:q]&.dig(:sort_by_date_birth***REMOVED***,
      country: params[:q]&.dig(:country_eq***REMOVED***,
      state: params[:q]&.dig(:state_eq***REMOVED***,
    ***REMOVED***

    # Choose which filter to use
    sorting_options_regular.each do |key, value|
      @q.sorts = value if value
    end
  end

  # Controls search functionality for global moderator
  if current_user.global_moderator?
    
    # Set the selected sorting option based on params
    sorting_options_global = {
      client: params[:q]&.dig(:sort_by_client***REMOVED***,
      date_birth: params[:q]&.dig(:sort_by_date_birth***REMOVED***,
      age: params[:q]&.dig(:sort_by_age***REMOVED***,
      gender: params[:q]&.dig(:gender_eq***REMOVED***,
      race: params[:q]&.dig(:race_eq***REMOVED***,
      country: params[:q]&.dig(:country_eq***REMOVED***,
      state: params[:q]&.dig(:state_eq***REMOVED***,
      ear_advantage: params[:q]&.dig(:dwt_tests_ear_advantage_eq***REMOVED***,
      ear_advantage_score: params[:q]&.dig(:dwt_tests_ear_advantage_score***REMOVED***,
      test_type: params[:q]&.dig(:dwt_tests_test_type_eq***REMOVED***
    ***REMOVED***
    
    # Choose which filter to use
    sorting_options_global.each do |key, value|
      @q.sorts = value if value
    end
  end
  
  # Will update the two search bars for name and location, and other possible filters
  @clients = @q.result
end



def process_hashed_search_parameters(***REMOVED***

  # Check if there's a search term provided by the user
  if params[:q]&.key?(:search_term***REMOVED***
    search_term_string = params[:q][:search_term].to_s
    # Hash the entire search term
    hashed_search_term = Digest::SHA256.hexdigest(search_term_string***REMOVED***

    # Replace the search term with the hashed search term, specifying the associated model's attribute
    params[:q][:"hashed_data_hashed_first_name_eq"] = hashed_search_term # please adjust the field name based on your actual field for the hashed data

    # Print the original and hashed search term to the server logs
    Rails.logger.debug "Original Search Term: #{params[:q][:search_term]***REMOVED***"
    Rails.logger.debug "Hashed Search Term: #{hashed_search_term***REMOVED***"

    @hashed_search_term = hashed_search_term
    # Delete the original search term as we're now searching by the hashed value
    # params[:q].delete(:search_term***REMOVED***

    # Perform the search on the HashedDatum model, and include the associated hashable records in the results
    @q = HashedDatum.includes(:hashable***REMOVED***.ransack(params[:q], sort: params[:s]***REMOVED***
    @clients = @q.result.includes(:hashable***REMOVED***.map(&:hashable***REMOVED*** # This retrieves the associated hashable records
  else
    # If no search term was provided, you can default to a standard search on the client model
    @q = Client.ransack(params[:q], sort: params[:s]***REMOVED***
    @clients = @q.result
  end
end

      
    def show
      @client = Client.find(params[:id]***REMOVED***
      @dwt_tests = @client.dwt_tests
      @dnw_tests = @client.dnw_tests
      @rddt_tests = @client.rddt_tests
      end


    def search
      if params[:search].blank?
        @clients = Client.all
      else
        @clients = Client.where("first_name ILIKE ? OR last_name ILIKE ?", "%#{params[:search]***REMOVED***%", "%#{params[:search]***REMOVED***%"***REMOVED***
      end
    end
   
    
# Method generates a CSV that can be downloaded
def generate_csv(clients***REMOVED***
  if current_user.global_moderator?
    return CSV.generate(headers: true***REMOVED*** do |csv|
      csv << ["Test_Type", "Gender", "Age", "City", "Country", "State", "Race", "Ear Advantage", "Ear Advantage Score", "Left Score", "Right Score"]

      clients.each do |client|
        client.dwt_tests.each do |dwt_test|
          csv << ["DWT", client.gender, client.age_in_years, client.city, client.country, client.state, client.race, dwt_test.ear_advantage, dwt_test.ear_advantage_score, dwt_test.left_score, dwt_test.right_score]
        end
        client.dnw_tests.each do |dnw_test|
          csv << ["DNW",client.gender, client.age_in_years, client.city, client.country, client.state, client.race, dnw_test.ear_advantage, dnw_test.ear_advantage_score, dnw_test.left_score, dnw_test.right_score]
        end
        client.rddt_tests.each do |rddt_test|
          csv << ["RDDT",client.gender, client.age_in_years, client.city, client.country, client.state, client.race, rddt_test.ear_advantage, rddt_test.ear_advantage_score, [[rddt_test.left_score1,rddt_test.left_score2,rddt_test.left_score3]], [rddt_test.right_score1,rddt_test.right_score2,rddt_test.right_score3]]
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