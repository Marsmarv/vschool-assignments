document.getElementById('square').addEventListener('mouseover', function(){
    this.style.backgroundColor = ("blue")
})

document.getElementById('square').addEventListener('mousedown', function(){
    this.style.backgroundColor = ("red")
})


document.getElementById('square').addEventListener('mouseup', function(){
    this.style.backgroundColor = ("yellow")
})


document.getElementById('square').addEventListener('dblclick', function(){
    this.style.backgroundColor = ("green")
})


window.addEventListener('scroll', function(){
    document.getElementById('square').style.backgroundColor = ("orange")
})

window.addEventListener('keypress', function(b){
        if(b.key === 'b'){
        // if(b.which === b.charCode 66){
        document.getElementById('square').style.backgroundColor = ("blue")
    } else if (b.key === 'y'){
        document.getElementById('square').style.backgroundColor = ("yellow")
    } else if (b.key === 'r'){
        document.getElementById('square').style.backgroundColor = ("red")
    } else if (b.key === 'g'){
        document.getElementById('square').style.backgroundColor = ("green")
    } else if (b.key === 'o'){
        document.getElementById('square').style.backgroundColor = ("orange")
    } 
})