let form = document.addTodo
let todoList = []

axios.get('https://api.vschool.io/marv/todo/').then((response)=>{
    displayToDo(response.data)
})
    function displayToDo(todos){
        todos.forEach(todo => {
            let parentDiv = document.createElement('div')
            let titleH2 = document.createElement('h2')
            let description = document.createElement('p')
            let price = document.createElement('p')
            let imgURL = document.createElement('img')

            titleH2.innerText = todo.title
            description.innerText = todo.description
            price.innterText = todo.price
            imgURL.innterText = todo.imgURL

            parentDiv.appendChild(titleH2)
            parentDiv.appendChild(description)
            parentDiv.appendChild(price)
            parentDiv.appendChild(imgURL)
            document.getElementById('container').appendChild(parentDiv)
            
            if(todo.completed === true){
                titleH2.style.textDecoration = "line-through"
                description.style.textDecoration = "line-through"
            }
        })
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        let newTitle = form.title.value
        let newDescription = form.description.value
        let newPrice = form.price.value
        let newImg = form.imgURL.value

        let newObject = {
            title: newTitle,
            description: newDescription,
            price: newPrice,
            imgURL: newImg
        }
        postTodo(newObject)
    })

    const postTodo = (newTodo) => {
        axios.post('https://api.vschool.io/marv/todo/', newTodo).then((response)=>{
            todoList.push(response.data)
            displayToDo(todoList)
        })
    }

// localStorage.setItem('isAuth', true)
// localStorage.setItem('isAuth')