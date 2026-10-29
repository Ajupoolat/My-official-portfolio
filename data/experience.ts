export interface ExperienceRecord {
  period: string;
  role: string;
  company: string;
  location: string;
  contractType: string;
  summary: string;
  coreDeliverables: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceRecord[] = [
  {
    period: 'Dec 2025 – May 2026',
    role: 'Full Stack Developer',
    company: 'Emiraaz Technologies LLP',
    location: 'Remote',
    contractType: '6-Month Contract',
    summary:
      'Worked as a core full-stack developer on the redevelopment and production enhancement of PropertySeller, an existing commercial real estate platform.',
    coreDeliverables: [
      'Redeveloped and shipped 25+ responsive pages and modules in Next.js based on Figma design handoffs.',
      'Ensured robust cross-device compatibility across mobile, tablet, and desktop viewports.',
      'Integrated frontend user interfaces with backend REST APIs with resilient error state handling.',
      'Architected reusable component systems to enhance codebase maintainability and team iteration speed.',
      'Conducted live production debugging on frontend interfaces and investigated backend functional edge cases.',
      'Identified potential security loopholes and data validation issues in existing backend endpoints.'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Production Debugging']
  }
];
