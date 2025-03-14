import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "SCHPRT - Maturita, prijímačky a monitor vo vačku",
  description:
    "SCHPRT - inteligentná aplikácia pre prípravu na maturitu, prijímačky a Monitor 9. Prístup k oficiálnym testom od roku 2010, AI asistent a personalizované odporúčania.",
  keywords:
    "maturita, prijímačky, monitor 9, príprava na skúšky, vzdelávacia aplikácia, AI asistent, študijné materiály",
  authors: [{ name: "INTERFASE" }],
  creator: "INTERFASE",
  publisher: "INTERFASE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://schprt.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "sk-SK": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "SCHPRT - Maturita, prijímačky a monitor vo vačku",
    description:
      "Inteligentná aplikácia pre prípravu na maturitu, prijímačky a Monitor 9 s AI asistentom a personalizovanými odporúčaniami.",
    url: "https://schprt.com",
    siteName: "SCHPRT",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Icon-GRYNy8V2pUbkQ3nOkXThUlgah7r6IE.png",
        width: 1200,
        height: 630,
        alt: "SCHPRT Logo",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCHPRT - Maturita, prijímačky a monitor vo vačku",
    description: "Inteligentná aplikácia pre prípravu na maturitu, prijímačky a Monitor 9",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Icon-GRYNy8V2pUbkQ3nOkXThUlgah7r6IE.png"],
    creator: "@interfase",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className="dark">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Icon-W99yVFqxTJco8v2a9rpyGAkec4Ksji.png"
          type="image/png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Icon-W99yVFqxTJco8v2a9rpyGAkec4Ksji.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'