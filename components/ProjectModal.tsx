'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Users, Code2, Sparkles, Layers } from 'lucide-react';
import { Project } from '@/data/portfolio';
import PropertySellerPreview from './project-previews/PropertySellerPreview';
import BookMyVenuePreview from './project-previews/BookMyVenuePreview';
import WotixPreview from './project-previews/WotixPreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#11141c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#141822]">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold text-white tracking-wide">{project.title}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-sky-400 font-medium">{project.roleType}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 md:p-10 max-h-[80vh] overflow-y-auto space-y-10">
          {/* Header intro */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
              Case Study Deep Dive
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Embedded Interactive Live Simulation */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-semibold uppercase tracking-wider text-slate-300">
                Interactive Solution Demonstration
              </span>
              <span className="font-mono text-slate-400">Live Client Architecture Preview</span>
            </div>

            {project.id === 'propertyseller' && <PropertySellerPreview />}
            {project.id === 'bookmyvenue' && <BookMyVenuePreview />}
            {project.id === 'wotix' && <WotixPreview />}
          </div>

          {/* Delineated Role & Attribution */}
          <div className="p-5 rounded-xl bg-[#161a25] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Users className="w-4 h-4" />
              <span>Role Attribution & Individual Scope</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-medium mb-3">
              {project.roleDescription}
            </p>

            {project.teamContext && (
              <div className="text-xs text-slate-400 border-l-2 border-amber-400/50 pl-3 py-0.5 mb-3">
                <span className="font-semibold text-slate-300">Team Collaboration Note: </span>
                {project.teamContext}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Ajvadu&apos;s Specific Contributions:
              </div>
              <ul className="space-y-2">
                {project.individualContributions.map((contrib, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The 5-Phase Problem to Production Breakdown */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-400" />
              <span>Problem to Production Journey</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phase 1: Business Problem */}
              <div className="p-5 rounded-xl bg-[#141822] border border-white/[0.06]">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1.5">
                  01. Business Problem
                </div>
                <h4 className="text-sm font-bold text-white mb-2">The Operational Friction</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>

              {/* Phase 2: Understanding */}
              <div className="p-5 rounded-xl bg-[#141822] border border-white/[0.06]">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1.5">
                  02. Domain Understanding
                </div>
                <h4 className="text-sm font-bold text-white mb-2">User Reality & Constraints</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.understanding}
                </p>
              </div>

              {/* Phase 3: Solution Design */}
              <div className="p-5 rounded-xl bg-[#141822] border border-white/[0.06] md:col-span-2">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1.5">
                  03. Solution Design & Architecture
                </div>
                <h4 className="text-sm font-bold text-white mb-2">System Blueprint</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solutionDesign}
                </p>
              </div>

              {/* Phase 4: Implementation Highlights */}
              <div className="p-5 rounded-xl bg-[#141822] border border-white/[0.06]">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1.5">
                  04. Implementation
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Engineering Decisions</h4>
                <ul className="space-y-2 mt-2">
                  {project.implementationHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Code2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 5: Production Readiness */}
              <div className="p-5 rounded-xl bg-[#141822] border border-white/[0.06]">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
                  05. Production Readiness
                </div>
                <h4 className="text-sm font-bold text-white mb-2">Live Resilience & Hand-off</h4>
                <ul className="space-y-2 mt-2">
                  {project.productionReadiness.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Stack (Grouped, purposeful, not buzzwords) */}
          <div className="pt-4 border-t border-white/[0.08]">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Purposeful Tech Stack
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-300">
              {project.stack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-slate-200">{tech}</span>
                  {i < project.stack.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-6 py-4 bg-[#141822] border-t border-white/[0.08] flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Have a project with similar requirements?
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors"
          >
            <span>Discuss your build</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
