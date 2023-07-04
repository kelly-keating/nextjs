import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
      <div className={inter.className}>
        <Head>
          <title>Kelly Keating</title>
          <meta name="description" content="Personal page of the amazing web developer Kelly Keating" />
        </Head>
        {/* <header>Kelly - Dev</header> */}
        {/* <nav>
          <Link href='/'>Home</Link>
          <Link href='/contact'>Other page</Link>
        </nav> */}
        {children}
      </div>
  )
}
