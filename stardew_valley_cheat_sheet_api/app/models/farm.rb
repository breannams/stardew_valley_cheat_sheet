class Farm < ApplicationRecord
    belongs_to :user
    validates :farm_name, presence: true
    validates :farm_type, presence: true
    validates :pet_type, presence: true
end
