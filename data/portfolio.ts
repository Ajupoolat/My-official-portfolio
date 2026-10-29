export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'production' | 'team' | 'ecommerce';
  categoryLabel: string;
  roleType: 'Individual Production Work' | 'Team Project' | 'Full-Stack Project';
  roleDescription: string;
  individualContributions: string[];
  teamContext?: string;
  businessProblem: string;
  understanding: string;
  solutionDesign: string;
  implementationHighlights: string[];
  productionReadiness: string[];
  stack: string[];
  year: string;
  featured: boolean;
  accentColor: string;
  previewType: 'real-estate' | 'venue-booking' | 'ecommerce-store';
}

export interface LifecycleStep {
  number: string;
  title: string;
  subtitle: string;
  objective: string;
  deliverables: string[];
  mindset: string;
  realWorldExample: string;
}

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    number: '01',
    title: 'Business Problem',
    subtitle: 'Uncovering the Core Friction',
    objective: 'Translate ambiguous requests into quantifiable business requirements before writing a single line of code.',
    deliverables: ['Problem statement & success metrics', 'Stakeholder constraint mapping', 'Feasibility & risk audit'],
    mindset: 'Never build features just because they are technologically interesting. Every line of code must defend a business objective.',
    realWorldExample: 'Instead of building a bloated custom chat system, identified that automated email triggers with instant SMS alerts reduced lead response latency by 80% at 10% of the build cost.'
  },
  {
    number: '02',
    title: 'Understanding',
    subtitle: 'Domain & User Journey Mapping',
    objective: 'Deep-dive into operational reality, user edge cases, and data lifecycles to prevent architectural blind spots.',
    deliverables: ['User journey & drop-off analysis', 'Data flow & state lifecycle maps', 'Non-functional requirements (speed, load, accessibility)'],
    mindset: 'Great software starts by understanding the person at the other end of the screen and the operational constraints of the business.',
    realWorldExample: 'Mapped how venue managers process weekend booking surges, uncovering that split-deposit holds caused 90% of double-booking panics.'
  },
  {
    number: '03',
    title: 'Solution Design',
    subtitle: 'Pragmatic Architecture & Data Models',
    objective: 'Architect robust system boundaries, lean relational schemas, and responsive UI components built for growth.',
    deliverables: ['Component hierarchy & state strategy', 'Normalized schema & API contracts', 'Resilient error recovery patterns'],
    mindset: 'Choose the most dependable, maintainable tool that gets the job done reliably. No speculative over-engineering.',
    realWorldExample: 'Designed a conflict-resilient reservation state machine with optimistic UI updates and atomic lock queries to prevent race conditions.'
  },
  {
    number: '04',
    title: 'Implementation',
    subtitle: 'Clean, Type-Safe Engineering',
    objective: 'Construct accessible, resilient, and well-typed web solutions adhering to strict performance and code quality standards.',
    deliverables: ['Strict TypeScript & modular React components', 'Server-side rendering & data optimization', 'Client state management & form validation'],
    mindset: 'Code readability is user empathy for the next engineer. Clean abstractions, zero unnecessary dependencies, and solid type boundaries.',
    realWorldExample: 'Built modular property filtering with URL synchronization, enabling instant page reloads and shareable link states without state drift.'
  },
  {
    number: '05',
    title: 'Production',
    subtitle: 'Performance, Reliability & Hand-off',
    objective: 'Ship thoroughly verified software that handles real-world network variations, search crawlers, and edge devices gracefully.',
    deliverables: ['Core Web Vitals & asset optimization', 'Semantic HTML, accessibility (WCAG AA), and SEO schemas', 'Production build verification & zero-downtime readiness'],
    mindset: 'Shipping to production is not the finish line; it is the moment software begins proving its commercial value.',
    realWorldExample: 'Optimized image pipelines and server response payloads to deliver sub-second first contentful paint across low-bandwidth mobile connections.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'propertyseller',
    title: 'PropertySeller',
    tagline: 'High-performance property discovery and buyer inquiry platform built for speed and conversion.',
    category: 'production',
    categoryLabel: 'Production Work',
    roleType: 'Individual Production Work',
    roleDescription: 'Sole full-stack developer responsible for end-to-end architecture, frontend engineering, database querying, and production deployment.',
    individualContributions: [
      'Engineered the complete application architecture from discovery to lead dispatch.',
      'Constructed a dynamic multi-parameter property search engine with instant price, bedroom, and location filters.',
      'Designed responsive property showcase cards and high-resolution gallery lightboxes with zero layout shift.',
      'Implemented validated buyer inquiry routing with automated email dispatch and anti-spam verification.',
      'Optimized server-side rendering and OpenGraph real estate metadata for search engine indexing.'
    ],
    businessProblem: 'Property sellers and prospective buyers faced sluggish real estate listing platforms burdened by slow portal redirects, unresponsive mobile interfaces, and lost inquiry leads.',
    understanding: 'Buyers make purchase inquiries on mobile during evening hours on mobile networks. If property images lag or the inquiry form fails on mobile Safari, the lead is lost forever. Sellers require instant lead notifications with exact property references.',
    solutionDesign: 'Architected a lean, server-rendered web platform with localized caching for high-density listing assets, responsive search controls, and atomic lead capture that validates inputs in real time.',
    implementationHighlights: [
      'Next.js App Router with server-rendered listing pages for optimal initial load.',
      'Tailwind CSS design system crafted with a modern, high-contrast editorial aesthetic.',
      'Strict TypeScript interfaces ensuring type safety from property data models to client filter state.',
      'Zero-layout-shift image handling with blur placeholders and priority responsive loading.'
    ],
    productionReadiness: [
      'Sub-second First Contentful Paint on mobile networks.',
      'Complete OpenGraph and Schema.org RealEstateListing structured data for SEO rich snippets.',
      'Validated form handling with defensive sanitization and rate-limiting safeguards.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Server Components', 'PostgreSQL / SQL', 'REST APIs'],
    year: '2025',
    featured: true,
    accentColor: '#38bdf8',
    previewType: 'real-estate'
  },
  {
    id: 'bookmyvenue',
    title: 'BookMyVenue',
    tagline: 'Collaborative venue discovery and event reservation system with atomic booking validation.',
    category: 'team',
    categoryLabel: 'Team Project',
    roleType: 'Team Project',
    roleDescription: 'Full Stack Engineer within a cross-functional development team, heading API integration and reservation state orchestration.',
    teamContext: 'Developed in a collaborative team setting with dedicated roles across UI design, user authentication, and backend infrastructure.',
    individualContributions: [
      'Architected the interactive venue availability calendar and dynamic time-slot reservation logic.',
      'Built the multi-step booking drawer and pricing calculation state machine (base rates, guest tiers, amenities).',
      'Engineered RESTful API integration connecting the client booking flow to the reservation database.',
      'Collaborated on schema design to model venue capacities, operating hours, and blacked-out event windows.',
      'Implemented responsive client-side error handling for concurrent booking collisions.'
    ],
    businessProblem: 'Event organizers and venue proprietors suffered from chronic double-bookings, manual email quote ping-pong, and opaque venue availability calendars.',
    understanding: 'Venues have complex availability rules: cleaning buffers between sessions, minimum guest thresholds, and custom weekend pricing. A reliable system must prevent concurrent booking attempts at the millisecond level.',
    solutionDesign: 'Developed a deterministic booking state engine that locks selected dates during active checkout, updates availability dynamically, and renders a transparent cost breakdown before confirmation.',
    implementationHighlights: [
      'Modular React booking wizard with step-by-step progress retention.',
      'Calendar widget supporting date ranges, hourly session blocks, and real-time slot validation.',
      'Centralized booking state with clean separation between UI components and API fetch adapters.',
      'Accessible keyboard navigation for calendar grids and interactive amenity filters.'
    ],
    productionReadiness: [
      'Concurrency conflict prevention handling simultaneous slot selection.',
      'Mobile-optimized touch targets (>=44px) for all calendar cells and reservation triggers.',
      'Clean error boundaries isolating booking errors without crashing adjacent page components.'
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'State Machines', 'REST APIs'],
    year: '2024',
    featured: true,
    accentColor: '#f59e0b',
    previewType: 'venue-booking'
  },
  {
    id: 'wotix',
    title: 'Wotix',
    tagline: 'Modern full-stack e-commerce experience with client-side cart orchestration and resilient checkout flows.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Project',
    roleType: 'Full-Stack Project',
    roleDescription: 'Full-stack developer responsible for the complete e-commerce architecture, product browsing, cart engine, and checkout pipeline.',
    individualContributions: [
      'Designed and developed the complete e-commerce storefront, product catalog, and checkout flow.',
      'Engineered a persistent, synchronization-safe cart engine with instant quantity adjustments.',
      'Created a multi-attribute filter system (category, price range, sizing, availability) with URL state sync.',
      'Built the mock order processing pipeline with defensive inventory checks and order summary generation.',
      'Crafted high-fidelity micro-interactions for adding items, opening cart drawers, and applying coupon discounts.'
    ],
    businessProblem: 'Small retail merchants need modern, rapid-loading storefronts that do not depend on cumbersome monolithic platforms with high monthly overhead and sluggish page loads.',
    understanding: 'Shoppers abandon carts when checkout steps feel unpredictable or when cart updates require full-page refreshes. Fast feedback and clear order summaries are crucial for high conversion.',
    solutionDesign: 'Implemented a lightweight headless e-commerce store with an optimistic cart drawer, localized session persistence, dynamic pricing calculus, and clean validation steps.',
    implementationHighlights: [
      'Custom React hook-based cart state provider supporting local storage persistence with hydration safety.',
      'Responsive slide-out cart drawer with animated item insertions and quantity recalculations.',
      'Structured catalog search and multi-tag filtering with seamless debounce handling.',
      'Mock checkout pipeline verifying customer details, shipping options, and item availability.'
    ],
    productionReadiness: [
      'Zero hydration flicker between server-rendered HTML and client cart persistence.',
      'Lightweight bundle footprint without heavy third-party UI libraries.',
      'Complete accessibility for modal drawers with focus trapping and ESC key dismissal.'
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cart Engine', 'Responsive UX'],
    year: '2024',
    featured: true,
    accentColor: '#10b981',
    previewType: 'ecommerce-store'
  }
];

