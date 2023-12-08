import { TodoItem } from '@/app/utils/todos.model'
import Todo from './Todo'

const TodoList = ({ todoList }: { todoList: TodoItem[] }) => (
    <div className='pt-sm'>
      { todoList.map(todo => (
        <Todo key={ todo.id } todo={ todo } />
      ))}
    </div>
)

export default TodoList
