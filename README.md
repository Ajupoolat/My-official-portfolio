# Ajvadu — Full Stack Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-FF5D01?style=for-the-badge)

<p align="center">
  <strong>Turning business requirements into practical, production-ready web solutions.</strong>
</p>

<p align="center">
  A high-performance digital portfolio showcasing commercial engineering case studies, verified production contributions, and interactive web architecture.
</p>

[Live Demo](https://github.com/ajupoolat) · [Explore Case Studies](#featured-case-studies) · [Get in Touch](#contact--connect)

</div>

---

## 📌 Overview

This repository houses the personal portfolio and digital studio of **Ajvadu**, a Full Stack Developer based in Kerala, India.

Rather than presenting an abstract list of syntax tools or generic templates, this site is engineered with a **problem-first methodology**: highlighting real business challenges, operational bottlenecks, engineering trade-offs, and verifiable production achievements.

### Core Highlights
- **Silk Smooth Scrolling:** Momentum scroll experience driven by **Lenis** with custom physics easing and isolated modal scrolling (`data-lenis-prevent`).
- **Scroll-Driven Reveal Animations:** Fluid viewport-triggered animations built with **Framer Motion**, engineered with 100% server-client hydration consistency in React 19 / Next.js 15.
- **Deep-Dive Case Study Modals:** Interactive modals covering system architecture, before/after operational workflows, verified frontend/backend splits, and live deployments.
- **Integrated Contact Endpoint:** Built-in Next.js App Router API (`/api/contact`) sending HTML emails straight to your Gmail inbox via **Nodemailer** without third-party form services.
- **Custom Dark-Tech Scrollbars:** Bespoke 6px rounded pill scrollbars styled in `#141615` and `#2B8BFE`, eliminating ugly native browser scrollbars.
- **SEO & Structured Data:** Semantic HTML5, dynamic OpenGraph/Twitter cards, and embedded JSON-LD `ProfilePage` schema for maximum search discoverability.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | **Next.js 15** (App Router, Server Route Handlers, Turbopack ready) |
| **Core UI** | **React 19**, **TypeScript** (Strict Type Safety) |
| **Styling** | **Tailwind CSS v4** (`@theme` tokens, brutalist/minimalist aesthetic) |
| **Smooth Scrolling** | **Lenis 1.3** (requestAnimationFrame momentum interpolation) |
| **Animations** | **Framer Motion 14** (Spring progress indicators, viewport reveals) |
| **Icons** | **Lucide React**, **Simple Icons** (Branded tech badges) |
| **Email Delivery** | **Nodemailer** with Gmail SMTP & custom HTML email templates |
| **Typography** | **Archivo** (Display & Sans), **Space Mono** (Monospace Code accents) |

---

## 📂 Project Directory Structure

```text
Ajvad_portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Server-side SMTP contact form API endpoint
│   ├── globals.css               # Tailwind v4 configuration, theme tokens & custom scrollbars
│   ├── layout.tsx                # Root layout with SEO metadata, Google Fonts & JSON-LD schema
│   └── page.tsx                  # Single-page layout assembling all sections & modal triggers
├── components/
│   ├── capabilities/             # Technical foundations & tech stack matrix
│   ├── case-studies/             # Interactive CaseStudyModal component with scroll isolation
│   ├── contact/                  # Contact form section with live state feedback
│   ├── experience/               # Professional career timeline & track record
│   ├── hero/                     # Hero graphic block, value proposition & polaroid card
│   ├── layout/                   # Fixed Navbar & Footer with level-1 simplified IA
│   ├── metrics/                  # Verifiable impact metrics counter bar
│   ├── motion/                   # SmoothScrollProvider, ScrollProgressBar, ScrollReveal
│   ├── process/                  # 4-stage engineering methodology (Discovery -> Scaling)
│   └── work/                     # Selected commercial work & initiative projects grid
├── data/
│   ├── profile.ts                # Centralized developer profile, bio & contact details
│   ├── projects.ts               # In-depth architectural case studies data
│   └── skills.ts                 # Categorized technical capabilities & tooling
├── lib/
│   └── email-template.ts         # Server-side HTML email formatting template for inquiries
├── public/                       # Static assets (images, profile photo, resume PDF)
├── .env.example                  # Environment variable blueprint
└── README.md                     # Repository documentation
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
- **Node.js**: v18.18.0 or newer (Node.js 20+ LTS recommended)
- **Package Manager**: `npm`, `yarn`, or `pnpm`

### 2. Clone the Repository
```bash
git clone https://github.com/Ajupoolat/My-official-portfolio
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Open `.env.local` and add your contact form recipient and Gmail SMTP credentials:
```env
# Email address where user submissions should be delivered:
CONTACT_TO_EMAIL="ajupoolat@gmail.com"

# Gmail SMTP sender credentials (for contact form):
EMAIL_USER="your-gmail-address@gmail.com"
EMAIL_PASS="your-16-character-google-app-password"
```

> **How to generate a Gmail App Password:**
> 1. Go to your [Google Account Security Settings](https://myaccount.google.com/security) and ensure **2-Step Verification** is turned ON.
> 2. Search for or navigate to [App Passwords](https://myaccount.google.com/apppasswords).
> 3. Generate a new App Password named `Portfolio Website`.
> 4. Copy the generated 16-character code (without spaces) into `EMAIL_PASS`.

### 5. Launch the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

### 6. Build for Production
To test or build the optimized production bundle:
```bash
npm run build
npm run start
```

---

## 🏆 Featured Case Studies

The portfolio features verified production breakdowns:

1. **PropertySeller (Commercial Platform Redevelopment):**
   - 6-month contract delivering a production real estate web portal.
   - Built 25+ responsive Next.js views, optimized REST API payloads, and fortified input security to eliminate lead drop-offs.
2. **BookMyVenue (B2B2C Booking Engine):**
   - Digitizing venue discovery, availability scheduling, and reservation lifecycles.
   - Replaced manual telephone negotiations with deterministic real-time booking flows.
3. **Wotix (Business Operations System):**
   - Internal tooling designed to streamline inventory tracking and dispatch operations.

---

## 📬 Contact & Connect

- **Developer:** Ajvadu
- **Role:** Full Stack Developer
- **Email:** [ajupoolat@gmail.com](mailto:ajupoolat@gmail.com)
- **LinkedIn:** [linkedin.com/in/ajvadu-poolat](https://www.linkedin.com/in/ajvadu-poolat)
- **GitHub:** [github.com/ajupoolat](https://github.com/ajupoolat)
- **Location:** Malappuram, Kerala, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use the architectural concepts and code patterns for your own learning and portfolio inspiration.
