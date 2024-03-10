import { getFileNames } from "../api/docs"

import Name from "../components/Name"

export default function Home({ files }) {
  console.log(files)
  return (
    <div className="main_container">
      <Name className="main_name" />
      <h2 className="main_subtitle">Kick ass web dev</h2>
    </div>
  )
}

export async function getStaticProps() {
  const files = await getFileNames()
  return {
    props: {
      files
    }
  }
}
