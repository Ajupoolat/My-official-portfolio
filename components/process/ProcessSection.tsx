'use client';

import React, { useState } from 'react';
import { PROCESS_STAGES, ProcessStage } from '@/data/process';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState(0);
  const activeStage = PROCESS_STAGES[selectedStep];

  return (
    <section
      id="process"
      className="py-24 border-b border-[#232524] bg-[#0c0d0d] px-6 md:px-12"
      data-purpose="engineering-methodology"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header matching Level 1 Core Positioning */}
        <div className="mb-14 max-w-3xl">
          <p className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-3">
            THE ENGINEERING METHODOLOGY
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
            From business problem to working product
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Technology is not the starting line it is the tool used to execute a well-understood plan. Here is how I systematically shepherd real-world business requirements into resilient production software.
          </p>
        </div>

        {/* Visual Progression Nodes (01 to 06) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = idx === selectedStep;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#2B8BFE] cursor-pointer ${
                  isActive
                    ? 'bg-[#141615] border-[#2B8BFE] shadow-lg shadow-[#2B8BFE]/10 ring-1 ring-[#2B8BFE]/40'
                    : 'bg-[#141615]/40 border-[#232524] hover:border-[#2B8BFE]/40 text-gray-400 hover:text-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono-code text-xs font-bold ${
                        isActive ? 'text-[#2B8BFE]' : 'text-gray-500'
                      }`}
                    >
                      {stage.step}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2B8BFE] animate-pulse" />
                    )}
                  </div>
                  <div
                    className={`font-display font-bold text-sm tracking-tight ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {stage.name}
                  </div>
                </div>
                <div className="text-[11px] font-mono-code text-gray-400 mt-2 line-clamp-1">
                  {stage.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="bg-[#141615] border border-[#232524] rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Stage Summary & Execution Activities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono-code text-[#2B8BFE] uppercase tracking-widest">
                <span>Stage {activeStage.step}</span>
                <span aria-hidden="true" className="text-gray-600">·</span>
                <span className="text-gray-300">{activeStage.tagline}</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                {activeStage.step} — {activeStage.name}
              </h3>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                {activeStage.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-gray-400">
                  Key Execution Activities:
                </h4>
                <ul className="space-y-2.5">
                  {activeStage.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2B8BFE] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Tangible Operational Output & Step Advancer */}
            <div className="lg:col-span-5 bg-[#0c0d0d] border border-[#232524] rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="font-mono-code text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Operational Deliverable
                </div>
                <div className="font-display font-bold text-xl text-white mb-2">
                  {activeStage.operationalArtifact}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  Every stage produces a tangible artifact that serves as a shared source of truth between business stakeholders and code implementation.
                </p>
              </div>

              <div className="pt-4 border-t border-[#232524] flex items-center justify-between text-xs font-mono-code">
                <span className="text-gray-500">
                  Stage {activeStage.step} of 06
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedStep((selectedStep + 1) % PROCESS_STAGES.length)}
                  className="inline-flex items-center gap-1.5 font-bold text-[#2B8BFE] hover:text-[#53a2fe] transition-colors cursor-pointer"
                >
                  <span>
                    {selectedStep === PROCESS_STAGES.length - 1
                      ? 'Restart from 01'
                      : `Next: ${PROCESS_STAGES[selectedStep + 1].name}`}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
