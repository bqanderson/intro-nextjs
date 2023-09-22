const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Todo List</h1>
      { children }
    </div>
  )
}

export default DashboardLayout
