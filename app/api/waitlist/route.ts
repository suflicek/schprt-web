import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  language: z.enum(["sk", "en"]).default("sk"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, language } = schema.parse(body)

    const { data, error } = await supabase.from("waitlist").insert([{ email, language }]).select()

    if (error) {
      // Handle unique constraint violation
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message: language === "sk" ? "Tento email je už zaregistrovaný" : "This email is already registered",
          },
          { status: 400 },
        )
      }
      throw error
    }

    return NextResponse.json({
      success: true,
      message: language === "sk" ? "Email bol úspešne zaregistrovaný" : "Email was successfully registered",
    })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register email",
      },
      { status: 400 },
    )
  }
}

