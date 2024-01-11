export interface Project {
  id: string
  name: string
  image: string
  blurb: string
  details: string
  tech: Tech[]
  url_deploy?: string
  url_github?: string
  url_npm?: string
}

export interface Tech {
  id: number
  text: string
  color: string
}

export interface Exp {
  id: string
  logo: string
  company: string
  title: string
  blurb: string
  resps: string[]  
}
