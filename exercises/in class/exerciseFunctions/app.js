// let sumOf = function (numOne, numTwo) {
//     return numOne + numTwo;
// }

// console.log(sumOf(45,27))

// let greater = function (numOne, numTwo, numThree) {
//     return Math.max(numOne, numTwo, numThree);
// }

// console.log(greater(100,45,27))

// let oddEven = function(num) {
//     if (num % 2 === 0) {
//         return "is even"
//     } else {
//         return "is odd"
//     }
// }

// console.log(oddEven(42))

// let funcConcat = function(str) {
//     if (str.length <= 20) {
//         return str.concat(str)
//     } else if (str.length >= 20) {
//         return str.slice(0, str.length / 2)
//     }
// }

// console.log(funcConcat("cat in the hat got many tickets!"))

var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        arr = []
        arr.push(a)
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

console.log(looping(7))
console.log(arr)

const fizzBuzz (num) => {
    console.log ("hello")
}