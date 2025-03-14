"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { subscribeToWaitlist } from "@/app/actions"
import { z } from "zod"

const emailSchema = z.string().email({
  message: "Prosím, zadajte platný email.",
})

export default function EmailForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const { language } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      emailSchema.parse(email)
      setIsLoading(true)

      // Create FormData
      const formData = new FormData()
      formData.append("email", email)
      formData.append("language", language)

      // Use the server action
      const result = await subscribeToWaitlist(formData)

      if (!result.success) {
        setError(result.message)
        return
      }

      setSuccess(result.message)

      toast({
        title: language === "sk" ? "Úspešne zaregistrované!" : "Successfully registered!",
        description:
          language === "sk"
            ? "Budeme vás informovať, keď bude aplikácia spustená."
            : "We will notify you when the app is launched.",
      })

      setEmail("")
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message)
      } else {
        console.error("Error submitting email:", err)
        setError(
          language === "sk"
            ? "Nastala chyba pri odosielaní. Skúste to znova."
            : "An error occurred while submitting. Please try again.",
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-12">
      <Card className="max-w-md mx-auto border-secondary bg-secondary/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">
            {language === "sk"
              ? "Buď medzi prvými, ktorí sa dozvedia o spustení"
              : "Be among the first to know about the launch"}
          </CardTitle>
          <CardDescription>
            {language === "sk"
              ? "Zadajte svoj email a my vám dáme vedieť, keď bude aplikácia pripravená."
              : "Enter your email and we will let you know when the app is ready."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder={language === "sk" ? "tvoj@email.sk" : "your@email.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50"
              />
              {error && <p className="text-destructive text-sm mt-1">{error}</p>}
            </div>
            <Button type="submit" className="w-full transition-all hover:scale-105" disabled={isLoading}>
              {isLoading
                ? language === "sk"
                  ? "Spracovávam..."
                  : "Processing..."
                : language === "sk"
                  ? "Upozorniť ma"
                  : "Notify me"}
            </Button>
            {success && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md">
                <p className="text-sm text-green-400">{success}</p>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center pt-2">
              {language === "sk"
                ? "Žiadny spam, sľubujeme. Len jedno oznámenie, keď bude aplikácia pripravená."
                : "No spam, we promise. Just one notification when the app is ready."}
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

