import { useEffect, useState } from 'react'

import '../styles/index.scss'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
  // TODO: find a better way to resolve hydration issues
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  return mounted ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : <></>
}

export default MyApp
