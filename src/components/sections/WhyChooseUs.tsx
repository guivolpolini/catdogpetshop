import { getWhatsAppLink } from "@/lib/constants";

export function WhyChooseUs() {
  const items = [
    {
      title: "Consultas e Avaliação de Pelagem",
      desc: "Avaliação completa e personalizada para cães e gatos no conforto e tranquilidade do nosso espaço.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="m133.711 313.721v-.443c-.717-23.325-18.656-35.529-36-35.529h-.007c-17.348 0-35.28 12.2-36 35.972.717 23.325 18.656 35.529 36 35.529h.007c17.344 0 35.276-12.204 36-35.529zm-57.606 0c.458-14.9 11.181-21.57 21.6-21.57 10.372 0 21.039 6.6 21.6 21.349-.556 14.746-11.223 21.349-21.595 21.349-10.431 0-21.147-6.67-21.605-21.128zm21.6 150.993a7.206 7.206 0 0 0 5.71-2.809c2.995-3.9 73.5-96.151 73.5-148.4 0-.1 0-.19-.007-.285-2.13-53.96-42.55-78.54-79.193-78.543h-.007c-36.644 0-77.063 24.58-79.208 78.828 0 52.151 70.5 144.495 73.5 148.395a7.206 7.206 0 0 0 5.708 2.814zm0-215.641c29.949 0 62.978 20.21 64.806 64.567-.113 39.316-48.035 108.7-64.806 131.779-16.79-23.119-64.805-92.657-64.811-131.635 1.765-44.462 34.836-64.711 64.814-64.711z" />
        </svg>
      ),
    },
    {
      title: "Aplicação de Medicamentos",
      desc: "Administração de medicamentos via oral, injetável ou tópico no ambiente mais confortável para o pet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="m452.021 399.437c4.723-19.249-.418-40.444-15.426-55.453-19.204-19.204-48.537-22.249-70.96-9.148v-121.892c0-10.853-4.696-21.164-12.884-28.29l-68.619-59.709v-19.372h13.534c12.407 0 22.5-10.094 22.5-22.5v-45.573c0-20.678-16.822-37.5-37.5-37.5h-175.615c-20.678 0-37.5 16.822-37.5 37.5v45.573c0 12.406 10.093 22.5 22.5 22.5h13.533v19.372l-68.619 59.71c-8.187 7.125-12.883 17.437-12.883 28.289v241.556c0 20.678 16.822 37.5 37.5 37.5h61.179" />
        </svg>
      ),
    },
    {
      title: "Aplicação de Vacinas",
      desc: "Imunização segura e atualizada: V10 para cães e V3 para gatos, além da vacina contra a raiva.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 128 128" width="36" className="fill-[#4F2D96]">
          <path d="m17.107 88.6c-2.209-.163-3.9 2.2-5.312 3.532a4.3 4.3 0 0 0 0 6.085l15.779 15.783a4.318 4.318 0 0 0 6.085 0l2.271-2.27a4.319 4.319 0 0 0 0-6.086l-1.243-1.244 3.735-3.735 5.042 5.042a5.9 5.9 0 0 0 8.514-8.159l40.956-40.956c4.428-4.306 1.587-10.585-1.294-14.955l3.294-4.318" />
        </svg>
      ),
    },
    {
      title: "Atestado Sanitário de Viagem",
      desc: "Documentação completa e orientação para viagens nacionais e internacionais com seu bichinho.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 1000 1000" width="36" className="fill-[#4F2D96]">
          <path d="M605.17,830.53h-290A113.4,113.4,0,0,1,201.85,717.25V233.5A113.39,113.39,0,0,1,315.12,120.23h307A113.4,113.4,0,0,1,735.42,233.5v289a11,11,0,0,1-22,0v-289" />
        </svg>
      ),
    },
    {
      title: "Exames Laboratoriais",
      desc: "Coleta de exames essenciais, como hemograma, bioquímicos, citologia de pele e fezes para diagnóstico preciso.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="m197.236 233.127c10.735-10.735 79.945-79.949 114.703-114.709 9.542 3.866 20.943 1.963 28.714-5.809 10.356-10.346 10.36-27.11 0-37.47l-59.476-59.472" />
        </svg>
      ),
    },
    {
      title: "Consultoria de Manejo & Higiene",
      desc: "Orientação prática e personalizada para o cuidado, tosa higiênica e bem-estar de cães e gatos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 64 64" width="36" className="fill-[#4F2D96]">
          <path d="M54.562,50.351a5.476,5.476,0,0,1-1.247,1.92A5.559,5.559,0,0,1,51.3,53.554L41.658,57.06a1.008,1.008,0,0,0-.587.568l-2,5,1.858.744,1.834-4.585" />
        </svg>
      ),
    },
  ];

  return (
    <section id="o-que-precisa" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96]">
            O que o Seu Pet Precisa?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4F4F4F]">
            Atendimento personalizado visando o bem estar do seu bichinho
          </p>
        </div>

        {/* 6 Icon Boxes Grid Exactly like Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-5">
              <div className="shrink-0 p-3 rounded-2xl bg-[#D5E6F3]/50 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-1 text-left">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#4F2D96]">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#4F4F4F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com um atendente da Cat & Dog Pet Shop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 rounded-[20px] bg-[#FF584E] hover:bg-[#ff6d64] text-white font-bold text-base shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-[#FF7169] transition-all elementor-animation-pulse hover:scale-105 active:scale-95"
          >
            Falar com um Atendente
          </a>
        </div>

      </div>
    </section>
  );
}
