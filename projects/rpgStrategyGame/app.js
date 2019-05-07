const ask = require('readline-sync');

console.log(`   So... You've had a long day, 
now you're just trying to get home as soon as possible.
`)

let username = ask.question(`You're so tired... 
    you might not even remember your own name.. 
        ..what is your name? `);

let individual = new Person(username);

function Person(name) {
    this.name = name;
    this.hp = 1000;
    this.inventory = [];
    this.hasEnergy = true;
    this.isHome = false;
    this.talk = function() {
        return Math.floor(Math.random() * 50)
    }
}

function Enemy(name, hp, num){
    this.name = name;
    this.hp = hp;
    this.talk = function(){
        return Math.floor(Math.random()* num)
    } 
}

const closeFriend = new Enemy('Close friend',500 ,50)
const oldFriend = new Enemy('An old high-school friend' ,400 ,150)
const coWorker = new Enemy('A co-worker',250 ,75)
const niceStranger = new Enemy('A nice old person',100 ,25)
const lostStranger = new Enemy('A tourist',100 ,150)
const crazyStranger = new Enemy('A ...wtf is that actaully...',100 ,200)

const enemies = [closeFriend, oldFriend, coWorker, niceStranger, lostStranger, crazyStranger]

let className = ask.keyIn(`    ..${individual.name} 
..Okay it's definitely ${individual.name}... 
    well, do you remember what kind of person you are? 
press [I] for Introvert
press [E] for Extrovert
press [O] for Omnivert
press [V] for Vegan-cross-fit `,{limit: 'ieov'})

function inventory(){
    if(className === "i"){
        individual.inventory = [hideAttack, hideAttack, hideAttack, hideAttack]
    } else if (className === "e"){
        individual.inventory = [phoneCall, phoneCall, phoneCall]
    } else if (className === "o"){
        individual.inventory = [phoneCall, hideAttack]
    } else if (className === "v"){
        individual.inventory = [gloatHard, gloatHard]
    }
}
inventory()


function gameStart() {
    let effIt = ask.keyIn(`
Okay ${individual.name} let's just try to get to the crib
*press [w] to walk down the block or [q] to quit*`,{limit:'wq'})
    if (effIt === 'q'){
        individual.hasEnergy = false
        console.log(`game over.
        you've become a hermit for a week`)
    }
}
gameStart()





function phoneCall(){
}

function gloatHard(){
}




let counter = 0
function gameWon(){
    if (counter === 10){
        console.log(`You've made it home
        rest up, you have another long day tomorrow.
        Good job.`)
        individual.isHome = true
    }
}


while(!individual.isHome && individual.hasEnergy === true){
    let action = ask.keyIn(`
    Walk up another block press [W], to print inventory press [p], to quit press [q] `, {limit: "wpq"})
    if(action === 'w' && individual.hp > 0){
        walk()
        counter++
        gameWon()
    } else if(action === "p"){
        printInventory()
    } else if(action === "q"){
        individual.hasEnergy = false 
        console.log(`game over.
        you've become a hermit for a week`)
    } else if(action === 'w' && individual.hp <= 0){
        individual.hasEnergy = false 
        console.log(`sike..
        game over.
            you've become a hermit for a week`)
    }
    function interaction(){
        let enemy = enemies[Math.floor(Math.random()*enemies.length)]
        let action = ask.keyIn(`
        ${enemy.name} is walking towards you. Seems like his energy is at ${enemy.hp}
            would you like to talk [t] or use your specialty [s] 
            your energy for this shit is at ${individual.hp} `, {limit:'ts'})
    
            if(action === 't'){
            while(enemy.hp > 0 && individual.hp > 0){
                let random = Math.floor(Math.random()*4)
                talk(enemy)
                       let question = ask.keyIn(`
                        keep talking [t], try your ability [s] you have
                    ${individual.inventory.length} left`,{limit:'ts'})
                    
                    if(question === 't'){
                        talk(enemy)
                    } else if ( question === 's'){
                        let random2 = Math.floor(Math.random()*6)
                        if(random2 === 2){
                        specialAttack(enemy)
                        
                        } else {
                            console.log('special attack did not work.')
                        }
                    }
    
                    
    
                    if(enemy.hp <= 20 && random === 2){
                        console.log(`${enemy.name} gave you the confidence for a ${individual.inventory[0]} `)
                        individual.inventory.push(individual.inventory[0])
                        console.log(`you have ${individual.inventory.length} now`)
                    }   
                }
            } else if(action === 's'){
                specialAttack(enemy)
    
                } else if (individual.hp <= 0){
                individual.hasEnergy = false
                console.log(`Whatever
                game over...`)
            }
    
    }

    function walk() {
        let random = Math.floor(Math.random()*4)+1
        if(random < 3 && individual.hp > 0){
            console.log(`
            You made it passed another block`)
        } else if(random >= 3 && individual.hp > 0) {
            interaction()
        } else if(individual.hp < 0){
            individual.hasEnergy = false
            console.log(`you're too tired for life right now
            game over.
                you've become a hermit for a week.`)
        }
    }
    
    function talk(enemy){
        let random = Math.floor(Math.random()*25)
        if(random === 1){
            console.log(`
            ...there's an awkward silence... 
            your hp ${individual.hp}`)
            individual.hp -= 200
            console.log(`is now...${individual.hp}`)
        } else if(random > 1){
            enemy.hp -= individual.talk()
            individual.hp -= enemy.talk()
            console.log(`
            ${enemy.name} is talking your ear off.
                your energy for this shit is at ${individual.hp}.
            you said a couple things too. ${enemy.name}'s hp is at ${enemy.hp} `)
        } 
    }

    function specialAttack(enemy) {
        if(individual.inventory.length !== 0  ){
            switch(individual.inventory[0]){
                case hideAttack :
                hideAttack(enemy);
                case phoneCall :
                phoneCall(enemy);
                case gloatHard :
                gloatHard(enemy);
            }
        }
    }

    function hideAttack(enemy){
        console.log(enemy.hp)
        enemy.hp -= 400
        console.log(`special attack for 400hp
        ${enemy.hp}
        `)
        individual.inventory.pop()
    }
}

function printInventory() {
    console.log(`
    you can still try to use a ${individual.inventory[0]}
    ${individual.inventory.length} more left`)
}
