import { QuoteDialog } from "./quote-dialog"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import Link from "next/link"
import { EBOOK_URL } from "@/lib/products"

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Tachyon Studio
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI products you can use today, plus custom solutions built for your team. Explore Klyro and AI for Humans—or get a quotation for something tailored.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <div className="space-y-3">
              <Link
                href="/product"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Klyro — AI Chatbot Platform
              </Link>
              <a
                href={EBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                AI for Humans — Ebook
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Get Started</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tell us about your project and we&apos;ll send a custom quote.
            </p>
            <QuoteDialog
              trigger={
                <Button variant="outline" className="border-2 w-fit">
                  Get a quotation
                </Button>
              }
            />
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com/company/tachyon-studios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Tachyonxstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tachyon Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
