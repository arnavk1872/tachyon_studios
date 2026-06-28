import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Tachyon Studio — AI Products & Custom Solutions",
  description:
    "Ready-made AI products including Klyro and AI for Humans, plus custom solutions built for your team. Get a quotation or buy a product today.",
  keywords: [
    "Tachyon Studio",
    "Klyro",
    "AI chatbot",
    "self-hosted AI",
    "RAG",
    "AI for Humans",
    "AI products",
    "custom AI solutions",
    "enterprise AI",
  ],
  openGraph: {
    title: "Tachyon Studio — AI Products & Custom Solutions",
    description:
      "Ship with our ready-made AI products, or get a custom quotation for something built around your needs.",
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
