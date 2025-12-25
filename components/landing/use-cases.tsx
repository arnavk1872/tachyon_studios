import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, HelpCircle, Headphones, TrendingUp, Shield } from "lucide-react"

const useCases = [
  {
    icon: GraduationCap,
    title: "Onboarding & Training Assistant",
    description:
      "Help new employees get up to speed quickly with company policies, procedures, and tools.",
  },
  {
    icon: HelpCircle,
    title: "Internal IT / SOP Helpdesk",
    description:
      "Instant answers to IT questions and standard operating procedures, reducing support ticket volume.",
  },
  {
    icon: Headphones,
    title: "Customer Support Agent Assist",
    description:
      "Equip support teams with instant access to product knowledge, troubleshooting guides, and policies.",
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement Knowledge Base",
    description:
      "Quick access to product specs, competitive intelligence, pricing, and sales playbooks.",
  },
  {
    icon: Shield,
    title: "Compliance & Policy Q/A",
    description:
      "Ensure accurate, citation-backed answers to compliance questions with full audit trails.",
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Use Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven applications across industries
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <Card 
                key={useCase.title}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-sm leading-relaxed">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

