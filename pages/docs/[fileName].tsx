import Markdown from 'react-markdown'
import { getFileContent, getFileNames } from '../../api/docs'

function Doc({ fileContents, fileName }) {
  return (
    <div className='docs_container'>
      <div className='markdown_container'>
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
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fileContents = await getFileContent(params.fileName)
  return {
    props: {
      fileContents,
      fileName: params.fileName,
    },
  }
}

export default Doc
