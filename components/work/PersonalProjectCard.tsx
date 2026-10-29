'use client';

import React from 'react';
import { ProjectCaseStudy } from '@/data/projects';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code2,
  Users,
  Compass,
  Radio
} from 'lucide-react';

interface PersonalProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export default function PersonalProjectCard({ project, onOpenCaseStudy }: PersonalProjectCardProps) {
  const isCommunity = project.id === 'bookmyvenue';

  return (
    <article className="relative bg-[#0d1017] border border-white/[0.1] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:shadow-xl group">
      <div>
        {/* Top Header Badge & Number */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 rounded font-mono text-[11px] font-semibold border ${
                isCommunity
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
              }`}
            >
              {project.typeBadge}
            </span>
          </div>

          <span className="font-mono text-xs text-slate-500 font-bold">
            {project.projectNumber}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {project.category}
          </p>
        </div>

        {/* Brief Explanation of the Project */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-[#121622] border border-white/[0.06]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Project Overview
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.briefExplanation}
            </p>
          </div>

          {/* Key Engineering Contribution */}
          <div className="p-4 rounded-xl bg-[#121622] border border-white/[0.06]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400 mb-2 font-semibold">
              Key Architecture Focus
            </div>
            <ul className="space-y-1.5">
              {project.verifiedContributions.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                  <span className="text-sky-400 mt-0.5">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies List */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-slate-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action & Links Footer */}
      <div className="pt-4 border-t border-white/[0.08] space-y-3">
        {/* Live Demo & GitHub Links */}
        <div className="flex flex-wrap items-center gap-2">
          {/* GitHub link */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white bg-[#161c28] hover:bg-[#202838] border border-white/10 rounded-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>{project.githubUrlLabel || 'GitHub'}</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 bg-[#161c28] border border-white/[0.06] rounded-md">
              <Github className="w-3.5 h-3.5 text-slate-500" />
              <span>{project.githubUrlLabel || 'GitHub'}</span>
            </span>
          )}

          {/* Live Demo link */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{project.liveUrlLabel || 'Live Demo'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 bg-[#161c28] border border-white/[0.06] rounded-md"
              title={project.liveUrlNote}
            >
              <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>{project.liveUrlNote || 'Live Demo (In progress)'}</span>
            </span>
          )}

          {/* Case study trigger */}
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="ml-auto inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium py-1.5"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
