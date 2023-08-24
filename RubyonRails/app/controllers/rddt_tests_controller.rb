class RddtTestsController < ApplicationController

    def new_rddt_list1
        @client = Client.find(params[:client_id]***REMOVED***
        @test = @client.tests.build
        @dob = @client.date_of_birth
    end
  
    def new_rddt_list2
        @client = Client.find(params[:client_id]***REMOVED***
        @test = @client.tests.build
        @dob = @client.date_of_birth
    end

    def index
        @rddt_tests = Rddt_Test.all
        render :index
    end


    def edit
        @client = Client.find(params[:client_id]***REMOVED***
        @rddt_test = Rddt_Test.find(params[:id]***REMOVED***
        render :edit
      end
      
  
      def update
        @client = Client.find(params[:client_id]***REMOVED***
        @rddt_test = @client.rddt_tests.find(params[:id]***REMOVED***
        @rddt_test.assign_attributes(rddt_test_params***REMOVED***
      
        if @rddt_test.save
          redirect_to edit_client_path(@client***REMOVED***
        else
          render 'edit'
        end
      end
  
    
  
  
  
  
  def create
      @client = Client.find(params[:client_id]***REMOVED***
      @rddt_test = @client.rddt_tests.build(rddt_test_params***REMOVED***
      @rddt_test.user = current_user
      @rddt_test.client = @client
  
      if @rddt_test.save
  
        redirect_to edit_client_path(@client***REMOVED***
      else
        render 'new'
      end
    end
  
  
    
      private
    
      def rddt_test_params
        params.require(:rddt_test***REMOVED***.permit(:label, :notes, :client_name, :test_type, :left_score, :right_score, :ear_advantage, :ear_advantage_score, :scan, :authenticity_token***REMOVED***
      end
    

end
