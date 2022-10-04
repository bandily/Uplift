class AvatarSerializer < ActiveModel::Serializer
  attributes :id, :mouth, :eyes, :hair, :accessory, :skinColor, :hairColor, :image, :user_id
end
