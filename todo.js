const todosArray = []

class Todos {

  set add (todo) {
    this.userTodo = {
      title: todo,
      completed: false,
      id: todosArray.length + 1
    }

    todosArray.push(this.userTodo)
  }

  set completed(todo) {
    const searchTodo = todosArray.find(todos => todos.title === todo)

    searchTodo.completed = true
  }

  set remove (todo) {
    const removeTodo = todosArray.findIndex(todos => todos.title === todo)

    removeTodo > 0 ? todosArray.splice(removeTodo, 1) : ""
  }
}

const todo = new Todos();

todo.add = "Abdulloh"
todo.add = "Abdurahmon"
todo.add = "Muhammadbobur"

todo.completed = "Abdurahmon"

todo.remove = "Abdurahmon"

console.log(todosArray);