class CreateLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :logs do |t|
      t.integer :weight
      t.string :activity_type
      t.integer :activity_duration
      t.string :date
      t.integer :happiness
      t.string :notes
      t.integer :likes
      t.integer :user_id

      t.timestamps
    end
  end
end
