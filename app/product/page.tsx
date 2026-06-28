"use client"

import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  Rocket,
  Upload,
  FileText,
  Lock,
  Globe,
  Code,
  Cpu,
  Database,
  Palette,
  BarChart3,
  Server,
  BookOpen,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { QuoteDialog } from "@/components/landing/quote-dialog"
import { KLYRO_URL, EBOOK_URL } from "@/lib/products"

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh -z-10" />
        <div className="container mx-auto max-w-5xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Rocket className="h-4 w-4" />
            <span>Available Now</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Klyro
            </span>
            {" "}— branded AI assistants, your way
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            An open, self-hostable AI chatbot platform for agencies, startups, and businesses that want to deploy branded AI assistants without vendor lock-in.
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect your preferred LLM provider (OpenAI, OpenRouter, Groq, and more), upload knowledge sources, and embed an AI chatbot anywhere using a customizable widget.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {["Self-Hosted", "No Lock-In", "White-Label", "RAG-Powered"].map(
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog
              trigger={
                <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Get a quotation
                </Button>
              }
            />
            <Button size="lg" variant="outline" className="border-2" asChild>
              <a href={KLYRO_URL} target="_blank" rel="noopener noreferrer">
                Buy on Gumroad
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From setup to deployment in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">1. Connect Your LLM</CardTitle>
                <CardDescription className="text-base">
                  Plug in OpenAI, OpenRouter, Groq, or any supported provider. Switch models anytime—no vendor lock-in.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">2. Upload Knowledge</CardTitle>
                <CardDescription className="text-base">
                  Ingest PDFs, text files, and other sources into a RAG-powered knowledge base your chatbot can draw from.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">3. Embed Anywhere</CardTitle>
                <CardDescription className="text-base">
                  Drop a customizable, white-label chatbot widget on your site—or self-host the full platform on your infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deploy production-ready AI assistants
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Cpu,
                title: "Multiple LLM Provider Support",
                description: "Connect OpenAI, OpenRouter, Groq, and more. Swap providers without rebuilding your stack.",
              },
              {
                icon: Database,
                title: "RAG-Powered Knowledge Base",
                description: "Ground responses in your own data with retrieval-augmented generation for accurate, contextual answers.",
              },
              {
                icon: FileText,
                title: "PDF and Text Ingestion",
                description: "Upload PDFs, text files, and other documents to build a knowledge base your chatbot can search.",
              },
              {
                icon: Code,
                title: "Embeddable Chatbot Widget",
                description: "Add a customizable chat widget to any website with a simple embed code.",
              },
              {
                icon: Palette,
                title: "White-Label Customization",
                description: "Brand the chatbot to match your company—colors, logos, and messaging under your identity.",
              },
              {
                icon: BarChart3,
                title: "Analytics and Usage Reporting",
                description: "Track conversations, usage patterns, and performance to understand how your AI assistant is used.",
              },
              {
                icon: Server,
                title: "Self-Hosted Deployment",
                description: "Run Klyro on your own servers for full data control, privacy, and compliance.",
              },
              {
                icon: Lock,
                title: "Private & Secure",
                description: "Keep sensitive data on your infrastructure. No third-party lock-in on your knowledge or conversations.",
              },
              {
                icon: Globe,
                title: "Deploy Anywhere",
                description: "Cloud, on-premises, or VPC—deploy wherever your security and compliance requirements demand.",
              },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden border-2 border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-bold mb-2">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Need help deploying Klyro?</CardTitle>
              <CardDescription className="text-lg">
                Buy the platform on Gumroad, or get a custom quotation for setup, integration, and deployment support.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <QuoteDialog
                  trigger={
                    <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                      Get a quotation
                    </Button>
                  }
                />
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a href={KLYRO_URL} target="_blank" rel="noopener noreferrer">
                    Buy on Gumroad
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col items-center justify-center text-center">
                <div className="p-4 rounded-2xl bg-primary/10 mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-2">Ebook</Badge>
                <CardTitle className="text-2xl">AI for Humans</CardTitle>
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <CardDescription className="text-base leading-relaxed mb-6">
                  Want to understand AI from the ground up? <strong className="text-foreground font-medium">AI for Humans</strong> is a comprehensive guide that covers everything you need to know about artificial intelligence—how it works, how to use it effectively, and how to stay ahead as the field evolves.
                </CardDescription>
                <p className="text-sm text-muted-foreground mb-6">
                  Perfect for founders, product teams, and anyone who wants a clear, practical understanding of AI without the jargon.
                </p>
                <Button className="w-full sm:w-auto self-start shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                  <a href={EBOOK_URL} target="_blank" rel="noopener noreferrer">
                    Get the Ebook
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
