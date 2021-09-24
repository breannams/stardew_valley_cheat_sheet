json.extract! animal, :id, :name, :img, :cost, :requirements, :produce, :sell_price, :created_at, :updated_at
json.url animal_url(animal, format: :json)
