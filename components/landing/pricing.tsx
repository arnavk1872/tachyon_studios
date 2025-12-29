import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteDialog } from "./quote-dialog"
import { Check, X } from "lucide-react"

const tiers = [
  {
    name: "Launch",
    tagline: "Get a copilot live in weeks",
    bestFor: "Teams wanting fast deployment",
    features: [
      "1–2 use cases",
      "Up to 3 data sources",
      "Citation-backed answers",
      "Basic admin controls",
      "Single environment deployment",
    ],
    notIncluded: ["No SSO/RBAC", "No agent actions"],
  },
  {
    name: "Scale",
    tagline: "Enterprise security + AI Ops",
    bestFor: "Companies needing security & reliability",
    features: [
      "Everything in Launch",
      "SSO + RBAC",
      "Audit logs & analytics",
      "Monitoring & alerting",
      "Multi-environment support",
    ],
    notIncluded: null,
  },
  {
    name: "Custom",
    tagline: "Agents, fine-tuning, bespoke",
    bestFor: "Unusual or high-stakes requirements",
    features: [
      "Agentic workflows",
      "Fine-tuning",
      "On-prem/VPC deployment",
      "Complex permissions",
      "Custom integrations",
    ],
    notIncluded: null,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4 mb-12 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`flex-1 relative ${
                idx === 1 ? "lg:-mt-4 lg:mb-4 z-10" : ""
              }`}
            >
              <Card
                className={`h-full relative border-2 transition-all duration-300 ${
                  idx === 1
                    ? "border-primary shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/5 via-background to-background"
                    : "border-border/50 hover:border-primary/30 bg-background"
                } ${idx === 1 ? "scale-105" : "hover:scale-[1.02]"} hover:shadow-xl`}
              >
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-20">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`pb-6 ${idx === 1 ? "pt-8" : "pt-6"}`}>
                  <div className="flex items-baseline justify-between mb-3">
                    <CardTitle className={`${idx === 1 ? "text-3xl" : "text-2xl"} font-bold`}>
                      {tier.name}
                    </CardTitle>
                    {idx === 0 && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        Starter
                      </span>
                    )}
                    {idx === 2 && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        Enterprise
                      </span>
                    )}
                  </div>
                  <p className={`${idx === 1 ? "text-base" : "text-sm"} font-semibold text-primary mb-2`}>
                    {tier.tagline}
                  </p>
                  <p className="text-xs text-muted-foreground">{tier.bestFor}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col pt-0 pb-6">
                  <div className="mb-6 space-y-3">
                    {tier.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className="flex items-center gap-3 text-sm group/item"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          idx === 1 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-primary/10 text-primary"
                        } transition-transform group-hover/item:scale-110`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {tier.notIncluded && (
                    <div className="mt-auto pt-6 border-t border-border/50 space-y-2">
                      {tier.notIncluded.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <X className="h-3.5 w-3.5 flex-shrink-0 opacity-50" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <p className="text-center text-xs sm:text-sm text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
          Exact quote depends on your requirements and scale.
        </p>
        <div className="text-center">
          <QuoteDialog
            trigger={
              <Button
                size="lg"
                className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Get a quotation
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}

