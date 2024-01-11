import Link from 'next/link'
import { useRouter } from 'next/router'

import Name from './Name'

function Header() {
  const { pathname } = useRouter()
  
  return (
    <header className="navbar">
      {pathname !== '/' && <Link href="/"><Name className="navbar_logo" /></Link>}

      {/* TODO: Burger on mobile */}
      <nav>
        <ul>
          {pathname !== '/' && <li><Link className="navbar_link" href='/'>Home</Link></li>}
          <li><Link className={(pathname === '/projects' || pathname === '/projects/[id]') ? "navbar_link current" : "navbar_link"} href='/projects'>Projects</Link></li>
          <li><Link className={pathname === '/about' ? "navbar_link current" : "navbar_link"} href='/about'>About Me</Link></li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header
