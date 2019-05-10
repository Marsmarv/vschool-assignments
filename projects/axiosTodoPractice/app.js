let form = document.addTodo
let todoList = []

axios.get('https://api.vschool.io/marv/todo/').then((response)=>{
    todoList = response.data
    displayToDo(response.data)
})

function displayToDo(todos, updated){
    if(updated){
        document.getElementById('container').innerHTML = ''
    }

    todos.forEach(todo => {
        let parentDiv = document.createElement('div');
        let titleH2 = document.createElement('h2');
        let description = document.createElement('p');
        let price = document.createElement('p');
        let imgUrl = document.createElement('img');
        let delBtn = document.createElement('button')
        let checkBox = document.createElement('input')
        
        imgUrl.style.height = "100px"

        parentDiv.className = 'todoBox'
        checkBox.setAttribute('type', 'checkbox')

        titleH2.innerText = todo.title;
        description.innerText = todo.description;
        price.innerText = `$${todo.price}`;
        imgUrl.src = todo.imgUrl;
        delBtn.innerText = 'delete'

        delBtn.addEventListener('click', function(){
            parentDiv.style.display = 'none';
            axios.delete(`https://api.vschool.io/marv/todo/${todo._id}`);
        })

        checkBox.addEventListener('click', function(e){
            e.preventDefault()
            checkTodo(todo)
            axios.get('https://api.vschool.io/marv/todo/').then(res => {
                todoList = res.data
            })
        })
        
        if(todo.completed){
            checkBox.checked = true
            parentDiv.style.textDecoration = 'line-through'
        } else {
            parentDiv.style.textDecoration = 'none'
        }

        parentDiv.appendChild(titleH2);
        parentDiv.appendChild(description);
        parentDiv.appendChild(price);
        parentDiv.appendChild(imgUrl);
        parentDiv.appendChild(delBtn)
        parentDiv.appendChild(checkBox)
        
        document.getElementById('container').appendChild(parentDiv)
    
    })
}

const checkTodo = oldTodo => {
    axios.put(`https://api.vschool.io/marv/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then(response => {
        const newList = todoList.map(todo => {
            if(todo._id === oldTodo._id){
                return response.data
            } else {
                return todo
            }
        })
        displayToDo(newList, true)
    })
}

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        let newTitle = form.title.value;
        let newDescription = form.description.value;
        let newPrice = form.price.value;
        let newImg = form.imgUrl.value;

        let newObject = {
            title: newTitle,
            description: newDescription,
            price: newPrice,
            imgUrl: newImg
        }
        postTodo(newObject);
    })


    const postTodo = (newTodo) => {
        axios.post('https://api.vschool.io/marv/todo/', newTodo).then((response)=>{
            todoList.push(response.data);
            displayToDo([response.data]);
        })
    }
// localStorage.setItem('isAuth', true)
// localStorage.setItem('isAuth')