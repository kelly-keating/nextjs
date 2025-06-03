import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { getFileNames } from '../../api/docs'

function Docs({ files }) {
  return (
    <div className='docs_container'>
      <h2>Docs</h2>
      <div>
        {files.map((fileName) => (
          <div key={fileName} className='doc_tile'>
            <h3>
              <FaChevronRight />
              <Link href={'/docs/' + fileName}>{fileName}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = await getFileNames()
  return {
    props: {
      files,
    },
  }
}

export default Docs
