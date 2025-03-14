import Header from "@/components/header"
import Hero from "@/components/hero"
import EmailForm from "@/components/email-form"
import Features from "@/components/features"
import AboutDeveloper from "@/components/about-developer"
import Countdown from "@/components/countdown"
import Screenshots from "@/components/screenshots"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"
import InstagramFollow from "@/components/instagram-follow"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>

        <Header />

        <main className="py-8">
          <Countdown />
          <Hero />
          <EmailForm />
          <Features />
          <Screenshots />
          <InstagramFollow />
          <Faq />
          <AboutDeveloper />
        </main>

        <Footer />
      </div>
    </div>
  )
}

