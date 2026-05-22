/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FaqItem, faqData } from "../types";
import { HelpCircle, ChevronRight, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-8 bg-black border-t border-neutral-900 pb-24">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div id="faq-header" className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>DÚVIDAS FREQUENTES // F.A.Q.</span>
          </div>
          <h2 id="faq-title" className="text-3xl sm:text-5xl font-mono tracking-tighter font-extrabold text-white">
            Perguntas & Respostas
          </h2>
          <p id="faq-desc" className="text-sm font-mono text-neutral-400 leading-relaxed">
            Esclareça suas dúvidas técnicas e comerciais antes de ingressar no protocolo de anonimato do Dark Cipher.
          </p>
        </div>

        {/* FAQs Accordions */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="border border-neutral-900 bg-neutral-950/40 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-950 transition-all font-mono"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block">
                      [ {faq.classification} ]
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      {faq.question}
                    </h4>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-neutral-400 transition-all shrink-0 ${isOpen ? "rotate-90 text-white" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-neutral-900/40 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Minimal Customer Support fallback */}
        <div className="text-center pt-8 border-t border-neutral-950">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 border border-neutral-900/60 bg-neutral-950/40 px-5 py-3 rounded-sm font-mono text-xs text-neutral-400">
            <MessageSquareCode className="w-4 h-4 text-white" />
            <span>Ainda tem dúvidas técnicas sobre Our OpSec?</span>
            <span className="hidden sm:inline-block text-neutral-800">|</span>
            <span className="text-white hover:underline cursor-pointer">
              contato@darkcipher.onion (PGP Ativo)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
