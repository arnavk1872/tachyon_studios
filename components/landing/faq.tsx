import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Klyro?",
    answer:
      "Klyro is an open, self-hostable AI chatbot platform. Connect your LLM provider, upload knowledge sources, and deploy a branded chatbot widget—or run the full platform on your own infrastructure.",
  },
  {
    question: "Which LLM providers does Klyro support?",
    answer:
      "Klyro supports multiple providers including OpenAI, OpenRouter, Groq, and more. You bring your own API keys and can switch providers without rebuilding your setup.",
  },
  {
    question: "Do I need to self-host Klyro?",
    answer:
      "Self-hosting is a core feature, not a requirement. You can deploy Klyro on your own servers for full data control, or use it in a setup that fits your team's infrastructure and compliance needs.",
  },
  {
    question: "What is AI for Humans?",
    answer:
      "AI for Humans is a comprehensive ebook that explains how AI works, how to use it effectively in business, and what to expect as the technology evolves. It's written for non-technical and semi-technical readers who want clarity without jargon.",
  },
  {
    question: "How do I get a custom quotation?",
    answer:
      "Click \"Get a quotation\" anywhere on the site and tell us about your project—whether you need a custom AI deployment, help setting up Klyro, or something entirely bespoke. We'll review your requirements and send a tailored quote.",
  },
  {
    question: "How do I purchase a product?",
    answer:
      "Both Klyro and AI for Humans are available on Gumroad. Click any purchase button on this site to go directly to checkout. You'll get instant access after payment.",
  },
  {
    question: "Can I use Klyro for client projects?",
    answer:
      "Yes. Klyro is designed for agencies and consultancies that need white-label AI assistants for multiple clients. Customize branding per deployment and keep each client's data isolated on your infrastructure.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Questions about our products, custom work, and how to get started
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-2 rounded-lg px-4 hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
