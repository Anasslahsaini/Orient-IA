import { content } from "@/data/content";
import { AccordionItem } from "@/components/ui/accordion";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-slate-600">
            Tout ce que vous devez savoir pour démarrer.
          </p>
        </div>

        <div className="space-y-2">
          {content.faq.map((item, idx) => (
            <AccordionItem
              key={idx}
              title={item.question}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <p className="leading-relaxed">
                {item.answer}
              </p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
