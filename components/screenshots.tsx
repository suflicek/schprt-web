"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function Screenshots() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const screenshots = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/911_1x_shots_so-aTQuG4zqQeneIhGgwLw93Uo9Ug8O69.png",
      alt: language === "sk" ? "SCHPRT AI Asistent" : "SCHPRT AI Assistant",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/738_1x_shots_so-lQbfktgeTIZMBIt0rNeere13ytXjTB.png",
      alt: language === "sk" ? "SCHPRT Prehľad predmetov" : "SCHPRT Subjects Overview",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/343_1x_shots_so-9suqjJtPNQbJuPho0RdESyQaBb7XLg.png",
      alt: language === "sk" ? "SCHPRT Kontrola odpovedí" : "SCHPRT Answer Review",
    },
  ]

  // Handle scroll to update active index
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      if (!scrollContainer) return

      const containerWidth = scrollContainer.clientWidth
      const scrollPosition = scrollContainer.scrollLeft
      const newIndex = Math.round(scrollPosition / (containerWidth * 0.7))

      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < screenshots.length) {
        setActiveIndex(newIndex)
      }
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [activeIndex, screenshots.length])

  // Function to scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return

    const slideWidth = 280 + 16 // slide width + gap
    const newPosition = index * slideWidth

    scrollContainerRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {language === "sk" ? "Ukážky aplikácie" : "App Screenshots"}
      </h2>

      {/* Desktop view - grid layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {screenshots.map((screenshot) => (
          <Card
            key={screenshot.id}
            className="overflow-hidden border-secondary bg-secondary/30 backdrop-blur-sm flex items-center justify-center"
          >
            <CardContent className="p-0">
              <img
                src={screenshot.src || "/placeholder.svg"}
                alt={screenshot.alt}
                className="w-auto h-auto max-h-[600px]"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile view - horizontal scroll with peek */}
      <div className="md:hidden relative">
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
          <div
            className="flex gap-4 px-4"
            style={{
              paddingLeft: "calc(50% - 140px)",
              paddingRight: "calc(50% - 140px)",
              width: "max-content",
            }}
          >
            {screenshots.map((screenshot, index) => (
              <div key={screenshot.id} className="flex-none w-[280px] snap-center">
                <Card className="overflow-hidden border-secondary bg-secondary/30 backdrop-blur-sm flex items-center justify-center">
                  <CardContent className="p-0">
                    <img
                      src={screenshot.src || "/placeholder.svg"}
                      alt={screenshot.alt}
                      className="w-auto h-auto max-h-[500px]"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-primary" : "w-3 bg-secondary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

