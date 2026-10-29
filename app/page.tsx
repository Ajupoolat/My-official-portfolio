'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/hero/Hero';
import ImpactMetricsBar from '@/components/metrics/ImpactMetricsBar';
import ProcessSection from '@/components/process/ProcessSection';
import SelectedWorkSection from '@/components/work/SelectedWorkSection';
import ProjectsSection from '@/components/work/ProjectsSection';
import CapabilitiesSection from '@/components/capabilities/CapabilitiesSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/layout/Footer';
import CaseStudyModal from '@/components/case-studies/CaseStudyModal';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { ProjectCaseStudy } from '@/data/projects';

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="relative min-h-screen bg-[#0c0d0d] text-gray-200 flex flex-col justify-between selection:bg-[#2B8BFE] selection:text-[#0c0d0d]">
      {/* Fixed Header with Simplified IA */}
      <Navbar />

      <main className="flex-1 w-full pt-20">
        {/* Hero Section: Problem-First Value Proposition & Dummy Polaroid Photo */}
        <Hero />

        {/* Evidence Metrics Bar: Verifiable Facts Only */}
        <ScrollReveal threshold={0.2} distance={20}>
          <ImpactMetricsBar />
        </ScrollReveal>

        {/* Level 1 Core Methodology: From Business Problem to Working Product */}
        <ScrollReveal threshold={0.15} distance={24}>
          <ProcessSection />
        </ScrollReveal>

        {/* Selected Work: Commercial Client Platform (PropertySeller) */}
        <ScrollReveal threshold={0.12} distance={24}>
          <SelectedWorkSection onOpenCaseStudy={setSelectedCaseStudy} />
        </ScrollReveal>

        {/* Projects & Initiatives: Personal & Team Ventures (BookMyVenue & Wotix) */}
        <ScrollReveal threshold={0.12} distance={24}>
          <ProjectsSection onOpenCaseStudy={setSelectedCaseStudy} />
        </ScrollReveal>

        {/* Technical Foundations: Tools I Use to Build the Solution (Supporting Evidence) */}
        <ScrollReveal threshold={0.12} distance={24}>
          <CapabilitiesSection />
        </ScrollReveal>

        {/* Track Record: Experience Timeline Table */}
        <ScrollReveal threshold={0.15} distance={24}>
          <ExperienceSection />
        </ScrollReveal>

        {/* Contact Section: Let's Talk Shop & Off-White Paper Card Panel */}
        <ScrollReveal threshold={0.12} distance={24}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
