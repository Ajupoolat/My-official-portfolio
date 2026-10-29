'use client';

import React from 'react';
import { PROFILE } from '@/data/profile';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/[0.08]">
      <div className="flex flex-col space-y-6">
        {/* Personal Statement & Philosophy */}
        <div className="w-full space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            About Ajvadu
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Driven by curiosity, grounded in production.
          </h2>

          <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal">
            <p>
              I am a self-taught Full Stack Developer based in Malappuram, Kerala, India. My passion for engineering began not with textbook theories, but with a practical fascination: how do lines of code turn a chaotic, manual business process into a seamless digital product?
            </p>

            <p>
              That question shaped my entire development path. When working on <strong className="text-white font-medium">PropertySeller</strong> (redeveloping 25+ Next.js modules under active production use), co-engineering <strong className="text-white font-medium">BookMyVenue</strong> (orchestrating atomic booking workflows for venues), or building <strong className="text-white font-medium">Wotix</strong> (handling cryptographic payment verification and digital wallets), my approach remains consistent:
            </p>

            <blockquote className="border-l-2 border-sky-400 pl-4 py-1 text-white italic font-medium">
              Understand the actual workflow first. Design the data and rules carefully. Build clean, type-safe software that runs without drama in production.
            </blockquote>

            <p>
              I don&apos;t chase speculative technology hypes or build features for the sake of complexity. I care about writing maintainable TypeScript, debugging real backend bottlenecks, respecting user constraints on mobile viewports, and shipping code that businesses can depend on.
            </p>
          </div>

          {/* Operational Commitments */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              How I Approach Every Project:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Deep dive into the operational problem</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Deterministic rules & data validation</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Responsive, accessible UI execution</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Defensive production debugging</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-white rounded-md hover:bg-slate-100 transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
