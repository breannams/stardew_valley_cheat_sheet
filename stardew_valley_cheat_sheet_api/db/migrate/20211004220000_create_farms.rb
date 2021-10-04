class CreateFarms < ActiveRecord::Migration[6.1]
  def change
    create_table :farms do |t|
      t.string :farm_name
      t.string :farm_type
      t.string :pet_type
      t.belongs_to :stardewvalley
    end
  end
end
