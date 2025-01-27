import { Remote, type Insert } from '@/model/Insert'
import { defineStore } from 'pinia'

export const store = defineStore('main', {
  state: () => ({
    search: '',
    inserts: [
      {
        id: '1',
        name: 'First Insert',
        short:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        employer: 'Employer',
        workLocation: Remote.HO,
        hours: 40,
        salary: [50000]
      },
      {
        id: '1',
        name: 'Second Insert',
        short:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        employer: 'Employer2',
        workLocation: Remote.BOTH,
        hours: 39,
        salary: [50000, 65000]
      }
    ] as Insert[]
  }),
  actions: {
    // actions
  },
  getters: {
    // getters
  }
})
