const DocsSlugPage = ({ params }: any) => {
  return (
    <h1 className='text-lg font-semibold text-slate-700 capitalize'>
      { params.slug } Documentation
    </h1>
  )
}

export default DocsSlugPage
