'use client';

import React from 'react';
import { ENGINEERING_PHILOSOPHIES, CORE_CAPABILITIES } from '@/data/portfolio';
import { ShieldCheck, Cpu, Code2, Gauge } from 'lucide-react';

const icons = [Cpu, Gauge, Code2, ShieldCheck];

export default function EngineeringPhilosophy() {
  return (
    <section id="principles" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
          Engineering Governance
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
          Decision framework & technical principles.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Frameworks and tools evolve constantly, but foundational engineering tenets remain unchanged. Here is how I evaluate tradeoffs and make architectural decisions for production web systems.
        </p>
      </div>

      {/* 4 Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {ENGINEERING_PHILOSOPHIES.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={item.number}
              className="bg-[#12151d] border border-white/[0.08] rounded-xl p-6 sm:p-8 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-sky-400">
                    {item.number}
                  </span>
                  <Icon className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technical Capabilities Grouped by Domain */}
      <div className="bg-[#12151d] border border-white/[0.08] rounded-2xl p-6 sm:p-10">
        <div className="max-w-2xl mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Capabilities Grounded in Problem Domains
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Technologies mapped directly to the problems they solve, organized by architectural layer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_CAPABILITIES.map((group) => (
            <div key={group.category} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 border-b border-white/[0.08] pb-2">
                {group.category}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">·</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
