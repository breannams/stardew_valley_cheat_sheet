class Stardewvalley < ApplicationRecord
    has_many :games
    has_many :users, through: :games
    has_many :villagers
    has_many :quests
    has_many :animals
    has_many :buildings
    has_many :crops
    has_many :farms
    has_many :festivals

    accepts_nested_attributes_for :animals, :buildings, :crops, :festivals, :quests, :villagers
end
