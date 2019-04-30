const readline = require("readline-sync");

let name = readline.question("What is your name? ");
console.log(name + " you have to escape");

let choices = [ "Put hand in hole", "Find the key", "Open the door" ]
let index = readline.keyInSelect(choices, 'What will you do?');

if (choices[index] === "Put hand in hole"){
    console.log(name + " is dead meat. Try again")
} else if(choices[index] === "Find the key"){
    console.log(name + " looked for the key and found it");

    let nextMove = ["Open the door", "Swallow the key", "Put hand in hole"];
    let final = readline.keyInSelect(nextMove, "Now what will you do?");
    
    if(nextMove[final] === "Open the door"){
        console.log("Wow " + name + " you have escaped!")
    } else if(nextMove[final] === "Swallow the key"){
        console.log("Welp, " + name + " now you're fucked.")
    } else if(nextMove[final] === "Put hand in hole"){
        console.log("Ya big idiot, you're dead. Try again.")
    }

} else if(choices[index] === "Open the door"){
    console.log(name + " cannot open the door without the key")
}

