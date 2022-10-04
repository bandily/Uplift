class AvatarSerializer < ActiveModel::Serializer
  attributes :id, :mouth, :eyes, :hair, :accessory, :skinColor, :hairColor, :image
end
