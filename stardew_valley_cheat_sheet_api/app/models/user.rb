class User < ApplicationRecord
    has_many :games
    has_many :farms
    has_many :stardewvalleys, through: :games
    has_secure_password
    validates :username, presence: true, uniqueness:{case_sensitive: false}
    validates :email, presence: true, uniqueness:{case_sensitive: false}


    accepts_nested_attributes_for :farms
end
