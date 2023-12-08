import TodoList from '@/app/components/TodoList'
import db from '@/app/utils/db'
import { resolve } from 'path'

const getTodoList = async () => {
  await new Promise((resolve) => setTimeout(() => resolve('200'), 1000))
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
