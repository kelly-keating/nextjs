import { useRouter } from "next/router"
import { projects } from "../../api/hardData"

import Page404 from "../404"
import InProgress from "../../components/InProgress"

export default function Project() {
  const router = useRouter()
  const id = router.query.id

  const proj = projects.find(p => p.id === id)

  if(!proj) return <Page404 />

  return (
    <div className="projects_container">
      <h2>{proj.name}</h2>

      <InProgress />
    </div>
  )
}
