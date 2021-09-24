class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :farm_name
      t.string :farm_type
      t.string :pet_type
      t.belongs_to :user
      t.timestamps
    end
  end
end
