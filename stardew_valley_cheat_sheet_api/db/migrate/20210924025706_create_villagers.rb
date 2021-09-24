class CreateVillagers < ActiveRecord::Migration[6.1]
  def change
    create_table :villagers do |t|
      t.string :name
      t.string :birthday
      t.string :gifts
      t.integer :hearts
      t.string :heartevents
      t.boolean :marriage
      t.string :img
      t.belongs_to :game
      
    end
  end
end
