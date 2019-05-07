const ask = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.red`

   ██████     ▒█████      ▄████▄      ██▓    ▄▄▄          ██▓                                         
 ▒██    ▒    ▒██▒  ██▒   ▒██▀ ▀█     ▓██▒   ▒████▄       ▓██▒                                         
 ░ ▓██▄      ▒██░  ██▒   ▒▓█    ▄    ▒██▒   ▒██  ▀█▄     ▒██░                                         
   ▒   ██▒   ▒██   ██░   ▒▓▓▄ ▄██▒   ░██░   ░██▄▄▄▄██    ▒██░                                         
 ▒██████▒▒   ░ ████▓▒░   ▒ ▓███▀ ░   ░██░    ▓█   ▓██▒   ░██████▒                                     
 ▒ ▒▓▒ ▒ ░   ░ ▒░▒░▒░    ░ ░▒ ▒  ░   ░▓      ▒▒   ▓▒█░   ░ ▒░▓  ░                                     
 ░ ░▒  ░ ░     ░ ▒ ▒░      ░  ▒       ▒ ░     ▒   ▒▒ ░   ░ ░ ▒  ░                                     
 ░  ░  ░     ░ ░ ░ ▒     ░            ▒ ░     ░   ▒        ░ ░                                        
       ░         ░ ░     ░ ░          ░           ░  ░       ░  ░                                     
          ▄▄▄          ███▄    █ ░  ▒██   ██▒    ██▓   ▓█████    ▄▄██████▓   ▓██   ██▓                        
         ▒████▄        ██ ▀█   █    ▒▒ █ █ ▒░   ▓██▒   ▓█   ▀    ▓  ██▒ ▓▒    ▒██  ██▒                        
         ▒██  ▀█▄     ▓██  ▀█  █▒   ░░  █   ░   ▒██▒   ▒███      ▒ ▓██░ ▒░     ▒██ ██░                        
         ░██▄▄▄▄██    ▓██▒  ▐▌██▒    ░ █ █ ▒    ░██░   ▒▓█  ▄    ░ ▓██▓ ░      ░ ▐██▓░                        
          ▓█   ██▒    ▒██░   ▓██░   ▒██▒ ▒██▒   ░██░  ░▒████▒      ▒██▒ ░      ░ ██▒▓░    ██▓     ██▓     ██▓ 
          ▒▒   ▓▒█░   ░ ▒░   ▒ ▒    ▒▒ ░ ░▓ ░   ░▓     ░░ ▒░ ░     ▒ ░░         ██▒▒▒     ▒▓▒     ▒▓▒     ▒▓▒ 
           ▒   ▒▒ ░   ░ ░░   ░ ▒░   ░░   ░▒ ░    ▒ ░    ░ ░  ░       ░        ▓██ ░▒░     ░▒      ░▒      ░▒  
           ░   ▒         ░   ░ ░     ░    ░      ▒ ░      ░        ░          ▒ ▒ ░░      ░       ░       ░   
               ░  ░            ░     ░    ░      ░        ░  ░                ░ ░          ░       ░       ░  
                                                                      ░ ░          ░       ░       ░  
    So... You've had a long day, 
now you're just trying to get home as soon as possible.

`)

let username = ask.question(`You're so tired... 
    you might not even remember your own name.. 
        ..what is your name? 
        
        `);

let individual = new Person(username);

function Person(name) {
    this.name = name;
    this.hp = 1000;
    this.inventory = [];
    this.hasEnergy = true;
    this.isHome = false;
    this.talk = function () {
        return Math.floor(Math.random() * 70)
    }
}

function Enemy(name, hp, num, sh) {
    this.name = name;
    this.hp = hp;
    this.sh = sh
    this.talk = function () {
        return Math.floor(Math.random() * num)
    }
}

const closeFriend = new Enemy('Close friend', 500, 50, 500)
const oldFriend = new Enemy('An old high-school friend', 400, 150, 400)
const coWorker = new Enemy('A co-worker', 250, 75, 250)
const niceStranger = new Enemy('A nice old person', 75, 25, 100)
const lostStranger = new Enemy('A tourist', 100, 125, 100)
const crazyStranger = new Enemy('A ...wtf is that ?...', 125, 200, 100)

const enemies = [closeFriend, oldFriend, coWorker, niceStranger, lostStranger, crazyStranger]

let className = ask.keyIn(`    ..${individual.name} 
..Okay it's definitely ${individual.name}... 

    well, do you remember what kind of person you are? 
press [I] for Introvert
press [E] for Extrovert
press [O] for Omnivert
press [V] for Vegan-cross-fit `, {
    limit: 'ieov'
})

function inventory() {
    if (className === "i") {
        individual.inventory = [hideAttack, hideAttack, hideAttack,]
        individual.hp -= 600
    } else if (className === "e") {
        individual.inventory = [phoneCall]
        individual.hp += 100
    } else if (className === "o") {
        individual.inventory = [phoneCall, hideAttack]
        individual.hp -= 100
    } else if (className === "v") {
        individual.inventory = [gloatHard, gloatHard]
        individual.hp -= 200
    }
}
inventory()


function gameStart() {
    let effIt = ask.keyIn(`
Okay ${individual.name} let's just try to get to the crib

*press [w] to walk down the block or [q] to quit*`, {
        limit: 'wq'
    })
    if (effIt === 'q') {
        individual.hasEnergy = false
        console.log(`
            game over.
        you've become a hermit for a week`)
    }
}
gameStart()

function walk() {
    let random = Math.floor(Math.random() * 4) + 1
    if (random < 3 && individual.hp > 0) {
        console.log(`
        You made it passed another block`)
    } else if (random >= 3 && individual.hp > 0) {
        interaction()
    } else if (random >= 0 && individual.hp < 0) {
        individual.hasEnergy = false
        console.log(`you're too tired for life right now
        game over.
            you've become a hermit for a week.`)
    }
}

