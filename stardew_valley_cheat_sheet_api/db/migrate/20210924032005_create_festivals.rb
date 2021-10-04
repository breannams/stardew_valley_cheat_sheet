class CreateFestivals < ActiveRecord::Migration[6.1]
  def change
    create_table :festivals do |t|
      t.string :name
      t.string :date
      
      t.string :time_location
      t.string :description
      t.string :purchases
      t.belongs_to :stardewvalley, default: 1

    end
  end
end
