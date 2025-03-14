import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function AboutDeveloper() {
  return (
    <section className="py-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">O vývojárovi</h2>
        <p className="mb-6 text-muted-foreground">
          Aplikáciu SCHPRT vytvorila spoločnosť INTERFASE - tím skúsených vývojárov a dizajnérov, ktorí sa špecializujú
          na tvorbu inovatívnych vzdelávacích riešení.
        </p>
        <Button variant="outline" asChild>
          <a href="https://interfase.sk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Navštíviť INTERFASE.sk
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}

