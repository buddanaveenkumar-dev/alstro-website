# Alstro AI — Marketing Website

Production marketing website for Alstro AI — compliance infrastructure for underwriting decisions.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Hook Form** + **Formspree** (contact form)

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in Formspree ID, Calendly URL, founder email
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```bash
NEXT_PUBLIC_FORMSPREE_ID=     # Formspree form ID
NEXT_PUBLIC_CALENDLY_URL=     # Calendly link for investor calls
NEXT_PUBLIC_FOUNDER_EMAIL=    # Founder email displayed on site
```

## Deploy

Push to GitHub, connect repo at [vercel.com/new](https://vercel.com/new). Every push to `main` auto-deploys.

## Project Structure

```
app/
├── layout.tsx          # Root layout, fonts (Instrument Serif + Geist), metadata
├── page.tsx            # Home page (all sections)
└── globals.css         # CSS variables, base styles
components/
├── Nav.tsx             # Fixed nav with alpha pill
├── Hero.tsx            # Centered hero + live audit feed terminal
├── Problem.tsx         # CFPB citation + 4 problem cards
├── HowItWorks.tsx      # Stack diagram + 6-step process
├── Agents.tsx          # 4 AI agent cards
├── BeforeAfter.tsx     # Adverse action notice comparison
├── ForLenders.tsx      # Who it's for (3 audience cards)
├── EarlyAccess.tsx     # Early access form (Formspree)
├── Investors.tsx       # Investor section + founder bio
└── Footer.tsx          # Site footer
```
