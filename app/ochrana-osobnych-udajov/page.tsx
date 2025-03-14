import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function OchranaOsobnychUdajov() {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="flex items-center gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Späť na hlavnú stránku
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Ochrana osobných údajov</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Úvod</h2>
              <p>
                Spoločnosť INTERFASE, s.r.o. (ďalej len "INTERFASE") prevádzkuje aplikáciu SCHPRT a webovú stránku
                schprt.sk. Ochrana vašich osobných údajov je pre nás dôležitá. Táto politika ochrany osobných údajov
                vysvetľuje, aké informácie zhromažďujeme, ako ich používame a ako ich chránime.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Aké údaje zhromažďujeme</h2>
              <p>Pri používaní našej webovej stránky a aplikácie SCHPRT môžeme zhromažďovať nasledujúce údaje:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Kontaktné údaje (napr. e-mailová adresa)</li>
                <li>Údaje o používaní (napr. ako používate našu aplikáciu)</li>
                <li>Technické údaje (napr. IP adresa, typ zariadenia)</li>
                <li>Údaje o výkone v testoch a štúdiu (v rámci aplikácie)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Ako používame vaše údaje</h2>
              <p>Vaše údaje používame na nasledujúce účely:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Poskytovanie a zlepšovanie našich služieb</li>
                <li>Komunikácia s vami ohľadom našich služieb</li>
                <li>Personalizácia vašej skúsenosti s aplikáciou</li>
                <li>Analýza používania našich služieb</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Zdieľanie údajov</h2>
              <p>Vaše osobné údaje nezdieľame s tretími stranami, okrem nasledujúcich prípadov:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>S vašim súhlasom</li>
                <li>S poskytovateľmi služieb, ktorí nám pomáhajú prevádzkovať naše služby</li>
                <li>Ak to vyžaduje zákon</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Bezpečnosť údajov</h2>
              <p>
                Implementujeme primerané bezpečnostné opatrenia na ochranu vašich osobných údajov pred neoprávneným
                prístupom, zmenou, zverejnením alebo zničením. Tieto opatrenia zahŕňajú interné kontroly našich postupov
                zhromažďovania, uchovávania a spracovania údajov.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Vaše práva</h2>
              <p>Podľa platných zákonov o ochrane údajov máte právo:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Požiadať o prístup k vašim osobným údajom</li>
                <li>Požiadať o opravu alebo vymazanie vašich osobných údajov</li>
                <li>Namietať proti spracovaniu vašich osobných údajov</li>
                <li>Požiadať o obmedzenie spracovania vašich osobných údajov</li>
                <li>Požiadať o prenos vašich osobných údajov</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
              <p>
                Naša webová stránka používa cookies na zlepšenie vašej skúsenosti. Cookies sú malé textové súbory, ktoré
                sa ukladajú vo vašom prehliadači. Môžete nastaviť svoj prehliadač tak, aby odmietol všetky alebo
                niektoré cookies, alebo vás upozornil, keď webové stránky nastavujú alebo pristupujú k cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Zmeny v politike ochrany osobných údajov</h2>
              <p>
                Túto politiku ochrany osobných údajov môžeme z času na čas aktualizovať. Akékoľvek zmeny budú zverejnené
                na tejto stránke. Odporúčame vám pravidelne kontrolovať túto stránku, aby ste boli informovaní o
                akýchkoľvek zmenách.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Kontaktujte nás</h2>
              <p>
                Ak máte akékoľvek otázky týkajúce sa tejto politiky ochrany osobných údajov alebo spracovania vašich
                osobných údajov, kontaktujte nás na adrese: info@interfase.sk
              </p>
            </section>

            <p className="pt-6">Posledná aktualizácia: Marec 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

