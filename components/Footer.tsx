import React from 'react';
import { PROFILE } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#090b10] py-12 px-6 md:px-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-white text-sm tracking-tight">{PROFILE.name}</span>
          <span className="mx-2 text-slate-600">·</span>
          <span>{PROFILE.role}</span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#approach" className="hover:text-white transition-colors">
            Approach
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            Selected Work
          </a>
          <a href="#principles" className="hover:text-white transition-colors">
            Principles
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <div className="text-slate-400">
          <span>&copy; {currentYear} {PROFILE.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
