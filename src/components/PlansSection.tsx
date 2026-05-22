/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plan, plansData } from "../types";
import { Check, ShieldCheck, Zap } from "lucide-react";

interface PlansSectionProps {
  onSelectPlan: (plan: Plan) => void;
}

export default function PlansSection({ onSelectPlan }: PlansSectionProps) {
  return (
    <section id="checkout-pricing" className="py-16 sm:py-24 px-4 sm:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div id="plans-header" className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-neutral-800 bg-neutral-950 text-[10px] font-mono tracking-widest text-neutral-400 uppercase rounded-sm">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>ESCOLHA SEU NÍVEL DE SOBERANIA</span>
          </div>
          <h2 id="plans-title" className="text-3xl sm:text-5xl font-mono tracking-tighter font-extrabold text-white">
            Planos de Infiltração
          </h2>
          <p id="plans-desc" className="text-sm font-mono text-neutral-400 leading-relaxed">
            Selecione a chave de acesso que melhor se adapta à sua necessidade. Sem surpresas, cancelamento simples e garantia incondicional de reembolso por 7 dias.
          </p>
        </div>

        {/* Pricing Tiers Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plansData.map((plan) => {
            const isAnnual = plan.id === "plan-annual";
            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`flex flex-col justify-between rounded-sm p-6 sm:p-8 border bg-neutral-950/70 transition-all duration-300 relative group ${
                  isAnnual
                    ? "border-white ring-1 ring-white shadow-xl shadow-white/5"
                    : "border-neutral-900 hover:border-neutral-700"
                }`}
              >
                
                {/* Popularity Badge */}
                {isAnnual && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white text-black text-[10px] font-mono font-extrabold tracking-widest uppercase rounded-sm border border-black shadow">
                    ★ RECOMENDADO MÁXIMO
                  </div>
                )}

                {/* Upper Area: Names & Values */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-mono text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                      {isAnnual && <ShieldCheck className="w-5 h-5 text-white shrink-0" />}
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed min-h-[48px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing metrics */}
                  <div className="space-y-1 py-4 border-y border-neutral-900/60 font-mono">
                    {plan.originalPrice && (
                      <span className="text-xs text-neutral-600 line-through block">
                        De R$ {plan.originalPrice},00
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-neutral-400 font-medium">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter">
                        {plan.price}
                      </span>
                      <span className="text-neutral-500 text-xs ml-1">
                        / {plan.billing}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono block">
                      {plan.id === "plan-lifetime" ? "Aprovado em Pix unificado" : "Cobrança Automática Recorrente"}
                    </span>
                  </div>

                  {/* Channel Access details */}
                  <div className="text-[11px] font-mono text-neutral-400 bg-neutral-900/30 p-2.5 border border-neutral-900 rounded-sm">
                    <strong>Acesso Telegram:</strong> {plan.telegramAccess}
                  </div>

                  {/* Feature Lists */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                      INCLUSO NO PROTOCOLO:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-neutral-300">
                          <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buy Button CTA */}
                <div className="pt-8">
                  <button
                    id={`btn-checkout-${plan.id}`}
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer border flex items-center justify-center gap-2 ${
                      isAnnual
                        ? "bg-white text-black hover:bg-black hover:text-white border-white"
                        : "bg-black text-white hover:bg-white hover:text-black border-neutral-800 hover:border-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                  </button>
                  <p className="text-center font-mono text-[9px] text-neutral-600 mt-2.5 uppercase">
                    🔒 Processado via Canal Criptografado SSL
                  </p>
                </div>

                {/* Corner detail highlights */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-900 group-hover:border-neutral-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-900 group-hover:border-neutral-500 transition-all"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
