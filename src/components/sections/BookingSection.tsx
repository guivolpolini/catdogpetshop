"use client";

import { useState, useId } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  Scissors,
  ShieldCheck,
  Heart,
  Check,
  Send,
  MessageCircle,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Phone,
  User,
  Dog,
  Cat
} from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

interface ServiceOption {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  basePrice: {
    pequeno: number;
    medio: number;
    grande: number;
    gato: number;
  };
  icon: string;
  popular?: boolean;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "banho-relaxante",
    name: "Banho Relaxante & Hidratante",
    subtitle: "Água morna, massagem, secagem suave e toalha esterilizada lacrada",
    duration: "45-60 min",
    basePrice: { pequeno: 60, medio: 75, grande: 95, gato: 85 },
    icon: "Sparkles",
    popular: true,
  },
  {
    id: "banho-tosa-higienica",
    name: "Banho + Tosa Higiênica",
    subtitle: "Banho completo + limpeza de patinhas, região íntima e olhos",
    duration: "60-75 min",
    basePrice: { pequeno: 80, medio: 95, grande: 120, gato: 100 },
    icon: "Scissors",
  },
  {
    id: "tosa-raca-tesoura",
    name: "Tosa da Raça / Na Tesoura + Banho",
    subtitle: "Acabamento artístico e tesoura conforme o padrão oficial ou estilo desejado",
    duration: "90-120 min",
    basePrice: { pequeno: 120, medio: 145, grande: 180, gato: 150 },
    icon: "Scissors",
  },
  {
    id: "spa-hidratacao",
    name: "Spa & Hidratação Profunda",
    subtitle: "Banho com máscara de queratina, manteiga de karité e recuperação de nós",
    duration: "60-80 min",
    basePrice: { pequeno: 90, medio: 110, grande: 135, gato: 105 },
    icon: "Heart",
  },
  {
    id: "cuidados-felinos",
    name: "Banho Especial Felino (Cat-Friendly)",
    subtitle: "Horário silencioso, manejo delicado sem cães por perto e toalha individual",
    duration: "40-60 min",
    basePrice: { pequeno: 95, medio: 95, grande: 95, gato: 95 },
    icon: "Cat",
  },
];

interface AddonOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ADDON_OPTIONS: AddonOption[] = [
  {
    id: "hidratacao-patinhas",
    name: "Hidratação de Coxins (Patinhas)",
    price: 20,
    description: "Cera vegetal protetora contra ressecamento e rachaduras",
  },
  {
    id: "escovacao-dentes",
    name: "Escovação Dentária & Hálito Fresco",
    price: 25,
    description: "Gel enzimático profilático com dedeira suave",
  },
  {
    id: "desembolo-pelos",
    name: "Desembolo Cuidadoso de Nós",
    price: 30,
    description: "Técnica indolor com fluido desembaraçador especial",
  },
  {
    id: "corte-unhas-extra",
    name: "Lixamento Específico de Garras",
    price: 15,
    description: "Acabamento arredondado sem arestas para não arranhar o piso",
  },
];

const TIME_SLOTS = {
  morning: ["08:30", "09:30", "10:30", "11:30"],
  afternoon: ["13:30", "14:30", "15:30", "16:30", "17:00"],
};

