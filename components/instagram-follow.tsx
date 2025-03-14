"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function InstagramFollow() {
  const { language } = useLanguage()

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        {language === "sk" ? "Sledujte nás na Instagrame" : "Follow us on Instagram"}
      </h2>

      <div className="max-w-2xl mx-auto">
        <Card className="border-gray-700 bg-gray-800/30 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Icon-GRYNy8V2pUbkQ3nOkXThUlgah7r6IE.png"
                  alt="SCHPRT Instagram"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-white">@schprtapp</h3>
                <p className="text-gray-300 mb-6">
                  {language === "sk"
                    ? "Sledujte náš Instagram pre najnovšie aktualizácie, tipy na štúdium a oznámenia o spustení aplikácie."
                    : "Follow our Instagram for the latest updates, study tips, and app launch announcements."}
                </p>

                <Button asChild className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600">
                  <a href="https://instagram.com/schprtapp" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    {language === "sk" ? "Sledovať na Instagrame" : "Follow on Instagram"}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

