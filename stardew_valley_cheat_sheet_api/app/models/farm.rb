class Farm < ApplicationRecord
    belongs_to :stardewvalley
    validates :farm_name, presence: true
    validates :farm_type, presence: true
    validates :pet_type, presence: true
end
