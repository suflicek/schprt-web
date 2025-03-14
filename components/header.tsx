"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const { language } = useLanguage()

  return (
    <header className="py-6 animate-fade-in">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-4xl font-bold tracking-tight text-white">SCHPRT</h1>
          <span className="text-3xl" aria-hidden="true">
            🤓
          </span>
        </div>
        <p className="text-lg text-white flex items-center gap-1">
          <Sparkles className="h-4 w-4" />
          {language === "sk"
            ? "Maturita, prijímačky a monitor vo vačku (doslova)"
            : "Final exams, entrance tests and Monitor 9 in your pocket (literally)"}
          <Sparkles className="h-4 w-4" />
        </p>
      </div>
    </header>
  )
}

