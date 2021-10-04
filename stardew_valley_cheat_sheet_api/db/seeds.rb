# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "bre", email: "irina.bearina@gmail.com", password: "testin", admin: true)
Farm.create(farm_name: "Bre's Farm", farm_type: "Woodland", pet_type: "Cat", user_id: 1)
Villager.create(name: "Abigail", birthday: "Fall 13", gifts: ["Amethyst", "Banana Pudding", "Blackberry Cobbler", "Chocolate Cake", "Pufferfish", "Pumpkin", "Spicy Eel", "Gemstones"], hearts: 14, marriage: true, stardewvalley_id: 1 )
Animal.create(name: "blue chicken", cost: 800, requirements: "Shanes 8 heart event, Coop", produce: "Egg, Large Egg", sell_price: 1040, stardewvalley_id: 1)
Building.create(name: "Big Coop", cost: "400 Wood, 150 Stone, 10,000g", stardewvalley_id: 1)
Crop.create(name: "Coffee Bean", season: "Spring, Summer", grow_time: "10 days, regrowth 2", sell_price: "15-30g", uses: "inedible, coffee", cost: "2,500g from traveling cart, or from dust sprite", stardewvalley_id: 1)
Festival.create(name: "Egg Festival", date: "Spring 13", time_location: "Pelican Town Square 9am-2pm", description: "Search for eggs around town with the other villagers. Start by talking to mayor lewis. Collect 9+ eggs or else abigail wins! Reward is a Straw Hat , or 1000g if you already have a straw hat. Ends after Egghunt is finished.", purchases: "Lawn Flamingo, Plush bunny, Seasonal Plants, Strawberry Seeds", stardewvalley_id: 1)
Quest.create(quest_type: "Story Quest", name: "Introductions", description: "	It would be a nice gesture to introduce yourself around town. Some people might be anxious to meet the new farmer.", started_by: "	Introductory quest", requirements: "28 people greeted", rewards: "100 Friendship Points(2/5 of a heart with known NPCs)", stardewvalley_id: 1, completed: true)
