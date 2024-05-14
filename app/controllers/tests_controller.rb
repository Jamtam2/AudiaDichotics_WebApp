class TestsController < ApplicationController



    def edit
      @client = Client.find(params[:client_id]***REMOVED***
      @test = Test.find(params[:id]***REMOVED***
      render :edit
    end
    

    def update
      @client = Client.find(params[:client_id]***REMOVED***
      @test = @client.tests.find(params[:id]***REMOVED***
      @test.assign_attributes(test_params***REMOVED***
    
      if @test.save
        redirect_to edit_client_path(@client***REMOVED***
      else
        render 'edit'
      end
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
      params.require(:test***REMOVED***.permit(:label, :notes, :client_name, :test_type, :left_score, :right_score, :ear_advantage, :ear_advantage_score, :scan, :authenticity_token***REMOVED***
    end
      
  end
  