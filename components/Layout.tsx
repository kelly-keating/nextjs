import { Inter } from 'next/font/google'
import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Kelly Keating</title>
        <meta name="description" content="Personal page of the amazing web developer Kelly Keating" />
      </Head>

      <Header/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
