# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_04_220000) do

  create_table "animals", force: :cascade do |t|
    t.string "name"
    t.integer "cost"
    t.string "requirements"
    t.string "produce"
    t.integer "sell_price"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_animals_on_stardewvalley_id"
  end

  create_table "buildings", force: :cascade do |t|
    t.string "name"
    t.string "cost"
    t.string "use"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_buildings_on_stardewvalley_id"
  end

  create_table "crops", force: :cascade do |t|
    t.string "name"
    t.string "season"
    t.string "grow_time"
    t.integer "sell_price"
    t.string "uses"
    t.string "cost"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_crops_on_stardewvalley_id"
  end

  create_table "farms", force: :cascade do |t|
    t.string "farm_name"
    t.string "farm_type"
    t.string "pet_type"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_farms_on_stardewvalley_id"
  end

  create_table "festivals", force: :cascade do |t|
    t.string "name"
    t.string "date"
    t.string "time_location"
    t.string "description"
    t.string "purchases"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_festivals_on_stardewvalley_id"
  end

  create_table "games", force: :cascade do |t|
    t.integer "stardewvalley_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["stardewvalley_id"], name: "index_games_on_stardewvalley_id"
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "quests", force: :cascade do |t|
    t.string "quest_type"
    t.string "name"
    t.text "description"
    t.string "started_by"
    t.string "requirements"
    t.string "rewards"
    t.boolean "completed"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_quests_on_stardewvalley_id"
  end

  create_table "stardewvalleys", force: :cascade do |t|
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin", default: false
  end

  create_table "villagers", force: :cascade do |t|
    t.string "name"
    t.string "birthday"
    t.string "gifts"
    t.integer "hearts"
    t.string "heartevents"
    t.boolean "marriage"
    t.integer "stardewvalley_id"
    t.index ["stardewvalley_id"], name: "index_villagers_on_stardewvalley_id"
  end

end
