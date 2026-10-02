"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export function Services() {
  const serviceCards = [
    {
      title: "Banho & Tosa",
      description: "Agendar agora",
      image: "https://descomplicandosite.com/petshop/wp-content/uploads/2025/03/Design-sem-nome-46.png",
      href: "#agendamento",
    },
    {
      title: "Tosa Higiênica",
      description: "Saiba mais",
      image: "https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/LovePet-5.png",
      href: "#agendamento",
    },
    {
      title: "Loja de Produtos",
      description: "Ver produtos",
      image: "/images/loja-prateleiras-cat-dog.png",
      href: getWhatsAppLink("Olá! Gostaria de saber mais sobre os produtos disponíveis na Cat & Dog Pet Shop."),
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96]">
            Nossos Serviços
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
            Na <strong>Cat &amp; Dog Pet Shop</strong>, seu pet sai lindo, cheiroso e feliz. Banho, tosa e uma loja completa de produtos — tudo em um só lugar na Alameda São Caetano.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {serviceCards.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
            >
              <a
                href={service.href}
                className="block relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </a>

              <h3 className="font-sans text-xl font-bold text-[#4F2D96] group-hover:text-[#EA534A] transition-colors pt-1">
                <a href={service.href}>{service.title}</a>
              </h3>

              <a
                href={service.href}
                className="text-sm font-medium text-[#4F4F4F] hover:text-[#EA534A] transition-colors"
              >
                {service.description}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
