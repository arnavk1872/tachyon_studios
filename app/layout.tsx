import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Tachyon Studio — Private AI Copilots & RAG Systems",
  description:
    "Secure, citation-backed internal AI copilots powered by RAG. Enterprise RAG chatbots, custom LLM fine-tuning, AI agents, and deployment services. Built with permissions, SSO, and on-prem/VPC options.",
  keywords: [
    "RAG",
    "internal chatbot",
    "fine-tuning",
    "AI agents",
    "deployment",
    "enterprise AI",
    "knowledge base",
    "AI copilot",
    "citation-backed AI",
    "RBAC",
    "SSO",
    "on-prem AI",
  ],
  openGraph: {
    title: "Tachyon Studio — Private AI Copilots & RAG Systems",
    description:
      "Secure, citation-backed internal AI copilots powered by RAG. Enterprise solutions with permissions, SSO, and deployment options.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

