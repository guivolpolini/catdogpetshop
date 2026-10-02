"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQS, getWhatsAppLink } from "@/lib/constants";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#D5E6F3]/30 relative border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#EA534A] bg-[#EA534A]/10 px-3.5 py-1 rounded-full">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96]">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4F4F4F]">
            Transparência e segurança em cada detalhe do atendimento ao seu pet na Alameda São Caetano.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-stone-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 font-sans font-bold text-base sm:text-lg text-[#4F2D96] hover:text-[#EA534A] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#EA534A]/15 text-[#EA534A]" : "text-stone-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#4F4F4F] leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#4F4F4F] mb-3">
            Tem alguma pergunta específica sobre a raça ou condição do seu companheiro?
          </p>
          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre o banho e tosa para o meu pet.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#EA534A] hover:underline transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar diretamente com nossos profissionais no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
