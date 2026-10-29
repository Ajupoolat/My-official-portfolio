# Portfolio Website --- Structured Update Plan for Antigravity

## Purpose

This document defines the updates required for the existing portfolio
website based on the UI review.

**Do not redesign the website from scratch.** Preserve the current
visual identity and improve information hierarchy, positioning,
credibility, and project storytelling.

Primary positioning:

> **I turn complex business workflows into practical, production-ready
> web solutions.**

Core story:

> **Problem → Thinking → Solution → Implementation → Production**

The website should communicate this story more strongly than a
technology-first portfolio.

------------------------------------------------------------------------

# Global Rules

## 1. Preserve the current visual identity

Keep:

-   Dark editorial interface
-   Black / near-black background
-   Blue primary accent
-   Strong white typography
-   Thin borders
-   Large headings
-   Technical metadata styling
-   High whitespace
-   Subtle motion
-   Personal / creative-engineering character

Do not replace it with a generic Tailwind portfolio, SaaS dashboard,
GitHub-style profile, resume website, excessive gradients,
glassmorphism, neon-heavy styling, 3D everywhere, particle backgrounds,
or excessive cursor effects.

## 2. Never invent information

Do not invent:

-   Experience
-   Project contributions
-   Client names
-   Performance metrics
-   Business outcomes
-   User numbers
-   Revenue
-   Testimonials
-   Security vulnerabilities
-   Project URLs
-   GitHub URLs
-   Deployment status
-   Technologies

Use existing information or explicit placeholders.

## 3. Protect the existing implementation

Before modifying code:

1.  Inspect the existing project structure.
2.  Identify current sections and reusable components.
3.  Identify current content/data structure.
4.  Reuse components where possible.
5.  Make focused changes.
6.  Do not rewrite unrelated parts.
7.  Do not introduce unnecessary dependencies.

## 4. Project accuracy

### PropertySeller

-   Professional/commercial production experience.
-   Full Stack Developer on an existing production product.
-   Six-month contract.
-   Work included frontend redevelopment, API integration, reusable
    components, production debugging, and backend/security-related issue
    investigation.
-   Do not imply the entire platform was built from scratch by Ajvadu.

### BookMyVenue

-   Team project / MVP.
-   Demonstrates turning a real-world venue-booking workflow into a
    digital product.
-   Individual contribution must only be stated when verified from
    GitHub commits.

### Wotix

-   Independent full-stack e-commerce project.
-   Evidence of full-stack product/system implementation.

------------------------------------------------------------------------

# LEVEL 1 --- CORE POSITIONING & INFORMATION ARCHITECTURE

## Objective

Fix the biggest issue from the review:

The current website communicates **"technically strong Full Stack
Developer"** more strongly than **"solution maker who understands
business workflows and turns them into software."**

Level 1 changes hierarchy without changing the visual identity.

------------------------------------------------------------------------

## 1. Simplify Navigation

### Use

-   Work
-   Process
-   Experience
-   About
-   Contact
-   Resume

Keep Resume visually distinct if appropriate.

Remove or rename "Impact". Prefer "Process" or "Approach" because the
portfolio does not currently have enough verified quantitative
business-impact metrics for an Impact section.

### Acceptance

-   Navigation is simpler.
-   Every item maps clearly to a section.
-   No duplicate concepts without a clear reason.

------------------------------------------------------------------------

## 2. Refine the Hero

### Main headline

Keep:

> **I turn complex business workflows into web solutions people actually
> rely on --- and systems that scale.**

### Supporting copy

Use a shorter problem-first message such as:

> Full Stack Developer focused on turning real business workflows into
> reliable web products. I work across frontend, backend, APIs and
> production systems using Next.js, React, Node.js and TypeScript.

Do not overload the hero with technologies.

### CTA

Primary CTA should lead to Work / Projects.

------------------------------------------------------------------------

## 3. Replace the First Technical Section

### Current problem

The current "Four ways I move a product forward" section focuses too
early on:

-   Full-Stack Architecture & Next.js
-   Backend APIs, Auth & Business Logic
-   Data Modeling & Transactional Integrity
-   Payment Verification & Real-Time Sockets

This is technically good but makes technology the protagonist.

### Replace with

# From business problem to working product

### 01 --- Understand

Understand the workflow, users, constraints, business rules and existing
system.

### 02 --- Define

