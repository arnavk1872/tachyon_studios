import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const steps = [
  {
    phase: "Week 0–1",
    title: "Discovery Sprint",
    description: "Data audit + KPI + architecture",
    outcomes: [
      "Data source inventory and access patterns",
      "Success metrics and KPIs defined",
      "Architecture proposal with deployment options",
    ],
    deliverables: ["Discovery report", "Technical architecture", "Project plan"],
  },
  {
    phase: "Week 2–4",
    title: "Pilot",
    description: "One team, one source, measurable",
    outcomes: [
      "Working prototype with one data source",
      "Initial accuracy and latency metrics",
      "User feedback and iteration",
    ],
    deliverables: ["Pilot deployment", "Performance report", "User feedback"],
  },
  {
    phase: "Week 4–8",
    title: "Production",
    description: "SSO/RBAC, audit logs, guardrails",
    outcomes: [
      "Full SSO and RBAC integration",
      "Audit logging and compliance",
      "Production guardrails and safety measures",
    ],
    deliverables: ["Production system", "Security audit", "Documentation"],
  },
  {
    phase: "Ongoing",
    title: "Managed AI Ops",
    description: "Ingestion, evals, updates",
    outcomes: [
      "Continuous data ingestion and updates",
      "Regular evaluation and quality checks",
      "Model updates and improvements",
    ],
    deliverables: ["Monthly reports", "System updates", "Support"],
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From discovery to production with clear milestones
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.phase} className="relative">
                <div className="flex gap-6 md:gap-8">
                  <div className="hidden md:block flex-shrink-0 w-16">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg mt-1" />
                  </div>
                  <div className="flex-1">
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                              {step.phase}
                            </div>
                            <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Outcomes</h4>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                              {step.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="text-primary mt-1.5">•</span>
                                  <span className="leading-relaxed">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Deliverables</h4>
                            <ul className="space-y-2.5 text-sm text-muted-foreground">
                              {step.deliverables.map((deliverable, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="text-primary mt-1.5">•</span>
                                  <span className="leading-relaxed">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

