import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Shield, FileText, Server, AlertTriangle } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Handling",
    description: "No training on client data",
    details:
      "Your data is used only for retrieval and inference. We don't train models on your proprietary information unless explicitly requested and agreed upon.",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "RBAC / doc-level permissions",
    details:
      "Role-based access control ensures users only see information they're authorized to access. Document-level and field-level permissions supported.",
  },
  {
    icon: FileText,
    title: "Auditability",
    description: "Citations + logs",
    details:
      "Every answer includes source citations. Full audit logs track who asked what, when, and what sources were used.",
  },
  {
    icon: Server,
    title: "Deployment Options",
    description: "Cloud / VPC / on-prem",
    details:
      "Deploy in your preferred environment. We support cloud SaaS, VPC deployments, and fully on-premise installations.",
  },
  {
    icon: AlertTriangle,
    title: "Safety",
    description: "Red-teaming, PII filtering",
    details:
      "Comprehensive safety measures including prompt injection defenses, PII detection and filtering, and red-team security testing.",
  },
]

export function Security() {
  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Security & Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security built into every system
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1.5">{feature.title}</CardTitle>
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.details}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

