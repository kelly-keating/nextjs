import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

import BackButton from './BackButton'
import Footer from './Footer'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  const { pathname } = useRouter()

  return (
    <div className={inter.className}>
      <Head>
        <title>Kelly Keating</title>
        <meta
          name='description'
          content='Personal page of the amazing web developer Kelly Keating'
        />
      </Head>

      <Header />
      <main>
        <div className={pathname === '/' ? '' : 'content'}>
          {pathname !== '/' && <BackButton />}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
