class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :age, :weight, :gender, :goal_weight, :created_at

  has_one :avatar
  has_many :logs
end
