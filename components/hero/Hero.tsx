'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import MYPHOTO from 'public/images/my-profile-photo.jpeg';

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[85vh] border-b border-[#232524] grid grid-cols-1 lg:grid-cols-12 relative"
      data-purpose="hero-overview"
    >
      {/* Left Column: Vibrant Electric Blue Graphic Hero Block */}
      <div className="lg:col-span-5 bg-[#2B8BFE] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[540px]">
        {/* Top Angled Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-end z-10"
        >
          <div className="badge-tilt bg-[#0c0d0d] text-[#2B8BFE] font-mono-code font-bold text-xs uppercase px-4 py-2 tracking-widest border border-black shadow-lg">
            OPEN TO NEW BRIEFS
          </div>
        </motion.div>

        {/* Big Bold Punchy "Hello" cutout typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="my-auto relative select-none"
        >
          <h1 className="font-display font-extrabold text-[110px] sm:text-[140px] md:text-[160px] leading-none text-[#0c0d0d] tracking-tightest">
            Hello
          </h1>
        </motion.div>

        {/* Polaroid Portrait Accent Card with Dummy Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-polaroid self-start bg-white p-3.5 shadow-2xl z-20 w-64 sm:w-72 mt-4 rounded-xs"
        >
          <div className="bg-gray-900 aspect-[4/5] overflow-hidden relative border border-gray-100/30">
            <Image
              src={MYPHOTO}
              alt="Ajvadu — Full Stack Developer"
              fill
              sizes="(max-width: 640px) 260px, 300px"
              priority
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="pt-3 pb-1 flex items-center justify-between">
            <p className="font-mono-code text-[11px] text-gray-800 uppercase tracking-widest font-bold">
              Full Stack Developer
            </p>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Geometric background deco glow */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-2xl" />
      </div>

      {/* Right Column: Editorial Value Proposition Copy */}
      <div className="lg:col-span-7 bg-[#0c0d0d] p-8 md:p-16 lg:p-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Main Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-tight leading-[1.12] mb-8 text-balance"
          >
            Turning Business Problems Into Digital Solutions.
          </motion.h2>

          {/* Detailed Narrative (Problem-First Positioning) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed mb-10"
          >
            Full Stack Developer focused on turning real business workflows into reliable web products. I work across frontend, backend, APIs and production systems using Next.js, React, Node.js and TypeScript.
          </motion.p>

          {/* Action Buttons / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#selected-work"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2B8BFE] text-[#0c0d0d] font-bold text-base hover:bg-[#1b74e4] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#2B8BFE]/20 font-sans"
            >
              <span>Explore Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-[#232524] text-white font-medium text-base hover:bg-white/10 hover:border-[#2B8BFE]/60 transition-all font-sans"
            >
              <span>The Process</span>
              <svg className="w-4 h-4 text-[#2B8BFE]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
