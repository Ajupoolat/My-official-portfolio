import React from 'react';
import { PROFILE } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#232524] py-12 px-6 md:px-12 bg-[#0c0d0d] text-xs font-mono-code text-gray-500"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {currentYear} {PROFILE.name} Studio. All rights reserved. Based in {PROFILE.location}.
        </div>
        <div className="flex items-center space-x-6">
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2B8BFE] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2B8BFE] transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-[#2B8BFE] transition-colors"
          >
            Email
          </a>
          <a href="#about" className="text-[#2B8BFE] hover:underline">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
