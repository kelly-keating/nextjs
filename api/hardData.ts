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
    blurb: 'Point and click',
    details: 'Final Proj',
    tech: [
      tech[1],
      tech[2],
    ],
  },
  { id: 'video-feeder', name: 'video feeder', image: '',
    blurb: '',
    details: '',
    tech: [],
  },
  { id: 'watchr', name: 'watchr', image: '',
    blurb: '',
    details: '',
    tech: [],
  },
  { id: 'easy-budget', name: 'easy-budget', image: '',
    blurb: '',
    details: '',
    tech: [],
  },
  { id: 'curriculum', name: 'curriculum', image: '',
    blurb: '',
    details: '',
    tech: [],
  },
]

// TODO: fill out exp
export const experience: Exp[] = [
  { id: '', logo: '', company: '', title: '',  blurb: '', resps: [] },
]
