"use server"

import { z } from "zod"
import { supabase } from "@/lib/supabase"

const emailSchema = z.string().email({
  message: "Prosím, zadajte platný email.",
})

export async function subscribeToWaitlist(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const language = (formData.get("language") as string) || "sk"

    // Validate email
    emailSchema.parse(email)

    // Insert into Supabase
    const { error } = await supabase.from("waitlist").insert([{ email, language }])

    if (error) {
      // Handle unique constraint violation
      if (error.code === "23505") {
        return {
          success: false,
          message: language === "sk" ? "Tento email je už zaregistrovaný." : "This email is already registered.",
        }
      }
      throw error
    }

    return {
      success: true,
      message:
        language === "sk"
          ? "Email bol úspešne zaregistrovaný! Budeme vás informovať, keď bude aplikácia spustená."
          : "Email was successfully registered! We will notify you when the app is launched.",
    }
  } catch (err) {
    console.error("Error submitting email:", err)
    if (err instanceof z.ZodError) {
      return { success: false, message: err.errors[0].message }
    }

    return {
      success: false,
      message: "Nastala chyba pri odosielaní. Skúste to znova.",
    }
  }
}

