window.addEventListener('click', function(){
    console.log(counter)
    document.getElementById('p')
    p.innerText = counter++

    let timeLeft = 30;
    let elem = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (timeLeft === 0) {
            clearTimeout(timerId);
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining ';
            timeLeft--;
            
        }
    }

})
let counter = 0