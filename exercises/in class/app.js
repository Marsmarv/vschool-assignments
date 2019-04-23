// camelcase
var myVariableIsNamedVar = 'This is my variable'

// Whitespace - isn't read in Javascript
var myVar = 'stuff'
if(myVar==='things'){
    console.log('cool')
} else {
    console.log('dumb')
}


// Primitive Data Types
    // strings
    // numbers
    // booleans
var textBody = 'whatever'
var numbers = 4
var foo = true 

// Complex Data Type
    // arrays 
    // objects


// ----------------------
//for loops ---- used to loop a specific number of times

// for(defining variable; condition; incrementing or decrementing our variable ){
    // code to run on each loop
// }

// for(var i = 0; i <= 10;i++){
//    console.log(i)
// }

// //numbers, booleans, strings --- primitive data types
// let num = 1
// num = num + 1

// //array, object, functions --- complex data types
// const arr = []

// const nicknames = ['sport', 'buckaroo', 'big daddy', 'champ', 'partner', 'fam']

// for(let i = nicknames.length-1; i >= 0; i--){
//     console.log(nicknames[i])
// }

// for(let i = 1; i < nicknames.length;i += 2){
//     console.log(nicknames[i])
// }




//while loops --- used to loop an unspecified number of times


// while(condition){
//     run this code until condition is false
// }

// let question = prompt('Do you still want to play?')

// while(question === 'yes'){
//     console.log('you are playing')
//     question = prompt('Do you still want to play?')
// }

// let num = 0 

// while(num <= 10){
//     console.log(num)
//     num++
// }


// const animals = ['jaguarundi', 'owl', 'fox', 'lion', 'jelly fish', 'penguin']

// for(let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }


// for(let i = 0; i < booleansArr.length; i++){
    //     if(booleansArr[i] === true){
        //         console.log("it's true!")
        //     } else {
            //         console.log("Shucks, not true...")
            //     }
            // }
            
            const someOtherBooleanArray = [true, false, true, true, false, true, false, false, true]

            function countTruths(arr){
                let numOfTruths = 0
                for(let i = 0; i < arr.length; i++){
                    if(arr[i] === true){
                        numOfTruths++
                    }
                }
                return numOfTruths
            }
            
            
            
            
            
            
            countTruths([true, false, true, true, false, true, false, false, true])
            
            const objArray = [{name: 'bob'}, {name: 'fred'}, {name: 'barney'}]
            
            for(let i = 0; i < objArray.length; i++){
                console.log(objArray[i].name)
            }

            const arr = ['garfield', 'jon', 'odie']


            //objects 
            //collection of properties & values
            
            const student = {
                name: 'Shoeless Joe Jackson',
                studentId: 'jabsfaijsdhuy3342345jb',
            
            }
            
            //object ref, dot & brackets
            
                const newStudent = student
                student.name = 'Bob'
                newStudent.studentId = 12
                // console.log(newStudent)
            
            //pass by ref / immutable
            
            //methods
            
                const pizza = {
                    doughTypes: ['wheat', 'white'],
                    doughSize: ['thin', 'deep dish'],
                    price: 15,
                    toppings:[],
                    isCooked: false,
                    cookPizza: function(){
                         this.isCooked = true
                    }
                }
            
                function addProperty(prop, val, pizza){
                    pizza[prop] = val
                    return pizza
                }
            
                pizza.doughSize.push('large')
                const newPizzaSvc = addProperty('delivery', false, pizza)
                
            
            //this
            
            //constructor
            
            //pizzafactory
            
            function PizzaFactory(doughTypes, toppings, price = 5.49){
                this.doughTypes = doughTypes;
                this.price = price;
                this.toppings = toppings;
            }
            
            const newPizza = new PizzaFactory(['wheat, rye'], 1000, 'anchovies')
            const otherPizza = new PizzaFactory(['cardboard'], 'hawaiian')
            
            console.log(otherPizza)

//String Methods 

function speak (){
    console.log('hello')
}

// speak()

const person = {
    age: 52,
    name: 'Jim',
    speak: function(){
        console.log('I am a method')
    }
}

// person.speak()

//.concat

let str1 = 'I am a '
let str2 = 'dog coder'

// console.log(str1.concat(str2))
// console.log(str1 + str2)

//.indexOf
let myStr = 'I am a string and I am better than you'

let ind = myStr.indexOf('better')

//.slice

