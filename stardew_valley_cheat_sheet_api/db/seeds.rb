# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "bre", email: "test@gmail.com", password: "testin", admin: true)
Farm.create(farm_name: "Bre's Farm", farm_type: "Woodland", pet_type: "Cat", user_id: 1)
Stardewvalley.create(name: "Stardew Valley")

Villager.create!(name: "Abigail", birthday: "Fall 13", gifts: "Amethyst, Banana Pudding, Blackberry Cobbler, Chocolate Cake, Pufferfish, Pumpkin, Spicy Eel, Gemstones", heartevents: "2, 4, 6, 8 , 10, group 10, 14" , marriage: true, stardewvalley_id: 1 )
Villager.create!(name: "Alex", birthday: "Summer 13", gifts: "Complete Breakfast, Salmon Dinner", heartevents: "2, 4, 5, 6, 8, 10, group 10, 14", marriage: true, stardewvalley_id: 1)
Villager.create!(name: "Caroline", birthday: "Winter 7", gifts: "Fish taco, Green Tea, Summer Spangle, Tropical Curry", heartevents: "2, 3, 6, 7", marriage: false, stardewvalley_id:1)
Villager.create!(name: "Clint", birthday: "Winter 26", gifts: "Amethyst, Aquamarine, Artichoke Dip, Emerald, Gold & Iridium Bars", heartevents: "3 (2parts), 6, 7", marriage: false)
Villager.create!(name: "Demetrius", birthday: "Summer 19", gifts: "Bean Hotpot, Ice Cream, Rice Pudding, Strawberry", heartevents: "3, 6, 7", marriage: false)
Villager.create!(name: "Dwarf", birthday: "Summer 22", gifts: "Amethyst, Aquamarine, Emerald, Jade, Lemon Stone, Ruby, Topaz", heartevents: "50 friendship pts", marriage: false)
Villager.create!(name: "Elliot", birthday: "Fall 5", gifts: "Crab Cakes, Duck Feather, Lobster, Pomegranate, Squid Ink, Tom Kha Soup", heartevents: "2, 4, 6, 8, 10, group 10, 14", marriage: true)
Villager.create!(name: "Emily", birthday: "Spring 27", gifts: "Amethyst, Aquamarine, Cloth, Emerald, Jade, Ruby, Survival Burger, Ropaz, Wool", heartevents: "2, 3, 4, 6, 7, 8, 10, group 10, 14", marriage: true)
Villager.create!(name: "Evelyn", birthday: "Winter 20", gifts: "Beet, Chocolate Cake, Diamond, Fairy Rose, Stuffing, Tulip", heartevents:"4, 7", marriage: false)


Animal.create!(name: "horse", cost: 0, requirements: "Stable", produce: "N/A, used as a mount", sell_price: 0)
Animal.create!(name: "blue chicken", cost: 800, requirements: "Shanes 8 heart event, Coop", produce: "Egg(50g), Large Egg(95g)", sell_price: 1040, stardewvalley_id: 1)
Animal.create!(name: "White/Brown Chickens", cost: 800, requirements: "Coop", produce: "Egg(50g), Large Egg(95g)", sell_price: 1040)
Animal.create!(name: "Void Chicken", cost: 5000, requirements: "A witch will fly over at night and leave a void egg in a Coop", produce: "Void Egg (65g)", sell_price: 1040)
Animal.create!(name: "Golden Chicken", cost: 0, requirements: "100% progress completion. Buy at Marnies for 100,000g, Qi's for 100 gems, or the Witch", produce: "Golden Egg (500g)", sell_price: 1040)
Animal.create!(name: "Duck", cost: 1200, requirements: "Big Coop", produce: "Duck Egg (95g), Duck Feather(250g)", sell_price: 1560)
Animal.create!(name: "Rabbit", cost: 8000, requirements:"Deluxe Coop", produce: "Wool (340g), Rabbit's Foot(565g)", sell_price: 10400)
Animal.create!(name: "Dinosaur", cost: 0, requirements: "Big Coop, Dino egg found by artifact hunting", produce: "Dinosaur Egg (350g)", sell_price: 1300)
Animal.create!(name: "Cow", cost: 1500, requirements: "Barn", produce: "Milk(125g), Large Milk(190g)", sell_price: 1950)
Animal.create!(name: "Goat", cost: 4000, requirements: "Big Barn", produce: "Goat Milk(225g), Large Goat Milk (345g)", sell_price: 5200)
Animal.create!(name: "Sheep", cost: 8000, requirements: "Deluxe Barn", produce: "Wool (340g)", sell_price: 10400)
Animal.create!(name: "Pig", cost: 16000, requirements: "Deluxe Barn", produce: "Truffle", sell_price: 20800)
Animal.create!(name: "Ostrich", cost: 0, requirements: "Barn, get by solving Journal Scrap #10, or a chest drop from Volcano Dungeon", produce: "Ostrich Egg(600g)", sell_price: 20800)


