export const BUSINESS_INFO = {
  name: "Cat & Dog Pet Shop",
  tagline: "Especialistas em Banho e Tosa com Cuidado e Carinho Familiar",
  primaryService: "Banho e Tosa",
  address: {
    street: "Alameda São Caetano, 2493",
    neighborhood: "Santa Maria",
    city: "São Caetano do Sul",
    state: "SP",
    zipCode: "09560-500",
    full: "Alameda São Caetano, 2493 — Santa Maria, São Caetano do Sul — SP, 09560-500",
    googleMapsUrl: "https://maps.google.com/?q=Alameda+S%C3%A3o+Caetano,+2493+-+Santa+Maria,+S%C3%A3o+Caetano+do+Sul+-+SP,+09560-500",
    wazeUrl: "https://waze.com/ul?q=Alameda+S%C3%A3o+Caetano,+2493+-+Santa+Maria,+S%C3%A3o+Caetano+do+Sul",
  },
  phones: {
    whatsapp: "(41) 98481-9971",
    whatsappRaw: "5541984819971",
    landline: "(11) 97492-5931",
    landlineRaw: "5511974925931",
  },
  social: {
    instagram: "@catdogscs",
    instagramUrl: "https://www.instagram.com/catdogscs",
  },
  rating: {
    score: 4.6,
    totalReviews: 56,
    stars: 5,
  },
  hours: [
    { days: "Segunda a Sexta", hours: "08:30 às 18:00" },
    { days: "Sábado", hours: "08:30 às 17:00" },
    { days: "Domingo e Feriados", hours: "Fechado" },
  ],
};

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${BUSINESS_INFO.phones.whatsappRaw}`;
  if (!message) {
    return `${base}?text=${encodeURIComponent("Olá! Gostaria de informações sobre o banho e tosa na Cat & Dog Pet Shop.")}`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const SERVICES = [
  {
    id: "banho-relaxante",
    title: "Banho Relaxante & Hidratante",
    subtitle: "Para cães de todos os portes e pelagens",
    description:
      "Água morna em temperatura monitorada, cosméticos hipoalergênicos de grau dermatológico, massagem relaxante durante a lavagem e secagem silenciosa para total bem-estar do seu pet.",
    highlights: [
      "Toalhas 100% esterilizadas e lacradas individualmente",
      "Xampus com pH balanceado específico para cada tipo de pele",
      "Limpeza auricular cuidadosa e corte de unhas inclusos",
      "Perfumes suaves dermatologicamente testados (opcional)",
    ],
    badge: "Mais Procurado",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Olá! Gostaria de agendar um Banho Relaxante para o meu cãozinho.",
  },
  {
    id: "tosa-especializada",
    title: "Tosa da Raça & Na Tesoura",
    subtitle: "Estética refinada e respeito à anatomia",
    description:
      "Acabamento artesanal feito por profissionais que entendem o padrão de cada raça (Shih Tzu, Poodle, Spitz, Golden, Maltês, Schnauzer) ou personalização conforme a preferência da família.",
    highlights: [
      "Tosa padrão oficial ou estilizada sob medida",
      "Lâminas resfriadas e higienizadas a cada atendimento",
      "Acabamento impecável em tesoura japonesa",
      "Preservação do bem-estar e conforto térmico",
    ],
    badge: "Especialidade",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Olá! Gostaria de consultar valores e agendar uma Tosa na Tesoura / Padrão da Raça.",
  },
  {
    id: "tosa-higienica",
    title: "Tosa Higiênica & Manutenção",
    subtitle: "Saúde, conforto e prevenção de nós",
    description:
      "Aparo cuidadoso da região genital, perianal, almofadinhas das patinhas (coxins) e limpeza dos olhos para garantir higiene diária e evitar escorregões no piso.",
    highlights: [
      "Proteção das patas contra acúmulo de sujeira e umidade",
      "Livre passagem de ar nas áreas sensíveis",
      "Prevenção de dermatites e nós embaraçados",
      "Incluso em pacotes periódicos com condições especiais",
    ],
    badge: "Essencial",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Olá! Gostaria de agendar um banho com tosa higiênica para o meu pet.",
  },
  {
    id: "cuidados-felinos",
    title: "Espaço & Banho Dedicado a Gatos",
    subtitle: "Tranquilidade, respeito e baixo estresse",
    description:
      "Atendimento sensível e adaptado à rotina dos felinos. Horários silenciosos, manejo cat-friendly sem movimentos bruscos, toalhas especiais e profissionais com paciência e técnica específica.",
    highlights: [
      "Ambiente seguro com contenção suave e sem cães próximos",
      "Escovação cuidadosa para remoção de subpelo e nós",
      "Secagem lenta com soprador em velocidade suave",
      "Higienização delicada de orelhas e corte das pontas das garras",
    ],
    badge: "Cat-Friendly",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Olá! Gostaria de informações sobre o atendimento e banho para gatos na Cat & Dog.",
  },
  {
    id: "hidratacao-cronograma",
    title: "Hidratação Profunda & Spa de Pelagem",
    subtitle: "Nutrição e brilho sedoso duradouro",
    description:
      "Tratamentos com máscaras de óleos vegetais nobres, manteiga de karité e queratina hidrolisada para devolver o brilho, maciez e facilitar a escovação diária em casa.",
    highlights: [
      "Recuperação imediata de pelos ressecados e opacos",
      "Redução drástica de nós e frizz",
      "Fragrância nobre com fixação suave",
      "Sensação aveludada ao toque",
    ],
    badge: "Premium Spa",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Olá! Gostaria de adicionar um tratamento de hidratação profunda no banho do meu pet.",
  },
];

export const PILLARS = [
  {
    title: "Profissionais Atenciosos e Capacitados",
    description:
      "Nossa equipe é formada por apaixonados por animais treinados em técnicas de manejo positivo. Seu companheiro é tratado com paciência, carinho e respeito aos seus limites.",
    icon: "Heart",
  },
  {
    title: "Cosméticos de Padrão Dermatológico",
    description:
      "Utilizamos exclusivamente linhas profissionais reconhecidas, com fórmulas neutras, biodegradáveis e hipoalergênicas que preservam a camada lipídica natural da pele.",
    icon: "Award",
  },
  {
    title: "Higiene Impecável & Toalhas Seladas",
    description:
      "Ambiente higienizado continuamente. Cada pet recebe uma toalha higienizada em lavanderia hospitalar, esterilizada e lacrada individualmente antes do uso.",
    icon: "ShieldCheck",
  },
  {
    title: "Cuidado Individualizado Sem Estresse",
    description:
      "Não fazemos atendimento acelerado em linha de produção. Cada pet tem seu tempo dedicado, pausas necessárias e acompanhamento visual em todo o processo.",
    icon: "Clock",
  },
];

export const EXPERIENCE_STEPS = [
  {
    number: "01",
    phase: "Chegada & Acolhimento",
    title: "Recepção com carinho e triagem individual",
    description:
      "Avaliamos o estado da pele, pelo, orelhas e o temperamento do pet. Ouvimos as preferências do tutor sobre tosa e necessidades de saúde específicas.",
    duration: "10-15 min",
  },
  {
    number: "02",
    phase: "Preparação & Higiene Prévia",
    title: "Corte de unhas, limpeza auricular e desembolo suave",
    description:
      "Higienização dos condutos auditivos com produto antisséptico suave, corte ou lixamento seguro das unhas e escovação prévia para soltar os pelos mortos.",
    duration: "15-20 min",
  },
  {
    number: "03",
    phase: "Banho Térmico & Tratamento",
    title: "Água morna, massagem e cosméticos selecionados",
    description:
      "Dois enxágues completos, aplicação de xampu neutro hipoalergênico, máscara condicionadora nutritiva e secagem térmica cuidadosa sem calor excessivo.",
    duration: "30-45 min",
  },
  {
    number: "04",
    phase: "Tosa & Toque Final",
    title: "Corte artesanal, perfumação suave e entrega feliz",
    description:
      "Execução da tosa higiênica ou artística na tesoura, checagem minuciosa de simetria, adorno suave (se aprovado) e pet pronto, cheiroso e tranquilo para voltar para casa.",
    duration: "20-40 min",
  },
];

export const REVIEWS = [
  {
    author: "Mariana Alencar",
    pet: "Tutora do Bento (Golden Retriever)",
    rating: 5,
    date: "Avaliação Google",
    comment:
      "O melhor lugar de São Caetano! O Bento é um Golden gigante e bem ansioso, e na Cat & Dog ele é tratado com um amor inexplicável. Sai sempre cheiroso, pelo escovado impecável e muito feliz. Não troco por nada!",
  },
  {
    author: "Carlos Eduardo Pires",
    pet: "Tutor da Luna (Shih Tzu)",
    rating: 5,
    date: "Avaliação Google",
    comment:
      "A tosa na tesoura que fazem na Luna é uma verdadeira obra de arte. As patinhas ficam perfeitas, rostinho redondinho e o pelo super macio. Atendimento pontual e equipe muito honesta e prestativa.",
  },
  {
    author: "Patrícia V. Mendonça",
    pet: "Tutora do Mingau e da Pipoca (Gatos)",
    rating: 5,
    date: "Avaliação Google",
    comment:
      "Quem tem gato sabe o pavor de levar para banho. Na Cat & Dog eles têm uma paciência de ouro e um cuidado ímpar com felinos. Voltam calmos, sem estresse nenhum e com cheirinho bem delicado. Recomendo de olhos fechados!",
  },
  {
    author: "Fernando S. Guimarães",
    pet: "Tutor do Thor (Buldogue Francês)",
    rating: 5,
    date: "Avaliação Google",
    comment:
      "O Thor tem a pele super sensível com alergias frequentes. Desde que passamos a dar banho aqui com os produtos hipoalergênicos e toalhas individuais seladas, nunca mais teve dermatite. Nota 10!",
  },
  {
    author: "Renata Zampieri",
    pet: "Tutora da Mel (Spitz Alemão)",
    rating: 5,
    date: "Avaliação Google",
    comment:
      "Ambiente impecavelmente limpo, sem cheiro forte de outros animais, funcionários educados e carinhosos. Dá para ver pela janela a dedicação com que cuidam de cada bichinho. Vale cada centavo.",
  },
  {
    author: "Lucas Rodrigues",
    pet: "Tutor do Fred (Vira-lata SRD)",
    rating: 5,
    date: "Avaliação Google",
    comment:
      "Adotamos o Fred bem assustado. O acolhimento da equipe foi fantástico desde o primeiro dia. Hoje ele chega na Alameda São Caetano abanando o rabo para entrar. Confiança total!",
  },
];

export const GALLERY_ITEMS = [
  {
    title: "Golden Retriever com pelagem sedosa e tosa higiênica",
    category: "Cães de Grande Porte",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    tag: "Hidratação & Banho",
  },
  {
    title: "Gato Persa com escovação profunda e higiene delicada",
    category: "Felinos Especiais",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    tag: "Espaço Cat-Friendly",
  },
  {
    title: "Shih Tzu com acabamento artesanal de tosa na tesoura",
    category: "Tosa Estilizada",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    tag: "Tosa Baby na Tesoura",
  },
  {
    title: "Spitz Alemão com escovação de subpelo e volume perfeito",
    category: "Cães de Pelagem Dupla",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    tag: "Spa & Brilho",
  },
  {
    title: "Maltês branquinho com hidratação e laço sutil",
    category: "Banho & Spa",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
    tag: "Clareamento Suave",
  },
  {
    title: "Gato Rajado descansando tranquilo pós-higienização",
    category: "Manejo Sem Estresse",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
    tag: "Bem-estar Felino",
  },
];

export const FAQS = [
  {
    question: "Como funciona o agendamento de banho e tosa?",
    answer:
      "O agendamento é feito diretamente pelo nosso WhatsApp de forma rápida e prática. Basta clicar nos botões do site, informar o porte, a raça e o tipo de serviço desejado que nossa equipe passa as opções de horários e valores exatos para o seu pet.",
  },
  {
    question: "As toalhas são realmente individuais e esterilizadas?",
    answer:
      "Sim, 100%! Temos protocolo rigoroso de biossegurança: todas as toalhas são lavadas e esterilizadas em temperatura controlada por lavanderia profissional especializada e embaladas individualmente em plástico lacrado. Uma toalha nunca é reutilizada entre animais.",
  },
  {
    question: "Vocês atendem gatos? Eles não ficam estressados?",
    answer:
      "Sim! Atendemos gatos com protocolo diferenciado: agendamos em horários mais calmos, com equipe treinada em manejo sem estresse e sem presença barulhenta de cães ao lado. Priorizamos o tempo e conforto do felino.",
  },
  {
    question: "Quais produtos vocês utilizam na higienização?",
    answer:
      "Trabalhamos exclusivamente com linhas profissionais de alta qualidade dermatológica, com formulações biodegradáveis, hipoalergênicas e com pH fisiológico adequado para a pele sensível de cães e gatos.",
  },
  {
    question: "Onde fica a loja e tem local para estacionar?",
    answer:
      "Estamos localizados na Alameda São Caetano, 2493, no bairro Santa Maria em São Caetano do Sul — SP. O local conta com parada facilitada bem em frente para embarque e desembarque seguro do seu pet.",
  },
];
