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
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Use Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven applications across industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon
            const isLarge = idx === 0 || idx === 2
            return (
              <div
                key={useCase.title}
                className={`group relative ${isLarge ? "md:col-span-1" : ""}`}
              >
                <Card className="h-full relative border-2 border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative pb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-bold leading-tight mb-2">
                          {useCase.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {useCase.description}
                    </CardDescription>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

