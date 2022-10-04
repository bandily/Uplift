class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        render json: User.all
    end

    def show
        if current_user
            render json: current_user
        else
            render json: { error: 'No active session' }, status: :unauthorized
        end
    end

    def user_info
        user = User.find_by(username: params[:username])
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :gender, :weight, :age, :goal_weight)
    end
end
