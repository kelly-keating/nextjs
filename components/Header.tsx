import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Cross as Burger } from 'hamburger-react'

import Name from './Name'

function Header() {
  const { pathname } = useRouter()
  const [isOpen, setOpen] = useState(false)
  
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  
  return (
    <header className="navbar">
      {pathname !== '/' && <Link className="navbar_logo__link" href="/"><Name className="navbar_logo" /></Link>}
      <nav>
        <button className='hamburger-react__button' onClick={() => setOpen(!isOpen)}>
          <p>Menu</p>
          <Burger toggled={isOpen}  duration={0} />
        </button>
        <ul className={isOpen ? 'open' : 'closed'}>
          {pathname !== '/' && <li><Link className="navbar_link" href='/'>Home</Link></li>}
          <li><Link className={(pathname === '/docs' || pathname === '/docs/[fileName]') ? "navbar_link current" : "navbar_link"} href='/docs'>Docs</Link></li>
          <li><Link className={(pathname === '/projects' || pathname === '/projects/[id]') ? "navbar_link current" : "navbar_link"} href='/projects'>Projects</Link></li>
          <li><Link className={pathname === '/about' ? "navbar_link current" : "navbar_link"} href='/about'>About Me</Link></li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header
