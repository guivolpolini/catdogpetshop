import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, Car } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-[#C86438] bg-[#C86438]/10 px-3.5 py-1 rounded-full">
            Localização Privilegiada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1B16]">
            Fácil acesso em São Caetano do Sul
          </h2>
          <p className="text-base sm:text-lg text-[#57524C]">
            Localizado no tradicional bairro Santa Maria, com parada facilitada para você deixar e buscar seu pet com segurança e comodidade.
          </p>
        </div>

        {/* 2-column layout: Info Card + Interactive Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Navigation CTAs */}
          <div className="lg:col-span-5 rounded-3xl bg-white p-7 sm:p-9 border border-[#1F1B16]/5 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#1F1B16]/5 flex items-center justify-center text-[#C86438] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1F1B16]">Endereço</h3>
                  <p className="text-sm text-[#57524C] mt-1 leading-relaxed">
                    Alameda São Caetano, 2493<br />
                    Bairro Santa Maria — São Caetano do Sul, SP<br />
                    <span className="text-xs text-[#847C74]">CEP: 09560-500</span>
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#1F1B16]/5 flex items-center justify-center text-[#385E4E] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#1F1B16]">Horários de Funcionamento</h3>
                  <div className="mt-2 space-y-1.5 text-xs sm:text-sm text-[#57524C]">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-0.5 border-b border-[#1F1B16]/5 last:border-none">
                        <span>{h.days}:</span>
                        <span className="font-medium text-[#1F1B16]">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Facility perk */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#1F1B16]/5 flex items-center justify-center text-[#C29648] shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1F1B16]">Embarque Seguro</h3>
                  <p className="text-sm text-[#57524C] mt-1 leading-relaxed">
                    Vagas e parada facilitada bem na frente da loja na Alameda São Caetano para entrada e saída tranquila do seu companheiro.
                  </p>
                </div>
              </div>

            </div>

            {/* Direction Buttons */}
            <div className="pt-8 mt-6 border-t border-[#1F1B16]/10 space-y-3">
              <p className="text-xs font-semibold text-[#847C74] uppercase tracking-wider">
                Rotas com 1 clique no GPS
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#1F1B16] hover:bg-[#C86438] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={BUSINESS_INFO.address.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#FAF3EC] text-[#1F1B16] border border-[#1F1B16]/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3 text-[#847C74]" />
                </a>
              </div>

              <a
                href={getWhatsAppLink("Olá! Gostaria de confirmar se há vaga para banho hoje na Alameda São Caetano.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-xs font-bold flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-[#128C7E]" />
                <span>Checar disponibilidade de horário agora</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed with custom styling */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-sm border border-[#1F1B16]/5 min-h-[380px] lg:min-h-[480px] relative bg-stone-200">
            <iframe
              title="Localização Cat & Dog Pet Shop - Alameda São Caetano, 2493"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.441193309995!2d-46.56708302381283!3d-23.624386478755027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cebc41ee4bf%3A0xc3b839ec564c7816!2sAlameda%20S%C3%A3o%20Caetano%2C%202493%20-%20Santa%20Maria%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009560-500!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
