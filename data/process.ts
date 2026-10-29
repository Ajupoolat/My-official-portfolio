export interface ProcessStage {
  step: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  operationalArtifact: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Understand',
    tagline: 'Grasp the operational reality',
    description: 'Understand the actual business workflow and the people using it.',
    details: [
      'Engage with core stakeholders to trace everyday operational friction.',
      'Map existing manual steps, paperwork, handoffs, and communication delays.',
      'Identify the real-world user constraints: mobile usage, low bandwidth, time pressures.'
    ],
    operationalArtifact: 'Problem Statement & Workflow Map'
  },
  {
    step: '02',
    name: 'Define',
    tagline: 'Deconstruct into clear rules',
    description: 'Turn the business problem into clear software requirements and rules.',
    details: [
      'Convert ambiguous objectives into explicit, testable functional rules.',
      'Establish technical boundaries, data validation criteria, and authorization constraints.',
      'Prioritize core commercial value over speculative feature bloat.'
    ],
    operationalArtifact: 'Requirements Specification & Rule Matrix'
  },
  {
    step: '03',
    name: 'Design',
    tagline: 'System architecture & behavior',
    description: 'Design the system, user flows, data structures, and application behavior.',
    details: [
      'Design relational schemas, data models, and API interface contracts.',
      'Architect user navigation journeys and component hierarchy from Figma designs.',
      'Plan state management, cache invalidation, and concurrency conflict safety.'
    ],
    operationalArtifact: 'System Architecture & Schema Blueprint'
  },
  {
    step: '04',
    name: 'Build',
    tagline: 'End-to-end full-stack craft',
    description: 'Implement the frontend, backend, APIs, authentication, business logic, and integrations.',
    details: [
      'Construct strict TypeScript components with Next.js, React, and Tailwind CSS.',
      'Develop robust Node.js / Express REST APIs with secure middleware and JWT / OAuth.',
      'Implement real-time events, payment gateways (Razorpay), and third-party services.'
    ],
    operationalArtifact: 'Type-Safe Production Codebase'
  },
  {
    step: '05',
    name: 'Refine',
    tagline: 'Production hardening & edge cases',
    description: 'Debug, optimize, improve maintainability, and handle edge cases.',
    details: [
      'Investigate production anomalies, race conditions, and error recovery paths.',
      'Audit mobile responsiveness, touch targets, and accessibility (WCAG AA).',
      'Refactor reusable components to maximize team maintainability and code longevity.'
    ],
    operationalArtifact: 'Hardened Component & Test Suite'
  },
  {
    step: '06',
    name: 'Ship',
    tagline: 'Reliable production deployment',
    description: 'Move the solution toward a reliable production application.',
    details: [
      'Verify Core Web Vitals, server response latencies, and asset optimization.',
      'Set up environment configurations, build pipelines, and production deployment scripts.',
      'Deliver documentation and clean hand-off for ongoing team maintenance.'
    ],
    operationalArtifact: 'Verified Production Release'
  }
];
