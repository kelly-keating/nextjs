import Link from 'next/link'
import { useRouter } from 'next/router'

import Name from './Name'

function Header() {
  const { pathname } = useRouter()
  
  return (
    <header className="navbar">
      {pathname !== '/' && <Name className="navbar_logo" />}

      {/* TODO: Burger on mobile */}
      <nav>
        <ul>
          {pathname !== '/' && <li><Link className="navbar_link" href='/'>Home</Link></li>}
          {pathname !== '/contact' && <li><Link className="navbar_link" href='/contact'>Contact</Link></li>}
          {pathname !== '/projects' && pathname !== '/projects/[id]' && <li><Link className="navbar_link" href='/projects'>Projects</Link></li>}
        </ul> 
      </nav>
    </header>
  )
}

export default Header
