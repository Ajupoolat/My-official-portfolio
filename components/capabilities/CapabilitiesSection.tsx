'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Database, Cloud, Shield, Sparkles } from 'lucide-react';

import {
  siJavascript,
  siTypescript,
  siNextdotjs,
  siReact,
  siNodedotjs,
  siExpress,
  siTailwindcss,
  siMongodb,
  siPostgresql,
  siRedis,
  siSocketdotio,
  siRazorpay,
  siGit,
  siGithub,
} from 'simple-icons';

interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'integrations' | 'tools';
  categoryLabel: string;
  experienceLevel: string;
  description: string;
  projectHighlight: string;
  color: string;
  svg: React.ReactNode;
}

function SimpleIconSvg({
  path,
  color,
  className = 'w-8 h-8',
}: {
  path: string;
  color: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
}

// AWS official 24x24 cloud mark vector
const AWS_SVG_PATH =
  'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z';

const TECH_SKILLS: TechSkill[] = [
  {
    name: 'JavaScript',
    category: 'frontend',
    categoryLabel: 'Core Language',
    experienceLevel: 'Core Proficiency',
    description: 'ES6+ standards, asynchronous concurrency, event loop, and modular code design.',
    projectHighlight: 'Foundational language across both frontend components and Node.js micro-services.',
    color: '#F7DF1E',
    svg: <SimpleIconSvg path={siJavascript.path} color="#F7DF1E" />,
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Type Safety',
    experienceLevel: 'Production Core',
    description: 'Strict typing, interfaces, generics, discriminated unions, and compile-time defensive safety.',
    projectHighlight: 'Enforced 100% type-safe models across PropertySeller and BookMyVenue APIs.',
    color: '#3178C6',
    svg: <SimpleIconSvg path={siTypescript.path} color="#3178C6" />,
  },
  {
    name: 'Next.js',
    category: 'frontend',
    categoryLabel: 'Full-Stack Framework',
    experienceLevel: 'Enterprise Platform',
    description: 'App Router, Server-Side Rendering (SSR), Server Components, Route Handlers, and SEO optimization.',
    projectHighlight: 'Redeveloped 25+ production modules for PropertySeller under active commercial use.',
    color: '#FFFFFF',
    svg: <SimpleIconSvg path={siNextdotjs.path} color="#FFFFFF" />,
  },
  {
    name: 'React.js',
    category: 'frontend',
    categoryLabel: 'UI Architecture',
    experienceLevel: 'Deep Specialization',
    description: 'Custom hooks, Context API, state machines, reconciliation performance, and atomic UI components.',
    projectHighlight: 'Engineered responsive booking wizards and real-time e-commerce catalog filters.',
    color: '#61DAFB',
    svg: <SimpleIconSvg path={siReact.path} color="#61DAFB" />,
  },
  {
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Runtime Engine',
    experienceLevel: 'Backend Core',
    description: 'Event-driven I/O, micro-services, streams, buffer management, and resilient REST middleware.',
    projectHighlight: 'Built high-throughput backend services and authentication gateways.',
    color: '#5FA04E',
    svg: <SimpleIconSvg path={siNodedotjs.path} color="#5FA04E" />,
  },
  {
    name: 'Express.js',
    category: 'backend',
    categoryLabel: 'API Framework',
    experienceLevel: 'Production APIs',
    description: 'RESTful architecture, custom middleware pipelines, CORS, rate limiting, and centralized error handlers.',
    projectHighlight: 'Constructed the backend routing and transaction engines powering Wotix and BookMyVenue.',
    color: '#FFFFFF',
    svg: <SimpleIconSvg path={siExpress.path} color="#FFFFFF" />,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Design Systems',
    experienceLevel: 'High Velocity',
    description: 'Utility-first architecture, responsive viewports (375px+ to 4K), fluid typography, and dark mode.',
    projectHighlight: 'Standardized design systems across 25+ modules for pixel-perfect Figma translation.',
    color: '#06B6D4',
    svg: <SimpleIconSvg path={siTailwindcss.path} color="#06B6D4" />,
  },
  {
    name: 'MongoDB',
    category: 'database',
    categoryLabel: 'NoSQL Database',
    experienceLevel: 'Schema & Aggregations',
    description: 'Mongoose schemas, indexing strategies, complex aggregation pipelines, and atomic updates.',
    projectHighlight: 'Designed document models for product catalogs, user wallets, and order states in Wotix.',
    color: '#47A248',
    svg: <SimpleIconSvg path={siMongodb.path} color="#47A248" />,
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Relational Database',
    experienceLevel: 'Relational Schemas',
    description: 'ACID compliance, relational constraints, foreign keys, complex joins, and deterministic transaction isolation.',
    projectHighlight: 'Structured venue reservation tables and blackout booking calendars in BookMyVenue.',
    color: '#4169E1',
    svg: <SimpleIconSvg path={siPostgresql.path} color="#4169E1" />,
  },
  {
    name: 'Redis',
    category: 'database',
    categoryLabel: 'In-Memory Cache',
    experienceLevel: 'Caching & Rate Limits',
    description: 'Key-value caching, TTL eviction, distributed rate limiting, and temporary session stores.',
    projectHighlight: 'Reduced API response times and secured login endpoints against brute force attempts.',
    color: '#FF4438',
    svg: <SimpleIconSvg path={siRedis.path} color="#FF4438" />,
  },
  {
    name: 'Socket.IO',
    category: 'integrations',
    categoryLabel: 'Real-Time Sync',
    experienceLevel: 'Live Event Channels',
    description: 'Bi-directional WebSocket channels, event rooms, fallback polling, and client reconnection logic.',
    projectHighlight: 'Architected real-time merchant alert channels for instant order arrivals and inventory updates.',
    color: '#FFFFFF',
    svg: <SimpleIconSvg path={siSocketdotio.path} color="#FFFFFF" />,
  },
  {
    name: 'Razorpay',
    category: 'integrations',
    categoryLabel: 'Fintech & Payments',
    experienceLevel: 'Cryptographic HMAC',
    description: 'Payment intent lifecycle, webhook handlers, server-side HMAC-SHA256 signature verification, and automated refunds.',
    projectHighlight: 'Protected order pipelines against tampering with verified server-side payment confirmation.',
    color: '#0C83FD',
    svg: <SimpleIconSvg path={siRazorpay.path} color="#0C83FD" />,
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    categoryLabel: 'Version Control',
    experienceLevel: 'Daily Workflow',
    description: 'Branching models, atomic commits, pull requests, merge conflict resolution, and CI/CD triggers.',
    projectHighlight: 'Disciplined version control across team repositories and collaborative codebases.',
    color: '#F03C2E',
    svg: (
      <div className="flex items-center gap-1.5">
        <SimpleIconSvg path={siGit.path} color="#F03C2E" className="w-5 h-5" />
        <SimpleIconSvg path={siGithub.path} color="#FFFFFF" className="w-5 h-5" />
      </div>
    ),
  },
  {
    name: 'AWS & Cloud',
    category: 'tools',
    categoryLabel: 'Hosting & Deployment',
    experienceLevel: 'Production Deploy',
    description: 'EC2 instance configuration, Nginx reverse proxy, PM2 process management, and Vercel edge deployments.',
    projectHighlight: 'Deployed full-stack applications with environment isolation, SSL, and continuous deployment.',
    color: '#FF9900',
    svg: <SimpleIconSvg path={AWS_SVG_PATH} color="#FF9900" />,
  },
];

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'database' | 'integrations' | 'tools'>('all');

  const filteredSkills =
    activeTab === 'all'
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 border-b border-[#232524] bg-[#0c0d0d] px-6 md:px-12"
      data-purpose="supporting-technical-evidence"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Tech as supporting evidence after project proof */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-3">
              TECHNICAL FOUNDATIONS
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Tools I use to build the solution
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-3 max-w-2xl">
              Technology is supporting evidence for the solutions above. Here are the core languages, frameworks, databases, and infrastructure tools I leverage in production.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'database', label: 'Databases' },
              { id: 'integrations', label: 'Integrations' },
              { id: 'tools', label: 'Cloud & Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#2B8BFE] text-[#0c0d0d] font-bold shadow-md shadow-[#2B8BFE]/20'
                    : 'bg-white/5 border border-[#232524] text-gray-400 hover:text-white hover:border-[#2B8BFE]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Skill Cards with Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl bg-[#141615] border border-[#232524] hover:border-[#2B8BFE]/60 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#0c0d0d] border border-[#232524] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {skill.svg}
                  </div>
                  <span className="font-mono-code text-[10px] text-gray-400 bg-white/[0.04] px-2.5 py-1 rounded border border-[#232524]">
                    {skill.categoryLabel}
                  </span>
                </div>

                <h4 className="font-display font-bold text-xl text-white group-hover:text-[#2B8BFE] transition-colors mb-1.5">
                  {skill.name}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#232524]">
                <div className="flex items-start gap-1.5 text-[11px] text-gray-300 font-mono-code">
                  <span className="text-[#2B8BFE] shrink-0">↳</span>
                  <span className="line-clamp-2">{skill.projectHighlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
