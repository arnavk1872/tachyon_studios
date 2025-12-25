"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

interface QuoteDialogProps {
  trigger?: React.ReactNode
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function QuoteDialog({ trigger, defaultOpen, onOpenChange }: QuoteDialogProps) {
  const [open, setOpen] = useState(defaultOpen || false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: "",
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please confirm that you can be contacted about this request.",
        variant: "destructive",
      })
      return
    }

    if (!formData.email || !formData.name || !formData.company) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Request failed")

      toast({
        title: "Request received",
        description: "We'll contact you within 24 hours.",
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        useCase: "",
        message: "",
        consent: false,
      })
      setOpen(false)
      onOpenChange?.(false)
    } catch (error) {
      const subject = encodeURIComponent("Quote Request - Tachyon Studio")
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nUse Case: ${formData.useCase}\n\nMessage:\n${formData.message}`
      )
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=arnavk1802@gmail.com&su=${subject}&body=${body}`

      toast({
        title: "Request failed",
        description: (
          <div>
            <p className="mb-2">Unable to submit form. Please use the fallback:</p>
            <a
              href={gmailLink}
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Gmail to send email
            </a>
          </div>
        ),
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Get a quotation</DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll provide a custom quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="useCase">Use case</Label>
            <Select
              value={formData.useCase}
              onValueChange={(value) => setFormData({ ...formData, useCase: value })}
            >
              <SelectTrigger id="useCase">
                <SelectValue placeholder="Select a use case" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="onboarding">Onboarding & training assistant</SelectItem>
                <SelectItem value="helpdesk">Internal IT / SOP helpdesk</SelectItem>
                <SelectItem value="support">Customer support agent assist</SelectItem>
                <SelectItem value="sales">Sales enablement knowledge base</SelectItem>
                <SelectItem value="compliance">Compliance & policy Q/A</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1"
              required
            />
            <Label htmlFor="consent" className="text-sm">
              You can contact me about this request *
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