Break the problem into requirements, states, responsibilities and system
boundaries.

### 03 --- Design

Translate the workflow into a usable product experience and system
structure.

### 04 --- Build

Implement frontend, backend, data models, APIs and integrations.

### 05 --- Refine

Debug production issues, improve maintainability and remove unnecessary
complexity.

### 06 --- Ship

Deploy, validate and continue improving the product.

### Visual direction

Do not make this another card grid.

Prefer:

-   Large typography
-   Numbered stages
-   Horizontal or vertical progression
-   Editorial composition
-   Subtle scroll interaction
-   Clear visual connection between stages

Purpose: demonstrate **how Ajvadu thinks**, not what libraries he knows.

------------------------------------------------------------------------

## 4. Reorganize Selected Work

Use:

### PropertySeller

**Production / Professional Experience**

> Redeveloping and improving an existing commercial real-estate
> platform.

### BookMyVenue

**Team Project / MVP**

> Turning a manual venue-booking workflow into a digital booking
> platform.

### Wotix

**Independent Full-Stack Project**

> Building a full-stack e-commerce system with payments, wallet/refund
> workflows and real-time notifications.

Project cards should communicate:

> Problem → Solution → Contribution → Evidence

not primarily technology lists.

------------------------------------------------------------------------

## 5. Fix Homepage Metrics

Avoid questionable or ambiguous metrics such as:

> **100% Type-safe architecture**

and avoid wording that can imply more professional production experience
than is accurate.

Use evidence-based metrics only, for example:

### 25+

Production modules shipped

### 6 months

Commercial product experience

### 3

Major products / projects

### Full Stack

Frontend → Backend → Deployment

If a metric cannot be confidently verified, remove it.

------------------------------------------------------------------------

# LEVEL 1 ACCEPTANCE CRITERIA

Before Level 2:

-   Solution-maker positioning is obvious.
-   First major section is about problem solving, not technologies.
-   Navigation is simplified.
-   Hero remains strong and concise.
-   Questionable statistics are removed.
-   PropertySeller, BookMyVenue and Wotix are clearly distinguished.
-   No claims are exaggerated.
-   Visual identity is preserved.
-   Desktop and mobile layouts remain stable.

------------------------------------------------------------------------

# LEVEL 2 --- PROJECT STORYTELLING & VISUAL PROOF

## Objective

Make the projects prove the solution-maker positioning.

------------------------------------------------------------------------

## 1. Make PropertySeller the strongest case study

### Header

> **PropertySeller**

> Active Commercial Real Estate Platform Redevelopment

Metadata:

-   Full Stack Developer
-   Six-month contract
-   Professional / Commercial Work
-   Emiraaz Technologies LLP

### Problem

Explain that the work involved improving and extending an existing
production application.

Do not imply that Ajvadu built the whole product.

### Contribution

Use verified facts such as:

-   25+ responsive pages/modules
-   Figma-to-Next.js implementation
-   REST API integration
-   Reusable frontend components
-   Production debugging
-   Backend issue investigation
-   Security-related issue investigation
-   Maintainability improvements
-   Git/GitHub collaboration

### Visual treatment

Make this the largest project section.

Use:

-   Large real browser/product mockup
-   Real project screenshots if available
-   Large project title
-   Asymmetric text/image composition
-   "My Contribution" block

Never use fabricated screenshots.

------------------------------------------------------------------------

## 2. Make BookMyVenue the business-workflow case study

Position it as:

> **Turning a manual venue-booking workflow into a digital booking
> platform.**

Show the workflow visually:

**Venue Discovery → Venue Selection → Booking Request → Reservation
Rules → Payment / Deposit → Confirmation**

Use the actual project rules already established.

### Contribution rule

"My Contribution" must only contain work verified from GitHub commits.

If not verified:

> Team project --- individual contribution details to be documented from
> verified Git history.

### Status

Keep status accurate.

If MVP/in development, do not call it Live.

If deployed later, update with the real URL.

------------------------------------------------------------------------

## 3. Make Wotix a systems case study

Group features by business capability.

### Authentication & Access

-   JWT authentication
-   Google OAuth
-   Protected routes
-   RBAC

### Commerce

-   Product discovery
-   Search/filtering
-   Cart
-   Wishlist
-   Order lifecycle

### Payments & Money

-   Razorpay
-   Server-side verification
-   Digital wallet
-   Refunds
-   Withdrawals

