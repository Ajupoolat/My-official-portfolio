import type { Metadata } from 'next';
import './globals.css';
import { PROFILE } from '@/data/profile';
import SmoothScrollProvider from '@/components/motion/SmoothScrollProvider';
import ScrollProgressBar from '@/components/motion/ScrollProgressBar';

export const metadata: Metadata = {
  title: 'Ajvadu — Full Stack Developer | Business Solutions & Web Applications',
  description:
    'Ajvadu is a Full Stack Developer based in Kerala, India. Turning business requirements into practical, production-ready web solutions with Next.js, React, Node.js, and TypeScript. Case studies on PropertySeller, BookMyVenue, and Wotix.',
  openGraph: {
    title: 'Ajvadu — Full Stack Developer | Business Solutions & Web Applications',
    description:
      'I turn business requirements into practical, production-ready web solutions. Case studies on PropertySeller, BookMyVenue, and Wotix.',
    type: 'website',
    siteName: 'Ajvadu Digital Studio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajvadu — Full Stack Developer | Business Solutions & Web Applications',
    description:
      'I turn business requirements into practical, production-ready web solutions. Case studies on PropertySeller, BookMyVenue, and Wotix.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: PROFILE.name,
      jobTitle: PROFILE.role,
      description: PROFILE.headline,
      email: PROFILE.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Malappuram',
        addressRegion: 'Kerala',
        addressCountry: 'India',
      },
      knowsAbout: [
        'Full Stack Web Development',
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'REST APIs',
        'Business Workflow Automation',
        'Production Debugging',
      ],
    },
  };

  return (
    <html lang="en" className="bg-[#0c0d0d]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300..900;1,300..900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0c0d0d] text-gray-200 antialiased selection:bg-[#2B8BFE] selection:text-[#0c0d0d]" suppressHydrationWarning>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
