'use client';

import React from 'react';
import { PROFILE } from '@/data/profile';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CareerRow {
  period: string;
  role: string;
  organization: string;
  contractContext: string;
  description: string;
}

const CAREER_ROWS: CareerRow[] = [
  {
    period: 'DEC 2025 — MAY 2026',
    role: 'Freelance Full-Stack Developer',
    organization: 'Emiraaz Technologies LLP',
    contractContext: '6-Month Contract',
    description:
      'Worked as a freelance full-stack developer at Emiraaz Technologies LLP, contributing to the redevelopment and production enhancement of a live commercial real estate platform - PropertySeller.',
  },
  {
    period: '2025 — PRESENT',
    role: 'Full-Stack Developer & Community Contributor',
    organization: 'WeCode Malayalam',
    contractContext: 'Community Startup · Team Project',
    description:
      'Contributing to BookMyVenue, a collaborative startup project focused on venue discovery and booking, working with the team to develop its production-ready platform.',
  },
  {
    period: '2024 — PRESENT',
    role: 'Self-Taught Full-Stack Developer',
    organization: 'Independent Learning & Projects',
    contractContext: 'Continuous Learning · Independent Builds',
    description:
      'Building practical web applications through self-directed learning and hands-on projects, developing skills across frontend interfaces, backend services, database design, API integration, and deployment.',
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="resume"
      className="py-24 border-b border-[#232524] bg-[#0c0d0d] px-6 md:px-12"
      data-purpose="career-trajectory-and-experience"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header matching screen.png */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-3">
              EXPERIENCE &amp; BACKGROUND
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              Track Record
            </h2>
          </div>
          <div>
            <a
              href="/Ajvadu_FullStack_Resume.pdf"
              download="Ajvadu_FullStack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2B8BFE] text-[#2B8BFE] hover:bg-[#2B8BFE] hover:text-[#0c0d0d] text-xs font-mono-code uppercase tracking-wider transition-all"
            >
              <span>Download Full Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Clean Timeline Rows matching screen.png */}
        <div className="border-t border-[#232524] divide-y divide-[#232524]">
          {CAREER_ROWS.map((row, idx) => (
            <div
              key={idx}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center hover:bg-white/[0.015] px-4 -mx-4 transition-all"
            >
              <div className="md:col-span-3 font-mono-code text-xs text-gray-400">
                {row.period}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display font-bold text-xl text-white">
                  {row.role}
                </h3>
                <p className="text-[#2B8BFE] font-medium text-sm mt-0.5">
                  {row.organization}
                  <span className="text-gray-500 font-mono-code text-xs ml-2">
                    [{row.contractContext}]
                  </span>
                </p>
              </div>
              <div className="md:col-span-4 text-gray-400 text-sm leading-relaxed">
                {row.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
