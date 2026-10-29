'use client';

import React from 'react';
import { ProjectCaseStudy } from '@/data/projects';
import { ArrowUpRight, Code2, Users, Layers, ExternalLink } from 'lucide-react';
import PropertySellerPreview from '@/components/project-previews/PropertySellerPreview';
import BookMyVenuePreview from '@/components/project-previews/BookMyVenuePreview';
import WotixPreview from '@/components/project-previews/WotixPreview';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export default function ProjectCard({ project, index, onOpenCaseStudy }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article className="bg-[#0f121a] border border-white/[0.08] rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Narrative Side */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between h-full space-y-6 ${
            isEven ? 'order-1' : 'order-1 lg:order-2'
          }`}
        >
          <div>
            {/* Unboxed Metadata Line with Separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <span className="text-sky-400 font-bold">{project.projectNumber}</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-300 font-semibold">{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-400">{project.status}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              {project.tagline}
            </p>

            {/* Structured Problem & Approach Cards */}
            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-xl bg-[#141822] border border-white/[0.06]">
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider mb-1">
                  Business Problem
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141822] border border-white/[0.06]">
                <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                  My Contribution & Scope
                </div>
                <div className="text-xs text-white font-medium mb-1">
                  {project.role}
                </div>
                <ul className="space-y-1.5 mt-2">
                  {project.verifiedContributions.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-sky-400 mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer of Card: Tech list & Case Study trigger */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              {project.technologies.slice(0, 4).join(' · ')}
            </div>

            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1a202c] hover:bg-[#232a3a] border border-white/10 rounded-md transition-all self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span>View Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Visual / Interactive Prototype Side */}
        <div
          className={`lg:col-span-6 ${
            isEven ? 'order-2' : 'order-2 lg:order-1'
          }`}
        >
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px]">Interactive Prototype Simulation</span>
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="text-[11px] text-sky-400 hover:underline flex items-center gap-1"
            >
              <span>Inspect breakdown</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          {project.id === 'propertyseller' && <PropertySellerPreview />}
          {project.id === 'bookmyvenue' && <BookMyVenuePreview />}
          {project.id === 'wotix' && <WotixPreview />}
        </div>
      </div>
    </article>
  );
}
