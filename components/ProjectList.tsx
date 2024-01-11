import Link from "next/link"
import { projects } from "../api/hardData"

function ProjectList() {
  // TODO: use on home ot merge into projects/index?
  return (
    <div>
      <p>A word to start - I love discovering new things and finding out how things work, and because of that I do love starting new projects. Usually before the last one has been finished.</p>
      <p>But that&apos;s not the point of my projects. Outside of code, I love creating things - being able to take an idea in your brain and create something you can interact with. To take some idea and explore it with some new piece of tech that you also don&apos;t know your way around is like the best kind of puzzle.</p>
      <p>Aside from that, I have way too many projects that I&apos;ve started because I can see something that could be a little more efficient or a little more helpful. So much of our time online is spent on sites that may not have the same interests as us, or are made for more general purposes that aren&apos;t fitting our specific needs. Having the skills to do something about it yourself is so rewarding.</p>
      <p>All this to say you&apos;ll be hard pressed to find something finished here - haha!</p>
      <p>Here&apos;s some projects I&apos;ve worked on:</p>

      {projects.map(p => (
        <div key={p.id} className='project_tile'>
          <div>
            <h3><Link href={'/projects/' + p.id}>{p.name}</Link></h3>
            <p>{p.blurb}</p>
          </div>
          <div>
            <img src={p.image || 'gitmaster_home.png'} alt={'Screenshot of ' + p.name} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList
