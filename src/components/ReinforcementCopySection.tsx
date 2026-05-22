/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, HelpCircle, LockKeyhole, ArrowRight, CheckCircle } from "lucide-react";

interface ReinforcementCopySectionProps {
  onCtaClick: () => void;
}

export default function ReinforcementCopySection({ onCtaClick }: ReinforcementCopySectionProps) {
  return (
    <section id="urgency-guarantee" className="py-16 sm:py-24 px-4 sm:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 text-neutral-300">
        
        {/* Urgent Storytelling Block */}
        <div id="cost-of-inaction" className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <ShieldAlert className="w-4 h-4 text-white" />
            <span>O CUSTO REAL DA INAÇÃO DIGITAL //</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-mono tracking-tight font-extrabold text-white">
            Continuar Visível na Grade é uma Escolha Perigosa
          </h2>
          
          <p className="indent-8 leading-relaxed font-light text-base sm:text-lg">
            A cada segundo que você adia a blindagem dos seus sistemas, mais dados migram para brokers de publicidade automatizados. Senhas antigas são catalogadas em logs públicos do Telegram; seus metadados de fotos revelam seu endereço residencial exato para criminosos invisíveis.
          </p>

          <p className="leading-relaxed font-light text-base sm:text-lg">
            Adquirir conhecimento em anonimato digital e OpSec não serve apenas para escapar de olhares indiscretos corporativos. É sobre <strong>soberania de vida</strong>. É sobre retomar o direito inato de escolher quem tem permissão para saber o que você faz, onde gasta e com quem se comunica.
          </p>
        </div>

        {/* The Guarantee Visual Card Frame */}
        <div id="guarantee-badge-container" className="border border-white bg-neutral-950 p-6 sm:p-10 rounded-sm relative overflow-hidden group">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 border-b border-l border-neutral-800 flex justify-end items-end p-2 pointer-events-none text-neutral-600 font-mono text-[9px] select-none uppercase">
            SURETY_KEY_OK
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
            <div className="p-4 border border-white rounded-sm shrink-0 bg-black flex items-center justify-center">
              <LockKeyhole id="lock-icon" className="w-10 h-10 text-white animate-pulse" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                PROTOCOLO DE SEGURANÇA INTEGRAL
              </span>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-white uppercase tracking-tight">
                Garantia Incondicional de 07 Dias
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed text-justify">
                Navegar pelo conteúdo do Dark Cipher é um caminho completamente livre de riscos financeiros. Se em até 7 dias após sincronizar seu e-mail você sentir que as técnicas de OpSec, Tails OS ou cripto-soberania no Monero são avançadas demais para o seu ritmo, basta solicitar o reembolso. Devolveremos 100% do seu investimento sem rodeios ou burocracia.
              </p>
            </div>
          </div>
        </div>

        {/* Final Convincing Text */}
        <div id="final-decision-text" className="text-center space-y-6 pt-4">
          <p className="font-mono text-sm px-4 text-neutral-400 leading-relaxed">
            Há dois caminhos à sua frente: continuar na passividade observada pelas redes ou blindar-se agora mesmo no <strong>Dark Cipher</strong>.
          </p>
          
          <button
            id="reinforcement-buy-cta"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-black hover:text-white border border-white font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer shadow-lg hover:shadow-white/10 flex items-center justify-center gap-3 mx-auto"
          >
            <span>EFETUAR CONEXÃO PRIVADA IMEDIATA</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