### Operations

-   Admin product/order management
-   Coupons
-   Sales/revenue
-   Real-time notifications

Present the system as a product flow, not a technology dump.

------------------------------------------------------------------------

## 4. Add Visual Evidence

Every major project should have meaningful visual proof.

Preferred:

1.  Real screenshot
2.  Real browser mockup
3.  Real workflow diagram
4.  Architecture illustration
5.  Carefully designed project visual

If an asset is unavailable, use an explicit placeholder.

------------------------------------------------------------------------

## 5. Reduce Card Repetition

Avoid turning the page into:

> Card → Card → Card → Card

Introduce:

-   Large editorial sections
-   Asymmetric image/text layouts
-   Workflow diagrams
-   Horizontal timelines
-   Large project showcases
-   Full-width case studies
-   Smaller cards only where useful

The portfolio should feel like a designed personal studio, not a
dashboard.

------------------------------------------------------------------------

## 6. Reposition Technical Capabilities

Use a heading such as:

> **Tools I use to build the solution.**

Place this **after project evidence**.

Group technologies into:

### Frontend

React, Next.js, TypeScript, Tailwind CSS, state/data tools

### Backend

Node.js, Express.js, REST APIs, authentication/RBAC

### Data

MongoDB, PostgreSQL, Redis

### Infrastructure & Integrations

AWS, Nginx, PM2, Razorpay, Socket.IO, Cloudinary, Git/GitHub

### Engineering

OOP, MVC, layered architecture, API design, debugging

Technology is supporting evidence.

------------------------------------------------------------------------

## 7. Refine Experience

Keep the current "Track Record" concept if it works.

Clearly distinguish:

### Professional Experience

Full Stack Developer --- Emiraaz Technologies LLP

### Team Project

BookMyVenue

### Independent Project

Wotix

Do not let the timeline imply that all are formal jobs.

------------------------------------------------------------------------

# LEVEL 2 ACCEPTANCE CRITERIA

Before Level 3:

-   PropertySeller is the strongest professional case study.
-   BookMyVenue clearly communicates its business workflow.
-   Wotix communicates full-stack system complexity.
-   Individual contributions are not invented.
-   Visuals use real assets or explicit placeholders.
-   Technical capabilities are secondary.
-   The page has enough visual variety.
-   Experience types are clearly labeled.
-   Story reads as: **Problem → Thinking → Solution → Implementation →
    Evidence**

------------------------------------------------------------------------

# LEVEL 3 --- POLISH, UX, RESPONSIVENESS & PRODUCTION QUALITY

## Objective

Final quality pass. Do not add major new sections.

------------------------------------------------------------------------

## 1. Responsive Audit

Test:

-   1440px
-   1280px
-   1024px
-   768px
-   390px
-   360px

Check navigation, hero, typography, project visuals, case studies,
timeline, contact form and footer.

No horizontal overflow, broken typography, overlapping elements or
excessive mobile whitespace.

------------------------------------------------------------------------

## 2. Typography Audit

Check:

-   Heading hierarchy
-   Body readability
-   Line length
-   Letter spacing
-   Metadata
-   Monospace labels
-   Buttons

Keep large typography expressive but readable.

------------------------------------------------------------------------

## 3. Spacing Audit

Check:

-   Section spacing
-   Heading/content spacing
-   Card padding
-   Image spacing
-   Mobile spacing
-   CTA spacing

------------------------------------------------------------------------

## 4. Animation Audit

Keep animation purposeful:

-   Hero reveal
-   Section reveal
-   Project image transitions
-   Hover states
-   Button transitions
-   Process progression

Avoid:

-   Animation on everything
-   Long delays
-   Excessive parallax
-   Constant movement
-   Distracting cursor effects

Support `prefers-reduced-motion`.

------------------------------------------------------------------------

## 5. Interaction Audit

Verify:

-   Navigation links work
-   Buttons work
-   Resume works
-   GitHub links are real
-   LinkedIn is real
-   Email works
-   Contact form works
-   Project links are accurate
-   No dead buttons
-   No fake Live links

If a URL is unavailable, do not invent one.

------------------------------------------------------------------------

## 6. Accessibility

Verify:

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   Accessible buttons
-   Form labels
-   Meaningful alt text
-   Sufficient contrast
-   Reduced-motion support
-   Logical heading hierarchy

