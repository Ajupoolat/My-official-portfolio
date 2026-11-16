'use client';

import React, { useState } from 'react';
import { TECH_SKILLS } from '@/data/capabilities';




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
                className={`px-4 py-2 rounded-full text-xs font-mono-code transition-all cursor-pointer ${activeTab === tab.id
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
