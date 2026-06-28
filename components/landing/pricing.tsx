import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QuoteDialog } from "./quote-dialog"
import { Check, Bot, BookOpen, ExternalLink } from "lucide-react"
import { klyro, ebook } from "@/lib/products"

const productCards = [
  {
    ...klyro,
    icon: Bot,
    badge: "Most Popular",
    highlighted: true,
    cta: "Get Klyro",
  },
  {
    ...ebook,
    icon: BookOpen,
    badge: "Ebook",
    highlighted: false,
    cta: "Get the Ebook",
    features: ebook.topics,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Products & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buy a product outright, or get a custom quotation for something built around your needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {productCards.map((product) => {
            const Icon = product.icon
            return (
              <Card
                key={product.name}
                className={`relative flex flex-col h-full border-2 transition-all duration-300 hover:shadow-xl ${
                  product.highlighted
                    ? "border-primary shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/5 via-background to-background"
                    : "border-border/50 hover:border-primary/30 bg-background"
                }`}
              >
                {product.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}
                <CardHeader className={`text-center ${product.highlighted ? "pt-8" : "pt-6"}`}>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  {!product.highlighted && (
                    <Badge variant="secondary" className="w-fit mx-auto mb-3">
                      {product.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {product.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 space-y-6">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-3 flex-1">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          product.highlighted
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        }`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="w-full pt-0">
                  <Button
                    size="lg"
                    className={`w-full shadow-lg transition-all ${
                      product.highlighted
                        ? "shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                        : ""
                    }`}
                    variant={product.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      {product.cta}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          Product purchases are handled securely through Gumroad. Instant access after checkout.
        </p>
        <div className="mt-16 pt-12 border-t border-border/50 text-center">
          <h3 className="text-2xl font-bold mb-3">Need something custom?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Enterprise deployments, bespoke integrations, or a solution tailored to your workflow—we&apos;ll scope it and send a quotation.
          </p>
          <QuoteDialog
            trigger={
              <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Get a quotation
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}
