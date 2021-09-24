class User < ApplicationRecord
    has_one :game
    has_secure_password
    validates :username, presence: true, uniqueness: true {case_sensitive: false}
    validates :email, presence: true, uniqueness: true {case_sensitive: false}

end
