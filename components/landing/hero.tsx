"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QuoteDialog } from "./quote-dialog"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="container mx-auto max-w-5xl text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4" />
          <span>Enterprise AI Solutions</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          Private AI copilots for your{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            company knowledge
          </span>
          .
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
          Secure, citation-backed internal copilots powered by RAG. Built with
          permissions, SSO, and deployment options that fit your infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <QuoteDialog trigger={<Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">Get a quotation</Button>} />
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToServices}
            className="border-2 hover:bg-accent/50 transition-all"
          >
            See capabilities
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {["Citations", "RBAC", "SSO-ready", "On-prem/VPC", "Monitoring"].map(
            (chip) => (
              <Badge 
                key={chip} 
                variant="secondary" 
                className="px-4 py-1.5 text-xs font-medium bg-background/80 backdrop-blur-sm border hover:bg-background transition-colors"
              >
                {chip}
              </Badge>
            )
          )}
        </div>
      </div>
    </section>
  )
}

