"use server"

import { z } from "zod"

const emailSchema = z.string().email({
  message: "Prosím, zadajte platný email.",
})

export async function subscribeEmail(formData: FormData) {
  const email = formData.get("email") as string

  try {
    // Validácia emailu
    emailSchema.parse(email)

    // Tu by bola implementácia uloženia emailu do databázy
    // Napríklad s použitím Prisma, Supabase, alebo iného riešenia

    // Simulácia oneskorenia
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Email bol úspešne zaregistrovaný." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }

    return { success: false, message: "Nastala chyba pri registrácii emailu." }
  }
}

