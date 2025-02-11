import { DescriptionPart, Remote, type Insert } from '@/model/Insert'
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
        employer: 'Employer Name ',
        workLocation: Remote.HO,
        hours: 40,
        salary: [50000],
        link: 'https://www.google.com',
        contact: 'Max Mustermann',
        location: {
          street: 'Musterstraße',
          houseNumber: '1',
          zip: '12345',
          city: 'Musterstadt'
        },
        requestedApplicationDocuments: ['Transcript of Records', 'CV', 'Cover Letter'],
        description: {
          [DescriptionPart.TEXT]: 'This is a description of the job.',
          [DescriptionPart.REQUIREMENTS]: 'These are the requirements.',
          [DescriptionPart.TASKS]: 'These are the tasks.',
          [DescriptionPart.OFFER]: 'This is the offer.'
        },
        ratings: {
          Overall: 4,
          Diversity: 5
        },
        socialGuess: {
          team: 3,
          customers: 2
        }
      },
      {
        id: '1',
        name: 'Second Insert',
        short:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        employer: 'Employer2',
        workLocation: Remote.BOTH,
        hours: 39,
        salary: [50000, 65000],
        description: {
          [DescriptionPart.TEXT]: 'This is a description of the job.',
          [DescriptionPart.REQUIREMENTS]: 'These are the requirements.',
          [DescriptionPart.TASKS]: 'These are the tasks.',
          [DescriptionPart.OFFER]: 'This is the offer.'
        },
        ratings: {
          Overall: 4,
          Diversity: 5
        },
        socialGuess: {
          team: 3,
          customers: 2
        }
      }
    ] as Insert[],
    previouslyUploadedDocuments: ['transcriptOfRecords.pdf', 'voluntaryWork.jpg']
  }),
  actions: {
    // actions
  },
  getters: {
    // getters
  }
})
