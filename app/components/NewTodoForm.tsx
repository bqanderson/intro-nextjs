import { createNewTodo } from '@/app/utils/actions'

const NewTodoForm = () => {
  return (
    <form action={createNewTodo}>
      <input
        name='content'
        type='text'
        className='py-xs px-sm h-lg border-gray-200 rounded-lg text-base
          focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50
          disabled:pointer-events-none'
      />
      <button
        type='submit'
        className='ml-sm py-xs px-sm h-lg inline-flex items-center gap-x-2
          text-base font-semibold rounded-lg border border-transparent
          text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50
          disabled:pointer-events-none'
      >
        Add New Todo
      </button>
    </form>
  )
}

export default NewTodoForm
