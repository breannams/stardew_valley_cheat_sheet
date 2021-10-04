class CreateBuildings < ActiveRecord::Migration[6.1]
  def change
    create_table :buildings do |t|
      t.string :name
      
      t.string :cost
      t.string :use
      t.belongs_to :stardewvalley, default: 1
    end
  end
end
