export interface Insert {
  id: string
  name: string
  short: string
  employer: string
  hours: number
  workLocation: Remote
  salary: number[]
  link?: string
  contact?: string
  location?: Location
  requestedApplicationDocuments?: string[]
  description: Record<DescriptionPart, InnerHtml>
  ratings: Record<RatingTypes, number>
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

export enum RatingTypes {
  OVERALL = 'Overall',
  DIVERSITY = 'Diversity'
}

export interface SocialGuess {
  team: 1 | 2 | 3 | 4 | 5
  customers: 1 | 2 | 3 | 4 | 5
}

export type InnerHtml = string
