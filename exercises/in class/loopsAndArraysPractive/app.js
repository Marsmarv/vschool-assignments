// const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let count = 0
// for (i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer") {
//         count++
        
//     }
// }

// console.log(count)

// const peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

// for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see 'Mad Max' don't let HIM in")
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see 'Mad Max' don't let HER in")
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough let HIM in")
//     } else{
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough let HER in")
//     }
// }

// arr = [2, 3, 2];
// let count = 0;
// for (i = 0; i < arr.length; i++){
//     arr[i]
// }


let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let counter = 0
  officeItems.map((dumb, i)=>{
    if (officeItems[i] === "computer") {counter++}
  })
console.log(counter)

let madMax = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

madMax.map((e, i)=>{
  madMax[i].age >= 18 ? console.log(madMax[i].name + " is old enough") : console.log(madMax[i].name + " is not old enough")
})

madMax.map((e, i)=>{
  madMax[i].age >= 18 && madMax[i].gender === "male" ? console.log(madMax[i].name + " is old enough, HE is good") 
  : madMax[i].age >= 18 && madMax[i].gender === "female" ? console.log(madMax[i].name + " is old enough, SHE is good") 
  : madMax[i].age <= 18 && madMax[i].gender === "male" ? console.log(madMax[i].name + " is not old enough, HE is not good")
  : console.log(madMax[i].name + " is not old enough, SHE is not good") 
})

lightCounter = 0
arr = [2, 5, 435, 4, 3]
arr.map((light, i)=>{
lightCounter = arr[i] + lightCounter
})
lightCounter % 2 === 0 ? console.log("Light is off") : console.log('light is on')

