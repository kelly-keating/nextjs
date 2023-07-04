import '../styles/index.scss'

import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Project } from '../models/projects'

const projects = [
  { id: 1, name: 'gitmaster', image: '', blurb: '' },
  { id: 2, name: 'video feeder', image: '', blurb: '' },
  { id: 3, name: 'watchr', image: '', blurb: '' },
  { id: 4, name: 'easy-budget', image: '', blurb: '' },
  { id: 5, name: 'curriculum', image: '', blurb: '' },
] as Project[]

const MyApp = ({ Component, pageProps }) => {
  // TODO: find a better way to resolve hydration issues
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  return mounted ? (
    <Layout>
      <Component {...pageProps} projects={projects} />
    </Layout>
  ) : <></>
}

export default MyApp
