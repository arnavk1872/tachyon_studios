/**
 * Tachyon Studio Landing Page
 *
 * CONTACT EMAIL CONFIGURATION:
 * - To change the contact email, update the mailto link in:
 *   1. components/landing/quote-dialog.tsx (line ~100, mailto:contact@tachyonstudio.com)
 *   2. components/landing/footer.tsx (line ~15, contact@tachyonstudio.com)
 *
 * EMAIL PROVIDER INTEGRATION:
 * - To add real email sending, update app/api/quote/route.ts
 * - Replace the console.log with your email provider (e.g., Resend, SendGrid, AWS SES)
 * - Example with Resend:
 *   import { Resend } from 'resend'
 *   const resend = new Resend(process.env.RESEND_API_KEY)
 *   await resend.emails.send({
 *     from: 'noreply@tachyonstudio.com',
 *     to: 'contact@tachyonstudio.com',
 *     subject: 'New Quote Request',
 *     html: formatEmailHTML(data)
 *   })
 */

import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { UseCases } from "@/components/landing/use-cases"
import { Pricing } from "@/components/landing/pricing"
import { Security } from "@/components/landing/security"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <UseCases />
      <Pricing />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

