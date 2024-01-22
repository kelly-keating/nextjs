import { Exp, Project, Tech } from "../models/projects"

export const tech:Tech[] = [
  { id: 1, text: 'Auth0', color: '' },
  { id: 1, text: 'React', color: '#e60000' },
  { id: 1, text: 'Redux', color: '#6600cc' },
  { id: 1, text: 'SQLite', color: '' },
  { id: 1, text: 'Firebase', color: '' },
  { id: 1, text: 'SCSS', color: '' },
]

//  TODO: fill out project blurbs
export const projects: Project[] = [
  { id: 'gitmaster', name: 'gitmaster', image: 'gitmaster_home.png',
    blurb: 'A point and click puzzle game I made with a couple people years ago. While not the biggest game, it was the first time using react to make something other than a website.',
    details: 'Final Proj',
    tech: [
      tech[1],
      tech[2],
    ],
  },
  { id: 'video-feeder', name: 'video feeder', image: 'video_feeder.png',
    blurb: 'After growing tired of missing youtube uploads I want to watch (or having to scroll through those I don\'t), I created a site that would let me track my subscriptions, sort, and delete videos to my heart\'s content.',
    details: '',
    tech: [],
  },
  { id: 'watchr', name: 'watchr', image: 'watchr.png',
    blurb: 'A site to easily add TV shows and movies recommended by others. Never forget what you wanted to watch again! ',
    details: '',
    tech: [],
  },
  { id: 'easy-budget', name: 'easy-budget', image: '',
    blurb: 'We currently either rely on banks to create integrated tools to help us track our budgets or most free tools are just glorified spreadsheets without helpful tooling. I created this tool to help make parsing my csv files easier and see where my money disappears off to :P',
    details: '',
    tech: [],
  },
  { id: 'curriculum', name: 'curriculum', image: '',
    blurb: '',
    details: '',
    tech: [],
  },
  { id: 'this-site', name: 'kelly-keating.com', image: '',
    blurb: '',
    details: '',
    tech: [],
  },  
]
// cozy game club
// run tracker
// come watch with me

// TODO: fill out exp
export const experience: Exp[] = [
  { id: '', logo: '', company: '', title: '',  blurb: '', resps: [] },
]

// TODO: add reference docs. Hard pages or contentful?
