class FarmSerializer < ActiveModel::Serializer
    attributes :id, :farm_name, :farm_type, :pet_type, :user_id
  end