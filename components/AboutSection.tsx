'use client';

import React from 'react';
import { PROFILE } from '@/data/portfolio';
import { ArrowUpRight, Compass, Terminal, Shield, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Personal Statement & Studio Note */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            About & Working Ethos
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            A developer who thinks in operational realities.
          </h2>

          <div className="space-y-4 text-base text-slate-300 leading-relaxed">
            <p>
              I am {PROFILE.name}, a Full Stack Developer. Over the course of delivering production web applications like <strong className="text-white font-medium">PropertySeller</strong>, collaborating on complex scheduling platforms like <strong className="text-white font-medium">BookMyVenue</strong>, and architecting e-commerce experiences like <strong className="text-white font-medium">Wotix</strong>, I have learned that the hardest part of software engineering isn&apos;t syntax—it&apos;s alignment.
            </p>

            <p>
              My focus is taking messy, evolving business goals and turning them into practical, production-ready web solutions. That means stripping away speculative architecture, asking the awkward questions early, and designing systems that regular human beings can operate and extend without fear.
            </p>

            <p>
              I write strict, maintainable TypeScript, build accessible interfaces that honor real user constraints, and treat performance and reliability as standard requirements, not afterthoughts.
            </p>
          </div>

          {/* Core Commitments List */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              What you can count on when working with me:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Zero guesswork on business requirements</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Transparent architectural communication</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>High performance without bundle bloat</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Thorough production verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Card / Digital Space */}
        <div className="lg:col-span-5 bg-[#12151d] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-300">Current Availability</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Q4 2026</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block text-xs mb-1">Primary Role</span>
              <div className="font-semibold text-white">{PROFILE.role}</div>
            </div>

            <div>
              <span className="text-slate-400 block text-xs mb-1">Focus Areas</span>
              <div className="font-semibold text-white">
                Web Applications · Full-Stack Architectures · E-Commerce Systems · Booking & Inventory Platforms
              </div>
            </div>

            <div>
              <span className="text-slate-400 block text-xs mb-1">Work Engagement Mode</span>
              <div className="font-semibold text-white">
                Full-Stack Contracts, Engineering Team Collaboration & Production Deployments
              </div>
            </div>

            <div>
              <span className="text-slate-400 block text-xs mb-1">Direct Communication</span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-sky-400 hover:underline break-all"
              >
                {PROFILE.email}
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>Initiate a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
