import { QuoteDialog } from "./quote-dialog"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

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
              Private AI copilots for your company knowledge.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex items-center gap-4 mb-4">
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
            <p className="text-sm text-muted-foreground">
              India / Remote
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Get Started</h3>
            <QuoteDialog trigger={<Button variant="outline" className="border-2 w-fit">Get a quotation</Button>} />
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tachyon Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

