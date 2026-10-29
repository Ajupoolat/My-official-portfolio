'use client';

import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Github,
  Lock,
  Layers,
  Sparkles,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { ProjectCaseStudy } from '@/data/projects';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;

    if (project) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-hidden overscroll-contain"
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0c0d0d] border border-[#232524] rounded-2xl shadow-2xl overflow-hidden my-auto text-gray-200 transition-all overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="shrink-0 flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#232524] bg-[#141615]">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="font-mono-code text-[#2B8BFE] font-bold text-sm">
              {project.projectNumber}
            </span>
            <span aria-hidden="true" className="text-gray-600 font-mono-code">/</span>
            <span className="font-display font-bold text-white text-base tracking-tight">
              {project.title}
            </span>
            <span aria-hidden="true" className="text-gray-600 font-mono-code hidden sm:inline">/</span>
            <span className="font-mono-code text-xs text-gray-400 hidden sm:inline">
              {project.typeBadge}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-[#232524] text-gray-400 hover:text-white hover:border-[#2B8BFE] hover:bg-white/[0.05] transition-all focus:outline-none focus:ring-2 focus:ring-[#2B8BFE] cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          data-lenis-prevent
          className="flex-1 overflow-y-auto modal-scrollbar p-6 sm:p-8 md:p-10 space-y-10 overscroll-contain"
        >
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-code text-[#2B8BFE] uppercase tracking-widest mb-3">
              <span>{project.status}</span>
              {project.duration && (
                <>
                  <span aria-hidden="true" className="text-gray-600">·</span>
                  <span className="text-gray-400">{project.duration}</span>
                </>
              )}
            </div>

            <h2
              id="case-study-title"
              className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight"
            >
              {project.title}: {project.category}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Quick Overview Strip */}
          <div className="p-5 rounded-xl bg-[#141615] border border-[#232524] grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
            <div>
              <span className="block font-mono-code text-gray-500 uppercase text-[10px] tracking-wider mb-1.5">
                Engagement Model
              </span>
              <span className="text-white font-medium font-sans">
                {project.typeBadge}
              </span>
            </div>
            <div>
              <span className="block font-mono-code text-gray-500 uppercase text-[10px] tracking-wider mb-1.5">
                Role &amp; Context
              </span>
              <span className="text-white font-medium font-sans">
                {project.companyContext || project.role}
              </span>
            </div>
            <div>
              <span className="block font-mono-code text-gray-500 uppercase text-[10px] tracking-wider mb-1.5">
                Core Stack
              </span>
              <span className="text-[#2B8BFE] font-mono-code font-medium">
                {project.technologies.slice(0, 4).join(' · ')}
              </span>
            </div>
          </div>

          {/* Business Problem & Engineering Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-xl bg-[#141615] border border-[#232524]">
              <div className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-2.5">
                01. The Problem Statement
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-3">
                Operational Friction &amp; Bottlenecks
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-xl bg-[#141615] border border-[#232524]">
              <div className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-2.5">
                02. Engineering Approach
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-3">
                Solution Architecture &amp; Delivery
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.thinkingAndApproach}
              </p>
            </div>
          </div>

          {/* Transformation Flow (if available) */}
          {project.transformationFlow && (
            <div className="p-6 sm:p-7 rounded-xl bg-[#141615] border border-[#232524]">
              <div className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-4">
                Operational Workflow Transformation
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-[#0c0d0d] border border-[#232524]">
                  <div className="text-xs font-mono-code font-bold text-red-400 uppercase tracking-wider mb-3">
                    Before: Manual &amp; Fragmented
                  </div>
                  <ul className="space-y-2">
                    {project.transformationFlow.from.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <span className="text-red-400 font-mono-code shrink-0">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[#0c0d0d] border border-[#232524]">
                  <div className="text-xs font-mono-code font-bold text-emerald-400 uppercase tracking-wider mb-3">
                    After: Automated &amp; Deterministic
                  </div>
                  <ul className="space-y-2">
                    {project.transformationFlow.to.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Verified Contributions: Frontend & Backend Split or Combined */}
          {project.frontendContributions && project.backendContributions ? (
            <div className="p-6 sm:p-7 rounded-xl bg-[#141615] border border-[#232524] space-y-6">
              <div>
                <div className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-2">
                  Verified Production Contributions
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Direct Implementation Responsibilities (Frontend &amp; Backend)
                </h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-1">
                {/* Frontend Contributions */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#0c0d0d] border border-[#232524] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#232524]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#2B8BFE]" />
                        <span className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-wider">
                          Frontend Contributions
                        </span>
                      </div>
                      <span className="font-mono-code text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-[#232524]">
                        {project.frontendContributions.length} Items
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {project.frontendContributions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#2B8BFE] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Backend Contributions */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#0c0d0d] border border-[#232524] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#232524]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-mono-code text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          Backend &amp; Security Contributions
                        </span>
                      </div>
                      <span className="font-mono-code text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-[#232524]">
                        {project.backendContributions.length} Items
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {project.backendContributions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-7 rounded-xl bg-[#141615] border border-[#232524]">
              <div className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-2.5">
                Verified Production Contributions
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-4">
                Direct Implementation Responsibilities
              </h4>
              <ul className="space-y-3">
                {project.verifiedContributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#2B8BFE] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Business Enablers: Tech Value Translation */}
          <div className="p-6 sm:p-7 rounded-xl bg-[#141615] border border-[#232524]">
            <div className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-2.5">
              Value Delivered Through Technology
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-4">
              Business Capabilities Enabled by Technical Choices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.businessEnablers.map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-[#0c0d0d] border border-[#232524]">
                  <div className="font-mono-code text-xs text-[#2B8BFE] font-bold mb-1.5">
                    {item.technology}
                  </div>
                  <div className="text-xs text-gray-300 leading-relaxed font-sans">
                    {item.businessFunctionality}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Technologies Pills */}
          <div className="p-6 rounded-xl bg-[#141615] border border-[#232524]">
            <div className="font-mono-code text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-[#232524] text-xs font-mono-code text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Access & Repository Links */}
          <div className="pt-2 border-t border-[#232524]">
            <div className="font-mono-code text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Access &amp; Deployment Status
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Live Link */}
              <div className="p-4 rounded-xl bg-[#141615] border border-[#232524] flex items-center justify-between">
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase font-mono-code mb-1">
                    Live Deployment
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-medium flex items-center gap-1.5 font-sans"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.liveUrlLabel || 'Open Live Demo'}</span>
                    </a>
                  ) : (
                    <span className="text-gray-300 font-medium font-sans">
                      {project.liveUrlNote || 'Available upon interview walkthrough'}
                    </span>
                  )}
                </div>
                {project.liveUrl && <ExternalLink className="w-4 h-4 text-emerald-400" />}
              </div>

              {/* GitHub Link */}
              <div className="p-4 rounded-xl bg-[#141615] border border-[#232524] flex items-center justify-between">
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase font-mono-code mb-1">
                    Source Code
                  </span>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2B8BFE] hover:underline font-medium flex items-center gap-1.5 font-sans"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{project.githubUrlLabel || 'Open GitHub Repo'}</span>
                    </a>
                  ) : (
                    <span className="text-gray-300 font-medium flex items-center gap-1.5 font-sans">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.githubUrlNote || 'Proprietary client repository'}</span>
                    </span>
                  )}
                </div>
                {project.githubUrl && <ExternalLink className="w-4 h-4 text-[#2B8BFE]" />}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="shrink-0 px-6 sm:px-8 py-4 bg-[#141615] border-t border-[#232524] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <span className="text-gray-400">Have a similar engineering challenge?</span>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 font-bold text-xs uppercase tracking-wider text-[#0c0d0d] bg-[#2B8BFE] hover:bg-[#1b74e4] hover:text-white rounded-full transition-all shadow-md font-sans"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
