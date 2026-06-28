import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, BookOpen, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { klyro, ebook } from "@/lib/products"

export function Products() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two ready-made products you can buy today—or{" "}
            <a href="#pricing" className="text-primary hover:underline font-medium">
              get a quotation
            </a>{" "}
            for a custom build
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Card className="group relative flex flex-col h-full overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
                  Platform
                </Badge>
              </div>
              <CardTitle className="text-3xl mb-2">{klyro.name}</CardTitle>
              <CardDescription className="text-base font-medium text-primary">
                {klyro.tagline}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed">{klyro.description}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{klyro.extendedDescription}</p>
              <ul className="space-y-2.5 flex-1">
                {klyro.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative w-full flex flex-col sm:flex-row gap-3 pt-0">
              <Button className="flex-1 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                <a href={klyro.url} target="_blank" rel="noopener noreferrer">
                  Buy on Gumroad
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/product">
                  Full details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card id="ebook" className="group relative flex flex-col h-full overflow-hidden border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 scroll-mt-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader className="relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary">Ebook</Badge>
              </div>
              <CardTitle className="text-3xl mb-2">{ebook.name}</CardTitle>
              <CardDescription className="text-base font-medium text-primary">
                {ebook.tagline}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed">{ebook.description}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{ebook.extendedDescription}</p>
              <ul className="space-y-2.5 flex-1">
                {ebook.topics.map((topic) => (
                  <li key={topic} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="text-primary mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative w-full pt-0">
              <Button variant="outline" className="w-full border-2 hover:bg-accent/50" asChild>
                <a href={ebook.url} target="_blank" rel="noopener noreferrer">
                  Get the Ebook
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
