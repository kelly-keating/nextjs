import { Tech } from "../../models/projects"
import { useRouter } from "next/router"
import { projects, tech } from "../../api/hardData"

import Page404 from "../404"
import InProgress from "../../components/InProgress"
import { useMemo } from "react"

export default function Project() {
  const router = useRouter()
  const id = router.query.id

  const proj = projects.find(p => p.id === id)
  // TODO: sort tag style (plus bright/dark)
  const tags = proj?.tech.map((tech) => (
      <div key={tech.id} style={{
        color: tech.color || "aqua",
      }}>
        <p>{tech.text}</p>
      </div>
    )) || null

  if(!proj) return <Page404 />
  if(!proj.details) return (
    <div className="projects_container">
      <h2>{proj.name}</h2>
      <InProgress />
    </div>
  )

  // TODO: add back button
  return (
    <div className="projects_container">
      <div className="project_header">
        <h2>{proj.name}</h2>
        <div>
          {proj.url_deploy && <p>site link</p>}
          {proj.url_npm && <p>npm link</p>}
          {proj.url_github && <p>github link</p>}
        </div>
      </div>
      <div>
        <p>{proj.blurb}</p>
        {tags}
      </div>
      <div>
        <img className="project_display" src={proj.image} />
      </div>
      <div>{proj.details}</div>
    </div>
  )
}

// TODO: getStaticPaths
