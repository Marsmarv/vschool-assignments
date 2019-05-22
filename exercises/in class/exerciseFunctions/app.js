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

let looping = function(n) {
    let a = 1, b = 1, f = 0;
    let arr = []
    let sum = 0
    for(let i = 1; i <= n; i++) {
        arr.push(a)
        f = a + b;
        a = b ;
        b = f;
        // console.log("Fib number "+arr)
        sum = sum + arr[i] 
    }
    console.log("Sum of fibonacci sequence is " , f - 1)
    console.log(arr)
};

return looping(10)
