// function collectAnimals(...arg) {  
//     console.log ([...arg])
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 

// let food = {}
// function combineFruit(fruit, sweets, vegetables){
//     return food = {
//         fruit: [...fruit], 
//         sweets: [...sweets], 
//         vegtables: [...vegetables]}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]);
             
// console.log(food)

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

// function product(...a) {  
//     let numbers = [...a];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     },1)
//   }

//   console.log(product(2,2,2,4,5))

// function unshift(array, ...a) {  
//     return [...a].concat(array);
//   }

// console.log(unshift([1, 2, 3, 4], 1, 2, 3, 4))

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//             firstName = name[0],
//             lastName = name[1]
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))