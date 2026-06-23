# GlobeTrek Solutions — Next.js Website

Education consultancy, student recruitment, visa support, travel packages, and travel consultation.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript, static export).

## Getting Started

```bash
npm run dev     # Development server at http://localhost:3000
npm run build   # Production build → out/
npm run start   # Start production server
```

## Project Structure

```
app/              # Pages (file-based routing)
  page.tsx        # Home
  about/page.tsx
  services/page.tsx
  study-abroad/page.tsx
  travel-packages/page.tsx
  contact/page.tsx
  layout.tsx      # Root layout (header + footer)
  globals.css     # Global styles
components/       # Shared components
  Header.tsx      # Sticky header with mobile nav
  Footer.tsx      # Site footer
  ContactForm.tsx # WhatsApp inquiry form
public/           # Static assets
```

## Deploy

The `out/` directory contains a fully static site ready for deployment to GitHub Pages, Netlify, Vercel, or any static host.