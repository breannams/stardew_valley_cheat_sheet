class Stardewvalley < ApplicationRecord
    has_many :games
    has_many :users, through: :games
    has_many :villagers
    has_many :quests
    has_many :animals
    has_many :buildings
end
