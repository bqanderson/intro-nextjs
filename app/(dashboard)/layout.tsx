const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className='text-lg font-semibold'>Todo List</h1>
      { children }
    </div>
  )
}

export default DashboardLayout
