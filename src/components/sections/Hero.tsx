"use client";

import { MessageCircle, Calendar } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#EA534A] overflow-hidden"
      style={{
        minHeight: "520px",
        paddingTop: "80px",
        paddingBottom: "180px",
        backgroundImage: 'url("https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/banner-lovepet.png")',
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-[#EA534A]/40 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-5">

        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
          Alameda São Caetano, 2493 · São Caetano do Sul
        </span>

        {/* Heading — compact */}
        <h1 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow">
          Banho, Tosa e Muito Carinho para o Seu Pet
        </h1>

        {/* Short subtitle */}
        <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-lg mx-auto">
          Atendimento humanizado, cosméticos hipoalergênicos e toalhas esterilizadas. Agende agora!
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#agendamento"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4F2D96] hover:bg-[#5f39b3] text-white font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
          </a>

          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com um atendente da Cat & Dog Pet Shop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/50 text-white font-bold text-sm shadow transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
