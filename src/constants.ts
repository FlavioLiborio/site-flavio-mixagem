import type { Feature, Testimonial, FaqItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Flavio Liborio",
    description: "O mesmo processo técnico utilizado nas grandes gravadoras. Profundidade, clareza e punch que colocam sua track no topo das playlists.",
    iconName: "Disc"
  },
  {
    id: 2,
    title: "Híbrido: Analógico & Digital",
    description: "A precisão cirúrgica dos plugins digitais somada ao calor e harmônicos dos equipamentos valvulados clássicos.",
    iconName: "Sliders"
  },
  {
    id: 3,
    title: "Acústica & Percepção",
    description: "Não é sobre gear, é sobre ouvido. 25 anos treinando a percepção auditiva para tomar decisões rápidas e assertivas na mix.",
    iconName: "Headphones"
  },
  {
    id: 4,
    title: "Masterização para Streaming",
    description: "Sua música soando alto e dinâmica em todas as plataformas (Spotify, Apple Music, Tidal) respeitando os padrões de LUFS atuais.",
    iconName: "Activity"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rick B.",
    role: "Produtor Musical",
    content: "O Flávio tem o ouvido absoluto para o que o mercado pede. Ele transformou uma guia caseira em um hit de rádio. A master ficou gigante.",
    avatarUrl: "https://picsum.photos/100/100?grayscale&random=10"
  },
  {
    id: 2,
    name: "Mariana S.",
    role: "Cantora Pop",
    content: "Trabalhar com alguém que tem 25 anos de casa faz toda diferença. Ele entendeu a emoção da música e traduziu isso tecnicamente.",
    avatarUrl: "https://picsum.photos/100/100?grayscale&random=20"
  },
  {
    id: 3,
    name: "Carlos D.",
    role: "Engenheiro de Som",
    content: "O curso de mixagem do Flávio abriu minha mente. Parei de copiar presets e comecei a realmente ouvir e mixar com propósito.",
    avatarUrl: "https://picsum.photos/100/100?grayscale&random=30"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Para quem é este treinamento/serviço?",
    answer: "Tanto para produtores que querem elevar o nível de suas produções em Home Studio, quanto para engenheiros que buscam o refinamento de 25 anos de mercado."
  },
  {
    id: 2,
    question: "Qual a diferença de Mixagem e Masterização?",
    answer: "A Mixagem equilibra os elementos individuais (bateria, voz, baixo). A Masterização é o polimento final, garantindo volume e consistência para o lançamento comercial."
  },
  {
    id: 3,
    question: "Você utiliza quais DAWs?",
    answer: "A metodologia se aplica a qualquer DAW (Pro Tools, Logic, Ableton, Reaper). O foco é no conceito sonoro e no fluxo de sinal, não apenas na ferramenta."
  },
  {
    id: 4,
    question: "O acesso é vitalício?",
    answer: "Sim. Ao garantir sua vaga hoje, você terá acesso vitalício às aulas, atualizações e ao grupo de networking com outros produtores."
  }
];

export const CHECKOUT_URL = "https://pay.hotmart.com/O65218212J?offDiscount=BLACKBLACK&bid=1731958017778&checkoutMode=10&off=3fizpqj6";