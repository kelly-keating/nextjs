import { useRouter } from "next/router"
import { Project } from "../../models/projects"

interface Props {
  projects: Project[]
}

export default function Project({ projects }: Props) {
  const router = useRouter()
  const id = Number(router.query.id)

  const proj = projects.find(p => p.id === id)

  if(!proj) return (
    <h2>Project not found</h2>
  )

  return (
    <h2>{proj.name}</h2>
  )
}
