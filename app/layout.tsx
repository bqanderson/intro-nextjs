import Link from 'next/link'
import './globals.css'
import localFont from 'next/font/local'
import PrelineScript from './components/PrelineScript'

const recursive = localFont({
  src: './assets/fonts/Recursive_VF_1.085.woff2',
  display: 'swap',
  weight: '350 1000',
  style: 'oblique 0deg 14deg',
  variable: '--vf-recursive'
})

export const metadata = {
  title: 'My First Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/todos', label: 'Todo List' },
  ]

  return (
    <html lang="en">
      <body className={`${recursive.variable}`}>
        <header className='flex justify-between items-center h-xl py-xs px-lg bg-slate-200 border border-slate-300'>
          <h1 className='text-lg text-slate-700'>
            Todo List <span className='text-base text-slate-400'>v 1.0.0</span>
          </h1>
          <nav>
            <ul className='flex items-center divide-x divide-slate-500'>
              { links.map( link => (
                <li className='text-slate-700 px-xs transition-all hover:link-hover' key={ link.href }>
                  <Link href={ link.href }>{ link.label }</Link>
                </li>
              )) }
            </ul>
          </nav>
        </header>
        <section className='px-2xl py-md'>
          { children }
        </section>
      </body>
      <PrelineScript />
    </html>
  )
}
