import { createNewTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <form action={createNewTodo}>
      <input
      name='content'
        type='text'
        className='px-xs rounded border border-slate-400 bg-slate-200
          hover:border-sky-600 hover:bg-slate-100 
          focus:outline-none focus:border-sky-600 focus:bg-slate-100'
      />
      <button type='submit'>Add New Todo</button>
    </form>
  )
}

export default NewTodoForm
