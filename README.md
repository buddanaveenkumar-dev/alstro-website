# Alstro AI — Marketing Website

Production marketing website for Alstro AI — compliance infrastructure for credit decisions.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Hook Form** (contact form)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for required variables:

- `RESEND_API_KEY` — For form submission emails via Resend
- `FORMSPREE_ENDPOINT` — Fallback form handler

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

## Project Structure

```
app/
├── layout.tsx          # Root layout, fonts, metadata
├── page.tsx            # Home page (all sections)
└── globals.css         # CSS variables, base styles
components/
├── Nav.tsx             # Fixed nav with scroll spy
├── Hero.tsx            # Hero + live audit terminal
├── LogoBar.tsx         # Trust/logo bar
├── Problem.tsx         # Problem statement + regulatory citation
├── HowItWorks.tsx      # Stack diagram + 6-step process
├── Agents.tsx          # 4 AI agent cards
├── BeforeAfter.tsx     # Adverse action notice comparison
├── ComparisonTable.tsx # Competitive landscape table
├── ROI.tsx             # Business case metrics
├── Investors.tsx       # Investor section + founder bio
├── Contact.tsx         # Dual CTA form (lenders + investors)
└── Footer.tsx          # Site footer
```
