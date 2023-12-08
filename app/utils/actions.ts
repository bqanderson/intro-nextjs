'use server'

import db from '@/app/utils/db'
import { TodoItem } from './todos.model'
import { revalidatePath } from 'next/cache'

export const createNewTodo = async (data: FormData) => {
  const newTodo: TodoItem = await db.todo.create({
    data: {
      content: data.get('content') as string,
    }
  })

  revalidatePath('/todos')
}

export const completeTodo = async (id: string, todoItem: TodoItem) => {
  await db.todo.update({
    where: { id },
    data: {
      isCompleted: !todoItem.isCompleted,
    },
  })

  revalidatePath('/todos')
}

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: { id },
  })

  revalidatePath('/todos')
}
