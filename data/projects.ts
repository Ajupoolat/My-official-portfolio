export type ProjectType = 'client' | 'personal';

export interface ProjectCaseStudy {
  id: string;
  projectNumber: string;
  title: string;
  projectType: ProjectType;
  typeBadge: string;
  category: string;
  status: string;
  role: string;
  duration?: string;
  companyContext?: string;
  tagline: string;
  briefExplanation: string;
  problemStatement: string;
  thinkingAndApproach: string;
  solutionSummary: string;
  transformationFlow?: {
    from: string[];
    to: string[];
  };
  frontendContributions?: string[];
  backendContributions?: string[];
  verifiedContributions: string[];
  businessEnablers: {
    technology: string;
    businessFunctionality: string;
  }[];
  technologies: string[];
  liveUrl?: string;
  liveUrlLabel?: string;
  liveUrlNote?: string;
  githubUrl?: string;
  githubUrlLabel?: string;
  githubUrlNote?: string;
  accentColor: string;
}

export const CLIENT_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'propertyseller',
    projectNumber: '01',
    title: 'PropertySeller',
    projectType: 'client',
    typeBadge: 'Commercial Client Work · 6-Month Contract',
    category: 'Production Real Estate Platform',
    status: 'Client Production Platform · Redevelopment',
    role: 'Freelance Full Stack Developer (6-Month Contract)',
    duration: 'Dec 2025 – May 2026',
    companyContext: 'Emiraaz Technologies LLP (Remote)',
    tagline: 'Redeveloping and optimizing an active production real estate platform for cross-device responsiveness, maintainability, and buyer inquiries.',
    briefExplanation:
      'Worked as a freelance full-stack developer on the redevelopment of an active commercial real estate platform, transforming Figma UI into 25+ responsive Next.js modules, integrating backend REST APIs, and resolving critical production bugs.',
    problemStatement:
      'The client operated an existing production real estate platform that was struggling with inconsistent user experiences across devices, slow listing navigation, frontend state fragmentation, and recurring backend bugs that risked data discrepancies and user drop-off during property inquiries.',
    thinkingAndApproach:
      'Rather than pursuing a risky, ground-up rewrite that would disrupt live real estate operations, the team executed a disciplined redevelopment strategy: translating Figma specifications into clean, reusable Next.js components, auditing mobile (375px+) and tablet viewports, streamlining REST API consumption, and methodically diagnosing backend edge cases.',
    solutionSummary:
      'Redeveloped 25+ critical customer-facing and agent-facing modules with Next.js and Tailwind CSS, standardizing frontend components for speed and accessibility while hunting down backend anomalies and data validation gaps.',
    frontendContributions: [
      'Developed 25+ responsive pages and modules using Next.js from design handoffs.',
      'Implemented clean interfaces directly from Figma designs with exact spatial precision.',
      'Supported adaptive layouts across mobile (375px+), tablet, and desktop viewports.',
      'Integrated frontend UI modules with backend REST APIs with resilient error handling.',
      'Refactored the frontend structure into reusable UI components to boost development velocity.',
      'Diagnosed and resolved critical production frontend bugs affecting inquiry forms and listings.'
    ],
    backendContributions: [
      'Investigated backend bugs and production anomalies reported during live client operations.',
      'Identified potential security loopholes and data validation issues in request endpoints.',
      'Improved code reusability and maintainability across existing backend services.',
      'Debugged existing backend business logic to ensure consistent property status tracking.'
    ],
    verifiedContributions: [
      'Engineered 25+ production-grade responsive Next.js pages and modules from Figma designs.',
      'Supported adaptive layouts across mobile (375px+), tablet, and desktop viewports.',
      'Integrated multi-parameter search and property filters with backend REST APIs.',
      'Conducted production debugging on both frontend rendering and backend API handlers.',
      'Identified and documented data validation & security edge cases in request endpoints.'
    ],
    businessEnablers: [
      {
        technology: 'Next.js & Server Rendering',
        businessFunctionality: 'Accelerated initial listing load times and enabled search crawlers to index property inventory effectively.'
      },
      {
        technology: 'Reusable Component Library',
        businessFunctionality: 'Reduced maintenance overhead and enabled faster feature iteration across 25+ application pages.'
      },
      {
        technology: 'Defensive API Integration',
        businessFunctionality: 'Eliminated client crashes during transient network dropouts and bad server responses.'
      },
      {
        technology: 'Security & Bug Investigation',
        businessFunctionality: 'Protected inquiry data pipelines and prevented inconsistent listing states in production.'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Figma to Code', 'Production Debugging'],
    liveUrl: '',
    liveUrlLabel: 'Live Client Platform',
    liveUrlNote: 'Proprietary client platform under NDA (Demo walkthrough available upon request)',
    githubUrl: '',
    githubUrlLabel: 'Client Repository',
    githubUrlNote: 'Proprietary client repository (Emiraaz Technologies LLP)',
    accentColor: '#38bdf8'
  }
];

