"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} INTERFASE. {language === "sk" ? "Všetky práva vyhradené." : "All rights reserved."}
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
          <Link href="/ochrana-osobnych-udajov" className="text-sm text-gray-400 hover:text-white transition-colors">
            {language === "sk" ? "Ochrana osobných údajov" : "Privacy Policy"}
          </Link>
          <Link href="/podmienky-pouzivania" className="text-sm text-gray-400 hover:text-white transition-colors">
            {language === "sk" ? "Podmienky používania" : "Terms of Use"}
          </Link>
          <a
            href="https://interfase.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            interfase.sk
          </a>
        </div>
      </div>
    </footer>
  )
}

