let container = document.getElementById('container')
let valOne = document.getElementById('valone')
let valTwo = document.getElementById('valtwo')
let valThree = document.getElementById('valthree')
let valFour = document.getElementById('valfour')
let valFive = document.getElementById('valfive')
let valSix = document.getElementById('valsix')
let valSeven = document.getElementById('valseven')
let valEight = document.getElementById('valeight')

let btnone= document.getElementById('btnOne')
let btntwo= document.getElementById('btnTwo')
let btnthree= document.getElementById('btnThree')
let btnfour= document.getElementById('btnFour')

let one= document.getElementById('sectionOne')
let two= document.getElementById('sectionTwo')
let three= document.getElementById('sectionThree')
let four= document.getElementById('sectionFour')

btnone.addEventListener('click', () => {
    document.getElementById('answerOne').innerText = parseInt(valOne.value) + parseInt(valTwo.value)
    valOne.value = ""
    valTwo.value = ""
    
})

btntwo.addEventListener('click', () => {
    document.getElementById('answerTwo').innerText = valThree.value - valFour.value
    valThree.value = ""
    valFour.value = ""
    
})

btnthree.addEventListener('click', () => {
    document.getElementById('answerThree').innerText = valFive.value / valSix.value
    valFive.value = ""
    valSix.value = ""
    
    
})

btnfour.addEventListener('click', () => {
    document.getElementById('answerFour').innerText = valSeven.value * valEight.value
    valSeven.value = ""
    valEight.value = ""
    

})