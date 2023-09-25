import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getTodoList = async () => {
  const todoList = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc'
    }
  })

  return todoList
}

const SettingsPage = async () => {
  const todoList = await getTodoList()

  return (
    <TodoList todoList={ todoList } />
  )
}

export default SettingsPage