export const PERSONAL_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'bookmyvenue',
    projectNumber: '02',
    title: 'BookMyVenue',
    projectType: 'personal',
    typeBadge: 'Community Team Project · MVP',
    category: 'B2B2C Venue Booking Platform',
    status: 'MVP · Community Team Project',
    role: 'Full Stack Developer (Team Project)',
    duration: 'Collaborative Build',
    companyContext: 'Community engineering team project',
    tagline: 'Digitizing the venue discovery and event reservation lifecycle from manual negotiations to automated calendar settlements.',
    briefExplanation:
      'A collaborative B2B2C venue booking platform built with a community team to replace manual phone/WhatsApp inquiries with a deterministic reservation workflow: instant date/slot availability checks, transparent pricing rules, and venue owner capacity controls.',
    problemStatement:
      'Traditional venue booking is burdened by high operational friction: customers endure manual phone/email enquiries, untracked pricing negotiations, delayed availability checks, and chaotic advance payment receipts. Venue proprietors struggle with double-bookings, uncoordinated calendar holds, and manual settlement collection.',
    thinkingAndApproach:
      'The engineering goal was to replace scattered WhatsApp messages and paper calendars with a deterministic, multi-role digital pipeline. We mapped the exact operational lifecycle from discovery through down payment and final owner settlement, structuring atomic slot validation to ensure no two customers can reserve conflicting date blocks.',
    solutionSummary:
      'Engineered a structured B2B2C platform connecting venue seekers with property owners, featuring real-time date and slot verification, transparent cost computation, and digital booking request workflows.',
    transformationFlow: {
      from: [
        'Manual phone/WhatsApp enquiries',
        'Scattered paper availability calendars',
        'Opaque, negotiable pricing friction',
        'Unverified manual bank deposits',
        'High double-booking rate',
        'Manual balance tracking by owners'
      ],
      to: [
        'Digital venue discovery & rich specifications',
        'Instant date & time-slot availability check',
        'Automated pricing rules & guest tier calculus',
        'Structured booking request & reservation rules',
        'Atomic slot lock preventing concurrent collisions',
        'Automated payment workflow & settlement logs'
      ]
    },
    verifiedContributions: [
      'Engineered REST API integrations connecting the reservation wizard with backend services.',
      'Implemented real-time venue availability verification and date-slot conflict validation logic.',
      'Developed responsive booking workflow UI modules, calendar date pickers, and guest capacity controls.',
      'Collaborated on database schema design for venue capacities, hourly rates, and blackout windows.'
    ],
    businessEnablers: [
      {
        technology: 'Atomic Slot Validation',
        businessFunctionality: 'Prevents double-booking disasters by enforcing deterministic reservation windows.'
      },
      {
        technology: 'Dynamic Pricing Engine',
        businessFunctionality: 'Calculates base rates, guest count tiers, and amenity add-ons transparently before checkout.'
      },
      {
        technology: 'Responsive Booking Wizard',
        businessFunctionality: 'Enables event planners to complete venue inquiries and reservations seamlessly from mobile devices.'
      }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Calendar State Logic'],
    liveUrl: '',
    liveUrlLabel: 'Live Demo',
    liveUrlNote: 'Live Demo — Deployment in progress by team',
    githubUrl: 'https://github.com/rashidnarikkodan/BookMyVenue',
    githubUrlLabel: 'GitHub Repo',
    githubUrlNote: 'github.com/rashidnarikkodan/BookMyVenue',
    accentColor: '#f59e0b'
  },
  {
    id: 'wotix',
    projectNumber: '03',
    title: 'Wotix',
    projectType: 'personal',
    typeBadge: 'Personal Project · Full-Stack Learning',
    category: 'Full Stack E-Commerce Platform',
    status: 'Full-Stack Architecture · Learning Project',
    role: 'Full Stack Developer (Independent Build)',
    duration: 'Independent Architecture',
    companyContext: 'Personal engineering project',
    tagline: 'End-to-end e-commerce platform engineered with complete transaction lifecycles, verified digital payments, and real-time merchant operations.',
    briefExplanation:
      'An end-to-end full-stack e-commerce platform built as an independent learning project to master real-world production commerce architecture: JWT & Google OAuth authentication, role-based admin controls, order return lifecycles, Razorpay HMAC server-side verification, digital wallet refunds, and Socket.IO real-time alerts.',
    problemStatement:
      'Many e-commerce systems either rely on heavy monolithic platforms with steep subscription taxes or cut corners with fragile client-side payment logic that fails to protect against tampering, order desynchronization, and inventory mismanagement.',
    thinkingAndApproach:
      'Engineered an independent full-stack commerce engine from database models to checkout UI. Focused on business-critical integrity: cryptographic server-side payment verification (Razorpay HMAC validation), role-based merchant capabilities, resilient cart persistence across browser reloads, and real-time administrative notification sockets.',
    solutionSummary:
      'Built a full-stack digital retail platform featuring dual customer/admin flows, JWT & Google OAuth authentication, live product filtering, complete order cancellation and return pipelines, digital wallet with refunds, and real-time Socket.IO alerts.',
    verifiedContributions: [
      'Architected end-to-end full-stack solution utilizing React, Node.js, Express, and MongoDB.',
      'Implemented secure authentication pipelines: JWT access tokens, refresh tokens, Google OAuth 2.0, and role-based route protection.',
      'Developed real-time product discovery: fuzzy search, multi-category attribute filters, and dynamic wishlists.',
      'Integrated Razorpay gateway with cryptographically verified server-side payment confirmation.',
      'Constructed customer digital wallet system supporting automated refunds on cancellation and balance withdrawals.',
      'Built full-featured administrative control panel with product catalog CRUD, order state management, and coupon engine.',
      'Implemented real-time alerts using Socket.IO for new orders and inventory changes.'
    ],
    businessEnablers: [
      {
        technology: 'Razorpay & Server-Side Verification',
        businessFunctionality: 'Prevents fraudulent orders by validating cryptographic payment signatures before marking orders paid.'
      },
      {
        technology: 'Digital Wallet & Refund Pipeline',
        businessFunctionality: 'Retains customer funds within the merchant ecosystem during returns and speeds up refund satisfaction.'
      },
      {
        technology: 'Socket.IO Real-Time Channels',
        businessFunctionality: 'Alerts store administrators instantly when high-value orders arrive, reducing fulfillment lag.'
      }
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Google OAuth',
      'Socket.IO',
      'Razorpay',
      'Cloudinary',
      'Tailwind CSS'
    ],
    liveUrl: 'https://wotix-ecommerce.vercel.app/',
    liveUrlLabel: 'Live Demo',
    liveUrlNote: 'https://wotix-ecommerce.vercel.app/',
    githubUrl: 'https://github.com/Ajupoolat/Wotix-ecommerce',
    githubUrlLabel: 'GitHub Repo',
    githubUrlNote: 'github.com/Ajupoolat/Wotix-ecommerce',
    accentColor: '#10b981'
  }
];

export const PROJECTS: ProjectCaseStudy[] = [...CLIENT_PROJECTS, ...PERSONAL_PROJECTS];
