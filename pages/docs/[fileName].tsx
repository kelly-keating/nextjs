import Markdown from 'react-markdown'
import { getFileContent, getFileNames } from "../../api/docs"

function Doc({ fileContents, fileName }) {
  console.log(fileContents)

  return (
    <div className="docs_container">
      <h3>{fileName}</h3>
      <div>
    	  <Markdown>{fileContents}</Markdown>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = await getFileNames()
  const paths = files.map((fileName) => ({
      params: { fileName },
  }))
  return  { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fileContents = await getFileContent(params.fileName)
  return {
    props: {
      fileContents,
      fileName: params.fileName,
    }
  }
}

export default Doc
