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

const first = function(str) {
    let arr = str.split(" ")
    newArr = arr.map((str, i)=>{
        let str1 = arr[i][0].toUpperCase();
        return str1.concat(str.slice(1))
    })
    console.log(newArr.join(" "))
}
first("big balconies and trophy wives")

