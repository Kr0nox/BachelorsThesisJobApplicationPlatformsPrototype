export interface Insert {
  // unique id
  id: string
  // name of the position
  name: string
  // short one sentence description of the position
  short: string
  // Name of the employer
  employer: string
  // weekly work hours
  hours: number
  // type of work location
  workLocation: Remote
  // one or two value array with either the minumum or maximum salary or an exact value
  salary: number[]
  // link to the job posting on the companies website
  link?: string
  // Contact information for the job
  contact?: string
  // Location of the job
  location?: Location
  // List of documents that are requested for the application
  requestedApplicationDocuments?: string[]
  // Longer description of the job
  description: Record<DescriptionPart, InnerHtml>
  // ratings for the employer ranging from 0 to 5
  ratings: Record<RatingTypes, number>
  // estimation of social contact by the employer
  socialGuess: SocialGuess
}

export enum Remote {
  HO = 'Home Office',
  OF = 'Office',
  BOTH = 'Partial Home Office'
}

export interface Location {
  street?: string
  houseNumber?: string
  zip?: string
  city: string
}

export enum DescriptionPart {
  TEXT = 'About the job',
  REQUIREMENTS = 'Requirements',
  TASKS = 'Tasks/Responsibilities',
  OFFER = 'What we offer'
}

// ratings of employer
export enum RatingTypes {
  OVERALL = 'Overall',
  DIVERSITY = 'Diversity'
}

// ratings for amount of social interaction ranginf from 0 to 5
export interface SocialGuess {
  team: number
  customers: number
}

// Any html text that can be set over innerHTML
export type InnerHtml = string
