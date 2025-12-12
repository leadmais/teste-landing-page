import { GlobalConfig, CarConfig } from './types';

export const globalConfig: GlobalConfig = {
  header: {
    brandName: "Hyundai Terra Sana",
    whatsappUrl: "https://wa.me/",
    instagramUrl: "https://instagram.com/"
  },
  form: {
    title: "Receba a melhor oferta agora",
    fields: {
      name: { label: "Nome", placeholder: "Seu nome" },
      email: { label: "E-mail", placeholder: "seu@email.com" },
      phone: { label: "Telefone (WhatsApp)", placeholder: "(00) 00000-0000" },
      consent: { label: "Concordo em receber contato para melhor oferta." }
    },
    button: {
      default: "Receber oferta",
      loading: "Enviando..."
    },
    footer: "Seus dados estão protegidos."
  },
  thankYou: {
    title: "Solicitação enviada!",
    message: "Recebemos seu interesse.\nUm de nossos consultores entrará em contato via WhatsApp em breve.",
    button: "Voltar para o site"
  },
  footer: {
    copyright: "Hyundai Terra Sana Concessionária. Todos os direitos reservados.",
    links: {
      terms: "Termos de Uso",
      privacy: "Política de Privacidade"
    }
  }
};

// Registry of cars. The key is the URL slug.
export const cars: Record<string, CarConfig> = {
  'hb20': {
    slug: 'hb20',
    name: 'Novo Hyundai HB20',
    seo: {
      title: "Novo HB20 | O Hatch que é Líder",
      description: "Chegou o Novo HB20. Mais tecnologia, segurança e design arrojado. O hatch preferido do Brasil."
    },
    hero: {
      badge: "🔥 Best-Seller",
      title: {
        prefix: "Novo Hyundai",
        highlight: "HB20"
      },
      description: "Ousadia em cada detalhe. O Novo HB20 traz a grade frontal paramétrica e o exclusivo sistema Bluelink de carro conectado.",
      socialProof: "O carro mais vendido da categoria"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'hb20s': {
    slug: 'hb20s',
    name: 'Novo Hyundai HB20S',
    seo: {
      title: "Novo HB20S | Elegância e Tecnologia",
      description: "Conheça o novo sedan da Hyundai. HB20S: Design sofisticado, conforto superior e porta-malas inteligente."
    },
    hero: {
      badge: "✨ Design Sofisticado",
      title: {
        prefix: "Novo Hyundai",
        highlight: "HB20S"
      },
      description: "Um sedan que impressiona. Design fastback, conforto premium e a segurança do pacote Hyundai SmartSense.",
      socialProof: "Porta-malas com abertura inteligente"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'creta': {
    slug: 'creta',
    name: 'Hyundai Creta Nova Geração',
    seo: {
      title: "Creta Nova Geração | A Vida Tem Espaço Pra Mais",
      description: "O SUV que dita tendências. Teto solar panorâmico, motor turbo e muita tecnologia embarcada."
    },
    hero: {
      badge: "🚙 SUV Líder",
      title: {
        prefix: "Nova Geração",
        highlight: "Creta"
      },
      description: "Comande pelo design. O SUV mais tecnológico da categoria com teto solar panorâmico e comando de voz.",
      socialProof: "5 anos de garantia sem limite de km"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'creta-n-line': {
    slug: 'creta-n-line',
    name: 'Hyundai Creta N Line',
    seo: {
      title: "Creta N Line | Esportividade Exclusiva",
      description: "Design esportivo exclusivo, acabamento premium e performance. Conheça o lado N Line do Creta."
    },
    hero: {
      badge: "🏁 Linha Esportiva",
      title: {
        prefix: "Novo Hyundai",
        highlight: "Creta N Line"
      },
      description: "A união perfeita entre performance, design esportivo exclusivo e a grade frontal dark chrome.",
      socialProof: "Acabamento exclusivo N Line"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'kona': {
    slug: 'kona',
    name: 'Hyundai KONA Híbrido',
    seo: {
      title: "Novo KONA Híbrido | Eficiência Máxima",
      description: "O SUV híbrido com design futurista e máxima economia de combustível. Agende seu Test Drive."
    },
    hero: {
      badge: "⚡ Híbrido Inovador",
      title: {
        prefix: "Novo Hyundai",
        highlight: "KONA Híbrido"
      },
      description: "O SUV que redefine o futuro. Design futurista, máxima eficiência energética e tecnologia de ponta para você ir mais longe.",
      socialProof: "Melhor consumo da categoria"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'kona-ev': {
    slug: 'kona-ev',
    name: 'Hyundai KONA Elétrico',
    seo: {
      title: "Novo KONA Elétrico | Mobilidade Pura",
      description: "100% Elétrico. Zero emissões e torque instantâneo. O futuro da mobilidade chegou."
    },
    hero: {
      badge: "🔋 100% Elétrico",
      title: {
        prefix: "Novo Hyundai",
        highlight: "KONA EV"
      },
      description: "Autonomia surpreendente e aceleração instantânea. Experimente a liberdade de dirigir um SUV totalmente elétrico.",
      socialProof: "Autonomia de até 490km"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'tucson': {
    slug: 'tucson',
    name: 'New Tucson',
    seo: {
      title: "New Tucson | O Clássico Renovado",
      description: "O SUV mundial da Hyundai. Conforto, potência turbo e acabamento superior."
    },
    hero: {
      badge: "💎 Premium",
      title: {
        prefix: "Hyundai",
        highlight: "New Tucson"
      },
      description: "Requinte em todos os detalhes. Teto solar panorâmico, motor Turbo GDI e câmbio de dupla embreagem.",
      socialProof: "Satisfação garantida"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'ioniq-5': {
    slug: 'ioniq-5',
    name: 'Hyundai IONIQ 5',
    seo: {
      title: "IONIQ 5 | O Futuro Retrô",
      description: "Premiado mundialmente. Design paramétrico pixel e carregamento ultra-rápido."
    },
    hero: {
      badge: "🏆 World Car of the Year",
      title: {
        prefix: "Hyundai",
        highlight: "IONIQ 5"
      },
      description: "Uma obra de arte sobre rodas. Design revolucionário Parametric Pixel e plataforma modular elétrica global (E-GMP).",
      socialProof: "Vencedor de múltiplos prêmios globais"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'palisade': {
    slug: 'palisade',
    name: 'Hyundai Palisade',
    seo: {
      title: "Hyundai Palisade | Luxo em Grande Escala",
      description: "O SUV de luxo de 8 lugares. Máximo conforto, tecnologia e imponência."
    },
    hero: {
      badge: "👑 Flagship SUV",
      title: {
        prefix: "All-New",
        highlight: "Palisade"
      },
      description: "Grandiosidade em cada detalhe. Espaço para 8 passageiros com luxo absoluto e tecnologia de última geração.",
      socialProof: "O topo de linha Hyundai"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  }
};