// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
      const data = JSON.parse(xhr.responseText);
      poke = data.objects[0].pokemon
    for (let i = 0; i < poke.length; i++){
        document.getElementById('name').innerHTML += `<p>${poke[i].name}</p>`
    }

      
      
      console.log(poke)
    }
}

xhr.open('GET', 'https://api.vschool.io/pokemon')

xhr.send()