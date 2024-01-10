import Link from "next/link"
import { projects } from "../api/hardData"

function ProjectList() {
  return (
    <div>
      <h2>Notable projects I&apos;ve worked on</h2>
      {projects.map(p => (
        <div key={p.id}>
          <h3><Link href={'/projects/' + p.id}>{p.name}</Link></h3>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
