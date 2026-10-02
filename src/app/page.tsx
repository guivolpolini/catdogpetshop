import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { BookingSection } from "@/components/sections/BookingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero com vídeo fullscreen */}
      <Hero />

      {/* 2. Nossos Serviços (Banho & Tosa, Tosa Higiênica, Loja de Produtos) */}
      <Services />

      {/* 3. Sobre Nós */}
      <AboutUs />

      {/* 4. Conheça Nosso Espaço (Fotos reais da loja física) */}
      <Gallery />

      {/* 5. Avaliações Reais do Google */}
      <Reviews />

      {/* 6. Sistema de Agendamento Simples de Banho e Tosa */}
      <BookingSection />

      {/* 7. Dúvidas Frequentes */}
      <FAQSection />
    </>
  );
}
