class CreateBuildings < ActiveRecord::Migration[6.1]
  def change
    create_table :buildings do |t|
      t.string :name
      t.string :img
      t.string :cost
      t.string :use
      t.belongs_to :game
    end
  end
end
