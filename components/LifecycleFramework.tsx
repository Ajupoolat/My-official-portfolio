'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lightbulb, Compass, Code2, Rocket, HelpCircle } from 'lucide-react';
import { LIFECYCLE_STEPS, LifecycleStep } from '@/data/portfolio';

const stepIcons = [HelpCircle, Compass, Lightbulb, Code2, Rocket];

export default function LifecycleFramework() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = LIFECYCLE_STEPS[activeStepIndex];
  const StepIcon = stepIcons[activeStepIndex];

  return (
    <section id="approach" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
          Methodology & Mindset
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
          From business friction to production reality.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Writing code is only one step of the engineering craft. Real-world solutions begin by dissecting the underlying operational challenge and finish only when software performs reliably under production load.
        </p>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-[#12151d] rounded-xl border border-white/[0.08] mb-8">
        {LIFECYCLE_STEPS.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`flex flex-col items-start p-3 sm:p-4 text-left rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                isActive
                  ? 'bg-[#1b202c] text-white border border-white/10 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-sky-400' : 'text-slate-400'}`}>
                  {step.number}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight leading-snug">
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Breakdown Panel */}
      <div className="bg-[#12151d] border border-white/[0.08] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute -right-20 -top-20 w-80 h-80 bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Stage Objective & Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
                <span>Phase {currentStep.number}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{currentStep.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 flex items-center gap-3">
                <StepIcon className="w-7 h-7 text-sky-400 shrink-0" />
                <span>{currentStep.title}</span>
              </h3>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                {currentStep.objective}
              </p>

              {/* Concrete Deliverables */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Core Deliverables & Outputs
                </h4>
                <div className="space-y-2.5">
                  {currentStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Guiding Mindset Quote */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1 font-medium">
                Guiding Mindset
              </div>
              <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
                &ldquo;{currentStep.mindset}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Concrete Real-World Vignette */}
          <div className="lg:col-span-5 bg-[#171c26] border border-white/[0.06] rounded-xl p-6 sm:p-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              In Practice: Production Vignette
            </div>
            <h4 className="text-base font-semibold text-white mb-3">
              How this applied in real builds
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {currentStep.realWorldExample}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs">
              <span className="text-slate-400">Next phase:</span>
              <button
                type="button"
                onClick={() => setActiveStepIndex((activeStepIndex + 1) % LIFECYCLE_STEPS.length)}
                className="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
              >
                <span>
                  {activeStepIndex === LIFECYCLE_STEPS.length - 1
                    ? 'Back to Phase 01'
                    : `Phase 0${activeStepIndex + 2}`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