Building.create!(name: "Barn", cost: "6,000g, 350 wood, 150 stone", use: "Houses Cows")
Building.create!(name: "Big Barn", cost: "12,000g, 450 wood, 200 stone", use: "Goats")
Building.create!(name: "Deluxe Barn", cost:"25,000, 550 wood, 300 stone", use: "Sheep, Pigs")
Building.create!(name: "Coop", cost: "4,000g, 300 wood, 100 stone", use: "Chickens")
Building.create!(name: "Big Coop", cost: " 10,000g, 400 wood, 150 stone", use: "Ducks, Dinosaurs")
Building.create!(name: "Deluxe Coop", cost: "20,000g, 500 wood, 200 stone", use: "Rabbits")



Crop.create!(name: "Coffee Bean", season: "Spring, Summer", grow_time: "10 days, regrowth 2", sell_price: "15-30g", uses: "inedible, coffee", cost: "2,500g from traveling cart, or from dust sprite", stardewvalley_id: 1)
Crop.create!(name: "Hops", season: "Summer", grow_time: "11 days, regrowth 1", sell_price: "25-50g", uses: "Restores 45-117 energy, 20-52 health, used in Pale Ale")
Crop.create!(name: "Grape", season: "Fall", grow_time: "10days, regrowth 3", sell_price: "80-160g", uses: "Restores 38-98 energy, 17-44 health, used in Summer Seeds, Summer Foraging Bundle & Loved gift for Vincent")
Crop.create!(name: "Pineapple", season: "Summer", grow_time: "14days, regrowth 7", sell_price: "300-600g", uses: "Restores 138-358 energy, 62-162 health, used in Tropical Curry")


Festival.create!(name: "Egg Festival", date: "Spring 13", time_location: "Pelican Town Square 9am-2pm", description: "Search for eggs around town with the other villagers. Start by talking to mayor lewis. Collect 9+ eggs or else abigail wins! Reward is a Straw Hat , or 1000g if you already have a straw hat. Ends after Egghunt is finished.", purchases: "Lawn Flamingo, Plush bunny, Seasonal Plants, Strawberry Seeds", stardewvalley_id: 1)
Festival.create!(name: "Flower Dance", date: "Spring 24", time_location: "Cindersap Forest 9am-2pm", description: "Player can dance with one of the bachelors/bachelorettes. Player must talk to the one they want twice & have at least 4 hearts of friendship. Dancing will increase friendship by 1heart. Event Ends after the dance is performed.", purchases: "Dandelion, Daffodil, Tub o' Flowers, Seasonal Decor, Seasonal Plants, Rarecrow #5")
Festival.create!(name: "Luau", date: "Summer 11", time_location: "Beach 9am-2pm", description:"Player can bring an ingredient to put into the potluck Soup. The outcome may increase or reduce friendship points with ALL villagers. Ends after governer tastes soup.", purchases: "Wall Palm, Jungle Decal, Ceiling Leaves, Totem Pole, Starfruit, Plain Torch")
Festival.create!(name: "Dance of the Moonlight Jellies", date: "Summer 28", time_location: "Beach 10pm-12am", description: "Villagers gather at the docks to watch the migrating jellyfish.", purchases: "None.")


Quest.create!(quest_type: "Story Quest", name: "Introductions", description: "	It would be a nice gesture to introduce yourself around town. Some people might be anxious to meet the new farmer.", started_by: "	Introductory quest", requirements: "28 people greeted", rewards: "100 Friendship Points(2/5 of a heart with known NPCs)", stardewvalley_id: 1, completed: true)
Quest.create!(quest_type: "Help Wanted", name: "Gathering", description:"Clint will ask the player to collect copper, iron, or gold ores. Robin will ask the player to gather wood or stone.", started_by: "Bulletin Board outside Pierres", requirements: "Collect requested items", rewards: "Keep items")
