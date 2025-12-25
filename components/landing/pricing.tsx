import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteDialog } from "./quote-dialog"
import { Check, X } from "lucide-react"

const tiers = [
  {
    name: "Launch",
    tagline: "Get a citation-backed copilot live in weeks.",
    description: "RAG Pilot",
    bestFor: "Teams that want an internal knowledge copilot fast",
    features: [
      "1–2 use cases (e.g., onboarding + SOP Q/A)",
      "Up to 3 data sources (Notion/Confluence/Jira/Website/PDFs)",
      "Citation-backed answers + basic prompt-injection defenses",
      "Basic admin actions: re-index, add/remove sources",
      "Evaluation pack (test set + quality report)",
      "Deploy to a hosted staging/prod (single environment)",
    ],
    notIncluded: [
      "No SSO/RBAC",
      "No complex integrations",
      "No agent actions",
    ],
  },
  {
    name: "Scale",
    tagline: "Enterprise security + ongoing AI Ops.",
    description: "Enterprise Copilot + AI Ops",
    bestFor: "Companies that need security, permissions, reliability, and ongoing ownership",
    features: [
      "Everything in Launch, plus:",
      "SSO (Google/Microsoft/Okta) + RBAC / doc-level permissions",
      "Audit logs + usage analytics",
      "Monitoring (latency/cost/errors) + alerting",
      "Hardened ingestion pipelines + scheduled refresh",
      "Advanced safety (PII handling, red-teaming, stricter guardrails)",
      "Optional: multi-team rollout + multi-environment (staging/prod)",
    ],
    commercial: "One-time implementation + monthly Managed AI Ops retainer",
    notIncluded: null,
  },
  {
    name: "Custom",
    tagline: "Agents, fine-tuning, and bespoke deployments.",
    description: "Tailored Build",
    bestFor: "Unusual requirements or high-stakes workflows",
    features: [
      "Agentic workflows (create tickets, update CRM, trigger internal tools)",
      "Fine-tuning track (format consistency, routing/classification, domain style)",
      "On-prem/VPC deployment, data residency constraints",
      "Multiple business units + complex permission models",
      "Custom UI, deep integrations, compliance-heavy logging",
    ],
    commercial: "Start with a short Discovery Sprint → fixed scope quote → phased delivery",
    notIncluded: null,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {tiers.map((tier, idx) => (
            <Card 
              key={tier.name} 
              className={`flex flex-col h-full relative border-2 transition-all duration-300 hover:shadow-xl ${
                idx === 1 
                  ? "border-primary/50 shadow-lg shadow-primary/5 hover:-translate-y-1" 
                  : "hover:border-primary/30 hover:-translate-y-1"
              }`}
            >
              {idx === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg z-10">
                  Popular
                </div>
              )}
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <p className="text-sm font-medium text-primary mb-2 leading-snug break-words">{tier.tagline}</p>
                <CardDescription className="text-sm mb-3">{tier.description}</CardDescription>
                <p className="text-xs text-muted-foreground italic leading-relaxed break-words">
                  Best for: {tier.bestFor}
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pt-0 pb-6">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Includes</h4>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2.5 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-muted-foreground break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto space-y-6">
                  {tier.notIncluded && (
                    <div className="pt-6 border-t">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">What it's not</h4>
                      <ul className="space-y-2">
                        {tier.notIncluded.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <X className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tier.commercial && (
                    <div className="pt-6 border-t">
                      <p className="text-sm text-muted-foreground leading-relaxed break-words">
                        <span className="font-semibold text-foreground block mb-1">Commercial structure:</span>
                        <span>{tier.commercial}</span>
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
          Exact quote depends on data sources, deployment preferences, and scale.
        </p>
        <div className="text-center">
          <QuoteDialog trigger={<Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">Get a quotation</Button>} />
        </div>
      </div>
    </section>
  )
}

