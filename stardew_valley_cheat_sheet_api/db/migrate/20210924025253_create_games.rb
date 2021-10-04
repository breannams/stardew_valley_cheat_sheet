class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.belongs_to :stardewvalley, default: 1
      t.belongs_to :user
      t.timestamps
    end
  end
end
