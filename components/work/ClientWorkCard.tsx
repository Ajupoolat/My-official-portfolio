'use client';

import React from 'react';
import { ProjectCaseStudy } from '@/data/projects';
import {
  ExternalLink,
  Github,
  Lock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar,
  Layers
} from 'lucide-react';

interface ClientWorkCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export default function ClientWorkCard({ project, onOpenCaseStudy }: ClientWorkCardProps) {
  return (
    <article className="relative bg-[#0d1017] border border-white/[0.12] rounded-2xl p-6 sm:p-9 lg:p-10 transition-all duration-300 hover:border-sky-500/40 shadow-xl overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 via-sky-400 to-indigo-500 opacity-80" />

      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 text-xs mb-2">
            <span className="px-2.5 py-1 rounded font-mono text-[11px] font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
              {project.typeBadge}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300 font-mono text-xs flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.companyContext}</span>
            </span>
            {project.duration && (
              <>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 font-mono text-xs flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{project.duration}</span>
                </span>
              </>
            )}
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-1 font-medium">
            {project.category}
          </p>
        </div>

        <div className="self-start lg:self-auto">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#161c28] hover:bg-[#1e2536] border border-white/10 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-sm"
          >
            <span>View Full Case Study Details</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>

      {/* Main Narrative Split: Business Problem & My Contribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start border-b border-white/[0.08]">
        {/* Left Column: Business Problem */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-300/90 font-semibold">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span>The Business Problem</span>
          </div>

          <div className="p-5 rounded-xl bg-[#121622] border border-white/[0.06] space-y-3">
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
            <div className="pt-2 border-t border-white/[0.06] text-xs text-slate-400 leading-normal">
              <span className="text-white font-medium">Core Risk:</span> User drop-off during high-intent inquiry submissions and inconsistent responsive rendering on mobile browsers.
            </div>
          </div>
        </div>

        {/* Right Column: My Contribution & Production Scope */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 uppercase tracking-wider text-sky-300 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>My Contribution & Production Scope</span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              {project.role}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#121622] border border-white/[0.06]">
            <ul className="space-y-3">
              {project.verifiedContributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="text-sky-400 font-bold shrink-0 mt-0.5">✔</span>
                  <span className="leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Technologies and Explicit Live Demo / GitHub Links */}
      <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Technologies List */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-mono mr-1">Stack:</span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Demo and GitHub Status / Links */}
        <div className="flex flex-wrap items-center gap-3">
          {/* GitHub link / note */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-slate-300 bg-[#141822] border border-white/[0.08] rounded-lg">
            <Github className="w-3.5 h-3.5 text-slate-400" />
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:underline flex items-center gap-1"
              >
                <span>{project.githubUrlLabel || 'GitHub Repository'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-slate-400 flex items-center gap-1.5" title={project.githubUrlNote}>
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Client Repository (Proprietary / Private)</span>
              </span>
            )}
          </div>

          {/* Live Demo link / note */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-slate-300 bg-[#141822] border border-white/[0.08] rounded-lg">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1.5 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{project.liveUrlLabel || 'Live Platform'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-slate-400 flex items-center gap-1.5" title={project.liveUrlNote}>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Live Demo: Available upon request (Client Protected)</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
