
class DwtTestsController < ApplicationController
  before_action :check_test_limit, only: [:new, :create]

def new_dwt_list1
        @client = Client.find(params[:client_id])
        @dwt_test = @client.dwt_tests.build(category_id: 1)
        @dob = @client.date_of_birth
        Rails.logger.debug { "Category ID: #{@dwt_test.category_id}" }

    end

    def new_dwt_list2
        @client = Client.find(params[:client_id])
        @dwt_test = @client.dwt_tests.build(category_id: 2)
        @dob = @client.date_of_birth
        Rails.logger.debug { "Category ID: #{@dwt_test.category_id}" }

    end

    def new_dwt_list3
        @client = Client.find(params[:client_id])
        @dwt_test = @client.dwt_tests.build(category_id: 3)
        @dob = @client.date_of_birth
    end

    def new_dwt_list4
        @client = Client.find(params[:client_id])
        @dwt_test = @client.dwt_tests.build(category_id: 4)
        @dob = @client.date_of_birth
        Rails.logger.debug { "Category ID: #{@dwt_test.category_id}" }

      end


    def index
        @dwt_tests = Dwt_Test.all
        render :index
    end

    def show
      @client = Client.find(params[:client_id])
      @dwt_test = @client.dwt_tests.find(params[:id])
      Rails.logger.info("-----------------------")
      Rails.logger.info("#{@dwt_test.inspect}")
      Rails.logger.info("-----------------------")
        # Ensure selected_words is at least an empty hash to avoid nil errors
      @dwt_test.selected_words ||= {}
      # In the controller's show action:



    end


    def edit
        @client = Client.find(params[:client_id])
        @dwt_test = Dwt_Test.find(params[:id])
        render :edit
      end


      def update
        @client = Client.find(params[:client_id])
        @dwt_test = @client.dwt_tests.find(params[:id])
        @dwt_test.assign_attributes(dwt_test_params)

        if @dwt_test.save
          redirect_to edit_client_path(@client)
        else
          render 'edit'
        end
      end






  def create
      @client = Client.find(params[:client_id])
      @dwt_test = @client.dwt_tests.build(dwt_test_params)
      @dwt_test.user = current_user
      @dwt_test.client = @client
      @dwt_test.selected_words = params[:selected_words]

      if @dwt_test.save

        current_user.tenant.use_test!

        redirect_to edit_client_path(@client)
      else
        render 'new'
      end
    end

    def apply_discount
      @client = Client.find(params[:client_id])
      @dwt_test = DwtTest.find(params[:id])
      discount = Discount.find_by(code: params[:discount_code])

      if discount
        new_price = @dwt_test.price * (1 - discount.percentage_off / 100.0)
        @dwt_test.update(price:  new_price)
        redirect_to edit_client_path(@client)
        puts "------------------------------------------------"
        puts "TEST STUFF #{@dwt_test.inspect}"
        puts "------------------------------------------------"
        flash[:notice] = "Discount applied. New price: #{new_price}"

      else
        puts "------------------------------------------------"
        puts "IT DID NOT WORK STUFF #{@dwt_test.inspect}"
        puts "------------------------------------------------"
        redirect_to edit_client_path(@client)
        flash[:alert] = "Invalid discount code."
      end
    end



      private

      def dwt_test_params
        params.require(:dwt_test).permit(:label, :notes, :client_name, :test_type, :left_score, :right_score, :ear_advantage, :ear_advantage_score, :interpretation, :left_percentile, :right_percentile, :advantage_percentile,  :scan, :category_id, :authenticity_token, selected_words: {})
      end


      def check_test_limit
        puts "------------------------------------------------"
        puts "IN CHECK_TEST_LIMIT"
        puts "------------------------------------------------"

        unless current_user.tenant.can_take_test?
          puts "------------------------------------------------"
          puts "IN CHECK_TEST_LIMIT CONDITIONAL"
          puts "------------------------------------------------"

          flash[:alert] = 'You have no remaining tests or your membership has expired.'
          redirect_to root_path
        end
      end


end
