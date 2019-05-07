// function collectAnimals(...arg) {  
//     console.log ([...arg])
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 

// let food = {}
// function combineFruit(fruit, sweets, vegetables){
//     return food = {fruit: [...fruit], sweets: [...sweets], vegtables: [...vegetables]}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]);
// console.log(food.fruit)

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };

//   function parseSentence(){
//     return `We're going to have a good time in ${vacation.location} for ${vacation.duration}`
//   }

//   console.log(parseSentence())

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//    let firstFav = favoriteActivities[4]
//    let secondFav = favoriteActivities[1]
//    let thirdFav = favoriteActivities[0]
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
// }

// console.log(returnFavorites(favoriteActivities))

function combineAnimals(...arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(...arr[i])
    }
    return newArr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const results = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)
console.log(results)