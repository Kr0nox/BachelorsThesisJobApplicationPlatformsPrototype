import { DescriptionPart, RatingTypes, Remote, type Insert } from '@/model/Insert'

export const jobListings: Insert[] = [
  {
    id: '1',
    name: 'Frontend Developer',
    short: 'Develop and maintain web applications.',
    employer: 'TechCorp',
    hours: 40,
    workLocation: Remote.HO,
    salary: [50000, 70000],
    link: 'https://techcorp.com/jobs/frontend-dev',
    contact: 'jobs@techcorp.com',
    location: { street: 'Tech Street', zip: '12345', city: 'Techville' },
    requestedApplicationDocuments: ['Resume', 'Portfolio'],
    description: {
      [DescriptionPart.TEXT]: 'Join our team to build user-friendly web interfaces.',
      [DescriptionPart.REQUIREMENTS]: 'Experience with React and TypeScript.',
      [DescriptionPart.TASKS]: 'Implement and optimize frontend components.',
      [DescriptionPart.OFFER]: 'Flexible working hours and remote work options.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.5, [RatingTypes.DIVERSITY]: 4.2 },
    socialGuess: { team: 4, customers: 2 }
  },
  {
    id: '2',
    name: 'Backend Developer',
    short: 'Develop scalable backend services.',
    employer: 'SoftSolutions',
    hours: 38,
    workLocation: Remote.BOTH,
    salary: [55000, 75000],
    link: 'https://softsolutions.com/jobs/backend-dev',
    contact: 'careers@softsolutions.com',
    location: { street: 'Innovation Way', zip: '54321', city: 'DevTown' },
    requestedApplicationDocuments: ['Resume', 'Cover Letter'],
    description: {
      [DescriptionPart.TEXT]: 'We are looking for a backend developer with Node.js experience.',
      [DescriptionPart.REQUIREMENTS]: 'Proficiency in Node.js and database management.',
      [DescriptionPart.TASKS]: 'Design and maintain RESTful APIs.',
      [DescriptionPart.OFFER]: 'Remote work and annual bonuses.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.3, [RatingTypes.DIVERSITY]: 4.0 },
    socialGuess: { team: 3, customers: 1 }
  },
  {
    id: '3',
    name: 'Full Stack Developer',
    short: 'Work on both frontend and backend systems.',
    employer: 'CodeWorks',
    hours: 40,
    workLocation: Remote.OF,
    salary: [60000, 80000],
    link: 'https://codeworks.com/jobs/fullstack-dev',
    contact: 'recruit@codeworks.com',
    location: { street: 'Dev Lane', zip: '67890', city: 'CodeCity' },
    requestedApplicationDocuments: ['Resume', 'Portfolio', 'References'],
    description: {
      [DescriptionPart.TEXT]: 'Join our agile team and develop end-to-end solutions.',
      [DescriptionPart.REQUIREMENTS]: 'Experience with React and Node.js.',
      [DescriptionPart.TASKS]: 'Develop frontend and backend features.',
      [DescriptionPart.OFFER]: 'Stock options and company retreats.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.7, [RatingTypes.DIVERSITY]: 4.5 },
    socialGuess: { team: 5, customers: 3 }
  },
  {
    id: '4',
    name: 'Software Engineer',
    short: 'Develop and maintain software solutions.',
    employer: 'InnovateTech',
    hours: 40,
    workLocation: Remote.HO,
    salary: [65000, 85000],
    link: 'https://innovatetech.com/jobs/software-engineer',
    contact: 'jobs@innovatetech.com',
    location: { street: 'Tech Park', zip: '23456', city: 'InnovateCity' },
    requestedApplicationDocuments: ['Resume', 'Cover Letter', 'Code Samples'],
    description: {
      [DescriptionPart.TEXT]: 'Develop high-quality software solutions.',
      [DescriptionPart.REQUIREMENTS]: 'Proficiency in Java, C++, or Python.',
      [DescriptionPart.TASKS]: 'Design, develop, and optimize software.',
      [DescriptionPart.OFFER]: 'Competitive salary and training programs.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.6, [RatingTypes.DIVERSITY]: 4.3 },
    socialGuess: { team: 4, customers: 2 }
  }
]
export const relatedListings: Insert[] = [
  {
    id: '8',
    name: 'UI/UX Designer',
    short: 'Design user-friendly interfaces.',
    employer: 'DesignPro',
    hours: 38,
    workLocation: Remote.BOTH,
    salary: [50000, 70000],
    link: 'https://designpro.com/jobs/ui-ux-designer',
    contact: 'jobs@designpro.com',
    location: { street: 'Creative Avenue', zip: '11223', city: 'DesignTown' },
    requestedApplicationDocuments: ['Resume', 'Portfolio'],
    description: {
      [DescriptionPart.TEXT]: 'Create visually appealing and intuitive interfaces.',
      [DescriptionPart.REQUIREMENTS]: 'Experience with Figma and Adobe XD.',
      [DescriptionPart.TASKS]: 'Design and prototype UI components.',
      [DescriptionPart.OFFER]: 'Flexible work environment and creative freedom.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.4, [RatingTypes.DIVERSITY]: 4.2 },
    socialGuess: { team: 3, customers: 2 }
  },
  {
    id: '9',
    name: 'Technical Writer',
    short: 'Create documentation for developers.',
    employer: 'DocuSoft',
    hours: 35,
    workLocation: Remote.HO,
    salary: [45000, 60000],
    link: 'https://docusoft.com/jobs/technical-writer',
    contact: 'hr@docusoft.com',
    location: { street: "Writer's Lane", zip: '55667', city: 'DocuCity' },
    requestedApplicationDocuments: ['Resume', 'Writing Samples'],
    description: {
      [DescriptionPart.TEXT]: 'Write comprehensive guides and documentation.',
      [DescriptionPart.REQUIREMENTS]: 'Excellent writing skills and technical knowledge.',
      [DescriptionPart.TASKS]: 'Create manuals and API documentation.',
      [DescriptionPart.OFFER]: 'Remote work and learning opportunities.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.3, [RatingTypes.DIVERSITY]: 4.1 },
    socialGuess: { team: 2, customers: 1 }
  },
  {
    id: '10',
    name: 'Product Manager',
    short: 'Lead software product development.',
    employer: 'AgileSolutions',
    hours: 40,
    workLocation: Remote.OF,
    salary: [70000, 95000],
    link: 'https://agilesolutions.com/jobs/product-manager',
    contact: 'careers@agilesolutions.com',
    location: { street: 'Agile Road', zip: '99887', city: 'ScrumCity' },
    requestedApplicationDocuments: ['Resume', 'Cover Letter'],
    description: {
      [DescriptionPart.TEXT]: 'Oversee product development cycles.',
      [DescriptionPart.REQUIREMENTS]: 'Experience in Agile methodologies.',
      [DescriptionPart.TASKS]: 'Manage product backlog and priorities.',
      [DescriptionPart.OFFER]: 'Leadership training and stock options.'
    },
    ratings: { [RatingTypes.OVERALL]: 4.5, [RatingTypes.DIVERSITY]: 4.2 },
    socialGuess: { team: 5, customers: 3 }
  }
]
