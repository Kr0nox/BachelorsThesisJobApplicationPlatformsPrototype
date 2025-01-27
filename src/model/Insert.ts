export interface Insert {
  id: string
  name: string
  short: string
  employer: string
  hours: number
  workLocation: Remote
  salary: number[]
}

export enum Remote {
  HO = 'Home Office',
  OF = 'Office',
  BOTH = 'Partial Home Office'
}
