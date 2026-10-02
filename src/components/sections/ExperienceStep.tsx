import { getWhatsAppLink } from "@/lib/constants";

export function ExperienceStep() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#D5E6F3] overflow-hidden">
      {/* Top shape divider (Triangle) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 fill-white"
        >
          <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Reference Arch Frame + Real Storefront Badge */}
          <div className="lg:col-span-6 flex justify-center pb-8 sm:pb-0">
            <div className="relative max-w-md w-full">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/Design-sem-nome-2025-04-03T111302.287.png"
                  alt="Cat & Dog Pet Shop - Mais de 10 Anos de Amor e Cuidado"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Real Storefront Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 bg-white p-3 rounded-2xl shadow-xl border border-stone-200/90 flex items-center gap-3 max-w-[270px]">
                <img
                  src="/images/fachada-cat-dog.png"
                  alt="Fachada Cat & Dog - Alameda São Caetano"
                  className="w-14 h-14 rounded-xl object-cover border border-stone-200 shrink-0"
                />
                <div className="leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA534A] block">
                    Loja Física Própria
                  </span>
                  <p className="text-xs font-bold text-[#4F2D96]">
                    Alameda São Caetano, 2493
                  </p>
                  <span className="text-[11px] text-[#666666]">
                    Santa Maria • São Caetano
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Mission / Vision */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Paw Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10 fill-[#EA534A]" viewBox="0 0 375 375">
                <path d="M 279.47 274.36 C 284.45 278.19 289.9 283.6 290.19 290.37 C 290.82 306.41 262.29 318.94 229.98 332.83 C 217.17 338.39 207.78 341.08 191.28 346.09 C 173.47 351.61 152.74 357.17 127.33 360.68 C 114.04 362.51 97.78 364.03 83.61 357.27 C 73.23 352.34 70.71 346.29 70.15 344.64 C 68.25 339.37 69.9 332.86 75.69 310.64 C 171.23 293.03 191.43 289.35 215.68 284.96 Z" />
              </svg>
            </div>

            {/* Heading in Young Serif */}
            <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96] leading-tight">
              A Cat &amp; Dog Existe a Mais de{" "}
              <span className="text-[#EA534A]">10 Anos</span>
            </h2>

            {/* Description */}
            <div className="space-y-3 font-sans text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
              <p>
                Mais do que um petshop, somos um lugar onde os pets são tratados com amor, respeito e muito cuidado.
              </p>
              <p>
                Oferecemos serviços de banho e tosa especializado, atendimento carinhoso, toalhas esterilizadas individuais e produtos hipoalergênicos de grau dermatológico com uma equipe apaixonada por animais.
              </p>
              <p>
                Aqui, seu pet se sente em casa — e você, tranquilo por saber que ele está em boas mãos na Alameda São Caetano.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/70 border border-white shadow-xs space-y-2">
                <h4 className="font-sans text-lg font-bold text-[#4F2D96]">
                  Nossa Missão
                </h4>
                <p className="font-sans text-xs text-[#4F4F4F] leading-relaxed">
                  Proporcionar o bem-estar animal com muito cuidado, segurança e sempre transmitir confiança para seu filho pet.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 border border-white shadow-xs space-y-2">
                <h4 className="font-sans text-lg font-bold text-[#4F2D96]">
                  Nossa Visão
                </h4>
                <p className="font-sans text-xs text-[#4F4F4F] leading-relaxed">
                  Cumprir com excelência nossos serviços! Aqui nossos aumigos pets são tratados com muito amor e carinho!
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink("Olá! Gostaria de saber mais sobre a Cat & Dog Pet Shop.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[20px] bg-[#EA534A] hover:bg-[#ff6d64] text-white font-bold text-sm shadow-md transition-all elementor-animation-pulse hover:scale-105 active:scale-95"
              >
                Saiba Mais Sobre Nós
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom shape divider (Triangle) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 fill-white"
        >
          <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
        </svg>
      </div>
    </section>
  );
}
