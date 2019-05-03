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

// let form = document.myForm;

// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     let name = form.yourName.value
//     let age = form.age.value

//     let person = {
//         name,
//         age
//     }
    
// })

let form = document.words

form.addEventListener('submit', function(e){
    e.preventDefault()

    let noun = form.noun.value
    let verb = form.verb.value
    let adverb = form.adverb.value
    let adjective = form.adjective.value

    console.log(`The ${adjective} ${noun} ${verb} ${adverb} and did other cool stuff too`) // Template Literal
    // console.log("The " + adjective + " " + noun + " " + verb + " " + adverb + " and did other cool stuff too") // old way don't do this anymore
})

let form = document.words

form.addEventListener('submit', function(e){
    e.preventDefault()

    let noun = form.noun.value
    let verb = form.verb.value
    let adverb = form.adverb.value
    let adjective = form.adjective.value

    let madLib = `The ${adjective} ${noun} ${verb} ${adverb} and did other cool stuff too` // Template Literal

    form.noun.value = ''
    form.verb.value = ''
    form.adverb.value = ''
    form.adjective.value = ''

    document.getElementById('results').innerHTML = `<h1>${madLib}</h1>`
})

// <!DOCTYPE html>
/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML Forms</title>
</head>
<body>
    
    <form name="words">
        <input type="text" placeholder="Nouns" name="noun" >
        <input type="text" placeholder="Verbs" name="verb" >
        <input type="text" placeholder="Adverb" name="adverb">
        <input type="text" placeholder="Adjective" name="adjective" >
        <button>Submit</button>
    </form>
    <div id="results">
        
    </div>
    <script src="app.js"></script>
</body>
</html> */

let form = document.cars

form.addEventListener('submit', function(event){
    event.preventDefault()
    // document.getElementById('myName').innerHTML = `<h1>${form.name.value}</h1>` // template literal

    // Checkboxes
    const cars = form.likes // NodeList
    const likedCars = []
    for(let i = 0; i < cars.length; i++){
        if(cars[i].checked){
            likedCars.push(cars[i].value)
        }
    }

    //Radio Button
    console.log(form.favorite.value)


})
Collapse




// var str = 'string';

// let strOne = 'string one';
// const strTwo = 'string two';

// var numb = 2343
// var arr = ['random string', 4545, {
//     hi: 1
// }, true, ['hi'], str, strOne]
// var foo = false
// var obj = {
//     hi: 1,
//     points: 0,
// }

// var mainHeader = ''

// var person = {
//     firstName: 'Charles',
//     lastName: 'Charlie',
//     age: 45,
// }

// var x = 9
// var y = 3

// var z = x * y

// var k = 9 % 3

// function myFunc() {
//     return k
// }

// function myNewFunc(numOne, numTwo) {
//     return numOne + numTwo
// }

// console.log(myNewFunc(3, 4))


//April 30th

/higher order functions

function greaterThan(number){
   return function(m){
       return (m > number) ? true : false
   }
}

let greaterThan10 = greaterThan(10)
let greaterThan50 = greaterThan(50)

//console.log(greaterThan50(60))
//example


const stringArr = ['cat', 'dog', 'bull']
//array methods
//map

//a map returns an array after iterating thourgh each element
console.log(arr)
// for (let i = 0; i < arr.length; i++){
//     arr[i]++
// }
//console.log(arr)

const newArr = stringArr.map((el, i, whatsThis) => {
   console.log(whatsThis)
   return el[0].toUpperCase()
} )
//create a new array, newArr, from another array arr.
//Lets iterate through each element and increment by 1 for each element
//forEach
// stringArr.forEach((el, i) => {console.log('big ' + el)} )
const arr = [5, 56, 34, 65, 2, 15]
//find
//return the first instance of item in array & returns if available
const foundItem = arr.find((el) => el < 20)
console.log(foundItem)

//May 2nd 2019
// const argumentOne = 4
// const argumentTwo = 5

// const disFunc = (parameterOne, parameterTwo) => {
//     return parameterOne + parameterTwo
// }


// disFunc(argumentOne, argumentTwo)

//reduce
//first argument: accumulator
//second argument: current value
//third argument: index
//fourth argument: source array

//argument is value or a function, passed into the functions parenthesis
//parameter is the place holder for the arguments, as you're declaring the function

// [400, 200, 100, 50].reduce((accumulator, currentValue, currentIndex, array) => {
//     if(currentIndex === 4){
//         console.log(accumulator, 'acc', currentValue, 'cv', currentIndex, 'ci', array, 'arr')
//     }
//     return accumulator - currentValue
// })

const people = [
    {
        firstName: 'Bobby',
        hairStyle: 'bald',
        favoriteColor: 'Baby Blue'
    },
    {
        firstName: 'Hank',
        hairStyle: 'crew cut',
        favoriteColor: 'red'
    },
    {
        firstName: 'Frank',
        hairStyle: 'Skullet',
        favoriteColor: 'Potato'
    },
    {
        firstName: 'Bobie',
        hairStyle: 'Afro',
        favoriteColor: 'Tomato'
    }
]

// people.sort((firstItem, secondItem) => {
//     console.log(firstItem)
//     console.log(secondItem)
//     console.log(93747474747)
//     return firstItem.firstName > secondItem.firstName
// })

// console.log(people)
// peopleArray = []

// people.map(person => {
//     peopleArray.push(person.firstName)
// })

// console.log(peopleArray)

const sayHello = () => 'Hello'
console.log(sayHello())

const sayGoodBye = () => {
    return 'Good Bye'
}
console.log(sayGoodBye())

