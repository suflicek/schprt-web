"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

// Nastavenie dátumu spustenia na začiatok školského roka 2025/2026 (1. september 2025)
const launchDate = new Date("2025-09-01T00:00:00")

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { language } = useLanguage()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const getUnitLabel = (unit: string, value: number) => {
    if (language === "en") {
      return unit === "days"
        ? value === 1
          ? "day"
          : "days"
        : unit === "hours"
          ? value === 1
            ? "hour"
            : "hours"
          : unit === "minutes"
            ? value === 1
              ? "minute"
              : "minutes"
            : value === 1
              ? "second"
              : "seconds"
    } else {
      return unit === "days" ? "dní" : unit === "hours" ? "hodín" : unit === "minutes" ? "minút" : "sekúnd"
    }
  }

  return (
    <section className="py-6 mb-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
          {language === "sk" ? "Spustenie aplikácie o:" : "App launch in:"}
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <Card
            key={unit}
            className="border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-gray-700/10 transition-all"
          >
            <CardContent className="p-4 text-center">
              <div className="text-3xl md:text-5xl font-bold text-white">{value}</div>
              <div className="text-xs md:text-sm text-gray-300 capitalize">{getUnitLabel(unit, value)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

