import { getWhatsAppLink } from "@/lib/constants";

export function WhyChooseUs() {
  const items = [
    {
      title: "Água Morna Monitorada",
      desc: "Temperatura da água controlada e ajustada ao porte e sensibilidade de cada pet durante todo o banho.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="M256 32c-47 71-128 166-128 238a128 128 0 0 0 256 0C384 198 303 103 256 32zm0 320a48 48 0 0 1-48-48c0-16 8-32 48-72 40 40 48 56 48 72a48 48 0 0 1-48 48z" />
        </svg>
      ),
    },
    {
      title: "Toalhas Esterilizadas",
      desc: "Toalhas 100% higienizadas e lacradas individualmente para cada atendimento, sem risco de contaminação cruzada.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="M448 64H64a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32zm-16 336H80V112h352z" />
        </svg>
      ),
    },
    {
      title: "Cosméticos Hipoalergênicos",
      desc: "Produtos dermatologicamente testados com pH balanceado para cada tipo de pele e pelagem, sem irritações.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="M352 96l-96-64-96 64v32h192V96zm-48 288h-96v32h96v-32zm80-224H128a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16zm-48 208H176v-16h160v16zm0-48H176v-16h160v16zm0-48H176v-16h160v16z" />
        </svg>
      ),
    },
    {
      title: "Secagem Silenciosa",
      desc: "Secadores profissionais de baixo ruído para reduzir o estresse e garantir conforto total durante o atendimento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="M416 64H96a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32zm-80 208l-96 96V208z" />
        </svg>
      ),
    },
    {
      title: "Tosa & Acabamento Profissional",
      desc: "Cortes personalizados com tesouras profissionais, lâminas esterilizadas e acabamento preciso por tosadores experientes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="M256 48C141 48 48 141 48 256s93 208 208 208 208-93 208-208S371 48 256 48zm-32 312l-80-80 22-22 58 58 122-122 22 22z" />
        </svg>
      ),
    },
    {
      title: "Atendimento Individualizado",
      desc: "Cada pet recebe atenção exclusiva, sem contato com outros animais durante o banho, garantindo segurança e tranquilidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 512 512" width="36" className="fill-[#4F2D96]">
          <path d="M256 48a208 208 0 1 0 0 416A208 208 0 0 0 256 48zm0 96a80 80 0 1 1 0 160 80 80 0 0 1 0-160zm0 272a168 168 0 0 1-128-60c2-42 86-66 128-66s126 24 128 66a168 168 0 0 1-128 60z" />
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
            Por que escolher a Cat &amp; Dog?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4F4F4F]">
            Cada detalhe do nosso atendimento foi pensado para o bem-estar e conforto do seu pet
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
