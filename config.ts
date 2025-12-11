import { GlobalConfig, CarConfig } from './types';

export const globalConfig: GlobalConfig = {
  header: {
    brandName: "Hyundai Auto",
    whatsappUrl: "https://wa.me/",
    instagramUrl: "https://instagram.com/"
  },
  form: {
    title: "Agende seu Test Drive",
    fields: {
      name: { label: "Nome completo", placeholder: "Seu nome" },
      email: { label: "E-mail", placeholder: "seu@email.com" },
      phone: { label: "Telefone (WhatsApp)", placeholder: "(00) 00000-0000" },
      consent: { label: "Concordo em receber contato para agendamento." }
    },
    button: {
      default: "Quero Agendar Agora",
      loading: "Enviando..."
    },
    footer: "Seus dados estão protegidos."
  },
  thankYou: {
    title: "Solicitação Enviada!",
    message: "Recebemos seu interesse.\nUm de nossos consultores entrará em contato via WhatsApp em breve para confirmar seu agendamento.",
    button: "Voltar para o site"
  },
  footer: {
    copyright: "Hyundai Auto Concessionária. Todos os direitos reservados.",
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
      title: "Novo Hyundai KONA Híbrido | Agende seu Test Drive",
      description: "Conheça o novo Hyundai KONA Híbrido. Design futurista, tecnologia de ponta e máxima eficiência."
    },
    hero: {
      badge: "⚡ Lançamento 2024",
      title: {
        prefix: "Novo Hyundai",
        highlight: "KONA Híbrido"
      },
      description: "O SUV que redefine o futuro. Design futurista, máxima eficiência energética e tecnologia de ponta para você ir mais longe.",
      socialProof: "+120 Test Drives agendados esta semana"
    },
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80"
    ]
  },
  'hb20': {
    slug: 'hb20',
    name: 'Novo Hyundai HB20',
    seo: {
      title: "Novo HB20 Nova Geração | Agende seu Test Drive",
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
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80", // Generic blue hatch
      "https://images.unsplash.com/photo-1583121274602-3e2820c698d2?auto=format&fit=crop&w=800&q=80", // Interior
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80", // Car in street
      "https://images.unsplash.com/photo-1471444359522-d5d83e2d5369?auto=format&fit=crop&w=800&q=80"  // Detail
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
      "https://images.unsplash.com/photo-1570733117311-d990c3816c47?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80"
    ]
  }
};