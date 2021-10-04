class CreateCrops < ActiveRecord::Migration[6.1]
  def change
    create_table :crops do |t|
      t.string :name

      t.string :season
      t.string :grow_time
      t.integer :sell_price
      t.string :uses
      t.string :cost
      t.belongs_to :stardewvalley, default: 1
  
    end
  end
end
