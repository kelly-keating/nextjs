import ProjectList from "../components/ProjectList"
import { Project } from "../models/projects"

interface Props {
  projects: Project[]
}

export default function Home({ projects }: Props) {
  return (
    <main>
      <div className="main_container">
        <img
          className="main_name"
          src="/name.png"
          alt="Kelly Keating Logo"
        />
        <h2 className="main_subtitle">Kick ass web dev</h2>
      </div>
      
      {/* <ProjectList projects={projects} /> */}
      <div className="social_list">
        <div>GitHub</div>
        <div>LinkedIn</div>
      </div>

      <div className="version">
        <p>v0.0.1</p>
      </div>
    </main>
  )
}
