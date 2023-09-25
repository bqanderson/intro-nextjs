import { Fragment } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <h1 className='text-lg font-semibold text-slate-700'>Todo List</h1>
      { children }
    </Fragment>
  )
}

export default DashboardLayout
