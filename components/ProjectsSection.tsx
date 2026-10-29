'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolio';
import { ArrowUpRight, Layers, Users, ExternalLink } from 'lucide-react';
import PropertySellerPreview from './project-previews/PropertySellerPreview';
import BookMyVenuePreview from './project-previews/BookMyVenuePreview';
import WotixPreview from './project-previews/WotixPreview';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'production' | 'team' | 'ecommerce'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header with Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            Case Studies & Deployments
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Selected Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real software built to solve real commercial problems. Each project highlights the path from initial friction to production deployment.
          </p>
        </div>

        {/* Filter Segmented Control (Interactive buttons) */}
        <div className="flex items-center gap-1 p-1 bg-[#12151d] rounded-lg border border-white/[0.08] self-start md:self-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
              filter === 'all'
                ? 'bg-[#1e2330] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Work
          </button>
          <button
            type="button"
            onClick={() => setFilter('production')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
              filter === 'production'
                ? 'bg-[#1e2330] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Production Work
          </button>
          <button
            type="button"
            onClick={() => setFilter('team')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
              filter === 'team'
                ? 'bg-[#1e2330] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Team Projects
          </button>
          <button
            type="button"
            onClick={() => setFilter('ecommerce')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 ${
              filter === 'ecommerce'
                ? 'bg-[#1e2330] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            E-Commerce
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {filteredProjects.map((project, index) => {
          return (
            <article
              key={project.id}
              className="bg-[#12151d] border border-white/[0.08] rounded-2xl p-6 sm:p-8 lg:p-10 transition-all hover:border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Narrative & Delineated Scope */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    {/* Unboxed Metadata Line with Separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium mb-3">
                      <span className="text-sky-400 font-semibold">{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-300">{project.roleType}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                      {project.tagline}
                    </p>

                    {/* Operational Problem Summary */}
                    <div className="p-4 rounded-xl bg-[#171c26] border border-white/[0.06] mb-5">
                      <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                        Business Problem Solved
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.businessProblem}
                      </p>
                    </div>

                    {/* Contribution Delineation */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Scope & Key Contribution</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.roleDescription}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack line + Trigger Modal Button */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 font-mono">
                      {project.stack.slice(0, 4).join(' · ')}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-md transition-all self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Live Interactive Prototype Canvas */}
                <div className="lg:col-span-7">
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px] text-slate-400">Interactive Solution Interface</span>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-[11px] text-sky-400 hover:underline flex items-center gap-1"
                    >
                      <span>Full breakdown</span>
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
        })}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
