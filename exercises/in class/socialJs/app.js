let newYorker = {
    name: "Marv",
    age: 31,
    boroughsLived: [
        {
            manhattan: ["Harlem", "Spanish Harlem"]
        },
        {
            queens: ["Jackson Heights", "Corona", "College Point",]
        }
    ],
    favoriteRestaurants: [
        {
            mikeAndMaggies: ["Garlic knots", "pepperoni slice"]
        }
    ],
    interests: [
        {
            clothing: [
                {
                    nike: ["Jordans", "Uptowns", "Sb Dunks"]
                },
                {
                    adidas: ["track pants", "shell tops", "beanies"]
                }
            ],
            videoGames: [
                {
                    rockstarGames: ["Bully", "GTA IV", "Manhunt"]
                },
                {
                    eaSports: ["Apex Legends"]
                }
            ],
            movies: [
                {
                    Marvel: ["Avengers", "Ant-Man", "Dr.Strange", "Iron-man", "Spider-man"]
                },
                {
                    Pixar: ["UP", "Toy-Story"]
                }
            ]
        }
    ],
    nameAge: function() {
        return this.name + " " + this.age;
        }
}

newYorker.yearsLivedInCity = 29;
newYorker.numberOfTimbs = 6;
newYorker.boroughsLived[0].manhattan.push('soho')
newYorker.interests[0].videoGames[1].eaSports.push('Battlefield IV')

console.log(newYorker.interests[0].videoGames)