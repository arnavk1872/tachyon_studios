import { NextRequest, NextResponse } from "next/server"
import { initDatabase, saveWaitlistEmail } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    await initDatabase()

    const data = await request.json()

    if (!data.email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      )
    }

    const waitlistId = await saveWaitlistEmail(data.email)

    if (waitlistId === null) {
      return NextResponse.json({ ok: true, message: "Email already registered" })
    }

    console.log(`Waitlist email saved to database with ID: ${waitlistId}`)

    return NextResponse.json({ ok: true, id: waitlistId })
  } catch (error: any) {
    console.error("Error processing waitlist request:", error)
    
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

