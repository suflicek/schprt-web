"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type LanguageContextType = {
  language: "sk" | "en"
  setLanguage: (lang: "sk" | "en") => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "sk",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"sk" | "en">("sk")

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

