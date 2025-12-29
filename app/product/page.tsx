"use client"

import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Rocket, Upload, FileText, Lock, Zap, Globe, Code } from "lucide-react"
import { WaitlistDialog } from "@/components/landing/waitlist-dialog"
import Link from "next/link"

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh -z-10" />
        <div className="container mx-auto max-w-5xl text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Rocket className="h-4 w-4" />
            <span>Coming Soon</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Document-powered{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              AI chat
            </span>
            {" "}in minutes
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            Drop your documents in any format. We'll spin up a chat interface for you that you can deploy wherever you want.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {["Any Format", "Instant Setup", "Self-Deploy", "Private & Secure"].map(
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, powerful, and completely under your control
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">1. Upload Documents</CardTitle>
                <CardDescription className="text-base">
                  Drop your documents in any format—PDFs, Word docs, text files, and more. We handle the rest.
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
                <CardTitle className="text-xl mb-2">2. Chat Interface Ready</CardTitle>
                <CardDescription className="text-base">
                  We automatically process your documents and spin up an intelligent chat interface powered by your content.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">3. Deploy Anywhere</CardTitle>
                <CardDescription className="text-base">
                  Deploy your chat interface wherever you want—your own servers, cloud, or on-premises. Full control, zero lock-in.
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
              Everything you need to build powerful document-powered chat experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: FileText,
                title: "Universal Format Support",
                description: "Upload PDFs, Word docs, text files, markdown, and more. We handle all the parsing and processing.",
              },
              {
                icon: Zap,
                title: "Instant Setup",
                description: "Get your chat interface running in minutes, not weeks. No complex configuration required.",
              },
              {
                icon: Lock,
                title: "Private & Secure",
                description: "Your documents stay private. Deploy on your infrastructure with full data control.",
              },
              {
                icon: Globe,
                title: "Deploy Anywhere",
                description: "Cloud, on-premises, or VPC—deploy wherever your security and compliance needs require.",
              },
              {
                icon: MessageSquare,
                title: "Smart Chat Interface",
                description: "AI-powered chat that understands context, provides citations, and learns from your documents.",
              },
              {
                icon: Code,
                title: "API Access",
                description: "Full API access for custom integrations. Build your own workflows and applications.",
              },
            ].map((feature, idx) => {
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
              <CardTitle className="text-3xl mb-4">Stay Updated</CardTitle>
              <CardDescription className="text-lg">
                We're building something special. Get notified when we launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                  <Link href="/#faq">Learn More</Link>
                </Button>
                <WaitlistDialog
                  trigger={
                    <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                      Get Notified
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

