class TestsController < ApplicationController
    

  # uses @dob to call the DOB from client and pass it so it can be used on test page
    def new
      @client = Client.find(params[:client_id]***REMOVED***
      @test = @client.tests.build
      @dob = @client.date_of_birth
      
    end

  
    def create
      @client = Client.find(params[:client_id]***REMOVED***
      @test = @client.tests.build(test_params***REMOVED***
      @test.user = current_user
      @test.client = @client
      
  
      if @test.save
        redirect_to edit_client_path(@client***REMOVED***
      else
        render 'new'
      end
    end



    
  
    private
  
    def test_params
        params.require(:test***REMOVED***.permit(:label, :test_type, :client_name, :notes, :ear_advantage, :left_score, :right_score, :ear_advantage_score***REMOVED***
      end
      
  end
  