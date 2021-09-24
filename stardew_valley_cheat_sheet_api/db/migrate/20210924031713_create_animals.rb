class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :img
      t.integer :cost
      t.string :requirements
      t.string :produce
      t.integer :sell_price
      t.belongs_to :game
      
    end
  end
end
