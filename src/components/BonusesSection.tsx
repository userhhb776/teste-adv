/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bonus, bonusesData } from "../types";
import { Gift, Sparkles, FolderLock, Users, Radio, HelpCircle } from "lucide-react";

export default function BonusesSection() {
  return (
    <section id="bonuses" className="py-16 sm:py-24 px-4 sm:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div id="bonuses-header" className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-white bg-black text-[10px] font-mono tracking-widest text-white uppercase rounded-sm">
            <Gift className="w-3.5 h-3.5" />
            <span>Conteúdos Adicionais de Infiltração</span>
          </div>
          <h2 id="bonuses-title" className="text-3xl sm:text-5xl font-mono tracking-tighter font-extrabold text-white">
            Protocolos de Bônus Exclusivos
          </h2>
          <p id="bonuses-desc" className="text-sm font-mono text-neutral-400 leading-relaxed">
            Se inscrevendo hoje, você adquire acesso imediato ao nosso ecossistema de ferramentas e mentorias. Recursos reais para acelerar seu anonimato.
          </p>
        </div>

        {/* Bonus Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonusesData.map((bonus) => {
            return (
              <div
                key={bonus.id}
                id={`bonus-card-${bonus.id}`}
                className="border border-neutral-900 bg-neutral-950 p-6 rounded-sm space-y-5 flex flex-col justify-between transition-all hover:border-white group relative"
              >
                {/* Visual Icon Header depending on Bonus ID */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 border border-neutral-800 bg-black font-mono text-[9px] text-neutral-400 rounded-sm">
                      {bonus.badge}
                    </span>
                    <span className="text-white font-mono text-xs font-semibold">
                      [ BÔNUS ]
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {bonus.id === "bonus-1" && <FolderLock className="w-5 h-5 text-white" />}
                      {bonus.id === "bonus-2" && <Radio className="w-5 h-5 text-white animate-pulse" />}
                      {bonus.id === "bonus-3" && <Users className="w-5 h-5 text-white" />}
                      <h3 className="font-mono text-base font-bold text-white uppercase tracking-tight">
                        {bonus.title}
                      </h3>
                    </div>
                    <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-tight italic">
                      {bonus.subtitle}
                    </p>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed pt-1">
                      {bonus.description}
                    </p>
                  </div>
                </div>

                {/* Pricing / Value anchor */}
                <div className="pt-4 border-t border-neutral-900/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-600 uppercase block">
                      Valor de Venda Avulsa:
                    </span>
                    <span className="text-xs font-mono text-neutral-500 line-through">
                      {bonus.value}
                    </span>
                  </div>
                  <div className="px-2.5 py-1 bg-white text-black text-[10px] font-mono font-bold tracking-wider uppercase rounded-sm">
                    INCLUSO GRÁTIS
                  </div>
                </div>

                {/* Decorative border tags */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-800 group-hover:border-white transition-all"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-800 group-hover:border-white transition-all"></div>
              </div>
            );
          })}
        </div>

        {/* Quick Trust statement banner */}
        <div id="bonus-trust-footer" className="p-4 border border-neutral-900 bg-neutral-950/45 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 text-center sm:text-left">
          <span>🛡️ ATENÇÃO: Os bônus são ativados sincronizadamente na área de membros do Telegram imediatamente após o primeiro login.</span>
          <span className="text-white tracking-widest">[ VALOR TOTAL EM BÔNUS: R$ 1.191,00 ]</span>
        </div>

      </div>
    </section>
  );
}
