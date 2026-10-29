export interface SkillCategory {
  category: string;
  tagline: string;
  skills: string[];
}

export const CAPABILITY_GROUPS: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    tagline: 'Accessible, responsive, type-safe interfaces',
    skills: [
      'React.js',
      'Next.js (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Query',
      'RTK Query',
      'Zustand'
    ]
  },
  {
    category: 'Backend & APIs',
    tagline: 'Secure, deterministic business logic',
    skills: [
      'Node.js',
      'Express.js',
      'REST API Development',
      'JWT Authentication',
      'Passport.js',
      'Google OAuth 2.0'
    ]
  },
  {
    category: 'Database & Data Storage',
    tagline: 'Structured schemas and performant queries',
    skills: [
      'MongoDB',
      'Mongoose ODM',
      'PostgreSQL',
      'Redis'
    ]
  },
  {
    category: 'Third-Party Integrations',
    tagline: 'Real-time sockets, media pipelines, & payments',
    skills: [
      'Razorpay Payments',
      'Cloudinary Media CDN',
      'Socket.IO',
      'Nodemailer Webhooks'
    ]
  },
  {
    category: 'Cloud, DevOps & Tools',
    tagline: 'Reliable deployments & developer tooling',
    skills: [
      'AWS EC2',
      'Vercel',
      'Render',
      'Git & GitHub Workflows',
      'Postman API Testing',
      'MongoDB Compass'
    ]
  },
  {
    category: 'Engineering Architecture',
    tagline: 'Disciplined software craftsmanship',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Model-View-Controller (MVC)',
      'REST API Design Standards',
      'Layered Architecture',
      'Asynchronous Programming'
    ]
  }
];
