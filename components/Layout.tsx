import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kelly Keating',
  description: 'Personal page of the amazing web developer Kelly Keating',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header>Kelly - Dev</header> */}
        {/* <nav>
          <Link href='/'>Home</Link>
          <Link href='/contact'>Other page</Link>
        </nav> */}
        {children}
      </body>
    </html>
  )
}
