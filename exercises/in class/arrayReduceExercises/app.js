// function total(arr) {
//     return arr.reduce((a,b) => {
//         return a + b
//     })
//  }
 
//  console.log(total([1,2,3]));

// function stringConcat(arr) {
//     return arr.reduce((a, b) => {
//         return a.toString() + b.toString()
//         // return (d[0].toString() + d[1].toString() + d[2].toString())
//     })
//  }
 
//  console.log(stringConcat([1,2,3]));

// function totalVotes(arr) {
//     return arr.reduce((a, b) => {
//         if (b.voted === true){
//             return a = a + 1;
//         } else {
//             return a;
//         }
//     },0)    
//  }
 
//  let voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); 
// need to give an accumilator value of 0 if counting up 
// and always have an else return because if false might come back as undefined 

// function shoppingSpree(arr) {
//     return arr.reduce((a, b) => {
//         return a += b.price
//     },0) 
//  }

//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); 

//  function flatten(arr) {
//     return arr.reduce((a, b) => {
//         return [...a, ...b]
        // return a.concat(b) "also works.."
//     })    
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays));

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
    
//     return arr.reduce((a, b) => {
//         if (b.age <= 25){
//             return a += 1
//         } else{
//             return a;
//         }
//     },0)
// }

// console.log(voterResults(voters));