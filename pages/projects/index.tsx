import Link from "next/link"
import { projects } from "../../api/hardData"

function Projects() {
  return (
    <div className="projects_container">
      <h2>Projects</h2>
      <div>
        <p>A word to start - I love discovering new things and finding out how things work, and because of that I do love starting new projects. Usually before the last one has been finished.</p>
        <p>But that&apos;s not the point of my projects. Outside of code, I love creating things - being able to take an idea in your brain and create something you can interact with. To take some idea and explore it with some new piece of tech that you also don&apos;t know your way around is like the best kind of puzzle.</p>
        <p>Aside from that, I have way too many projects that I&apos;ve started because I can see something that could be a little more efficient or a little more helpful. So much of our time online is spent on sites that may not have the same interests as us, or are made for more general purposes that aren&apos;t fitting our specific needs. Having the skills to do something about it yourself is so rewarding.</p>
        <p>All this to say you&apos;ll be hard pressed to find something finished here - haha!</p>
        <p>Here&apos;s some projects I&apos;ve worked on:</p>

        <div id="proj_alert">
          <p>If you&apos;re seeing this message, I&apos;m working on this page right now! Hello :)</p>
          <p>Forgive the temporary stand ins 😊</p>
        </div>

        {projects.map(p => (
          <div key={p.id} className='project_tile'>
            <div className='project_tile__blurb'>
              <h3><Link href={'/projects/' + p.id}>{p.name}</Link></h3>
              <p>{p.blurb.repeat(30)}</p>
            </div>
            <div className='project_tile__thumb'>
              <img src={p.image || 'https://live.staticflickr.com/5554/15095993931_9381ac76e9_b.jpg'} alt={'Screenshot of ' + p.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
