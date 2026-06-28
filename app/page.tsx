import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Products } from "@/components/landing/products"
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
      <Products />
      <UseCases />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
