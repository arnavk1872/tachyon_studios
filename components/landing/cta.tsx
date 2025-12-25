import { Button } from "@/components/ui/button"
import { QuoteDialog } from "./quote-dialog"

export function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="container mx-auto max-w-4xl text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span>Get Started</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Ready to deploy a{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            private copilot
          </span>
          ?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Get a custom quote for your organization
        </p>
        <QuoteDialog trigger={<Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">Get a quotation</Button>} />
      </div>
    </section>
  )
}

