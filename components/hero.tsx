"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { language } = useLanguage()

  return (
    <section className="py-12 md:py-20 text-center animate-slide-up">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
        {language === "sk" ? "Pripravujeme niečo výnimočné" : "We are preparing something special"}
      </h2>
      <h3 className="text-xl md:text-2xl font-medium mb-6 text-white">
        {language === "sk"
          ? "SCHPRT - Maturita, prijímačky a monitor vo vačku (doslova)"
          : "SCHPRT - Final exams, entrance tests and Monitor 9 in your pocket (literally)"}
      </h3>
      <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        {language === "sk"
          ? "SCHPRT ti poskytne prístup k oficiálnym testom od roku 2010, inteligentné vyhodnocovanie a personalizované odporúčania pre tvoje štúdium. Náš AI asistent ti pomôže s individuálnymi otázkami a aplikácia je dostupná pre všetky hlavné predmety."
          : "SCHPRT provides access to official tests since 2010, intelligent evaluation, and personalized recommendations for your studies. Our AI assistant will help you with individual questions, and the app is available for all main subjects."}
      </p>
    </section>
  )
}