function interaction() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]
    enemy.hp = enemy.sh
    let action = ask.keyIn(`
    ${enemy.name} is walking towards you. Seems like his energy is at ${enemy.hp}
            would you like to talk [t] ? 
        your energy for this shit is at ${individual.hp} `, {limit: 't'})
    if (action === 't') {
        while (enemy.hp > 0 && individual.hp > 0) {
            let random = Math.floor(Math.random() * 4)

            if (individual.hp <= 0) {
                individual.hasEnergy = false
                console.log(`you're too tired for life right now
                game over.
                    you've become a hermit for a week.`)
            } else {talk(enemy)}

            let question = ask.keyIn(`
                    keep talking [t], try your ability [s] you have
                ${individual.inventory.length} remaining `, {limit: 'tsp'})

            if (question === 't') {
                if (individual.hp <= 0) {
                    individual.hasEnergy = false
                    console.log(`you're too tired for life right now
                    game over.
                        you've become a hermit for a week.`)
                } else {talk(enemy)}
            } else if (question === 's') {
                    specialAttack(enemy)
            }
            if (enemy.hp <= 10 && random === 2) {
                console.log(`your energy is at: ${individual.hp}
                conversation was not bad + 150`)
                individual.hp += 150
                console.log(`
                    ${enemy.name} gave you the confidence for a special attack `)
                individual.inventory.push(individual.inventory[0])
                console.log(`you have ${individual.inventory.length} now
            and your energy for this shit is at ${individual.hp}`)
            }
        }
    }
    else if (individual.hp <= 0) {
        individual.hasEnergy = false
        console.log(`Whatever
            game over...`)
    }
}

function specialAttack(enemy) {
    if (individual.inventory.length !== 0) {
        switch (individual.inventory[0]) {
            case hideAttack:
                hideAttack(enemy)
                break;
            case phoneCall:
                phoneCall(enemy)
                break;
            case gloatHard:
                gloatHard(enemy)
                break;
        }
    }
}

function hideAttack(enemy) {
    let random2 = Math.floor(Math.random() * 3)
        if (random2 <= 1) {
            enemy.hp -= 1000
            console.log(`
            You found a gap in the conversation!
                you've successfully walked away!
                `)
            individual.inventory.pop()
        }
    else if (random2 !== 2) {
            console.log(`
            special attack did not work.
            conversation goes on...
            `)
        }
}

function phoneCall(enemy) {
    let random2 = Math.floor(Math.random() * 6)
        if (random2 < 1) {
            enemy.hp -= 1000
            console.log(`
            You realized to had to make a phone call!
                you've picked your phone up and walked away!
                `)
            individual.inventory.pop()
        }
    else if (random2 !== 2) {
            console.log(`
            special attack did not work.
            conversation goes on...
            `)
        }
}

function gloatHard(enemy) {
    let random2 = Math.floor(Math.random() * 4)
        if (random2 === 2) {
            enemy.hp -= 1000
            console.log(`
            You started talking about cross-fit!
                you also started talking about eating vegan and they walked away!
                `)
            individual.inventory.pop()
        }
    else if (random2 !== 2) {
            console.log(`
            special attack did not work.
            conversation goes on...
            `)
        }
}

function talk(enemy) {
    if (individual.hp <= 0) {
        individual.hasEnergy = false
        console.log(`you're too tired for life right now
        game over.
            you've become a hermit for a week.`)
    }

    let random = Math.floor(Math.random() * 25)
    if (random === 1) {
        console.log(`
        ...there's an awkward silence... 
        your hp: ${individual.hp}...`)
        individual.hp -= 200
        console.log(`is now...${individual.hp}`)
    } else if (random > 1 && enemy.hp > 0) {

        if (individual.hp <= 0) {
            individual.hasEnergy = false
            console.log(`you're too tired for life right now
            game over.
                you've become a hermit for a week.`)
        }

        enemy.hp -= individual.talk()
        individual.hp -= enemy.talk()
        console.log(`
        ${enemy.name} is talking your ear off.
            your energy for this shit is at ${individual.hp}.
        you said a couple things too. ${enemy.name}'s hp is at ${enemy.hp} `)
    }
}

let counter = 0

function gameWon() {
    if (counter === 13) {
        console.log(`You've made it home
            rest up, you have another long day tomorrow.
        Good job.`)
        individual.isHome = true
    }
}

while (!individual.isHome && individual.hasEnergy === true) {
    let action = ask.keyIn(`
                                                you've taken ${counter} steps
    Walk up another block press [W], to print inventory press [p], to quit press [q] `, {
        limit: "wpq"
    })
    if (action === 'w' && individual.hp > 0) {
        walk()
        counter++
        gameWon()
    } else if (action === "p") {
        printInventory()
    } else if (action === "q") {
        individual.hasEnergy = false
        console.log(`game over.
        you've become a hermit for a week`)
    } else if (action === 'w' && individual.hp < 0) {
        individual.hasEnergy = false
        console.log(`
    sike..
        game over.
            you've become a hermit for a week
            `)
    }
}

function printInventory() {
    switch (individual.inventory[0]) {
        case hideAttack:
            console.log(`
            you can still try to use a Ninja dip,
            ${individual.inventory.length} more remaining.`)
            break;
        case phoneCall:
        console.log(`
        you can still make a phone call,
        ${individual.inventory.length} more remaining.`);
        break;
        case gloatHard:
        console.log(`
        you can still try getting someone into cross-fit
            and
        ${individual.inventory.length} more remaining.`);
        break;
    }
}