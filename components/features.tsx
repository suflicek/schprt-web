import { Book, Bot, BarChart3, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Oficiálne testy",
    description: "Prístup k oficiálnym testom od roku 2010 pre všetky hlavné predmety.",
    icon: Book,
  },
  {
    title: "AI asistent",
    description: "Inteligentný asistent, ktorý ti pomôže s individuálnymi otázkami a vysvetleniami.",
    icon: Bot,
  },
  {
    title: "Personalizované štúdium",
    description: "Analýza tvojich výsledkov a personalizované odporúčania pre efektívne štúdium.",
    icon: BarChart3,
  },
  {
    title: "Dostupné kedykoľvek",
    description: "Prístup k aplikácii kedykoľvek a kdekoľvek - na mobile, tablete alebo počítači.",
    icon: Smartphone,
  },
]

export default function Features() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Hlavné funkcie aplikácie</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-gray-700 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all"
          >
            <CardHeader className="pb-2">
              <feature.icon className="h-10 w-10 text-white mb-2" />
              <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

