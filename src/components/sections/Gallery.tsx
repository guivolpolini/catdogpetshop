import { getWhatsAppLink } from "@/lib/constants";

export function Gallery() {
  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Paw Icon and Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-10 h-10 fill-[#EA534A]" viewBox="0 0 375 375">
              <path d="M 279.47 274.36 C 284.45 278.19 289.9 283.6 290.19 290.37 C 290.82 306.41 262.29 318.94 229.98 332.83 C 217.17 338.39 207.78 341.08 191.28 346.09 C 173.47 351.61 152.74 357.17 127.33 360.68 C 114.04 362.51 97.78 364.03 83.61 357.27 C 73.23 352.34 70.71 346.29 70.15 344.64 C 68.25 339.37 69.9 332.86 75.69 310.64 C 171.23 293.03 191.43 289.35 215.68 284.96 Z" />
            </svg>
          </div>

          <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96]">
            Conheça Nossa <span className="text-[#EA534A]">Loja &amp; Espaço</span> Pet
          </h2>

          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar um horário para conhecer o espaço da Cat & Dog Pet Shop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-[20px] bg-[#EA534A] hover:bg-[#ff6d64] text-white font-bold text-sm shadow-md transition-all elementor-animation-pulse hover:scale-105 active:scale-95"
          >
            Saiba Mais
          </a>
        </div>

        {/* 3 Real Photos of Cat & Dog Pet Shop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
          
          {/* Box 1: Fachada */}
          <div className="flex flex-col p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full h-56 rounded-xl overflow-hidden mb-5 bg-stone-100 border border-stone-200/80">
              <img
                src="/images/fachada-cat-dog.png"
                alt="Fachada Cat & Dog Pet Shop - Alameda São Caetano, 2493"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA534A] block mb-1">
                  São Caetano do Sul
                </span>
                <h3 className="font-sans text-xl font-bold text-[#4F2D96]">
                  Nossa Fachada &amp; Loja Física
                </h3>
                <p className="font-sans text-sm text-[#4F4F4F] leading-relaxed mt-2">
                  Localização acessível na Alameda São Caetano, 2493 (bairro Santa Maria). Fachada acolhedora, vitrine com novidades e equipe carinhosa pronta para receber você e seu companheiro.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-200/60 mt-4">
                <span className="text-xs font-semibold text-[#4F2D96]">
                  📍 Alameda São Caetano, 2493
                </span>
              </div>
            </div>
          </div>

          {/* Box 2: Prateleiras e Rações */}
          <div className="flex flex-col p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full h-56 rounded-xl overflow-hidden mb-5 bg-stone-100 border border-stone-200/80">
              <img
                src="/images/loja-prateleiras-cat-dog.png"
                alt="Rações Selecionadas e Petiscos - Cat & Dog Pet Shop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA534A] block mb-1">
                  Nutrição &amp; Conforto
                </span>
                <h3 className="font-sans text-xl font-bold text-[#4F2D96]">
                  Rações, Petiscos &amp; Conforto
                </h3>
                <p className="font-sans text-sm text-[#4F4F4F] leading-relaxed mt-2">
                  Amplo estoque com as melhores marcas de ração seca e úmida, petiscos Baw Waw, comedouros, bebedouros e caminhas macias para o soninho perfeito do seu pet.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-200/60 mt-4">
                <span className="text-xs font-semibold text-[#4F2D96]">
                  🥣 Linhas Premium &amp; Fracionadas
                </span>
              </div>
            </div>
          </div>

          {/* Box 3: Acessórios e Coleiras */}
          <div className="flex flex-col p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full h-56 rounded-xl overflow-hidden mb-5 bg-stone-100 border border-stone-200/80">
              <img
                src="/images/loja-acessorios-cat-dog.png"
                alt="Acessórios, Coleiras e Guias - Cat & Dog Pet Shop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA534A] block mb-1">
                  Passeio &amp; Diversão
                </span>
                <h3 className="font-sans text-xl font-bold text-[#4F2D96]">
                  Coleiras, Guias &amp; Brinquedos
                </h3>
                <p className="font-sans text-sm text-[#4F4F4F] leading-relaxed mt-2">
                  Painel completo com peitorais antipuxão, guias reforçadas, brinquedos mordedores, bolinhas e acessórios para passeios diários cheios de segurança e alegria.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-200/60 mt-4">
                <span className="text-xs font-semibold text-[#4F2D96]">
                  🦮 Segurança &amp; Estilo Pet
                </span>
              </div>
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
          className="w-full h-8 sm:h-12 fill-[#FAF8F5]"
        >
          <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
        </svg>
      </div>
    </section>
  );
}
