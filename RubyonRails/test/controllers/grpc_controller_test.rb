require "test_helper"

class GrpcControllerTest < ActionDispatch::IntegrationTest
  test "should get start_server" do
    get grpc_start_server_url
    assert_response :success
  end
end
