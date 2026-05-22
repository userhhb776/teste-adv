/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Module {
  id: string;
  order: string;
  title: string;
  description: string;
  duration: string;
  lessons: string[];
  tools: string[];
  importance: "Crítico" | "Essencial" | "Avançado";
}

export interface Bonus {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  value: string;
  badge: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  billing: string;
  description: string;
  telegramAccess: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  classification: string;
}

// Highly persuasive copywriting and structured data for the Dark Cipher Info-product
export const modulesData: Module[] = [
  {
    id: "mod-1",
    order: "01",
    title: "Fundamentos de OpSec (A Armadura Invisível)",
    description: "Aprenda a pensar como um fantasma digital. O maior vetor de falhas de segurança nunca é técnico, é comportamental. Construiremos seu modelo de ameaças antes de qualquer clique.",
    duration: "4 Horas • Conteúdo Prático",
    lessons: [
      "Conceito de OpSec (Operations Security) aplicado ao dia a dia",
      "Modelagem de Ameaças: Quem quer rastrear você e por quê?",
      "Compartimentalização de Identidades (Pseudônimos Sistêmicos)",
      "Vazamentos involuntários e análise de metadados comportamentais",
      "Casos Reais: Como os maiores nomes do underground caíram por falhas simples"
    ],
    tools: ["Threat Modeling Matrix", "O.S.I.N.T. Self-Analysis", "EXIF Scrubber"],
    importance: "Crítico"
  },
  {
    id: "mod-2",
    order: "02",
    title: "Sistemas Operacionais Hostis ao Rastreamento",
    description: "Livre-se do Windows e do MacOS que reportam cada ação sua para servidores de big-techs. Vamos dominar o Tails OS, Whonix e Qubes OS em nível tático.",
    duration: "6 Horas • Laboratórios Guiados",
    lessons: [
      "Tails OS: O sistema operacional amnésico definitivo de inicialização USB",
      "Whonix: Roteamento de tráfego em sandboxes blindadas de nível militar",
      "Qubes OS: Virtualização modular baseada em hipervisores Xen",
      "Hardening de Kernel: Bloqueando vulnerabilidades em hardware e firmware",
      "Configuração de drives criptografados de auto-destruição ativa"
    ],
    tools: ["Tails OS", "Whonix Gateway", "VeraCrypt Engine", "KeePassXC Password Vault"],
    importance: "Crítico"
  },
  {
    id: "mod-3",
    order: "03",
    title: "Redes Criptografadas, Proxies e Roteamento Avançado",
    description: "VPNs comerciais mentem sobre 'no-logs'. Descubra como criar sua própria infraestrutura de roteamento e como trafegar na rede Tor e I2P sem expor sua assinatura.",
    duration: "5 Horas • Teoria & Prática",
    lessons: [
      "A verdade oculta sobre as VPNs comerciais e governos",
      "Cadeia Dinâmica de Proxies (ProxyChains) e SSH Tunnels privados",
      "Configurando sua VPN autohospedada em servidores VPS soberanos",
      "Rede Tor em profundidade: Pontes Obscuras (OBFS4) e Onion Routing",
      "Relação de nós de saída e prevenção de ataques de interferência temporal"
    ],
    tools: ["Dynamic ProxyChains", "WireGuard Sovereign Server", "Tor Bridges (OBFS4)", "I2P Network router"],
    importance: "Essencial"
  },
  {
    id: "mod-4",
    order: "04",
    title: "Comunicação Criptografada & Metadata Eradication",
    description: "Como trocar informações absolutamente confidenciais sem deixar rastros remotos. Mensageiros, e-mails descartáveis e limpeza total de identificadores de arquivos.",
    duration: "3 Horas • Passo a Passo",
    lessons: [
      "Segurança e criptografia ponta-a-ponta em Mensageiros (Signal vs Matrix/Element)",
      "Email autônomo com chaves PGP (Pretty Good Privacy) manuais",
      "Eliminação de assinatura digital e metadados de arquivos (PDFs, Imagens, Vídeos)",
      "Uso de números virtuais (VoiP) e Chips anônimos de operadoras estrangeiras",
      "Armazenamento em Nuvem soberana zero-knowledge"
    ],
    tools: ["GnuPG", "Element (Matrix)", "Metadata Anonymisation Toolkit (MAT2)", "Proton Mail PGP Integration"],
    importance: "Essencial"
  },
  {
    id: "mod-5",
    order: "05",
    title: "Finanças Anônimas e Cripto-Ativos Intrastreáveis",
    description: "O dinheiro físico está morrendo e as moedas digitais normais (Bitcoin) são públicas e rastreáveis. Aprenda a lavar ativos digitais legitimamente através de Monero (XMR).",
    duration: "5 Horas • Masterclass Prática",
    lessons: [
      "O Livro Aberto do Bitcoin: Por que a blockchain do BTC entrega você",
      "Monero (XMR): Protocolo CryptoNote, Ring Signatures e RingCT em detalhes",
      "Como obter criptoativos No-KYC (Sem verificação de identidade oficial)",
      "P2P (Peer-to-Peer) seguro e trocas descentralizadas (DEX)",
      "Guia completo de transações intangíveis e autodefesa financeira digital"
    ],
    tools: ["Monero GUI Wallet (Ledger/Tails)", "Haveno DEX", "Bisq P2P Trading", "Samourai Coinjoin (conceituado)"],
    importance: "Avançado"
  }
];

