import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you fine-tune models or use RAG?",
    answer:
      "We primarily use RAG (Retrieval-Augmented Generation) for most use cases because it's faster to deploy, easier to update with new information, and provides citations. We offer fine-tuning when you need consistent outputs for specialized tasks or when RAG isn't sufficient. The choice depends on your specific requirements.",
  },
  {
    question: "What tools do you integrate with?",
    answer:
      "We integrate with common knowledge sources including Google Drive, Confluence, Notion, Jira, Slack, Microsoft Teams, databases (PostgreSQL, MongoDB), and more. We can also build custom integrations for proprietary systems. All integrations support authentication and access control.",
  },
  {
    question: "How long does it take?",
    answer:
      "A typical timeline: Discovery Sprint (1-2 weeks) → Pilot (2-4 weeks) → Production (4-8 weeks). The exact timeline depends on data complexity, integration requirements, and deployment preferences. We can provide a detailed timeline after the discovery phase.",
  },
  {
    question: "Can this run on-prem?",
    answer:
      "Yes. We support on-premise deployments, VPC deployments, and cloud SaaS. For on-prem, we can containerize the system for deployment in your infrastructure. All deployment options include the same security and access control features.",
  },
  {
    question: "How do you prevent data leaks?",
    answer:
      "Multiple layers: (1) Access control ensures users only see authorized data, (2) Audit logs track all queries and responses, (3) Citations show exactly which sources were used, (4) PII filtering can detect and redact sensitive information, (5) We don't train on your data by default, and (6) All deployments can be isolated in your own infrastructure.",
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
            Common questions about our services and approach
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

