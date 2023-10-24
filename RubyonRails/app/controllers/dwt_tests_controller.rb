class DwtTestsController < ApplicationController
    def new_dwt_list1
        @client = Client.find(params[:client_id]***REMOVED***
        @dwt_test = @client.dwt_tests.build
        @dob = @client.date_of_birth   
    end
  
    def new_dwt_list2
        @client = Client.find(params[:client_id]***REMOVED***
        @dwt_test = @client.dwt_tests.build
        @dob = @client.date_of_birth
    end
      
    def new_dwt_list3
        @client = Client.find(params[:client_id]***REMOVED***
        @dwt_test = @client.dwt_tests.build
        @dob = @client.date_of_birth
    end
  
    def new_dwt_list4
        @client = Client.find(params[:client_id]***REMOVED***
        @dwt_test = @client.dwt_tests.build
        @dob = @client.date_of_birth
    end


    def index
        @dwt_tests = Dwt_Test.all
        render :index
    end

    def show
      @client = Client.find(params[:client_id]***REMOVED***
      @dwt_test = @client.dwt_tests.find(params[:id]***REMOVED***

    end


    def edit
        @client = Client.find(params[:client_id]***REMOVED***
        @dwt_test = Dwt_Test.find(params[:id]***REMOVED***
        render :edit
      end
      
  
      def update
        @client = Client.find(params[:client_id]***REMOVED***
        @dwt_test = @client.dwt_tests.find(params[:id]***REMOVED***
        @dwt_test.assign_attributes(dwt_test_params***REMOVED***
      
        if @dwt_test.save
          redirect_to edit_client_path(@client***REMOVED***
        else
          render 'edit'
        end
      end
  
    
  
  
  
  
  def create
      @client = Client.find(params[:client_id]***REMOVED***
      @dwt_test = @client.dwt_tests.build(dwt_test_params***REMOVED***
      @dwt_test.user = current_user
      @dwt_test.client = @client
  
      if @dwt_test.save
  
        redirect_to edit_client_path(@client***REMOVED***
      else
        render 'new'
      end
    end
  
  
    
      private
    
      def dwt_test_params
        params.require(:dwt_test***REMOVED***.permit(:label, :notes, :client_name, :test_type, :left_score, :right_score, :ear_advantage, :ear_advantage_score, :interpretation, :left_percentile, :right_percentile, :advantage_percentile,  :scan, :authenticity_token***REMOVED***
      end
        
    
          
    

end
