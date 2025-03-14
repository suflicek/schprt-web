import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PodmienkyPouzivania() {
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
          <h1 className="text-3xl font-bold mb-8">Podmienky používania</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Prijatie podmienok</h2>
              <p>
                Používaním webovej stránky schprt.sk a aplikácie SCHPRT (ďalej len "Služby") prevádzkovaných
                spoločnosťou INTERFASE, s.r.o. (ďalej len "INTERFASE") súhlasíte s týmito podmienkami používania. Ak s
                týmito podmienkami nesúhlasíte, prosím, nepoužívajte naše Služby.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Popis služieb</h2>
              <p>
                SCHPRT je vzdelávacia aplikácia, ktorá pomáha študentom pripraviť sa na maturitné skúšky, prijímacie
                skúšky na stredné školy a Monitor 9. Poskytuje prístup k oficiálnym testom, personalizované odporúčania
                a AI asistenta pre individuálnu pomoc.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Registrácia a účty</h2>
              <p>
                Pri registrácii do našich Služieb sa zaväzujete poskytnúť presné a úplné informácie. Ste zodpovední za
                zachovanie bezpečnosti vášho účtu a hesla. INTERFASE nemôže a nebude zodpovedný za akékoľvek straty
                alebo škody vyplývajúce z vášho nedodržania tejto bezpečnostnej povinnosti.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Používanie služieb</h2>
              <p>
                Súhlasíte s tým, že nebudete používať naše Služby na žiadne nezákonné alebo zakázané účely. Zaväzujete
                sa dodržiavať všetky zákony, pravidlá a predpisy týkajúce sa vášho používania Služieb.
              </p>
              <p className="mt-2">
                INTERFASE si vyhradzuje právo kedykoľvek a z akéhokoľvek dôvodu ukončiť alebo pozastaviť váš prístup k
                Službám bez predchádzajúceho upozornenia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Duševné vlastníctvo</h2>
              <p>
                Všetok obsah, ktorý je súčasťou našich Služieb, vrátane textov, grafiky, log, ikon, obrázkov, zvukových
                klipov, digitálnych stiahnutí a softvéru, je vlastníctvom INTERFASE alebo jeho poskytovateľov obsahu a
                je chránený zákonmi o autorských právach.
              </p>
              <p className="mt-2">
                Súhlasíte s tým, že nebudete kopírovať, upravovať, distribuovať, predávať alebo prenajímať akúkoľvek
                časť našich Služieb alebo obsahu bez výslovného písomného súhlasu INTERFASE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Obmedzenie zodpovednosti</h2>
              <p>
                INTERFASE poskytuje Služby "tak, ako sú" a "ako sú dostupné" bez akýchkoľvek záruk. V maximálnom rozsahu
                povolenom zákonom INTERFASE vylučuje všetky záruky, výslovné alebo implicitné, vrátane, ale nie výlučne,
                implicitných záruk obchodovateľnosti, vhodnosti na konkrétny účel a neporušenia práv.
              </p>
              <p className="mt-2">
                INTERFASE nebude zodpovedný za žiadne nepriame, náhodné, špeciálne, následné alebo exemplárne škody,
                vrátane straty zisku, dát alebo dobrej povesti, vyplývajúce z vášho používania alebo neschopnosti
                používať Služby.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Zmeny podmienok</h2>
              <p>
                INTERFASE si vyhradzuje právo kedykoľvek zmeniť tieto podmienky používania. Aktualizované podmienky budú
                zverejnené na tejto stránke. Vaše pokračujúce používanie Služieb po zverejnení akýchkoľvek zmien bude
                znamenať váš súhlas s novými podmienkami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Rozhodné právo</h2>
              <p>
                Tieto podmienky sa riadia a vykladajú v súlade so zákonmi Slovenskej republiky bez ohľadu na jej kolízne
                normy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Kontaktujte nás</h2>
              <p>
                Ak máte akékoľvek otázky týkajúce sa týchto podmienok používania, kontaktujte nás na adrese:
                info@interfase.sk
              </p>
            </section>

            <p className="pt-6">Posledná aktualizácia: Marec 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

