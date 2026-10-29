'use client';

import React, { useState } from 'react';
import { PROFILE } from '@/data/profile';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !brief || isSubmitting) return;
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, brief, honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatusMessage({
        type: 'success',
        text: '✓ Message sent successfully! I will reply within two working days.',
      });
      setName('');
      setEmail('');
      setBrief('');
      setHoneypot('');
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Something went wrong. You can also reach me directly at ajupoolat@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0c0d0d] px-6 md:px-12 relative"
      data-purpose="contact-card-split-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Copy & Direct Contact Coordinates matching screen.png */}
          <div className="lg:col-span-6 pr-0 lg:pr-8">
            <p className="font-mono-code text-xs font-bold text-[#2B8BFE] uppercase tracking-widest mb-3">
              CONTACT
            </p>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none mb-6">
              Let&apos;s talk shop
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed mb-12 max-w-xl">
              Tell me about the product, the workflow, and the challenges you&apos;re trying to solve. I reply within two working days — usually faster when a launch is involved.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-6">
              {/* Email Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#232524] flex items-center justify-center text-gray-400 group-hover:border-[#2B8BFE] group-hover:text-[#2B8BFE] transition-colors bg-[#141615]/60 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-base text-white font-mono-code group-hover:text-[#2B8BFE] transition-colors"
                  >
                    {PROFILE.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 text-gray-500 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#232524] flex items-center justify-center text-gray-400 group-hover:border-[#2B8BFE] group-hover:text-[#2B8BFE] transition-colors bg-[#141615]/60 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-base text-white font-mono-code">
                  Malappuram, Kerala, India
                </span>
              </div>

              {/* Availability Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#232524] flex items-center justify-center text-gray-400 group-hover:border-[#2B8BFE] group-hover:text-[#2B8BFE] transition-colors bg-[#141615]/60 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-sm text-gray-300 font-mono-code">
                  Open for Select Production Roles &amp; Engineering Contracts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Off-White Paper Card Panel with Electric Blue Accent Tape matching screen.png */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            {/* Electric Blue Folded Tape / Post-it Tag */}
            <div className="paper-cut-tape absolute -top-4 right-10 z-20 px-5 py-2">
              <span className="font-mono-code font-bold text-xs uppercase tracking-widest text-[#0c0d0d]">
                REACH OUT
              </span>
            </div>

            <div className="paper-panel text-gray-900 p-8 sm:p-12 rounded-sm relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    className="block font-mono-code text-xs uppercase tracking-widest text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full bg-[#1A1C1A] text-white border-0 rounded-2xl px-5 py-4 placeholder-gray-500 focus:ring-2 focus:ring-[#2B8BFE] font-sans text-base transition-all outline-none"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className="block font-mono-code text-xs uppercase tracking-widest text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@company.com"
                    className="w-full bg-[#1A1C1A] text-white border-0 rounded-2xl px-5 py-4 placeholder-gray-500 focus:ring-2 focus:ring-[#2B8BFE] font-sans text-base transition-all outline-none"
                  />
                </div>

                {/* Hidden Honeypot Field for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="organization_title_check"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Brief Field */}
                <div>
                  <label
                    className="block font-mono-code text-xs uppercase tracking-widest text-gray-700 font-bold mb-2"
                    htmlFor="brief"
                  >
                    THE BRIEF
                  </label>
                  <textarea
                    id="brief"
                    rows={4}
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="What are you building, automating, or looking to engineer?"
                    className="w-full bg-[#1A1C1A] text-white border-0 rounded-2xl px-5 py-4 placeholder-gray-500 focus:ring-2 focus:ring-[#2B8BFE] font-sans text-base transition-all resize-none outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-display font-extrabold text-lg py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-700 text-gray-300 cursor-not-allowed opacity-80'
                        : 'bg-[#2B8BFE] hover:bg-[#1b74e4] text-[#0c0d0d] hover:shadow-lg active:scale-[0.99] cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="text-xl">→</span>
                      </>
                    )}
                  </button>

                  {statusMessage && (
                    <div
                      className={`mt-4 p-3 rounded-lg text-xs font-mono-code text-center font-bold ${
                        statusMessage.type === 'success'
                          ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20'
                          : 'bg-red-500/10 text-red-700 border border-red-500/20'
                      }`}
                    >
                      {statusMessage.text}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
