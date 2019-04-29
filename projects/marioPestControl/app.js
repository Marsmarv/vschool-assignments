let goomba = document.getElementById('goombas')
let bobomb = document.getElementById('bobombs')
let cheep = document.getElementById('cheepcheeps')

document.getElementById('sub').addEventListener('click', function() {
    console.log( goomba.value)
    console.log( bobomb.value)
    console.log( cheep.value)
    
   let total = (+goomba.value * 5) + (+bobomb.value * 7) + (+cheep.value * 11)
    
    let answer = document.getElementById('numberValue');
    answer.innerText = "your total is: $" + total;

    goomba.value = "";
    bobomb.value = "";
    cheep.value = "";
})