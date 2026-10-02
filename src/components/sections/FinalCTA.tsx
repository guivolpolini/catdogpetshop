import { MessageCircle, Star, Phone, ShieldCheck, Heart, Calendar } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#181614] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6D64]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C29648]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        
        {/* Rating pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm text-white font-medium">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span>4.6 estrelas no Google (56 avaliações)</span>
          <span className="text-white/40">&bull;</span>
          <span className="text-white/80">Santa Maria, São Caetano do Sul</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Pronto para deixar seu pet{" "}
          <span className="text-[#FF6D64] italic font-normal">ainda mais lindo</span> e cheiroso?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Garantimos vagas limitadas por período para assegurar que cada cão ou gato receba o tempo e a paciência necessários. Reserve o horário do seu amigo agora.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#agendamento"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#FF6D64] hover:bg-[#E85C53] text-white font-bold text-base shadow-xl shadow-[#FF6D64]/25 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Horário Online</span>
          </a>

          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar um banho e tosa para o meu pet na Cat & Dog Pet Shop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl shadow-[#25D366]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phones.landlineRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#FF6D64]" />
            <span>Ligar: {BUSINESS_INFO.phones.landline}</span>
          </a>
        </div>

        {/* Micro guarantees */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Toalhas esterilizadas individuais</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#FF6D64]" />
            <span>Cosméticos dermatológicos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29648]" />
            <span>Alameda São Caetano, 2493</span>
          </div>
        </div>

      </div>
    </section>
  );
}
