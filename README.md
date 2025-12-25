# Tachyon Studio Landing Page

Production-quality landing page for Tachyon Studio - AI services studio specializing in Enterprise RAG chatbots, custom LLM fine-tuning, AI agents, and deployment/AI Ops.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Add your logo:
   - Place your logo image at `/public/logo.png`
   - The navbar and hero sections will use this logo

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Contact Email
To change the contact email, update:
- `components/landing/quote-dialog.tsx` (mailto fallback)
- `components/landing/footer.tsx` (display email)

### Email Provider Integration
To add real email sending for quote requests:
1. Install an email provider (e.g., `npm install resend`)
2. Add API key to `.env.local`
3. Update `app/api/quote/route.ts` with your email provider code
4. See comments in the route file for examples

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui components
- lucide-react icons

## Project Structure

```
├── app/
│   ├── api/quote/route.ts    # Quote submission API
│   ├── layout.tsx            # Root layout with SEO
│   ├── page.tsx              # Main landing page
│   └── globals.css           # Global styles
├── components/
│   ├── landing/              # Landing page sections
│   └── ui/                   # shadcn/ui components
└── public/
    └── logo.png              # Your logo (add this)
```

## Build

```bash
npm run build
npm start
```

## Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Accessible (keyboard navigation, ARIA labels)
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ Mailto fallback for form submission
- ✅ Toast notifications
- ✅ All sections as specified

