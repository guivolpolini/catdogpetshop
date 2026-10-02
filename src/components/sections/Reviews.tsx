"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Joana Beatriz Morais Albuquerque",
      date: "08/01/2025",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXOw8iFAK7lWMCgUCCEvi6XIHjDFU61EE3qgFxRGoZNoNdFbgpJ=w40-h40-c-rp-mo-ba3-br100",
      text: "Um lugar maravilhoso, impecável organização, enorme carinho com os animais... Profissionais excelentes em tosa e banho. Fiquei extremamente satisfeita. Parabéns!",
    },
    {
      name: "Mariana Alencar",
      date: "14/01/2025",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXhuaSPXYil3HG3Q2xxWSM_SgY74OCDaLKD02oNEINgEe-ii04T7g=w40-h40-c-rp-mo-br100",
      text: "O Bento é um Golden bem ansioso, e na Cat & Dog ele é tratado com um amor inexplicável. Sai sempre cheiroso, pelo escovado impecável e muito feliz. Não troco por nada!",
    },
    {
      name: "Carlos Eduardo Pires",
      date: "22/12/2024",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUQATIbd3ZlunIgNmbldapUyuKFld-UXD-6QTRCrG2VHzV2Zt8=w40-h40-c-rp-mo-br100",
      text: "A tosa na tesoura que fazem na Luna é uma verdadeira obra de arte. As patinhas ficam perfeitas, rostinho redondinho e o pelo super macio. Atendimento pontual e equipe prestativa.",
    },
    {
      name: "Patrícia V. Mendonça",
      date: "05/01/2025",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXOw8iFAK7lWMCgUCCEvi6XIHjDFU61EE3qgFxRGoZNoNdFbgpJ=w40-h40-c-rp-mo-ba3-br100",
      text: "Quem tem gato sabe o pavor de levar para banho. Na Cat & Dog eles têm uma paciência de ouro e um cuidado ímpar com felinos. Voltam calmos, sem estresse nenhum e com cheirinho bem delicado.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="avaliacoes" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mascot illustration from reference */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <img
              src="https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/icones-lovepet-1.png"
              alt="Mascotes Cat & Dog Pet Shop"
              className="max-w-md w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Column: Title and Google Reviews Slider */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Paw Icon */}
            <div className="w-12 h-12 flex items-center">
              <svg className="w-10 h-10 fill-[#EA534A]" viewBox="0 0 375 375">
                <path d="M 279.47 274.36 C 284.45 278.19 289.9 283.6 290.19 290.37 C 290.82 306.41 262.29 318.94 229.98 332.83 C 217.17 338.39 207.78 341.08 191.28 346.09 C 173.47 351.61 152.74 357.17 127.33 360.68 C 114.04 362.51 97.78 364.03 83.61 357.27 C 73.23 352.34 70.71 346.29 70.15 344.64 C 68.25 339.37 69.9 332.86 75.69 310.64 C 171.23 293.03 191.43 289.35 215.68 284.96 Z" />
              </svg>
            </div>

            {/* Heading in Young Serif */}
            <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96] leading-tight">
              Meu Pet Está em <span className="text-[#EA534A]">Boas Mãos</span> Na Cat &amp; Dog
            </h2>

            {/* Trustindex / Google Reviews Widget replica */}
            <div className="p-6 sm:p-7 rounded-2xl border border-stone-200 bg-[#FAF8F5] shadow-xs space-y-5">
              
              {/* Trustindex Google Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                    alt="Google"
                    className="w-6 h-6"
                  />
                  <div>
                    <span className="font-bold text-sm text-[#1F1B16]">Avaliações no Google</span>
                    <span className="text-xs text-stone-500 block">4.6 estrelas &bull; 56 avaliações públicas</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevReview}
                    aria-label="Avaliação anterior"
                    className="w-8 h-8 rounded-full border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 text-stone-600" />
                  </button>
                  <button
                    onClick={nextReview}
                    aria-label="Próxima avaliação"
                    className="w-8 h-8 rounded-full border border-stone-300 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-stone-600" />
                  </button>
                </div>
              </div>

              {/* Current Active Review Item */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-sm text-[#1F1B16]">
                        {reviews[currentIndex].name}
                      </p>
                      <p className="text-[11px] text-stone-400">
                        {reviews[currentIndex].date}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verificado
                  </span>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-sans text-sm text-[#4F4F4F] leading-relaxed italic">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
