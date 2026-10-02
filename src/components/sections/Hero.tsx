"use client";

import { MessageCircle, Calendar, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#180A28] lg:min-h-[calc(100svh-5rem)] flex flex-col lg:flex-row items-center justify-center"
      aria-label="Seção principal"
    >
      {/* ── 1. VÍDEO DO CACHORRO ── */}
      {/* No DESKTOP: Fullscreen background absoluto atrás do texto com overlay horizontal */}
      {/* No MOBILE: Ocupa a parte de baixo (order-2), visível abaixo dos botões sem cobrir o texto */}
      <div
        className="
          order-2 lg:order-none
          relative lg:absolute lg:inset-0
          w-full h-64 sm:h-80 lg:h-full
          pointer-events-none overflow-hidden z-0
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/dog-running.mp4" type="video/mp4" />
        </video>

        {/* Overlay no Desktop: gradiente escuro à esquerda para legibilidade impecável */}
        <div
          className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(24, 10, 40, 0.92) 0%, rgba(24, 10, 40, 0.82) 36%, rgba(24, 10, 40, 0.45) 62%, rgba(24, 10, 40, 0.15) 100%), linear-gradient(to top, rgba(24, 10, 40, 0.5) 0%, transparent 25%), linear-gradient(to bottom, rgba(24, 10, 40, 0.4) 0%, transparent 25%)",
          }}
        />

        {/* Overlay no Mobile: fade superior e inferior para integrar suavemente com o background */}
        <div
          className="block lg:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #180A28 0%, transparent 25%, transparent 75%, #180A28 100%)",
          }}
        />
      </div>

      {/* ── 2. CONTEÚDO DO HERO (TEXTO, BOTÕES E AVALIAÇÃO) ── */}
      <div className="order-1 lg:order-none relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:py-14 lg:py-20">
        <div className="w-full max-w-[580px] flex flex-col items-start text-left space-y-5 sm:space-y-6">

          {/* Endereço / Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#EA534A] animate-pulse" />
            Alameda São Caetano, 2493 · São Caetano do Sul
          </span>

          {/* Título Principal */}
          <h1 className="font-young text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] drop-shadow-md">
            Seu melhor amigo merece mais que ração.{" "}
            <span className="text-[#FF8D85]">
              Ele merece carinho, cuidado e muito amor!
            </span>
          </h1>

          {/* Texto de Apoio */}
          <p className="font-sans text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal">
            Na <strong className="text-white font-semibold">Cat &amp; Dog Pet Shop</strong>, seu pet é tratado como parte da família — com cosméticos hipoalergênicos, toalhas esterilizadas e atendimento humanizado.
          </p>

          {/* CTAs de Conversão */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#4F2D96] hover:bg-[#5f39b3] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(79,45,150,0.5)] transition-all hover:scale-105 active:scale-95 border border-purple-400/30 text-center"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Agendar Horário</span>
            </a>

            <a
              href={getWhatsAppLink("Olá! Gostaria de falar com um atendente da Cat & Dog Pet Shop.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm sm:text-base backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Prova Social / Avaliação Google */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.6</span>
            <span className="text-stone-300 text-xs sm:text-sm">
              · 56 avaliações reais no Google
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
