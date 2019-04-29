const readlineSync = require('readline-sync')

// let answer = readlineSync.keyInYN('Do you like tacos with nutella?')


// let crazy;
// if(answer){
//    crazy = readlineSync.keyInYN('Are you cray cray')
// } else {
//     console.log('bye')
// }

// if(crazy){
//     console.log('Me too')
// } else {
//     console.log('bye')
// }

const states = ['California', 'Oregon', 'Wyoming', 'Hawaii', 'New York', 'Florida', 'North Dakota']



let gameOver = false

while(!gameOver){
    let index = readlineSync.keyInSelect(states, 'Which state should we sell to Canada?')
    if(states[index] !== 'Florida'){
        console.log('Wrong answer, guess again.')
        console.log(`Sorry yo, not a good idea to sell ${states[index]}`)
    } else {
        gameOver = true
        console.log('Good idea! Good Bye')
    }
}