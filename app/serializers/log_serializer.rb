class LogSerializer < ActiveModel::Serializer
  attributes :id, :weight, :activity_type, :activity_duration, :date, :happiness, :notes, :likes, :user_id
end
