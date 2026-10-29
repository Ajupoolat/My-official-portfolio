export interface Profile {
  name: string;
  role: string;
  roleSubtitle: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  headline: string;
  supportingText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  availability: string;
  shortBio: string;
  journeyBio: string;
}

export const PROFILE: Profile = {
  name: 'Ajvadu',
  role: 'Full Stack Developer',
  roleSubtitle: 'Full Stack Developer · Next.js · React · Node.js · TypeScript',
  location: 'Malappuram, Kerala, India',
  email: 'ajupoolat@gmail.com',
  githubUrl: 'https://github.com/ajupoolat',
  linkedinUrl: 'https://www.linkedin.com/in/ajvadu-poolat',
  headline: 'I turn business requirements into working software.',
  supportingText:
    'I design and build practical web solutions that transform real business workflows into production-ready digital products.',
  primaryCtaText: 'View My Work',
  secondaryCtaText: "Let's Work Together",
  availability: 'Open for Select Engineering Contracts & Production Roles',
  shortBio:
    'Full Stack Developer based in Malappuram, Kerala, India. I specialize in breaking down complex business problems into reliable, maintainable web systems—focusing on practical architecture, responsive execution, and production resilience.',
  journeyBio:
    'My journey as a self-taught software engineer began with a deep curiosity about how digital systems power real-world commerce. Over time, that curiosity evolved into a disciplined full-stack craft: bridging Figma concepts with scalable backend APIs, debugging high-concurrency production platforms, and treating software not as an abstract exercise in technologies, but as an engine for solving concrete operational problems.'
};
