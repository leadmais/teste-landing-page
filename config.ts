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
  'kona': {
    slug: 'kona',
    name: 'Hyundai KONA Híbrido',
    seo: {
      title: "Novo Hyundai KONA Híbrido",
      description: "Conheça o novo Hyundai KONA Híbrido. Design futurista, tecnologia de ponta e máxima eficiência."
    },
    hero: {
      badge: "⚡ Lançamento 2025",
      title: {
        prefix: "Novo Hyundai",
        highlight: "KONA Híbrido"
      },
      description: "O SUV que redefine o futuro. Design futurista, máxima eficiência energética e tecnologia de ponta para você ir mais longe.",
      socialProof: "+120 Test Drives agendados esta semana"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'hb20': {
    slug: 'hb20',
    name: 'Novo Hyundai HB20',
    seo: {
      title: "Novo HB20 Nova Geração",
      description: "Chegou o Novo HB20. Mais tecnologia, segurança e design arrojado. Confira as condições especiais."
    },
    hero: {
      badge: "🔥 Best-Seller",
      title: {
        prefix: "Nova Geração",
        highlight: "Hyundai HB20"
      },
      description: "O hatch mais amado do Brasil evoluiu. Tecnologia de segurança avançada, novo design e conforto superior.",
      socialProof: "O carro mais vendido da categoria"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  },
  'creta': {
    slug: 'creta',
    name: 'Hyundai Creta N Line',
    seo: {
      title: "Hyundai Creta N Line | SUV Esportivo",
      description: "Esportividade e sofisticação no SUV líder da categoria. Conheça o Creta N Line."
    },
    hero: {
      badge: "🏁 Versão Esportiva",
      title: {
        prefix: "Novo Hyundai",
        highlight: "Creta N Line"
      },
      description: "A união perfeita entre performance, design esportivo exclusivo e a tecnologia SmartSense.",
      socialProof: "Últimas unidades com IPI reduzido"
    },
    gallery: [
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg",
      "kona/1.jpg"
    ]
  }
};