import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Kedy bude aplikácia SCHPRT dostupná?",
    questionEn: "When will the SCHPRT app be available?",
    answer:
      "Aplikácia SCHPRT bude dostupná v priebehu najbližších mesiacov. Ak chcete byť informovaní o presnom dátume spustenia, zaregistrujte sa prostredníctvom formulára na tejto stránke.",
    answerEn:
      "The SCHPRT app will be available in the coming months. If you want to be informed about the exact launch date, please register through the form on this page.",
  },
  {
    question: "Pre aké predmety bude aplikácia dostupná?",
    questionEn: "Which subjects will be available in the app?",
    answer:
      "Aplikácia SCHPRT bude dostupná pre všetky hlavné predmety maturitných skúšok, prijímacích skúšok na stredné školy a Monitoru 9, vrátane slovenského jazyka a literatúry, matematiky, anglického jazyka a ďalších.",
    answerEn:
      "The SCHPRT app will be available for all main subjects of graduation exams, high school entrance exams, and Monitor 9, including Slovak language and literature, mathematics, English language, and others.",
  },
  {
    question: "Na akých zariadeniach bude aplikácia fungovať?",
    questionEn: "On which devices will the app work?",
    answer:
      "Aplikácia SCHPRT bude dostupná na mobilných zariadeniach (iOS a Android) a tiež ako webová aplikácia prístupná z akéhokoľvek prehliadača na počítači alebo tablete.",
    answerEn:
      "The SCHPRT app will be available on mobile devices (iOS and Android) and also as a web application accessible from any browser on computer or tablet.",
  },
]

export default function Faq({ lang = "sk" }: { lang?: "sk" | "en" }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {lang === "sk" ? "Často kladené otázky" : "Frequently Asked Questions"}
      </h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {lang === "sk" ? item.question : item.questionEn}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {lang === "sk" ? item.answer : item.answerEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

