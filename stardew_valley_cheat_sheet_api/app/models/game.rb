class Game < ApplicationRecord
    belongs_to :user
    # has_many :animals
    # has_many :buildings
    # has_many :crops
    # has_many :festivals
    # has_many :quests
    # has_many :villagers

    validates :farm_name, presence: true
    validates :farm_type, presence: true
    validates :pet_type, presence: true
end