export const bonusesData: Bonus[] = [
  {
    id: "bonus-1",
    title: "O Repositório Dark Cipher",
    subtitle: "Biblioteca Secreta de Scripts & Checklists",
    description: "Scripts bash e customizações testadas em batalha para fechar as brechas de telemetria do Linux instantaneamente, além de checklists interativas de OpSec antes de missões digitais.",
    value: "R$ 297,00",
    badge: "EXCLUSIVO VIP"
  },
  {
    id: "bonus-2",
    title: "Mentoria Mensal 'Black Chamber'",
    subtitle: "Lives de Análise de Ameaças em Tempo Real",
    description: "Sessões ao vivo a cada 30 dias com o criador e especialistas para revisar novos vazamentos mundiais, táticas de vigilância estatal emergentes e auditoria ao vivo dos seus setups.",
    value: "R$ 497,00",
    badge: "MENSAL • AO VIVO"
  },
  {
    id: "bonus-3",
    title: "Comunidade Clandestina no Telegram",
    subtitle: "Networking Criptografado & Resoluções de Dúvidas",
    description: "Um ecossistema fechado de operadores legítimos, pesquisadores de infosec e entusiastas do anonimato compartilham alertas de segurança antes de virar notícia em portais convencionais.",
    value: "R$ 397,00",
    badge: "ACESSO SUPREMO"
  }
];

export const plansData: Plan[] = [
  {
    id: "plan-monthly",
    name: "Acesso Cipher Mensal",
    price: "87",
    originalPrice: "147",
    billing: "mês",
    description: "Ideal para testar a dinâmica e iniciar sua blindagem cibernética básica.",
    telegramAccess: "Grupo VIP Telegram (Enquanto a assinatura durar)",
    features: [
      "Acesso completo aos Módulos 1, 2 e 3",
      "Participação no Grupo VIP de Negócios e Dúvidas",
      "Novos materiais liberados semanalmente",
      "Scripts de Hardening de Sistemas Operacionais",
      "Suporte exclusivo direto no chat privado"
    ],
    isPopular: false,
    ctaText: "Infiltrar no Protocolo Mensal"
  },
  {
    id: "plan-annual",
    name: "Cipher Master Anual",
    price: "497",
    originalPrice: "897",
    billing: "ano",
    description: "O passaporte definitivo para quem busca domínio absoluto sobre sua pegada digital e quer tornar-se invisível a longo prazo.",
    telegramAccess: "Acesso total + Atualizações prioritárias por 12 meses",
    features: [
      "Acesso ilimitado a TODOS os 5 Módulos e futuras atualizações",
      "Todos os 3 Bônus Exclusivos inclusos imediatamente",
      "Acesso integral ao Repositório Dark Cipher de Scripts",
      "Análise de Segurança Individual do seu Setup na mentoria",
      "Desconto de 50% em renovações futuras automáticas",
      "Certificado digital de soberania virtual"
    ],
    isPopular: true,
    ctaText: "Garantir Blindagem Anual (Melhor Oferta)"
  },
  {
    id: "plan-lifetime",
    name: "Acesso Soberano Vitalício",
    price: "997",
    originalPrice: "1.997",
    billing: "pagamento único",
    description: "Para os poucos comprometidos em carregar a bandeira da privacidade incondicional pelo resto de suas vidas. Sem assinaturas recurrentes.",
    telegramAccess: "Acesso permanente ao círculo restrito interno",
    features: [
      "Acesso VITALÍCIO a toda a estrutura Dark Cipher",
      "Acesso prioritário em novos grupos secretos secundários",
      "Câmaras internas de debate e pesquisas alfa de exploits",
      "Chave criptográfica PGP exclusiva para contato direto Premium",
      "Mentoria 'Black Chamber' vitalícia inclusa sem taxas extras"
    ],
    isPopular: false,
    ctaText: "Tornar-se Eternamente Indetectável"
  }
];

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Preciso ter conhecimento prévio em programação ou Linux?",
    answer: "Não. O Dark Cipher foi estruturado para levar você do zero absoluto até as configurações mais complexas de OpSec. Explicamos cada linha de comando e conceito científico com analogias simples e tutoriais práticos na tela. Se você sabe abrir um navegador, você consegue aplicar o método.",
    classification: "Requisitos"
  },
  {
    id: "faq-2",
    question: "Isso que vocês ensinam é legalizado dentro de lei vigente?",
    answer: "Sim, absolutamente. A privacidade, o anonimato digital e o direito à criptografia robusta são prerrogativas da autodefesa individual e da liberdade civil garantidas por leis internacionais e constitucionais. Não ensinamos ataques de engenharia social, intrusão cibernética ou atividades ilícitas, mas sim como EVITAR ser hackeado, espionado e violado.",
    classification: "Legalidade"
  },
  {
    id: "faq-3",
    question: "Como funciona a entrega do acesso após o pagamento?",
    answer: "O envio é 100% automatizado e imediato. Uma vez confirmado o pagamento (mesmo por Pix, que demora poucos segundos), você receberá um e-mail com as instruções de entrada segura no bot do Telegram que fará sua verificação e aprovará sua entrada automática na rede fechada do Dark Cipher.",
    classification: "Infiltração"
  },
  {
    id: "faq-4",
    question: "Quais são as alternativas se eu não me adaptar ou achar difícil?",
    answer: "Oferecemos uma Garantia Incondicional de Backup de 7 dias. Se você achar o conteúdo complexo ou concluir que ter privacidade absoluta dá muito trabalho, basta acionar nosso suporte por e-mail no painel com 1 clique e faremos o reembolso integral do seu investimento imediato sem questionamentos.",
    classification: "Garantias"
  },
  {
    id: "faq-5",
    question: "Preciso de um computador caro ou múltiplos computadores?",
    answer: "Absolutamente não. A maioria dos sistemas amnésicos como o Tails OS rodam diretamente na memória RAM via um pendrive simples de R$ 30,00 conectado em qualquer computador ou notebook comum, sem alterar nada no seu sistema operacional principal atuais.",
    classification: "Hardware"
  }
];
