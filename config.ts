import { CarConfig, GlobalConfig } from './types';

export const globalConfig: GlobalConfig = {
  header: {
    brandName: "Omoda e Jaecoo",
    logoUrl: "logo-white.png",
    logoUrl2: "logo-black.png",
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
    copyright: "Omoda e Jaecoo ADTSA Concessionária. Todos os direitos reservados.",
    links: {
      terms: "Termos de Uso",
      privacy: "Política de Privacidade"
    }
  }
};

// Registry of cars. The key is the URL slug.
export const cars: Record<string, CarConfig> = {
  'omodae5': {
    slug: 'omodae5',
    name: 'Omoda E5',
    seo: {
      title: "Omoda E5 | SUV Elétrico com Design Futurista",
      description: "Conheça o Omoda E5, o SUV 100% elétrico com visual futurista, alta tecnologia e zero emissões."
    },
    hero: {
      badge: "⚡ 100% Elétrico",
      title: {
        prefix: "Novo",
        highlight: "Omoda E5"
      },
      description: "Design futurista, performance silenciosa e tecnologia de ponta. O SUV elétrico que redefine a mobilidade.",
      socialProof: "Tecnologia elétrica de última geração"
    },
    gallery: [
      "omodae5/1.jpg",
      "omodae5/2.jpg",
      "omodae5/3.jpg",
      "omodae5/4.jpg",
      "omodae5/5.jpg"
    ]
  },

  'jaecoo7': {
    slug: 'jaecoo7',
    name: 'Jaecoo 7',
    seo: {
      title: "Jaecoo 7 | SUV Premium com DNA Off-Road",
      description: "O Jaecoo 7 combina luxo, robustez e tecnologia para quem busca performance dentro e fora da cidade."
    },
    hero: {
      badge: "🌍 Espírito Off-Road",
      title: {
        prefix: "Novo",
        highlight: "Jaecoo 7"
      },
      description: "Sofisticação urbana com capacidade off-road. Um SUV premium preparado para qualquer terreno.",
      socialProof: "Conforto premium com tração inteligente"
    },
    gallery: [
      "jaecoo7/1.jpg",
      "jaecoo7/2.jpg",
      "jaecoo7/3.jpg",
      "jaecoo7/4.jpg",
      "jaecoo7/5.jpg"
    ]
  },

  'omoda5hev': {
    slug: 'omoda5hev',
    name: 'Omoda 5 HEV',
    seo: {
      title: "Omoda 5 HEV | SUV Híbrido Inteligente",
      description: "Eficiência, design arrojado e tecnologia híbrida. Omoda 5 HEV: mais economia e performance no dia a dia."
    },
    hero: {
      badge: "♻️ Tecnologia Híbrida",
      title: {
        prefix: "Novo",
        highlight: "Omoda 5 HEV"
      },
      description: "Um SUV híbrido que une eficiência energética, design ousado e conectividade avançada.",
      socialProof: "Mais autonomia e menor consumo"
    },
    gallery: [
      "omoda5hev/1.jpg",
      "omoda5hev/2.jpg",
      "omoda5hev/3.jpg",
      "omoda5hev/4.jpg",
      "omoda5hev/5.jpg"
    ]
  },

  'omoda7phev': {
    slug: 'omoda7phev',
    name: 'Omoda 7 PHEV',
    seo: {
      title: "Omoda 7 PHEV | SUV Híbrido Plug-in de Alta Performance",
      description: "Potência, tecnologia e eficiência com recarga elétrica. Omoda 7 PHEV é o futuro dos SUVs híbridos."
    },
    hero: {
      badge: "🔌 Plug-in Hybrid",
      title: {
        prefix: "Novo",
        highlight: "Omoda 7 PHEV"
      },
      description: "Performance elevada com condução elétrica no dia a dia. O SUV híbrido plug-in que entrega o máximo.",
      socialProof: "Autonomia elétrica + motor a combustão"
    },
    gallery: [
      "omoda7phev/1.jpg",
      "omoda7phev/2.jpg",
      "omoda7phev/3.jpg",
      "omoda7phev/4.jpg",
      "omoda7phev/5.jpg"
    ]
  }
};