------------------------------------------------------------------------

## 7. Performance

Check:

-   Image optimization
-   Lazy loading where appropriate
-   Avoid unnecessary client components
-   Remove unused dependencies
-   Avoid oversized assets
-   Avoid unnecessary JavaScript
-   Production build
-   Initial load performance

------------------------------------------------------------------------

## 8. SEO

Verify:

-   Page title
-   Meta description
-   Open Graph metadata
-   Favicon
-   Semantic headings
-   Descriptive links
-   Social preview
-   Canonical URL if appropriate
-   Sitemap/robots where appropriate

Use real information only.

------------------------------------------------------------------------

## 9. Final Content Audit

Verify every statement against known facts.

Especially:

-   Employment dates
-   Project status
-   Project ownership
-   Team vs individual work
-   Technology claims
-   Numbers
-   Production claims
-   URLs
-   Contact information

Remove anything impressive-looking that cannot be supported.

------------------------------------------------------------------------

## 10. Final Visual Quality

The final portfolio should feel:

-   Personal
-   Technical
-   Editorial
-   Premium
-   Confident
-   Practical
-   Credible

It should not feel:

-   Generic
-   Over-designed
-   AI-generated
-   Like a resume
-   Like a SaaS landing page
-   Like a technology catalog
-   Like a dashboard

------------------------------------------------------------------------

# LEVEL 3 ACCEPTANCE CRITERIA

Ready for deployment when:

-   Desktop and mobile layouts are stable.
-   No broken links exist.
-   No fake information exists.
-   No questionable metrics remain.
-   Project distinctions are clear.
-   Animations are subtle and purposeful.
-   Accessibility is acceptable.
-   Production build succeeds.
-   Images are optimized.
-   SEO metadata is present.
-   Contact flow works.
-   The portfolio communicates its identity within the first 10--15
    seconds.

------------------------------------------------------------------------

# ANTIGRAVITY EXECUTION PROTOCOL

Execute this document in exactly three stages.

## Stage 1 --- Level 1

Before coding:

1.  Inspect the existing codebase.
2.  Identify current components and data.
3.  Create a short implementation plan.
4.  Identify sections that will be modified.
5.  Preserve existing working functionality.

Implement **LEVEL 1 only**.

Then:

-   Run the application.
-   Check desktop.
-   Check mobile.
-   Check build/type errors.
-   Summarize exactly what changed.
-   **Do not proceed to Level 2 automatically.**

## Stage 2 --- Level 2

Only after Level 1 is verified.

Before coding:

1.  Inspect the Level 1 result.
2.  Identify reusable components.
3.  Identify available real project assets.
4.  Do not invent missing information.
5.  Implement project storytelling and visual evidence.

Then:

-   Run the application.
-   Check desktop.
-   Check mobile.
-   Check build/type errors.
-   Verify project claims.
-   Summarize changes.
-   **Do not proceed to Level 3 automatically.**

## Stage 3 --- Level 3

Only after Level 2 is verified.

Perform:

-   Responsive audit
-   Accessibility audit
-   Animation audit
-   Performance audit
-   SEO audit
-   Link audit
-   Content accuracy audit
-   Production build verification

Do not redesign the website during Level 3.

------------------------------------------------------------------------

# Final Quality Bar

The finished portfolio should make a recruiter or potential client
understand:

### 1. Who is Ajvadu?

A Full Stack Developer.

### 2. What does he actually do?

He turns business workflows and requirements into working software.

### 3. Can he do it in production?

PropertySeller demonstrates professional production experience.

### 4. Can he understand and model a business workflow?

BookMyVenue demonstrates this through a team-built MVP.

### 5. Can he build complex full-stack systems?

Wotix demonstrates commerce, payments, wallet/refunds, authentication
and real-time functionality.

### 6. What technologies support that ability?

Next.js, React, TypeScript, Node.js, Express, MongoDB, PostgreSQL,
Redis, AWS and related tools.

Technologies should come **after the evidence**, not before it.

------------------------------------------------------------------------

# Final Identity

> **AJVADU**
>
> **Full Stack Developer**
>
> **I turn complex business workflows into practical, production-ready
> web solutions.**

The portfolio does not need to prove that Ajvadu knows every technology.

It needs to prove that he can:

> **Understand a problem → structure it → build the solution → refine it
> → ship it.**
