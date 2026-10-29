'use client';

import React from 'react';
import { CLIENT_PROJECTS, ProjectCaseStudy } from '@/data/projects';
import { ArrowUpRight, CheckCircle2, Lock } from 'lucide-react';

interface SelectedWorkSectionProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export default function SelectedWorkSection({ onOpenCaseStudy }: SelectedWorkSectionProps) {
  const propertySeller = CLIENT_PROJECTS.find((p) => p.id === 'propertyseller') || CLIENT_PROJECTS[0];

  return (
    <section
      id="selected-work"
      className="py-24 border-b border-[#232524] bg-[#0c0d0d] px-6 md:px-12"
      data-purpose="featured-client-work"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header styled consistently with the skills area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-2">
              SELECTED WORK — COMMERCIAL &amp; CLIENT PLATFORMS
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Commercial Platforms in Production
            </h2>
          </div>
          <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
            Real-world commercial engagements and freelance client contracts delivering end-to-end full-stack systems. Translating intricate Figma designs into responsive Next.js architectures, integrating backend REST APIs, and resolving critical production bugs under active operations.
          </p>
        </div>

        {/* Featured Commercial Client Card */}
        {propertySeller && (
          <div className="grid grid-cols-1 gap-8">
            <article className="p-8 sm:p-10 border border-[#232524] hover:border-[#2B8BFE]/60 bg-[#141615]/70 transition-all flex flex-col justify-between group rounded-xl shadow-xl">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-[#2B8BFE] uppercase tracking-wider font-semibold">
                      COMMERCIAL CLIENT WORK · 6-MONTH CONTRACT
                    </span>
                    <span className="text-gray-600 font-mono-code">/</span>
                    <span className="font-mono-code text-xs text-gray-400">
                      Emiraaz Technologies LLP
                    </span>
                  </div>
                  <span className="font-mono-code text-xs text-gray-500">2025 — 2026</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#2B8BFE] transition-colors mb-4">
                  {propertySeller.title}: Active Commercial Real Estate Platform Redevelopment
                </h3>

                <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-4xl">
                  {propertySeller.briefExplanation}
                </p>

                {/* Key Deliverables Bullet Points: Frontend & Backend Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pt-1">
                  <div className="p-4 rounded-lg bg-[#0c0d0d] border border-[#232524] space-y-2.5">
                    <div className="text-xs font-mono-code font-bold text-[#2B8BFE] uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-[#232524]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2B8BFE]" />
                      <span>Frontend Engineering</span>
                    </div>
                    {(propertySeller.frontendContributions?.slice(0, 2) || propertySeller.verifiedContributions.slice(0, 2)).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2B8BFE] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-[#0c0d0d] border border-[#232524] space-y-2.5">
                    <div className="text-xs font-mono-code font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-[#232524]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Backend &amp; Security</span>
                    </div>
                    {(propertySeller.backendContributions?.slice(0, 2) || propertySeller.verifiedContributions.slice(2, 4)).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {propertySeller.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-[#232524] text-xs font-mono-code text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Modal Trigger */}
              <div className="flex flex-wrap items-center justify-between pt-6 border-t border-[#232524] gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono-code text-gray-300 font-medium">
                    Impact: 25+ Production Pages Shipped · Production Debugging
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono-code text-xs text-gray-500 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Commercial Client NDA</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy(propertySeller)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2B8BFE] text-[#0c0d0d] font-bold rounded-full text-xs hover:bg-[#1b74e4] hover:text-white transition-all shadow-md font-sans cursor-pointer"
                  >
                    <span>Read Deep-Dive Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
