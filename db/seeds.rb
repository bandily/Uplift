User.destroy_all
Avatar.destroy_all
Log.destroy_all

puts "seeding users"

User.create!(username: "brian", password: "ilovejoy", gender: "Male", age: 21, weight: 190, goal_weight: 175)

puts "seeding avatar"

for i in 1..User.all.length do 
    Avatar.create!(mouth: 0, eyes:0, hairColor:0, skinColor:0, user_id: i, hair: 0, accessory:0, image: "https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=openedSmile&eyes[]=cheery&hair[]=shortHair&accessories[]=catEars&skinColor[]=variant01&hairColor[]=variant01")
end

puts "seeding logs"

Log.create!(user_id: 1, activity_type: "Gym", activity_duration: 60, date: "Sep 22 2021", weight: 190, happiness: 5, notes: "ski[[ing legs", likes: 0)
Log.create!(user_id: 1, activity_type: "Swimming", activity_duration: 18, date: "Oct 4 2021", weight: 188, happiness: 2, notes: "I love swimming", likes: 0)
Log.create!(user_id: 1, activity_type: "Dancing", activity_duration: 12, date: "Sep 21 2021", weight: 190, happiness: 3, notes: "First time dancing!", likes: 0)
Log.create!(user_id: 1, activity_type: "Basketball", activity_duration: 45, date: "Oct 6 2021", weight: 188, happiness: 1, notes: "Dropped 30 points", likes: 0)
Log.create!(user_id: 1, activity_type: "Biking", activity_duration: 25, date: "Sep 30 2021", weight: 179, happiness: 5, notes: "", likes: 0)
Log.create!(user_id: 1, activity_type: "Jump Rope", activity_duration: 45, date: "Sep 28 2021", weight: 183, happiness: 4, notes: "Training for marathon", likes: 0)
Log.create!(user_id: 1, activity_type: "Basketball", activity_duration: 105, date: "Oct 1 2021", weight: 185, happiness: 5, notes: "this sucks", likes: 0)
Log.create!(user_id: 1, activity_type: "Gym", activity_duration: 65, date: "Oct 2 2021", weight: 191, happiness: 2, notes: "skipped legs again", likes: 0)