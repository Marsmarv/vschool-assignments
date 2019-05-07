// const name = "John"
// let age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//              pet.name = "fluffy"
//         } else {
//               pet.name = "spot"
//         }

//         petObjects.push(pet)
//     }
//     return petObjects
// }
// console.log(runForLoop());

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return carrots.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// const mapVegetables = arr =>{
//     return carrots.map(carrot => {
//         return { type: "carrot", name: carrot}
//     })
// }

// console.log(mapVegetables());

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)
// }

// console.log(filterForFriendly(people))

// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

// doMathSum = (a, b) => {
//     return a + b
// }

// console.log(doMathSum(4,4));

// let produceProduct = (a,b) => a + b;
// console.log(produceProduct(4,4))



// printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
//     return "hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?"
// }

// console.log(printString())

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

//  filterForDogs = arr => {return arr.filter(animal => animal.type === "dog" ? true : false )}
//  console.log(filterForDogs(animals))

// temp = (location, name) => {
//     return `    Hi ${name}!
    
//     Welcome to ${location}.
    
//     I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
// }

// console.log(temp("Brazil", "Marv"))