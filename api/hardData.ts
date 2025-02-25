import { Exp, Project, Tech } from '../models/projects'

export const tech: Tech[] = [
  { id: 0, text: 'Auth0', color: '' },
  { id: 1, text: 'React', color: '#e60000' },
  { id: 2, text: 'Redux', color: '#6600cc' },
  { id: 3, text: 'SQLite', color: '' },
  { id: 4, text: 'External API', color: '' },
  { id: 5, text: 'SCSS', color: '' },
  { id: 6, text: 'Firebase Hosting', color: '' },
  { id: 7, text: 'Firebase Auth', color: '' },
  { id: 8, text: 'Firebase Realtime Database', color: '' },
  { id: 9, text: 'Next.JS', color: '' },
  { id: 10, text: 'TypeScript', color: '' },
  { id: 11, text: 'localStorage', color: '' },
  { id: 12, text: 'Chakra UI', color: '' },
  { id: 13, text: 'Custom Modules', color: '' },
  { id: 14, text: 'Recharts', color: '' },
]

//  TODO: fill out project blurbs
export const projects: Project[] = [
  {
    id: 'gitmaster',
    name: 'gitmaster',
    image: 'gitmaster_home.png',
    blurb:
      'A point and click puzzle game I made with a couple people years ago. While not the biggest game, it was the first time using react to make something other than a website.',
    details: ['Final Proj'],
    tech: [tech[1], tech[2]],
    url_github: 'https://github.com/pushmeproductions/gitmaster',
  },
  {
    id: 'video-feeder',
    name: 'video feeder',
    image: 'video_feeder.png',
    blurb:
      "After growing tired of missing youtube uploads I want to watch (or having to scroll through those I don't), I created a site that would let me track my subscriptions, sort, and delete videos to my heart's content.",
    details: [],
    tech: [tech[1], tech[2], tech[12], tech[5], tech[4], tech[7], tech[8]],
    url_github: 'https://github.com/kelly-keating/video-feeder',
  },
  {
    id: 'watchr',
    name: 'watchr',
    image: 'watchr.png',
    blurb:
      'A site to easily add TV shows and movies recommended by others. Never forget what you wanted to watch again! ',
    details: [],
    tech: [tech[1], tech[2], tech[6], tech[7], tech[8], tech[5], tech[4]],
    url_github: 'https://github.com/kelly-keating/watchr',
    url_deploy: 'https://watchr-without-an-e.firebaseapp.com/',
  },
  {
    id: 'easy-budget',
    name: 'easy-budget',
    image: 'easy-budget_breakdown.png',
    blurb:
      'We currently rely on banks to create integrated tools to help us track our budgets or use free tools that are often just glorified spreadsheets without the helpful tooling. I created this tool to help make parsing my csv files easier and to see where my money disappears off to :P',
    details: [],
    tech: [tech[1], tech[11], tech[10]],
    url_github: 'https://github.com/kelly-keating/easy-budget',
  },
  {
    id: 'retro-neon-grid-react',
    name: 'Retro Grid Node Module',
    image: 'retro_grid_npm.png',
    blurb:
      " A node module I created and deployed to npm. Creates a sweet customisable grid for your react project in the style of Tron's Grid.",
    details: [],
    tech: [tech[1], tech[13]],
    url_github: 'https://github.com/kelly-keating/retro-neon-grid-react',
    url_npm: 'https://www.npmjs.com/package/retro-neon-grid-react',
  },
  {
    id: 'magic-awaaaay',
    name: 'MTG Card Library',
    image: 'magic-away_home.png',
    blurb:
      'Keep track of your card collection, set completion, and the prices of cards.',
    details: [],
    tech: [tech[0], tech[1], tech[3], tech[4], tech[10], tech[12]],
    url_github: 'https://github.com/kelly-keating/magic-awaaaay',
    url_deploy: 'https://magic-awaaaay.vercel.app/',
  },
  {
    id: 'curriculum',
    name: 'curriculum',
    image: 'ts_kata.png',
    blurb:
      'Tools I contributed to or created to help students learning web development.',
    details: [],
    tech: [
      tech[0],
      tech[1],
      tech[2],
      tech[3],
      tech[4],
      tech[5],
      tech[10],
      tech[11],
    ],
  },
  {
    id: 'this-site',
    name: 'kelly-keating.com',
    image: 'kelly-keating_home.png',
    blurb: 'A lil Next.js portfolio site',
    details: [
      'While I have used Next.js before, this was my first time customizing it to fit what I wanted, rather than using a template.',
      'I wanted to keep it simple and clean (and to be able use it as a way to show off my projects and experience). I also wanted to use it as a way to learn more about Next.js and what it abstracts away from my usual stack.',
      'It was interesting to get into the weeds a bit of this and to compare it to my usual tools, and knowing the benefits it brings I think it will be a good tool to use more in the future.',
    ],
    tech: [tech[1], tech[5], tech[9], tech[10]],
  },
  {
    id: 'run-tracker',
    name: 'run tracker',
    image: 'run_tracker_home.png',
    blurb:
      'A simple run tracker to help keep track of my runs and visualize progress over time.',
    details: [],
    tech: [tech[1], tech[5], tech[6], tech[7], tech[8], tech[10], tech[14]],
    url_github: 'https://github.com/kelly-keating/track-my-runs',
  },
  {
    id: 'come-watch-with-me',
    name: 'come watch with me',
    image: 'come_watch_with_me_home.png',
    blurb: 'A tool to synchronize watching movies and TV shows with friends.',
    details: [
      'Built during lockdown, this was a tool to help me and my friends watch movies and TV shows together.',
      "We would hang out online and have to count down and hit play at just the right time to experience the movie together. And we'd have to do this for every toilet break or snack run.",
      'This tool allowed one person to hit pause or play, and all other users would also have their video stop or start.',
      'While the base functionality was there, part 2 of the project was to extend this to browser extensions to allow us to use this on any site.',
    ],
    tech: [],
  },
]
// cozy game club
// come watch with me

// TODO: fill out exp
export const experience: Exp[] = [
  { id: '', logo: '', company: '', title: '', blurb: '', resps: [] },
]

// TODO: add reference docs. Hard pages or contentful?
