import { useRouter } from "next/router"

import { projects } from "../../api/hardData"

export default function Project() {
  const router = useRouter()
  const id = router.query.id

  const proj = projects.find(p => p.id === id)

  if(!proj) return (
    <div className="projects_container">
      <h2>Project not found</h2>
    </div>
  )

  return (
    <div className="projects_container">
      <h2>{proj.name}</h2>
    </div>
  )
}
