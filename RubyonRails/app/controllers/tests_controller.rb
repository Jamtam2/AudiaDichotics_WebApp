class TestsController < ApplicationController
    def new
      @client = Client.find(params[:client_id]***REMOVED***
      @test = Test.new
    end
  
    def create
      @client = Client.find(params[:client_id]***REMOVED***
      @test = Test.new(test_params***REMOVED***
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
  