import { TodoItem } from '@/utils/todos.model'
import Todo from './Todo'

const TodoList = ({ todoList }: { todoList: TodoItem[] }) => (
    <div>
      { todoList.map(todo => (
        <Todo key={ todo.id } todo={ todo } />
      ))}
    </div>
)

export default TodoList
