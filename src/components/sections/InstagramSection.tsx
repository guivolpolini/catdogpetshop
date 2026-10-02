import Link from "next/link";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro text */}
        <p className="text-center font-sans text-sm sm:text-base text-[#4F4F4F] max-w-2xl mx-auto mb-12">
          Somos apaixonados por pets e sabemos como é fundamental ter um local que proporciona cuidado, segurança e confiança para seu filho pet.
        </p>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Banho & Tosa */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-xs group">
            <a href="#agendamento" className="shrink-0">
              <img
                src="https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/LovePet-5.png"
                alt="Banho & Tosa Cat & Dog"
                className="w-36 h-36 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-sans text-xl font-bold text-[#4F2D96]">
                <a href="#agendamento" className="hover:text-[#EA534A] transition-colors">
                  Banho &amp; Tosa
                </a>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4F4F4F] leading-relaxed">
                Espaço climatizado, com água na temperatura adequada, toalhas 100% esterilizadas e os melhores cosméticos para seu filho pet sair lindo e cheiroso em cada banho.
              </p>
              <div className="pt-2">
                <a
                  href="#agendamento"
                  className="font-bold text-sm text-[#4F2D96] hover:text-[#EA534A] transition-colors inline-block"
                >
                  Saiba mais &gt;
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Loja de Produtos */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 shadow-xs group">
            <a
              href={getWhatsAppLink("Olá! Gostaria de saber mais sobre os produtos disponíveis na Cat & Dog Pet Shop.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <img
                src="/images/loja-acessorios-cat-dog.png"
                alt="Loja de Produtos Cat & Dog"
                className="w-36 h-36 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </a>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-sans text-xl font-bold text-[#4F2D96]">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de saber mais sobre os produtos disponíveis na Cat & Dog Pet Shop.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EA534A] transition-colors"
                >
                  Loja de Produtos
                </a>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4F4F4F] leading-relaxed">
                Rações premium, petiscos, coleiras, guias, brinquedos e acessórios — tudo o que seu pet precisa em um só lugar na Alameda São Caetano.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de saber mais sobre os produtos disponíveis na Cat & Dog Pet Shop.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-[#4F2D96] hover:text-[#EA534A] transition-colors inline-block"
                >
                  Ver produtos &gt;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Instagram Follow Banner */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#4F2D96] to-[#683bb5] p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#FFAE42]">
              Siga Nosso Dia a Dia
            </span>
            <h4 className="font-young text-2xl sm:text-3xl font-extrabold">
              Acompanhe a Cat &amp; Dog no Instagram
            </h4>
            <p className="font-sans text-sm text-white/85 max-w-lg">
              Veja os pets mais fofos de São Caetano, bastidores dos banhos, dicas de saúde e lançamentos da nossa loja física na Alameda São Caetano.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#EA534A] hover:bg-[#ff6d64] text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1z" />
            </svg>
            <span>Seguir {BUSINESS_INFO.social.instagram}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
