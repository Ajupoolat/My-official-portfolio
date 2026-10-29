'use client';

import React from 'react';
import { PERSONAL_PROJECTS, ProjectCaseStudy } from '@/data/projects';
import { ArrowUpRight, Github, ExternalLink, Calendar, ShieldCheck, Wallet } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export default function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const bookMyVenue = PERSONAL_PROJECTS.find((p) => p.id === 'bookmyvenue');
  const wotix = PERSONAL_PROJECTS.find((p) => p.id === 'wotix');

  return (
    <section
      id="projects"
      className="py-24 border-b border-[#232524] bg-[#0c0d0d] px-6 md:px-12"
      data-purpose="personal-and-team-projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header matching screen.png */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-3">
              PROJECTS &amp; INITIATIVES
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              Experiments, Tools &amp; Team Ventures
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Side projects, collaborative team builds, and full-stack learning architectures engineered to solve recurring bottlenecks in web systems.
          </p>
        </div>

        {/* 3 Project Cards Grid matching screen.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 01: BookMyVenue */}
          {bookMyVenue && (
            <div className="border border-[#232524] p-7 bg-[#141615]/30 hover:border-[#2B8BFE] transition-all flex flex-col justify-between group rounded-xl">
              <div>
                <div className="font-mono-code text-xs text-[#2B8BFE] font-semibold uppercase tracking-wider mb-2">
                  COMMUNITY TEAM PLATFORM · B2B2C
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#2B8BFE] transition-colors mb-3">
                  {bookMyVenue.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {bookMyVenue.briefExplanation}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 text-xs text-gray-300 font-mono-code">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B8BFE]" />
                    <span>Instant date &amp; time-slot validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B8BFE]" />
                    <span>Dynamic pricing &amp; guest tier rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B8BFE]" />
                    <span>Atomic slot collision prevention</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white/5 border border-[#232524] text-[11px] font-mono-code text-gray-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#232524] flex items-center justify-between">
                <span className="text-xs font-mono-code text-gray-400">
                  Atomic Booking Logic
                </span>
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(bookMyVenue)}
                  className="text-[#2B8BFE] text-xs font-mono-code uppercase font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          )}

          {/* Project 02: Wotix */}
          {wotix && (
            <div className="border border-[#232524] p-7 bg-[#141615]/30 hover:border-[#2B8BFE] transition-all flex flex-col justify-between group rounded-xl">
              <div>
                <div className="font-mono-code text-xs text-[#2B8BFE] font-semibold uppercase tracking-wider mb-2">
                  FULL-STACK E-COMMERCE · INDEPENDENT
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#2B8BFE] transition-colors mb-3">
                  {wotix.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {wotix.briefExplanation}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 text-xs text-gray-300 font-mono-code">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Razorpay HMAC cryptographic validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Customer wallet &amp; automated refunds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Socket.IO live merchant alert channels</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Socket.IO'].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white/5 border border-[#232524] text-[11px] font-mono-code text-gray-400 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#232524] flex items-center justify-between">
                <span className="text-xs font-mono-code text-gray-400">
                  Cryptographic Payments
                </span>
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(wotix)}
                  className="text-[#2B8BFE] text-xs font-mono-code uppercase font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
