'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/[0.04] blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Metadata Row: Clean Unboxed Text with Separators */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm font-medium text-slate-400 mb-8 tracking-wide">
        <span className="text-white font-semibold">{PROFILE.role}</span>
        <span aria-hidden="true" className="text-slate-600">·</span>
        <span>Production Architecture</span>
        <span aria-hidden="true" className="text-slate-600">·</span>
        <span>Clean TypeScript</span>
        <span aria-hidden="true" className="text-slate-600">·</span>
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for Select Builds
        </span>
      </div>

      {/* Core Typography Section */}
      <div className="max-w-5xl my-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance mb-8">
          I turn business requirements into practical, production-ready web solutions.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
          I bridge the gap between commercial strategy and dependable software.
          By understanding the underlying operational friction before writing code,
          I build resilient, high-speed web platforms that scale reliably in production.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white rounded-md hover:bg-slate-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 shadow-sm"
          >
            <span>Explore Selected Works</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#approach"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-white/10 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>The 5-Stage Engineering Path</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Bottom Architectural Ribbon: The 5-Step Continuum */}
      <div className="pt-16 border-t border-white/[0.08]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">
            Engineering Lifecycle
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sky-400">01</span>
              <span className="font-medium text-white">Business Problem</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sky-400">02</span>
              <span className="font-medium text-white">Understanding</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sky-400">03</span>
              <span className="font-medium text-white">Solution Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sky-400">04</span>
              <span className="font-medium text-white">Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400">05</span>
              <span className="font-medium text-emerald-300">Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
