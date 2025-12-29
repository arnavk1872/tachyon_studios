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
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Security & Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security built into every system
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Card className="relative h-full border-2 border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl group-hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold mb-1">{feature.title}</CardTitle>
                          <div className="inline-block mt-1">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                              {feature.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.details}</p>
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

