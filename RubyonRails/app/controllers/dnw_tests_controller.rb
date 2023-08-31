class DnwTestsController < ApplicationController

    def new_dnw_list1
        @client = Client.find(params[:client_id]***REMOVED***
        @dnw_test = @client.dnw_tests.build
        @dob = @client.date_of_birth
    end
  
    def new_dnw_list2
        @client = Client.find(params[:client_id]***REMOVED***
        @dnw_test = @client.dnw_tests.build
        @dob = @client.date_of_birth
    end
  
    def new_dnw_list3
        @client = Client.find(params[:client_id]***REMOVED***
        @dnw_test = @client.dnw_tests.build
        @dob = @client.date_of_birth
    end
  
    def new_dnw_list4
        @client = Client.find(params[:client_id]***REMOVED***
        @dnw_test = @client.dnw_tests.build
        @dob = @client.date_of_birth
    end

    def index
        @dnw_tests = Dnw_Test.all
        render :index
    end



    def edit
        @client = Client.find(params[:client_id]***REMOVED***
        @dnw_test = Dnw_Test.find(params[:id]***REMOVED***
        render :edit
    end
      
  
      def update
        @client = Client.find(params[:client_id]***REMOVED***
        @dnw_test = @client.dnw_tests.find(params[:id]***REMOVED***
        @dnw_test.assign_attributes(dnw_test_params***REMOVED***
      
        if @dnw_test.save
          redirect_to edit_client_path(@client***REMOVED***
        else
          render 'edit'
        end
      end
  
    
  
  
  
  
  def create
      @client = Client.find(params[:client_id]***REMOVED***
      @dnw_test = @client.dnw_tests.build(dnw_test_params***REMOVED***
      @dnw_test.user = current_user
      @dnw_test.client = @client
  
      if @dnw_test.save
  
        redirect_to edit_client_path(@client***REMOVED***
      else
        render 'new'
      end
    end
  
  
    
      private
    
      def dnw_test_params
        params.require(:dnw_test***REMOVED***.permit(:label, :notes, :client_name, :test_type, :left_score, :right_score, :ear_advantage, :ear_advantage_score, :scan, :authenticity_token***REMOVED***
      end
    
end
