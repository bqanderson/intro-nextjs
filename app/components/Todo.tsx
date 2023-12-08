'use client'
import { useTransition } from 'react'
import { completeTodo, deleteTodo } from '@/app/utils/actions'
import { TodoItem } from '@/app/utils/todos.model'

const Todo = ({ todo }: { todo: TodoItem }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div className='mb-xs p-xs rounded border border-slate-300 h-lg flex justify-between content-center'>
      <p
        onClick={() => startTransition(() => completeTodo(todo.id, todo))}
        className={`text-base cursor-pointer h-md ${todo.isCompleted ? 'text-slate-300 line-through' : 'text-slate-500 '}`}
      >
        { todo.content }
        </p>
      <button
        onClick={() => startTransition(() => deleteTodo(todo.id))}
        className='px-xs inline-flex items-center h-md text-base font-semibold
          rounded-lg border border-transparent text-red-500 hover:bg-red-100
          hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none'
      >
        Delete
      </button>
    </div>
  )
}

export default Todo
