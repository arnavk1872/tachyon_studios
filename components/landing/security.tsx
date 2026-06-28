import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Shield, Server, Cpu, Palette } from "lucide-react"

const securityFeatures = [
  {
    icon: Server,
    title: "Self-Hosted by Default",
    description: "Your infrastructure",
    details:
      "Run Klyro on your own servers. Your conversations, documents, and API keys never need to leave your environment.",
  },
  {
    icon: Cpu,
    title: "Bring Your Own LLM",
    description: "No vendor lock-in",
    details:
      "Connect OpenAI, OpenRouter, Groq, or any supported provider. Switch models or providers anytime without rebuilding your stack.",
  },
  {
    icon: Lock,
    title: "Data Ownership",
    description: "You control your data",
    details:
      "Upload PDFs and text to your own knowledge base. No training on your content, no third-party data retention policies to worry about.",
  },
  {
    icon: Palette,
    title: "White-Label Ready",
    description: "Your brand, not ours",
    details:
      "Customize colors, logos, and messaging so the chatbot looks and feels like a native part of your product or client deliverable.",
  },
  {
    icon: Shield,
    title: "Open Platform",
    description: "Transparent & extensible",
    details:
      "An open platform you can inspect, extend, and deploy on your terms—built for teams that outgrow closed SaaS chatbot tools.",
  },
]

export function Security() {
  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Why Klyro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Control, ownership, and flexibility—without the enterprise SaaS tax
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative h-full border-2 border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold mb-1">{feature.title}</CardTitle>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.details}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
