'use client';

import React, { useState } from 'react';
import { Home, Search, MapPin, Bed, Bath, ArrowRight, Check } from 'lucide-react';

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: 'The Skybridge Residence',
    location: 'Metropolitan District',
    price: '$890,000',
    type: 'Penthouse',
    beds: 3,
    baths: 2,
    sqft: '2,150 sqft',
    status: 'Active Listing',
    imageGradient: 'from-slate-800 via-slate-900 to-indigo-950',
    accentText: 'Panoramic Cityscape'
  },
  {
    id: 2,
    title: 'Aura Modern Villa',
    location: 'Highland Ridge',
    price: '$1,250,000',
    type: 'Villa',
    beds: 4,
    baths: 3.5,
    sqft: '3,400 sqft',
    status: 'New On Market',
    imageGradient: 'from-slate-800 via-zinc-900 to-sky-950',
    accentText: 'Architectural Stone & Glass'
  },
  {
    id: 3,
    title: 'Harborpoint Loft',
    location: 'Seaport Quarter',
    price: '$640,000',
    type: 'Loft',
    beds: 2,
    baths: 2,
    sqft: '1,450 sqft',
    status: 'Verified Listing',
    imageGradient: 'from-zinc-800 via-slate-900 to-teal-950',
    accentText: 'Exposed Industrial Beams'
  }
];

export default function PropertySellerPreview() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [filterType, setFilterType] = useState('All');

  const filteredProperties = filterType === 'All'
    ? SAMPLE_PROPERTIES
    : SAMPLE_PROPERTIES.filter(p => p.type === filterType);

  const activeProperty = filteredProperties[selectedIdx] || filteredProperties[0] || SAMPLE_PROPERTIES[0];

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 3000);
  };

  return (
    <div className="w-full bg-[#0d0f15] border border-white/[0.08] rounded-xl overflow-hidden text-slate-200 text-xs select-none">
      {/* Simulation Top Bar */}
      <div className="px-4 py-2.5 bg-[#141822] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">propertyseller.internal/listings</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-sky-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span>SSR Cached (42ms)</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Interactive Filter Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-1 p-1 bg-[#161a25] rounded-lg border border-white/[0.06]">
            {['All', 'Penthouse', 'Villa', 'Loft'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setFilterType(t);
                  setSelectedIdx(0);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  filterType === t
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400">
            <span>Showing </span>
            <span className="font-semibold text-white">{filteredProperties.length}</span>
            <span> curated properties</span>
          </div>
        </div>

        {/* Property Card Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#131722] p-4 rounded-xl border border-white/[0.06]">
          {/* Simulated Image / Gallery Canvas */}
          <div className={`md:col-span-6 h-48 rounded-lg bg-gradient-to-br ${activeProperty.imageGradient} p-4 flex flex-col justify-between border border-white/10 relative overflow-hidden`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider uppercase text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                {activeProperty.status}
              </span>
              <span className="text-[11px] font-bold text-white bg-sky-950/80 px-2 py-0.5 rounded border border-sky-400/30">
                {activeProperty.price}
              </span>
            </div>

            <div>
              <div className="text-[10px] text-sky-300 font-mono mb-1">{activeProperty.accentText}</div>
              <h5 className="text-sm font-bold text-white tracking-tight">{activeProperty.title}</h5>
              <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{activeProperty.location}</span>
              </div>
            </div>
          </div>

          {/* Property Details & Lead Dispatch */}
          <div className="md:col-span-6 space-y-3.5">
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/[0.06] text-center">
              <div>
                <div className="text-slate-400 text-[10px] flex items-center justify-center gap-1">
                  <Bed className="w-3 h-3" /> Beds
                </div>
                <div className="font-semibold text-white mt-0.5">{activeProperty.beds}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] flex items-center justify-center gap-1">
                  <Bath className="w-3 h-3" /> Baths
                </div>
                <div className="font-semibold text-white mt-0.5">{activeProperty.baths}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] flex items-center justify-center gap-1">
                  <Home className="w-3 h-3" /> Area
                </div>
                <div className="font-semibold text-white mt-0.5">{activeProperty.sqft}</div>
              </div>
            </div>

            {/* Simulated Lead Inquiry */}
            <form onSubmit={handleInquiry} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="client@domain.com"
                  className="bg-[#1b202c] border border-white/10 rounded px-2.5 py-1.5 text-[11px] text-slate-300 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded text-[11px] whitespace-nowrap transition-colors flex items-center gap-1"
                >
                  {inquirySent ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Direct Lead</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
              <div className="text-[10px] text-slate-400">
                {inquirySent
                  ? 'Lead dispatched with sanitized payload & instant email webhook notification.'
                  : 'Test lead inquiry flow to verify form validation & API routing.'}
              </div>
            </form>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.06]">
          <span className="text-[10px] text-slate-400 font-mono">Select Unit:</span>
          {filteredProperties.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`px-2 py-1 rounded text-[10px] transition-all ${
                selectedIdx === idx
                  ? 'bg-white/10 text-white border border-white/20 font-semibold'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
