'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';

const PROJECT_TYPES = [
  'New Web Application Build',
  'Full-Stack Feature Integration',
  'Engineering Team Role',
  'Performance & Architecture Review'
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;
    setFormSubmitted(true);
    // Construct mailto link as direct action
    const subject = encodeURIComponent(`[Inquiry: ${selectedType}] from ${senderName || 'Prospective Partner'}`);
    const body = encodeURIComponent(`Hi Ajvadu,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})\nProject Type: ${selectedType}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
          Direct Line
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
          Let&apos;s build something production-ready.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          Whether you have concrete business requirements that need translating into code or are looking for a reliable full-stack engineer for your team, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info & One-Click Copy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#12151d] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Direct Email Address
              </span>
              <div className="flex items-center justify-between gap-3 p-3 bg-[#161a25] border border-white/[0.06] rounded-xl">
                <span className="font-mono text-sm text-white select-all break-all">
                  {PROFILE.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Typical response time: Within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Async-friendly, direct communication</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href={`mailto:${PROFILE.email}?subject=Project%20Inquiry%20for%20Ajvadu`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg transition-colors"
              >
                <span>Open in Mail Client</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Composer */}
        <div className="lg:col-span-7 bg-[#12151d] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white tracking-tight mb-2">
            Send an Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Share what problem you are solving and your target timeline.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            {/* Project Nature Selector (Functional Buttons) */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Inquiry Topic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-2.5 rounded-lg text-left text-xs font-medium transition-all border ${
                      selectedType === type
                        ? 'bg-sky-500/10 border-sky-500/40 text-sky-300'
                        : 'bg-[#161a25] border-white/[0.06] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-[#161a25] border border-white/10 rounded-lg px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-400 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full bg-[#161a25] border border-white/10 rounded-lg px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-400 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                Project Overview & Requirements
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Briefly describe the business problem, target milestones, and key constraints..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#161a25] border border-white/10 rounded-lg p-3.5 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-400 text-xs sm:text-sm leading-relaxed"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-xs sm:text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {formSubmitted && (
                <div className="mt-3 text-xs text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Drafting your message to {PROFILE.email}...</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
