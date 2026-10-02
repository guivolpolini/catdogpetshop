"use client";

import { MessageCircle, Calendar } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-[620px] sm:min-h-[750px] flex items-center justify-start text-center pt-20 sm:pt-28 pb-48 sm:pb-60 px-4 sm:px-6 lg:px-8 bg-[#EA534A] overflow-hidden"
      style={{
        backgroundImage: 'url("https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/banner-lovepet.png")',
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 z-10">
        
        {/* Main Heading in Young Serif */}
        <h1 className="font-young text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
          Seu melhor amigo merece mais que ração. Ele merece carinho, cuidado e muito amor!
        </h1>

        {/* Subtitle in Poppins */}
        <p className="font-sans text-base sm:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-sm font-normal">
          Na <strong>Cat &amp; Dog Pet Shop</strong>, seu pet é tratado como parte da família — com produtos selecionados, atendimento humanizado e tudo o que ele precisa para viver feliz e saudável.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com um atendente da Cat & Dog Pet Shop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-[#FF584E] hover:bg-[#ff6d64] text-white font-bold text-base border border-[#FF7169] shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all elementor-animation-pulse hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Falar com um Atendente</span>
          </a>

          <a
            href="#agendamento"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-[#4F2D96] hover:bg-[#5f39b3] text-white font-bold text-base shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Horário Online</span>
          </a>
        </div>

      </div>
    </section>
  );
}
