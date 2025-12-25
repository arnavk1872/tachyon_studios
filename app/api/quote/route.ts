import { NextRequest, NextResponse } from "next/server"
import { initDatabase, saveQuote } from "@/lib/db"

/**
 * Quote Request API Endpoint
 *
 * This endpoint receives quote requests from the contact form
 * and saves them to the tachyon_queries database table.
 */

export async function POST(request: NextRequest) {
  try {
    await initDatabase()

    const data = await request.json()

    const quoteId = await saveQuote({
      name: data.name,
      email: data.email,
      company: data.company,
      useCase: data.useCase || null,
      message: data.message || null,
      consent: data.consent || false,
    })

    console.log(`Quote request saved to database with ID: ${quoteId}`)

    return NextResponse.json({ ok: true, id: quoteId })
  } catch (error: any) {
    console.error("Error processing quote request:", error)
    
    if (error.code === '42P01') {
      console.error("Table does not exist. Attempting to recreate...")
      try {
        await initDatabase()
        return NextResponse.json(
          { ok: false, error: "Database table was missing. Please try again." },
          { status: 500 }
        )
      } catch (initError) {
        console.error("Failed to initialize database:", initError)
      }
    }
    
    return NextResponse.json(
      { ok: false, error: "Failed to process request" },
      { status: 500 }
    )
  }
}

