class User < ApplicationRecord
    has_many :logs
    has_one :avatar

    validates :username, :password, :age, :weight, :gender, :goal_weight, presence: true
    validates :username, uniqueness: true
    validates :weight, :age, :goal_weight, numericality: {less_than_or_equal_to: 999, greater_than_or_equal_to: 0}

    has_secure_password
end
