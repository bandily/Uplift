class CreateAvatars < ActiveRecord::Migration[7.0]
  def change
    create_table :avatars do |t|
      t.integer :mouth
      t.integer :eyes
      t.integer :hair
      t.integer :accessory
      t.integer :skinColor
      t.integer :hairColor
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
