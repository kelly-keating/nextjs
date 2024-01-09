import { SocialIcon } from "react-social-icons"
import { Project } from "../models/projects"

import Name from "../components/Name"
// import ProjectList from "../components/ProjectList"

interface Props {
  projects: Project[]
}

export default function Home({ projects }: Props) {
  const sexyIcon = (url) => <SocialIcon url={url} className="social_icon" fgColor="white" bgColor="black" />

  return (
    <main>
      <div className="main_container">
        <Name className="main_name" />
        <h2 className="main_subtitle">Kick ass web dev</h2>
      </div>
      
      {/* <ProjectList projects={projects} /> */}
      <div className="social_list">
        {sexyIcon("https://github.com/kelly-keating")}
        {sexyIcon("https://linkedin.com/in/kelly-keating-nz/")}
      </div>

      <div className="version">
        <p>v0.0.4</p>
      </div>
    </main>
  )
}
