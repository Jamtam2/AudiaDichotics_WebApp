class RddtTestsController < ApplicationController

  def new_rddt_list1
    @client = Client.find(params[:client_id])
    @rddt_test = @client.rddt_tests.build(category_id: 1)
    @dob = @client.date_of_birth
  end

  def new_rddt_list2
    @client = Client.find(params[:client_id])
    @rddt_test = @client.rddt_tests.build(category_id: 2)
    @dob = @client.date_of_birth
  end

  def index
    @rddt_tests = Rddt_Test.all
    render :index
  end

  def show
    @client = Client.find(params[:client_id])
    @rddt_test = @client.rddt_tests.find(params[:id])
    Rails.logger.info "advantage score1:#{@rddt_test.ear_advantage_score1}"
    Rails.logger.info "advantage score:#{@rddt_test.ear_advantage_score}"
    Rails.logger.info "advantage score3: #{@rddt_test.ear_advantage_score3}"
    Rails.logger.info("#{@rddt_test.inspect}")

    @rddt_test.selected_words ||= {}
  end

  def edit
    @client = Client.find(params[:client_id])
    @rddt_test = Rddt_Test.find(params[:id])
    render :edit
  end

  def update
    @client = Client.find(params[:client_id])
    @rddt_test = @client.rddt_tests.find(params[:id])
    @rddt_test.assign_attributes(rddt_test_params)

    if @rddt_test.save
      redirect_to edit_client_path(@client)
    else
      render 'edit'
    end
  end

  def create
    @client = Client.find(params[:client_id])
    @rddt_test = @client.rddt_tests.build(rddt_test_params)
    @rddt_test.user = current_user
    @rddt_test.client = @client
    @rddt_test.selected_words = params[:selected_words]

    if @rddt_test.save
      current_user.tenant.use_test!
      redirect_to edit_client_path(@client)
    else
      render 'new'
    end
  end

  def apply_discount
    @client = Client.find(params[:client_id])
    @rddt_test = RddtTest.find(params[:id])
    discount = Discount.find_by(code: params[:discount_code])

    if discount
      new_price = @rddt_test.price * (1 - discount.percentage_off / 100.0)
      @rddt_test.update(price: new_price)
      flash[:notice] = "Discount applied. New price: #{new_price}"
      redirect_to edit_client_path(@client)
    else
      flash[:alert] = "Invalid discount code."
      redirect_to edit_client_path(@client)
    end
  end

  private

  def rddt_test_params
    params.require(:rddt_test).permit(:label, :notes, :client_name, :test_type, :left_score1, :left_score2, :left_score3, :right_score1, :right_score2, :right_score3, :interpretation, :ear_advantage, :ear_advantage_score, :ear_advantage_score1, :ear_advantage_score3, :right_percentile, :left_percentile, :advantage_percentile, :scan, :category_id, :authenticity_token, selected_words: {})
  end

  def check_test_limit
    unless current_user.tenant.can_take_test?
      flash[:alert] = 'You have no remaining tests or your membership has expired.'
      redirect_to root_path
    end
  end

end
