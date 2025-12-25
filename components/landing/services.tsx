import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Bot, Settings, Cloud } from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Enterprise RAG Copilots",
    description: "Internal knowledge chatbot with citations",
    bullets: [
      "Multi-source document ingestion (Confluence, Notion, Drive, databases)",
      "Citation-backed answers with source links",
      "Document-level and field-level access control",
    ],
    bestFor: "Teams needing instant access to internal knowledge",
  },
  {
    icon: Bot,
    title: "AI Agents & Tooling",
    description: "Workflows, actions, and integrations",
    bullets: [
      "Custom agent workflows with tool calling",
      "Integration with Slack, Teams, Jira, and more",
      "Action execution with approval workflows",
    ],
    bestFor: "Automating repetitive knowledge work",
  },
  {
    icon: Settings,
    title: "Fine-tuning & Eval Harness",
    description: "When needed; consistent outputs",
    bullets: [
      "Custom model fine-tuning for domain-specific tasks",
      "Evaluation harnesses for quality assurance",
      "A/B testing and performance monitoring",
    ],
    bestFor: "Specialized use cases requiring consistent outputs",
  },
  {
    icon: Cloud,
    title: "Deployment & AI Ops",
    description: "Monitoring, cost, security, updates",
    bullets: [
      "Production deployment with auto-scaling",
      "Cost tracking and optimization",
      "Security updates and model versioning",
    ],
    bestFor: "Maintaining production AI systems",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions from architecture to ongoing operations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.title}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1.5">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2.5 mb-5">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-xs font-medium text-primary/80">
                      Best for: <span className="text-muted-foreground font-normal">{service.bestFor}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

