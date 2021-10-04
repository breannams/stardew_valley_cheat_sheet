class CreateQuests < ActiveRecord::Migration[6.1]
  def change
    create_table :quests do |t|
      t.string :quest_type
      t.string :name
      t.text :description
      t.string :started_by
      t.string :requirements
      t.string :rewards
      t.boolean :completed
      t.belongs_to :stardewvalley, default: 1
    end
  end
end
