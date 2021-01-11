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

  set completed(todoId) {
    const searchTodo = todosArray.find(todo => todo.id === todoId)

    searchTodo.completed = true
  }

  set remove (todoId) {
    const removeTodo = todosArray.findIndex(todo => todo.id === todoId)

    removeTodo > -1 ? todosArray.splice(removeTodo, 1) : null
  }
}

const todo = new Todos();

todo.add = "Abdulloh"
todo.add = "Abdurahmon"
todo.add = "Muhammadbobur"
todo.add = "Muhammadbobur"

todo.completed = 2 // id bilan murojat qilamiz

todo.remove = 1

console.log(todosArray);