'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PROFILE } from '@/data/profile';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d0d]/95 backdrop-blur-md border-b border-[#232524] shadow-2xl'
          : 'bg-[#0c0d0d]/85 backdrop-blur-md border-b border-[#232524]'
      }`}
      data-purpose="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / ID */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-[#2B8BFE] transition-colors">
            {PROFILE.name}
          </span>
          <span className="font-mono-code text-xs text-gray-400 tracking-wider font-normal hidden sm:inline-block">
            [ FULL STACK DEVELOPER · WEB SOLUTIONS ]
          </span>
        </Link>

        {/* Primary Navigation Links (Level 1 Simplified IA) */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-gray-300">
          <a
            href="#process"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            Process
          </a>
          <a
            href="#selected-work"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            Work
          </a>
          <a
            href="#projects"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            Stack
          </a>
          <a
            href="#resume"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            Experience
          </a>
          <a
            href="#about"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            About
          </a>
          <a
            href="#contact"
            className="relative py-1 transition-colors hover:text-[#2B8BFE]"
          >
            Contact
          </a>
          {/* Distinct Resume Action */}
          <a
            href="/Ajvadu_FullStack_Resume.pdf"
            download="Ajvadu_FullStack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-[#2B8BFE]/60 hover:border-[#2B8BFE] bg-[#2B8BFE]/10 hover:bg-[#2B8BFE] hover:text-[#0c0d0d] text-[#2B8BFE] text-xs font-mono-code uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <span>↓</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full border border-[#232524] text-[#2B8BFE] text-xs font-mono-code uppercase tracking-wider"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2B8BFE] rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d0d] border-b border-[#232524] px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="text-xs font-mono-code text-gray-500 uppercase tracking-widest mb-4">
            Navigation
          </div>
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-200">
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              Process (Methodology)
            </a>
            <a
              href="#selected-work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              Work (Commercial Platform)
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              Projects &amp; Initiatives
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              Technical Stack
            </a>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              Experience &amp; Track Record
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#2B8BFE] transition-colors"
            >
              Contact
            </a>
            <div className="pt-3 border-t border-[#232524] flex gap-3">
              <a
                href="/Ajvadu_FullStack_Resume.pdf"
                download="Ajvadu_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-mono-code uppercase font-semibold text-[#2B8BFE] border border-[#2B8BFE] rounded-full hover:bg-[#2B8BFE] hover:text-[#0c0d0d] transition-colors"
              >
                <span>Resume ↓</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#0c0d0d] bg-[#2B8BFE] rounded-full hover:bg-[#1b74e4] transition-colors font-sans"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
