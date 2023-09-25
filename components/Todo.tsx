import { TodoItem } from '@/utils/todos.model'

const Todo = ( todo: TodoItem ) => {
  return (
    <div>{ todo.content }</div>
  )
}

export default Todo