// console.log(myStr.slice(ind, ind + 6))
// console.log(myStr.slice(18))
// console.log(myStr.slice(-3))
// console.log(myStr)

//.toUpperCase

// console.log(myStr.toUpperCase())

//.split

const myStrArr = myStr.split(' ')
myStrArr.push('new words')
console.log(myStrArr)

//.toLowerCase

// console.log(myStr.toLowerCase())

//Nesting through objects
// var person = {
//   name: "Johnny",
//   age: 93,
//   hobbies: [{
//     name: "Kite Boarding",
//     gear: ["Kite", "Board", "Wind"],
//   },{
//     name: "Bird Watching",
//     gear: ["Binoculars", "Patience", "Eyesight", "Bird Guide", "Bird Person", "Shotgun"],
//     watch: function(){
//       console.log("I'm watching you birds")
//     }
//   },{
//     name: "Backpacking",
//     gear: ["Backpack backpack"],
//   }]
// }

//String Methods


const str = "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."

// .slice()

// let newStr = str.slice(11, 14)

// console.log(newStr)

// .indexOf(str to find, starting point in str)

// let ind = str.indexOf('and', str.indexOf('and')+ 1)

// let newStr = str.slice(ind, ind + 10) 

// console.log(newStr)

// .split()

const newArr = str.split(' ')
const ind = newArr.indexOf('1960s')
newArr.splice(ind,1,'1950s')
const newStr = newArr.join(' ')
console.log(newStr)


//push(item[s] you want to add) -- add items to the END of your array

// modifies original array
// returns length of new array

// const arr = [1,2,3,4]

// let returnedArr = arr.push(9)

// console.log(arr)
// console.log(returnedArr)

//pop() --- removes last item in an array

// modifies original array
// returns item that got removed

// const arr = [1,2,3,'cat']

// const returnedArr = arr.pop()

// console.log(arr)
// console.log(returnedArr)

//shift() --- removes first item from an array

// modifies original array
// returns item that got removed

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.shift()

// console.log(arr)
// console.log(returnedArr)

//unshift(item[s] you want to add) --- adding new items to beginning of the array

// modifies the original array
// length of the new array

// const arr = ['end', 'middle', 'what??']

// const returnedArr = arr.unshift('beginning', 9, ['any data types'])

// console.log(arr)
// console.log(returnedArr)


// splice(startingIndex, NumberofItemsToRemove, Items to add) --- allows to add or remove item(s) from a specified location in an array

// modifies original array
// returns an array of the items that got removed

// let str = 'I am a string'
// const arr = ['dog', 'cat', 'mouse', 'rat']

// const returnedArr = arr.splice(1,3)

// const newArr = str.split(' ')
// newArr.splice(3, 1, 'array')
// console.log(newArr.join('\n'))

// console.log(arr)
// console.log(returnedArr)


// slice(startingIndex, endingIndex) --- grabs item(s) from an array

// does not modify the original array
// returns the items that you sliced

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.slice(3,5)

// console.log(arr)
// console.log(returnedArr)


// indexOf(item you want to find the index of, startingIndex) --- finds the index of a specified item

// does not modify the original array
// returns the index of the specified item

// const arr = [1,2,5,9, 3,4,4,6,5]

// const returnedArr = arr.indexOf(3)

// console.log(arr)
// console.log(returnedArr)

// if(arr.indexOf(9) !== -1){
//     console.log('there is a nine in that array')
// }else{
//     console.log('there are no nines')
// }

// lastIndexOf() --- finds the last occuring index of an item in an array

// does not modify the original array
// returns the index

// const arr = [1,5,2,3,4,4,5,6,5]

// const returnedArr = arr.indexOf(5,2)


// console.log(arr)
// console.log(returnedArr)


// join(separator) --- turns an array into a string

// Does not modify the original array
// Return the string that you just turned the array into

// let str = "I am a real boy"
// const arr = ['I', 'am', 'a', 'real', 'boy']

// const returnedArr = arr.join(' ')

// console.log(arr)
// console.log(returnedArr)


// reverse() --- reverses the array

// Modifies the original array
// Returns the original array

// const arr = [1,2,3,4,4,5,6,5]

// const returnedArr = arr.reverse()

// console.log(arr)
// console.log(returnedArr)

let str = 'I am a reversed string'
const myArr = str.split('')
myArr.reverse()
str = myArr.join('')
console.log(str)
Collapse