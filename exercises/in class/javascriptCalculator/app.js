const readlineSync = require("readline-sync");

function addition(numOne, numTwo){
    return numOne + numTwo
};
function multiplication(numOne, numTwo){
    return numOne * numTwo
};
function division(numOne, numTwo){
    return numOne / numTwo
};
function subtraction(numOne, numTwo){
    return numOne - numTwo
};

const operations = ['addition','multiplication', 'division', 'subtraction'];

let index = readlineSync.question('please enter your first number');
console.log('your first number is ' + index);
let indexTwo = readlineSync.question('please enter your second number');
console.log('your second number is ' + indexTwo);

let indexThree = readlineSync.keyInSelect(operations, 'Enter operation');
if(operations[indexThree] === 'subtraction'){
   console.log('Your number equals ', subtraction(index, indexTwo));
} else if(operations[indexThree] === 'addition'){
    console.log('Your number equals ', addition(parseInt(index), parseInt(indexTwo)));
} else if(operations[indexThree] === 'division'){
    console.log('Your number equals ', division(index, indexTwo));
} else if(operations[indexThree] === 'multiplication'){
    console.log('Your number equals ', multiplication(index, indexTwo));
};