export const ENGINEERING_PHILOSOPHIES = [
  {
    number: '01',
    title: 'Pragmatism Over Hype',
    description: 'Technology stacks should be selected based on project durability, team velocity, and business fit—never the newest Twitter trend. A dependable, well-understood architecture shipped today beats a theoretical perfect system that never leaves staging.'
  },
  {
    number: '02',
    title: 'Performance Is a Feature',
    description: 'Every millisecond of latency is a barrier between your user and their objective. I prioritize sub-second load times, minimal bundle weights, optimized database queries, and layout stability as fundamental engineering baselines.'
  },
  {
    number: '03',
    title: 'Clarity in Collaboration',
    description: 'Code is written for humans to maintain, not just machines to execute. I place immense value on clean interfaces, descriptive naming, rigorous type contracts, and transparent communication across engineering and business teams.'
  },
  {
    number: '04',
    title: 'Production-Ready Mindset',
    description: 'A feature is only done when it survives the harsh realities of production: flaky networks, malformed inputs, edge viewports, and unexpected concurrency. Defensive programming and graceful fallbacks are non-negotiable.'
  }
];

export const CORE_CAPABILITIES = [
  {
    category: 'Architecture & System Design',
    items: ['Full-stack system architecture', 'Business requirement decomposition', 'Data modeling & relational schemas', 'State machine design', 'RESTful API contract design']
  },
  {
    category: 'Frontend Engineering',
    items: ['Next.js App Router & React 19', 'Strict TypeScript', 'Tailwind CSS design systems', 'Responsive & mobile-first UI', 'Accessibility (WCAG AA)']
  },
  {
    category: 'Backend & Data Flow',
    items: ['Node.js API development', 'Server-side data fetching & caching', 'Concurrency conflict handling', 'Secure form processing & validation', 'Cart & session orchestration']
  },
  {
    category: 'Production & Quality',
    items: ['Core Web Vitals optimization', 'Semantic HTML & Schema.org SEO', 'Defensive error boundaries', 'Clean Git workflows', 'Performance profiling']
  }
];

export const PROFILE = {
  name: 'Ajvadu',
  role: 'Full Stack Developer',
  location: 'Remote / Available Worldwide',
  email: 'ajupoolat@gmail.com',
  valueProposition: 'I turn business requirements into practical, production-ready web solutions.',
  summary: 'Full Stack Developer with a track record of bridging the gap between high-level business goals and robust, deployable web software. Focused on practical architecture, clean TypeScript, and production performance.',
  status: 'Open for Select Engineering Opportunities & Production Builds'
};
