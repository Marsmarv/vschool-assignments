let form = document.todoList
let list = document.getElementById('list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nextTodo = form.newTodo.value;
    let newItem = document.createElement('li')
    newItem.innerHTML = nextTodo
    list.appendChild(newItem)
    form.newTodo.value = ''
})