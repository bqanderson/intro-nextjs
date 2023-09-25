'use server'

import db from '@/utils/db'
import { TodoItem } from './todos.model'

export const createNewTodo = async (data: FormData) => {
  const newTodo: TodoItem = await db.todo.create({
    data: {
      content: data.get('content') as string,
    }
  })


}
