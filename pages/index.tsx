import { SocialIcon } from "react-social-icons"
import ProjectList from "../components/ProjectList"
import { Project } from "../models/projects"

interface Props {
  projects: Project[]
}

export default function Home({ projects }: Props) {
  const sexyIcon = (url) => <SocialIcon url={url} className="social_icon" fgColor="white" bgColor="black" />

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
        {sexyIcon("https://github.com/kelly-keating")}
        {sexyIcon("https://linkedin.com/in/kelly-keating-nz/")}
      </div>

      <div className="version">
        <p>v0.0.2</p>
      </div>
    </main>
  )
}
