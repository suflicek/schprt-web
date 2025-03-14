"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { z } from "zod"
import { useLanguage } from "@/contexts/language-context"

const emailSchema = z.string().email({
  message: "Prosím, zadajte platný email.",
})

export default function EmailFormWithApi() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { language } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      emailSchema.parse(email)

      setIsLoading(true)

      // Odoslanie emailu cez API route
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, language }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(
          data.message ||
            (language === "sk"
              ? "Nastala chyba pri odosielaní. Skúste to znova."
              : "An error occurred while submitting. Please try again."),
        )
        return
      }

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