export function BookingSection() {
  const [petType, setPetType] = useState<"cao" | "gato">("cao");
  const [petSize, setPetSize] = useState<"pequeno" | "medio" | "grande">("pequeno");
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("banho-relaxante");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Date selection: generate next 7 available days (excluding Sundays)
  const getNextAvailableDays = () => {
    const days: { dateStr: string; label: string; weekday: string }[] = [];
    const today = new Date();
    let current = new Date(today);
    
    // Start from tomorrow or today if early
    if (today.getHours() >= 17) {
      current.setDate(current.getDate() + 1);
    }

    while (days.length < 7) {
      // 0 = Domingo (closed)
      if (current.getDay() !== 0) {
        const d = current.getDate().toString().padStart(2, "0");
        const m = (current.getMonth() + 1).toString().padStart(2, "0");
        const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const weekday = weekdays[current.getDay()];
        
        days.push({
          dateStr: `${d}/${m}/${current.getFullYear()}`,
          label: `${d}/${m}`,
          weekday: weekday,
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const availableDays = getNextAvailableDays();
  const [selectedDate, setSelectedDate] = useState(availableDays[0].dateStr);
  const [selectedTime, setSelectedTime] = useState("09:30");

  // Tutor Info
  const [tutorName, setTutorName] = useState("");
  const [tutorPhone, setTutorPhone] = useState("");
  const [observations, setObservations] = useState("");

  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingProtocol, setBookingProtocol] = useState("");

  // Price Calculation
  const selectedService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[0];
  
  const calculateBasePrice = () => {
    if (petType === "gato") {
      return selectedService.basePrice.gato;
    }
    return selectedService.basePrice[petSize];
  };

  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const estimatedTotal = calculateBasePrice() + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Format WhatsApp Message
  const generateWhatsAppMessage = (protocol: string) => {
    const addonsNames = selectedAddons.length > 0
      ? selectedAddons
          .map((id) => ADDON_OPTIONS.find((a) => a.id === id)?.name)
          .filter(Boolean)
          .join(", ")
      : "Nenhum adicional";

    const porteLabel = petType === "cao"
      ? petSize === "pequeno" ? "Pequeno (até 10kg)" : petSize === "medio" ? "Médio (11 a 25kg)" : "Grande (+25kg)"
      : "Felino";

    return `🐾 *AGENDAMENTO DE BANHO E TOSA - CAT & DOG*
📋 *Protocolo:* ${protocol}
----------------------------------------
🐶 *Pet:* ${petName || "Não informado"} (${petType === "cao" ? "Cachorro" : "Gato"} - ${porteLabel})
🧬 *Raça:* ${petBreed || "SRD / A combinar"}
✂️ *Serviço:* ${selectedService.name}
✨ *Adicionais:* ${addonsNames}
📅 *Data Solicitada:* ${selectedDate} às ${selectedTime}
👤 *Tutor:* ${tutorName || "Não informado"}
📱 *WhatsApp do Tutor:* ${tutorPhone || "Não informado"}
💬 *Observações:* ${observations || "Sem restrições"}
💰 *Estimativa:* R$ ${estimatedTotal.toFixed(2)}
----------------------------------------
Alameda São Caetano, 2493 - Santa Maria, São Caetano do Sul
Olá! Gostaria de confirmar a reserva deste horário!`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProtocol = `CD-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingProtocol(newProtocol);
    setIsSubmitted(true);
  };

  return (
    <section id="agendamento" className="py-20 lg:py-24 bg-[#D5E6F3]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#EA534A] bg-[#EA534A]/10 px-3.5 py-1 rounded-full">
            Agendamento Online Integrado
          </span>

          <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96]">
            Reserve o Horário do Seu Pet
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
            Escolha o serviço, a data e os cuidados especiais. O sistema calcula a estimativa em tempo real e nossa equipe na Alameda São Caetano já prepara tudo para recebê-lo com carinho.
          </p>
        </div>

        {/* Success Modal / Card State */}
        {isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-500/20 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Solicitação Criada com Sucesso
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1B16]">
                Tudo pronto para o {petName || "seu pet"}!
              </h3>
              <p className="text-sm text-[#57524C]">
                Protocolo gerado: <strong className="text-[#1F1B16] font-mono text-base">{bookingProtocol}</strong>
              </p>
            </div>

            {/* Booking Summary Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 text-left space-y-3 text-xs sm:text-sm text-[#57524C] border border-[#1F1B16]/5">
              <div className="flex justify-between border-b border-[#1F1B16]/5 pb-2">
                <span className="font-medium text-[#1F1B16]">Pet:</span>
                <span>{petName || "Pet"} ({petType === "cao" ? "Cão" : "Gato"})</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1B16]/5 pb-2">
                <span className="font-medium text-[#1F1B16]">Serviço:</span>
                <span className="font-semibold text-[#1F1B16]">{selectedService.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1B16]/5 pb-2">
                <span className="font-medium text-[#1F1B16]">Data &amp; Horário:</span>
                <span className="text-[#C86438] font-bold">{selectedDate} às {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-[#1F1B16]/5 pb-2">
                <span className="font-medium text-[#1F1B16]">Tutor:</span>
                <span>{tutorName || "Tutor"}</span>
              </div>
              <div className="flex justify-between pt-1 text-base font-bold text-[#1F1B16]">
                <span>Estimativa Total:</span>
                <span className="text-[#FF6D64]">R$ {estimatedTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={getWhatsAppLink(generateWhatsAppMessage(bookingProtocol))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirmar Agendamento no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-[#847C74] hover:text-[#1F1B16] underline transition-colors"
              >
                Fazer outro agendamento ou alterar dados
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form Layout */
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Steps Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Pet Type & Size */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F1B16]/5 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6D64]/10 text-[#FF6D64] flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                      Quem é o seu amiguinho?
                    </h3>
                    <p className="text-xs text-[#847C74]">
                      Selecione a espécie, o porte e nos diga o nome
                    </p>
                  </div>
                </div>

                {/* Pet Type Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setPetType("cao");
                      if (selectedServiceId === "cuidados-felinos") {
                        setSelectedServiceId("banho-relaxante");
                      }
                    }}
                    className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${
                      petType === "cao"
                        ? "border-[#FF6D64] bg-[#FF6D64]/5 shadow-sm"
                        : "border-[#1F1B16]/10 hover:border-[#1F1B16]/20 bg-white"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      petType === "cao" ? "bg-[#FF6D64] text-white" : "bg-[#FAF8F5] text-[#57524C]"
                    }`}>
                      <Dog className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1F1B16]">Cachorro</p>
                      <p className="text-xs text-[#847C74]">Banho, tosa e tratamentos</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPetType("gato");
                      setSelectedServiceId("cuidados-felinos");
                    }}
                    className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all text-left ${
                      petType === "gato"
                        ? "border-[#FF6D64] bg-[#FF6D64]/5 shadow-sm"
                        : "border-[#1F1B16]/10 hover:border-[#1F1B16]/20 bg-white"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      petType === "gato" ? "bg-[#FF6D64] text-white" : "bg-[#FAF8F5] text-[#57524C]"
                    }`}>
                      <Cat className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1F1B16]">Gato</p>
                      <p className="text-xs text-[#847C74]">Manejo calmo cat-friendly</p>
                    </div>
                  </button>
                </div>

                {/* Porte Selection (For Dogs) */}
                {petType === "cao" && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#57524C]">
                      Porte do Cachorro
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "pequeno", label: "Pequeno", sub: "Até 10kg (Shih Tzu, Poodle, Maltês)" },
                        { id: "medio", label: "Médio", sub: "11 a 25kg (Beagle, Cocker, Bulldog)" },
                        { id: "grande", label: "Grande", sub: "Mais de 25kg (Golden, Labrador, Boxer)" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPetSize(item.id as any)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            petSize === item.id
                              ? "border-[#FF6D64] bg-[#FF6D64]/5 font-bold text-[#FF6D64]"
                              : "border-[#1F1B16]/10 hover:border-[#1F1B16]/20 text-[#57524C]"
                          }`}
                        >
                          <p className="text-sm font-semibold">{item.label}</p>
                          <p className="text-[11px] text-[#847C74] mt-0.5 leading-tight">{item.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pet Name and Breed Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1F1B16]">
                      Nome do Pet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Bento, Mel, Luna..."
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F1B16]/10 focus:border-[#FF6D64] focus:ring-1 focus:ring-[#FF6D64] outline-none text-sm bg-[#FAF8F5]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1F1B16]">
                      Raça (ou Sem Raça Definida)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Shih Tzu, Golden, SRD..."
                      value={petBreed}
                      onChange={(e) => setPetBreed(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F1B16]/10 focus:border-[#FF6D64] focus:ring-1 focus:ring-[#FF6D64] outline-none text-sm bg-[#FAF8F5]"
                    />
                  </div>
                </div>

              </div>

              {/* Step 2: Main Service */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F1B16]/5 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6D64]/10 text-[#FF6D64] flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                      Qual o serviço principal?
                    </h3>
                    <p className="text-xs text-[#847C74]">
                      Valores base calculados conforme o porte informado
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {SERVICE_OPTIONS.filter((s) => petType === "cao" ? s.id !== "cuidados-felinos" : true).map((service) => {
                    const price = petType === "gato" ? service.basePrice.gato : service.basePrice[petSize];
                    const isSelected = selectedServiceId === service.id;

                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected
                            ? "border-[#FF6D64] bg-[#FF6D64]/5 shadow-xs"
                            : "border-[#1F1B16]/10 hover:border-[#1F1B16]/20 bg-white"
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#1F1B16] text-base">
                              {service.name}
                            </span>
                            {service.popular && (
                              <span className="px-2 py-0.5 rounded-full bg-[#FF6D64] text-white text-[10px] font-bold uppercase">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#57524C]">
                            {service.subtitle}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-[#847C74] pt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#C86438]" />
                              Duração estimada: {service.duration}
                            </span>
                            <span>&bull;</span>
                            <span className="text-emerald-700 font-medium">Toalha lacrada inclusa</span>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 shrink-0">
                          <span className="text-xs text-[#847C74]">A partir de</span>
                          <span className="text-xl font-serif font-bold text-[#1F1B16]">
                            R$ {price}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Add-on options */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F1B16]/5 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6D64]/10 text-[#FF6D64] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                      Deseja adicionar algum cuidado especial? (Opcional)
                    </h3>
                    <p className="text-xs text-[#847C74]">
                      Turbine o momento de bem-estar com mimos dermatológicos
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADDON_OPTIONS.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                          isChecked
                            ? "border-[#FF6D64] bg-[#FF6D64]/5"
                            : "border-[#1F1B16]/10 hover:border-[#1F1B16]/20 bg-white"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-colors ${
                          isChecked
                            ? "bg-[#FF6D64] border-[#FF6D64] text-white"
                            : "border-[#1F1B16]/20 bg-white"
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs sm:text-sm font-bold text-[#1F1B16]">
                              {addon.name}
                            </span>
                            <span className="text-xs font-bold text-[#FF6D64]">
                              + R$ {addon.price}
                            </span>
                          </div>
                          <p className="text-xs text-[#847C74] mt-0.5">
                            {addon.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Date & Time Picker */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F1B16]/5 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6D64]/10 text-[#FF6D64] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                      Escolha a Data &amp; Horário
                    </h3>
                    <p className="text-xs text-[#847C74]">
                      Atendimento de Segunda a Sábado na Alameda São Caetano, 2493
                    </p>
                  </div>
                </div>

                {/* Day selector pills */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#57524C]">
                    Próximos dias disponíveis:
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {availableDays.map((d) => (
                      <button
                        key={d.dateStr}
                        type="button"
                        onClick={() => setSelectedDate(d.dateStr)}
                        className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center ${
                          selectedDate === d.dateStr
                            ? "border-[#FF6D64] bg-[#FF6D64] text-white font-bold shadow-md shadow-[#FF6D64]/20"
                            : "border-[#1F1B16]/10 hover:border-[#1F1B16]/20 bg-white text-[#1F1B16]"
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider opacity-80">{d.weekday}</span>
                        <span className="text-sm font-bold mt-0.5">{d.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Morning Slots */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#57524C] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C86438]" />
                    Turno da Manhã (08:30 às 12:00):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.morning.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                          selectedTime === time
                            ? "bg-[#1F1B16] text-white border-[#1F1B16] shadow-xs"
                            : "bg-[#FAF8F5] text-[#57524C] border-[#1F1B16]/10 hover:border-[#1F1B16]/20"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Slots */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#57524C] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C86438]" />
                    Turno da Tarde (13:30 às 17:00):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.afternoon.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                          selectedTime === time
                            ? "bg-[#1F1B16] text-white border-[#1F1B16] shadow-xs"
                            : "bg-[#FAF8F5] text-[#57524C] border-[#1F1B16]/10 hover:border-[#1F1B16]/20"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Step 5: Tutor Information */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F1B16]/5 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6D64]/10 text-[#FF6D64] flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1B16]">
                      Seus Dados para Contato
                    </h3>
                    <p className="text-xs text-[#847C74]">
                      Para enviarmos a confirmação de horário
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1F1B16]">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Alencar"
                      value={tutorName}
                      onChange={(e) => setTutorName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F1B16]/10 focus:border-[#FF6D64] focus:ring-1 focus:ring-[#FF6D64] outline-none text-sm bg-[#FAF8F5]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1F1B16]">
                      Seu WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={tutorPhone}
                      onChange={(e) => setTutorPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F1B16]/10 focus:border-[#FF6D64] focus:ring-1 focus:ring-[#FF6D64] outline-none text-sm bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1F1B16]">
                    Observações ou Cuidados Especiais (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Tem medo de secador, alergia a perfume, idoso com artrite..."
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#1F1B16]/10 focus:border-[#FF6D64] focus:ring-1 focus:ring-[#FF6D64] outline-none text-sm bg-[#FAF8F5]"
                  />
                </div>
              </div>

            </div>

            {/* Right Sticky Order Summary (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#1F1B16]/10 shadow-lg space-y-5">
                <div className="flex items-center justify-between border-b border-[#1F1B16]/10 pb-4">
                  <h3 className="font-serif text-lg font-bold text-[#1F1B16]">
                    Resumo do Agendamento
                  </h3>
                  <span className="text-xs font-bold text-[#FF6D64] bg-[#FF6D64]/10 px-2.5 py-0.5 rounded-full">
                    Ao Vivo
                  </span>
                </div>

                {/* Items breakdown */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-[#1F1B16]">{selectedService.name}</p>
                      <p className="text-xs text-[#847C74]">
                        {petType === "cao" ? `Cachorro Porte ${petSize}` : "Gato"}
                      </p>
                    </div>
                    <span className="font-bold text-[#1F1B16]">R$ {calculateBasePrice()}</span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="pt-2 border-t border-dashed border-[#1F1B16]/10 space-y-2">
                      <p className="text-[11px] uppercase font-bold text-[#847C74]">Adicionais selecionados:</p>
                      {selectedAddons.map((id) => {
                        const addon = ADDON_OPTIONS.find((a) => a.id === id);
                        if (!addon) return null;
                        return (
                          <div key={id} className="flex justify-between text-xs text-[#57524C]">
                            <span>+ {addon.name}</span>
                            <span className="font-medium text-[#1F1B16]">R$ {addon.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Scheduled Slot Preview */}
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#1F1B16]/5 space-y-1">
                    <p className="text-[11px] text-[#847C74]">Data e horário escolhidos:</p>
                    <p className="text-xs font-bold text-[#C86438] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedDate} às {selectedTime}
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-[#1F1B16]/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-[#847C74] block">Total Estimado</span>
                    <p className="text-[10px] text-[#847C74] leading-tight">*Ajuste apenas se pelagem muito embolada</p>
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#FF6D64] whitespace-nowrap font-sans">
                    R$ {estimatedTotal.toFixed(2)}
                  </span>
                </div>

                {/* Primary Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#FF6D64] hover:bg-[#E85C53] text-white font-bold text-base shadow-lg shadow-[#FF6D64]/25 hover:shadow-xl hover:shadow-[#FF6D64]/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Agendamento</span>
                </button>

                {/* Direct WhatsApp Callout */}
                <div className="text-center pt-2">
                  <p className="text-xs text-[#847C74]">
                    Prefere agendar diretamente conversando?
                  </p>
                  <a
                    href={getWhatsAppLink("Olá! Gostaria de agendar um horário para o meu pet na Cat & Dog Pet Shop.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Chamar no WhatsApp: (41) 98481-9971
                  </a>
                </div>

              </div>

              {/* Guarantees Box */}
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#1F1B16]/5 space-y-3 text-xs text-[#57524C]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Toalhas 100% esterilizadas e lacradas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C86438] shrink-0" />
                  <span>Xampus e dermocosméticos hipoalergênicos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-[#FF6D64] shrink-0" />
                  <span>Manejo positivo sem pressa ou estresse</span>
                </div>
              </div>

            </div>

          </form>
        )}

      </div>
    </section>
  );
}
