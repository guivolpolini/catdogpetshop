"use client";

import { useState } from "react";
import { Calendar, Clock, Sparkles, Scissors, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

export function BookingSection() {
  const [tutorName, setTutorName] = useState("");
  const [phone, setPhone] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("Cão Pequeno");
  const [service, setService] = useState("Banho Completo");
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("Manhã (09h - 12h)");
  const [notes, setNotes] = useState("");

  const services = [
    {
      id: "Banho Completo",
      name: "Banho Completo",
      desc: "Água morna, produtos hipoalergênicos, secagem suave e toalha esterilizada individual.",
      icon: Sparkles,
    },
    {
      id: "Banho + Tosa Higiênica",
      name: "Banho + Tosa Higiênica",
      desc: "Banho completo com limpeza e tosa das patinhas, região íntima e contorno dos olhos.",
      icon: Scissors,
    },
    {
      id: "Banho + Tosa Geral / Tesoura",
      name: "Banho + Tosa Geral / Tesoura",
      desc: "Banho completo com tosa na máquina ou tesoura no padrão da raça ou preferência.",
      icon: Scissors,
    },
  ];

  const petTypes = ["Cão Pequeno (até 10kg)", "Cão Médio (11 a 20kg)", "Cão Grande (+20kg)", "Gato"];
  const periods = ["Manhã (09h - 12h)", "Tarde (13h - 17h)"];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date ? new Date(date + "T00:00:00").toLocaleDateString("pt-BR") : "A combinar";

    const message = [
      `*Olá, Cat & Dog Pet Shop! Gostaria de agendar Banho e Tosa:*`,
      ``,
      `🐾 *Pet:* ${petName || "Não informado"} (${petType})`,
      `👤 *Tutor:* ${tutorName || "Não informado"}`,
      `📱 *Telefone:* ${phone || "Não informado"}`,
      `✂️ *Serviço:* ${service}`,
      `📅 *Data pretendida:* ${formattedDate}`,
      `⏰ *Período preferido:* ${period}`,
      notes ? `📝 *Observações:* ${notes}` : "",
      ``,
      `_Enviado pelo site oficial Cat & Dog Pet Shop_`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = getWhatsAppLink(message);
    window.open(url, "_blank");
  };

  return (
    <section id="agendamento" className="py-20 lg:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho simples e direto */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F2D96]/10 text-[#4F2D96] text-xs font-bold uppercase tracking-wider">
            Agendamento Rápido
          </span>
          <h2 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4F2D96]">
            Agende o Banho e Tosa do Seu Pet
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Preencha os dados abaixo para enviar diretamente para o nosso WhatsApp e confirmar o melhor horário na <strong>Alameda São Caetano</strong>.
          </p>
        </div>

        {/* Formulário limpo e direto em 1 tela */}
        <form
          onSubmit={handleWhatsAppBooking}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8"
        >
          {/* 1. Seleção de Serviço (só banho e tosa) */}
          <div className="space-y-3">
            <label className="block font-sans text-sm font-bold text-[#4F2D96] uppercase tracking-wide">
              1. Escolha o Serviço
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {services.map((s) => {
                const Icon = s.icon;
                const isSelected = service === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-[#4F2D96] bg-[#4F2D96]/5 ring-2 ring-[#4F2D96]/20"
                        : "border-stone-200 hover:border-stone-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-xl ${isSelected ? "bg-[#4F2D96] text-white" : "bg-stone-100 text-stone-600"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-[#4F2D96] bg-[#4F2D96]" : "border-stone-300"}`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                    <span className="font-bold text-sm text-[#4F2D96] block mb-1">{s.name}</span>
                    <span className="text-xs text-stone-500 leading-snug">{s.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Dados do Pet e do Tutor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                Nome do Pet *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Thor, Mel, Nina..."
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                Porte do Pet
              </label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 bg-white focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
              >
                {petTypes.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                Seu Nome (Tutor) *
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome completo"
                value={tutorName}
                onChange={(e) => setTutorName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                WhatsApp de Contato *
              </label>
              <input
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
              />
            </div>
          </div>

          {/* 3. Data e Período */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                Data de Preferência *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 bg-white focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                Período Preferido
              </label>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 bg-white focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
              >
                {periods.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Observações opcionais */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
              Observações (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: É idoso, tem medo de secador, tem pele sensível..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 focus:outline-none focus:border-[#4F2D96] focus:ring-1 focus:ring-[#4F2D96]"
            />
          </div>

          {/* Botão de Envio */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#4F2D96] hover:bg-[#3d2275] text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#4F2D96]" />
              <span>Confirmar Agendamento pelo WhatsApp</span>
            </button>
            <p className="text-center text-xs text-stone-500 mt-3 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Retornamos em poucos minutos para confirmar o seu horário.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
}
