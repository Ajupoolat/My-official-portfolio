'use client';

import React, { useState } from 'react';
import { CLIENT_PROJECTS, PERSONAL_PROJECTS, ProjectCaseStudy } from '@/data/projects';
import ClientWorkCard from './ClientWorkCard';
import PersonalProjectCard from './PersonalProjectCard';
import CaseStudyModal from '@/components/case-studies/CaseStudyModal';
import { Briefcase, FolderGit2 } from 'lucide-react';

export default function WorkSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
          Track Record & Builds
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
          Selected Work
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Clear separation between commercial client delivery and independent full-stack learning projects. Every build highlights real problem-solving, verified contributions, and working links.
        </p>
      </div>

      {/* Part 1: Commercial Client Work */}
      <div className="space-y-6 mb-20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Commercial Client Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Commercial production experience working within a team to redevelop and optimize an active platform.
            </p>
          </div>
        </div>

        {/* Client Work Cards */}
        <div className="space-y-8">
          {CLIENT_PROJECTS.map((project) => (
            <ClientWorkCard
              key={project.id}
              project={project}
              onOpenCaseStudy={setSelectedCaseStudy}
            />
          ))}
        </div>
      </div>

      {/* Part 2: Personal & Community Projects */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Personal & Community Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Collaborative community initiative and independent learning builds exploring full-stack architectures.
            </p>
          </div>
        </div>

        {/* 2-Column Grid for Personal Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PERSONAL_PROJECTS.map((project) => (
            <PersonalProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={setSelectedCaseStudy}
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
