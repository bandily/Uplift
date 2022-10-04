class LogsController < ApplicationController
    def index
        render json: Log.all
    end

    def show
        log = Log.find(params[:id])
        render json: log, status: :accepted, serializer: LogSerializer
    end

    def create
        log = Log.create!(log_params)
        render json: log, status: :created
    end

    def destroy
        log = Log.find(params[:id])
        log.destroy
        head :no_content
    end

    private

    def current_user
        User.find_by(username: params[:username])
    end

    def log_params
        params.permit(:weight, :activity_type, :title, :activity_duration, :date, :happiness, :notes, :user_id)
    end
end
