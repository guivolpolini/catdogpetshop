import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ExperienceStep } from "@/components/sections/ExperienceStep";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero com banner lovepet oficial */}
      <Hero />

      {/* 2. Nossos Serviços (4 cards: Banho e Tosa, Creche, Hotel, Veterinário) */}
      <Services />

      {/* 3. Sobre Nós (Mais do que um petshop...) */}
      <AboutUs />

      {/* 4. O que o Seu Pet Precisa? (6 caixas de ícones) */}
      <WhyChooseUs />

      {/* 5. A Cat & Dog Existe a Mais de 10 Anos (Foto + Missão e Visão) */}
      <ExperienceStep />

      {/* 6. Conheça Nosso Espaço (2 caixas com fotos) */}
      <Gallery />

      {/* 7. Meu Pet Está em Boas Mãos (Mascote + Avaliações Google Trustindex) */}
      <Reviews />

      {/* 8. Destaque Duplo (Banho & Tosa e Veterinário) */}
      <InstagramSection />

      {/* 9. Sistema de Agendamento Integrado Online */}
      <BookingSection />

      {/* 10. Dúvidas Frequentes */}
      <FAQSection />
    </>
  );
}
