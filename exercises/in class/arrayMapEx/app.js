// function doubleNumbers(arr){
//     return arr.map((el) => el * 2)
//   }
  

// // console.log(doubleNumbers([2, 5, 100]));

// function stringItUp(arr){
//     return arr.map((el) => el.toString())
//   }
  
// console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr){
//      arrTwo = arr.map(el => el.toLowerCase())
//     return arrThree = arrTwo.map(el => el[0].toUpperCase() + el.slice(1))
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function namesOnly(arr){
//     return arr.map((el) => el.name )
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 

// function makeStrings(arr){
//     return arr.map(el => {
//         if (el.age > 18){
//             return el.name + " can go to the Matrix"
//         } else {
//             return el.name + " can not go to the Matrix"
//         }
//     })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 

  function readyToPutInTheDOM(arr){
    return arr.map((el) => {
        return ("<h1>"+el.name+"</h1>" + "<h2>"+el.age+"</h2>" )
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 