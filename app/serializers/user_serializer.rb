class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :weight, :gender, :goal_weight
end
