class TrainingsController < ApplicationController
    def index
        @client= Client.find(params[:client_id])
        @trainings = Training.all
        @week_number = session[:week_number] || 1
        render :index
    end

    def add_week
        @client= Client.find(params[:client_id])
        session[:week_number] = session[:week_number] = [session[:week_number].to_i + 1, 4].min
        redirect_to client_trainings_path(@client)
    end

    def subtract_week
        @client= Client.find(params[:client_id])
        session[:week_number] = [session[:week_number].to_i - 1, 1].max
        redirect_to client_trainings_path(@client)
    end

    def show
        @client= Client.find(params[:client_id])
        @training= @client.trainings.find(params[:id])
        render :show
    end
end
