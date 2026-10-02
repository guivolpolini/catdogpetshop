import Link from "next/link";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";
import { CatDogLogo } from "@/components/ui/CatDogLogo";

export function Footer() {
  return (
    <footer id="contato" className="bg-white text-[#4F4F4F] relative">
      
      {/* Top Banner Image with Dogs & Cats Illustration */}
      <div className="w-full flex justify-center pt-8 pb-4">
        <img
          src="https://descomplicandosite.com/petshop/wp-content/uploads/2025/04/Design-sem-nome-55.png"
          alt="Pets Cat & Dog"
          className="max-w-4xl w-full h-auto object-contain px-4"
          loading="lazy"
        />
      </div>

      {/* Mascot branding */}
      <div className="flex justify-center -mt-6 sm:-mt-8 relative z-10">
        <div className="p-2 bg-white rounded-full shadow-lg border border-stone-100">
          <CatDogLogo size="md" />
        </div>
      </div>

      {/* Store Location Block */}
      <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-4">
        <h2 className="font-young text-2xl sm:text-3xl font-extrabold text-[#444444]">
          Unidade Santa Maria — São Caetano do Sul
        </h2>

        {/* Map Image preview from reference */}
        {/* Real Interactive Google Maps for Santa Maria - São Caetano do Sul */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 h-64 sm:h-72 w-full">
          <iframe
            src="https://maps.google.com/maps?q=Alameda%20S%C3%A3o%20Caetano%2C%202493%20-%20Santa%20Maria%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Cat & Dog Pet Shop - Santa Maria, São Caetano do Sul"
          />
        </div>

        {/* Address */}
        <p className="font-sans text-sm sm:text-base text-[#686868] pt-1">
          {BUSINESS_INFO.address.full}
        </p>

        {/* Contact info */}
        <p className="font-sans text-sm sm:text-base text-[#686868]">
          Agendamentos e Contato:{" "}
          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar um horário na Cat & Dog Pet Shop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#4F2D96] hover:text-[#EA534A] transition-colors"
          >
            {BUSINESS_INFO.phones.whatsapp}
          </a>{" "}
          /{" "}
          <a
            href={`tel:${BUSINESS_INFO.phones.landlineRaw}`}
            className="font-bold text-[#4F2D96] hover:text-[#EA534A] transition-colors"
          >
            {BUSINESS_INFO.phones.landline}
          </a>
        </p>
      </div>

      {/* Red Copyright Bottom Bar Exactly Like Reference */}
      <div className="w-full bg-[#EA534A] py-4 px-4 text-center">
        <p className="font-sans text-xs sm:text-sm font-semibold text-white">
          Copyright &copy; 2025 – Todos os Direitos Reservados – Cat &amp; Dog Pet Shop
        </p>
      </div>

    </footer>
  );
}
