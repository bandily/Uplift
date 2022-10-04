class AvatarsController < ApplicationController
    def update
        if current_user
            avatar = current_user.avatar
            avatar.update(avatar_params)
            render json: avatar
        else
            render json: { errors: avatar.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create
        if current_user
            avatar = Avatar.create!(avatar_params)
            render json:current_user, status: :created
        else
            render json: { error: 'No active session'}, status: :unauthorized
        end
    end

    def show
        render json: current_user.avatar
    end

    private 

    def current_user
        User.find_by(id: session[:user_id])
    end

    def avatar_params
        params.permit(:mouth, :hair, :hairColor, :accessory, :skinColor, :eyes, :user_id, :image)
    end
end
