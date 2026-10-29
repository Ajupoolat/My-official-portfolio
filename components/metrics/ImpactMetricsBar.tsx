'use client';

import React from 'react';

interface MetricItem {
  value: string;
  label: string;
}

const METRICS: MetricItem[] = [
  {
    value: '1',
    label: 'Client Engagement',
  },
  {
    value: '6 Months',
    label: 'Contract Experience',
  },
  {
    value: '3',
    label: 'Core Development Areas',
  },
  {
    value: 'Full-Stack',
    label: 'From Requirements to Deployment',
  },
];

export default function ImpactMetricsBar() {
  return (
    <section
      id="metrics"
      className="bg-[#0c0d0d] border-b border-[#232524]"
      data-purpose="impact-metrics-bar"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#232524]">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="p-8 md:p-10 flex flex-col justify-between transition-colors hover:bg-white/[0.02] group"
          >
            <span className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2B8BFE] mb-4 tracking-tightest group-hover:scale-[1.02] transition-transform origin-left">
              {metric.value}
            </span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-gray-400 font-medium">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
