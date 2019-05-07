axios.get('https://api.vschool.io/marv/todo/').then((response)=>{
    displayToDo(response.data)
})
    function displayToDo(todos){
        todos.forEach(todo => {
            let parentDiv = document.createElement('div')
            let titleH2 = document.createElement('h2')
            let description = document.createElement('p')

            titleH2.innerText = todo.title
            description.innerText = todo.description

            parentDiv.appendChild(titleH2)
            parentDiv.appendChild(description)
            document.getElementById('container').appendChild(parentDiv)

        })
    }


// axios.post('https://api.vschool.io/marv/todo/', {title: "new Object"})