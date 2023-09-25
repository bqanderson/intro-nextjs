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
    <div>
      <h1 className="text-base font-semibold">Todo List Page</h1>
    </div>
  )
}

export default SettingsPage
