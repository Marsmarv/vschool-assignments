// let sentence = "Whoa where's Kentucky";
// console.log(sentence.toUpperCase() + sentence.toLocaleLowerCase())

// function math(num) {
//     return Math.floor(num.length / 2)
// }
// console.log (math(""));

// function cut(str) {
//     return str.slice(0, str.length / 2)
// }
// console.log(cut("pigeons are crazy"));

// function half(str) {
//     return str.slice(0, str.length / 2).toUpperCase(0) + str.slice(str.length / 2).toLowerCase(str.length / 2)
// }
// console.log(half("where's the pizza"));
// console.log(half("talk like a fire starter"));
// console.log(half("do another ninja flip"));

function first(str) {
    // return str.replace(/\s+\w/g, (letter) => letter.toUpperCase()) ||didn't create this||   
    arr = str.split(" ")
    for (i = 0; i < arr.length; i++){
        str1 = arr[i][0].toUpperCase();
        str1.concat(str)
    }
}

console.log(first("big balconies and trophy wives"))
