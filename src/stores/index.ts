import { defineStore } from 'pinia'
import { jobListings, relatedListings } from './listings'

export const store = defineStore('main', {
  state: () => ({
    search: '',
    inserts: jobListings,
    relatedInserts: relatedListings,
    previouslyUploadedDocuments: ['transcriptOfRecords.pdf', 'voluntaryWork.jpg']
  }),
  actions: {
    // actions
  },
  getters: {
    // getters
  }
})
