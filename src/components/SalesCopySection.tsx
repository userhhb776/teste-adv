/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EyeOff, AlertTriangle, ShieldCheck, CornerDownRight, ArrowRight, Shield } from "lucide-react";
import CyberSimulator from "./CyberSimulator";

interface SalesCopySectionProps {
  bannerSrc: string;
  onCtaClick: () => void;
}

export default function SalesCopySection({ bannerSrc, onCtaClick }: SalesCopySectionProps) {
  return (
    <section id="sales-pitch" className="py-12 sm:py-20 px-4 sm:px-8 bg-black">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Core Header Area */}
        <div id="hero-headings" className="text-center space-y-8">
          
          {/* 1. TITLE WITH NAME OF PRODUCT */}
          <div className="space-y-2">
            <h1 id="hero-title" className="text-5xl sm:text-7xl font-mono tracking-widest font-extrabold text-white uppercase animate-text-pulse">
              DARK CIPHER
            </h1>
            <div className="h-0.5 w-24 bg-white mx-auto animate-pulse"></div>
          </div>

          {/* 2. THE IMAGE (Right below the title as requested: "coloque a imagem de baixo dele") */}
          <div id="product-artwork shadow-3xl" className="relative group border border-neutral-800 bg-neutral-950 p-2 rounded-sm overflow-hidden animate-cyber-pulse max-w-3xl mx-auto">
            <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/85 border border-neutral-850 text-[9px] font-mono tracking-wide text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              <span>EXPOSURE CONTROL: SECURE TUNNELLING ACTIVE</span>
            </div>
            <img
              id="cipher-hero-banner"
              src={bannerSrc}
              alt="Dark Cipher System Concept"
              referrerPolicy="no-referrer"
              className="w-full aspect-[16/9] object-cover grayscale brightness-95 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 filter"
            />
            {/* Decorative Terminal Overlay borders */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white"></div>
          </div>

          {/* 3. THE MANDATED SALES COPY (Right below the image as requested) */}
          <p id="hero-tagline" className="text-base sm:text-xl font-mono text-neutral-200 max-w-2xl mx-auto leading-relaxed px-2 font-medium">
            Sua última linha de defesa na internet. Domine o anonimato tático, elimine rastros de vigilância e viva soberano na era digital.
          </p>

          {/* 4. THE BUY BUTTON (Right below the text copy as requested) */}
          <div id="hero-main-action" className="text-center pt-2 pb-6">
            <button
              id="hero-buy-cta"
              onClick={onCtaClick}
              className="w-full sm:w-auto px-12 py-5 bg-white text-black hover:bg-black hover:text-white border-2 border-white font-mono font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer shadow-lg hover:shadow-white/20 flex items-center justify-center gap-4 mx-auto animate-cyber-pulse hover:animate-none"
            >
              <Shield className="w-5 h-5 animate-pulse" />
              <span>ADQUIRIR AGORA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex justify-center gap-6 mt-4 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              <span className="flex items-center gap-1">🔒 conexão ponta-a-ponta</span>
              <span>•</span>
              <span className="flex items-center gap-1">⚡ liberação imediata</span>
            </div>
          </div>

        </div>

        {/* 5. PRIMEIRA COPY / TEXTO DE VENDAS */}
        <div id="primary-copy-text" className="space-y-6 text-neutral-300 leading-relaxed font-sans text-base sm:text-lg">
          <h3 className="text-xl sm:text-2xl font-mono text-white tracking-tight border-b border-neutral-900 pb-2">
            A Ilusão Monstruosa da Sua Privacidade Online
          </h3>
          <p className="indent-8 font-light">
            Você navega no modo anônimo, usa uma VPN famosa de comercial do YouTube e acha que está fora do radar de governos, criminosos virtuais e corretores de dados. <strong>Isso é um erro capital que expõe sua identidade a cada clique.</strong>
          </p>
          <p className="font-light">
            No momento em que você lê isto, seu provedor de internet armazena seu histórico de requisições DNS. Empresas de publicidade cruzam suas coordenadas geográficas com o acelerômetro do seu celular. Redes sociais criam "perfis sombrios" de você mesmo que você nunca tenha criado uma conta nelas.
          </p>
          
          <div className="p-5 border border-neutral-900 bg-neutral-950 rounded-sm font-mono text-sm space-y-3 prose text-neutral-400">
            <div className="flex items-center gap-2 text-white text-xs font-bold border-b border-neutral-900 pb-1.5">
              <AlertTriangle className="w-4 h-4 text-white animate-pulse" />
              <span>O QUE ELES SABEM SOBRE VOCÊ AGORA:</span>
            </div>
            <ul className="space-y-2 text-[13px]">
              <li className="flex gap-2">
                <span className="text-white">»</span>
                <span><strong>A digital do seu navegador:</strong> Suas fontes de sistema, resolução de tela e WebGL geram um hash numérico único e rastreável.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white">»</span>
                <span><strong>Sua telemetria silenciosa:</strong> Microsoft, Apple e Google reportam cada pressionamento de tecla, conexões de Wi-Fi próximas e aplicativos abertos em segundo plano.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white">»</span>
                <span><strong>Seus fluxos financeiros públicos:</strong> Cada transação em Pix ou cartão consolida suas preferências diretamente em bancos de dados acessados por governos federativos.</span>
              </li>
            </ul>
          </div>
          
          <p className="font-light text-neutral-400 text-sm">
            Tornar-se indetectável não é segredo de alta espionagem para poucos. É um método repetível, uma tecnologia de rotina baseada em <strong>Segurança de Operação (OpSec)</strong>, que impede vazamento humano, combinada com protocolos técnicos impenetráveis.
          </p>
        </div>

        {/* 4. BOTÃO DE COMPRA (As requested: "depois um botão de compra") */}
        <div id="first-cta-block" className="text-center py-4">
          <button
            id="primary-buy-cta"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-black hover:text-white border border-white font-mono font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer shadow-lg hover:shadow-white/10 flex items-center justify-center gap-3 mx-auto animate-cyber-pulse hover:animate-none"
          >
            <Shield className="w-5 h-5 animate-pulse" />
            <span>ADQUIRIR AGORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex justify-center gap-6 mt-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            <span className="flex items-center gap-1">🔒 Conexão Criptografada SSL</span>
            <span className="flex items-center gap-1">⚡ Acesso Imediato</span>
          </div>
        </div>

        {/* INTERACTIVE GRAPHICS LAYER (As requested: "coloque elemtos graficos e deixe a página intuitiva") */}
        <div className="pt-6">
          <CyberSimulator />
        </div>

        {/* 5. SEGUNDO TEXTO/COPY DE VENDAS (As requested: "depois um texto/copy novamente") */}
        <div id="secondary-copy-text" className="space-y-6 text-neutral-300 leading-relaxed font-sans text-base sm:text-lg border-t border-neutral-900 pt-12">
          <h3 className="text-xl sm:text-2xl font-mono text-white tracking-tight border-b border-neutral-900 pb-2">
            A Anatomia do Invisível: Por que VPNs são apenas fumaça e espelhos?
          </h3>
          <p className="indent-8 font-light">
            Eles vendem a você uma proteção invisível que resolve todos os problemas com um clique de botão azul em comerciais infantis de televisão. Mas pergunte-se: <em>Se governos podem confiscar registros de VPNs comerciais através de cartas de segurança nacional, qual a utilidade delas para a segurança soberana?</em>
          </p>
          <p className="font-light text-neutral-200">
            A privacidade no século XXI é multidimensional. Se você usa VPN mas ainda faz login com seu e-mail do Gmail no Chrome, você é rastreado por completo da mesma forma. Se inicia um sistema operacional configurado para monitorar você, seu arquivo de paginação na RAM continuará gravando tudo em disco rígido aberto.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 border border-neutral-900 bg-neutral-950/60 rounded-sm space-y-2">
              <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
                [ 01 // METADADOS ]
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Mensagens normais carregam carimbos de hora, arquivos de imagem armazenam a geolocalização exata de onde foram tiradas. Nós ensinamos como higienizar os metadados antes que saiam do seu drive.
              </p>
            </div>
            <div className="p-4 border border-neutral-900 bg-neutral-950/60 rounded-sm space-y-2">
              <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
                [ 02 // TRAFEGO CEGO ]
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Navegar na Tor sem configuração adequada entrega o sinal de que você está ocultando algo para o seu provedor. Ensinamos como empacotar seu tráfego em pacotes de ofuscação indistinguíveis.
              </p>
            </div>
          </div>

          <p className="font-light">
            O <strong>Dark Cipher</strong> é um ecossistema fechado que une o conhecimento teórico estruturado em vídeo-aulas práticas e o networking estratégico imediato dentro do Telegram VIP, preparando você para agir sem deixar assinaturas físicas ou comportamentais.
          </p>
        </div>

      </div>
    </section>
  );
}
