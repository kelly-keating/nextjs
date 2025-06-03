import { projects } from '../../api/hardData'
import { Project } from '../../models/projects'

import Page404 from '../404'
import InProgress from '../../components/InProgress'
import SocialIcon from '../../components/SocialIcon'

interface Props {
  proj: Project
}

export default function Project({ proj }: Props) {
  // TODO: dynamically color tags based on tech
  const tags =
    proj?.tech.map((tech) => (
      <div key={tech.id} className='tech_tag'>
        <p>{tech.text}</p>
      </div>
    )) || null

  if (!proj) return <Page404 />
  // if(!proj.details) return (
  //   <div className="projects_container">
  //     <h2>{proj.name}</h2>
  //     <InProgress />
  //   </div>
  // )

  return (
    <div className='projects_container'>
      <div className='project_header'>
        <h2>{proj.name}</h2>
        <div className='project_header__socials'>
          {proj.url_github && (
            <SocialIcon site='github' url={proj.url_github} />
          )}
          {proj.url_deploy && (
            <SocialIcon site='default' url={proj.url_deploy} />
          )}
          {proj.url_npm && <SocialIcon site='npm' url={proj.url_npm} />}
        </div>
      </div>
      <div className='tech_tag__container'>{tags}</div>
      <p>{proj.blurb}</p>
      <div>
        <img
          className='project_display'
          src={'/projects/' + proj.image}
          alt={'Screenshot of ' + proj.name}
        />
      </div>
      <div>{proj.details}</div>
    </div>
  )
}

export function getStaticPaths() {
  const paths = projects.map((proj) => ({
    params: { id: proj.id },
  }))
  return { paths, fallback: false }
}

export function getStaticProps({ params }) {
  const { id } = params
  const proj = projects.find((p) => p.id === id)
  return {
    props: {
      proj,
    },
  }
}
