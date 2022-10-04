class Log < ApplicationRecord
    belongs_to :user

    validates :weight, :activity_duration, :activity_type, :date, :happiness, presence: true
    validates :weight, :activity_duration, :numericality: {less_than_or_equal_to: 999, greater_than_or_equal_to: 0}
end
