"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

export function Services() {
  const serviceCards = [
    {
      title: "Banho e Tosa",
      description: "Saiba mais",
      image: "https://descomplicandosite.com/petshop/wp-content/uploads/2025/03/Design-sem-nome-46.png",
      href: "#agendamento",
    },
    {
      title: "Creche",
      description: "Saiba mais",
      image: "https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/Design-sem-nome-2025-04-03T094426.429.png",
      href: getWhatsAppLink("Olá! Gostaria de informações sobre o serviço de creche na Cat & Dog Pet Shop."),
    },
    {
      title: "Hotel",
      description: "Saiba mais",
      image: "https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/Design-sem-nome-2025-04-03T094737.425.png",
      href: getWhatsAppLink("Olá! Gostaria de informações sobre a hospedagem/hotel na Cat & Dog Pet Shop."),
    },
    {
      title: "Veterinário",
      description: "Saiba mais",
      image: "https://descomplicandosite.com/petshop/wp-content/uploads/2025/03/Design-sem-nome-47.png",
      href: getWhatsAppLink("Olá! Gostaria de consultar atendimento veterinário na Cat & Dog Pet Shop."),
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
            Na <strong>Cat &amp; Dog Pet Shop</strong>, oferecemos tudo o que seu companheiro de quatro patas precisa para viver com saúde, alegria e bem-estar. Com uma equipe apaixonada por animais e um ambiente seguro e acolhedor, garantimos um atendimento completo e cheio de amor.
          </p>
        </div>

        {/* 4 Cards Grid Exactly Like Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
