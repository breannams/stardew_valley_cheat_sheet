class CreateFestivals < ActiveRecord::Migration[6.1]
  def change
    create_table :festivals do |t|
      t.string :name
      t.string :date
      t.string :img
      t.string :time_location
      t.string :description
      t.string :purchases
      t.belongs_to :game

    end
  end
end
