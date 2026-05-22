/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Module, modulesData } from "../types";
import { Terminal, Shield, BookOpen, Clock, Hammer, Layers, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState<Module>(modulesData[0]);

  return (
    <section id="syllabus" className="py-16 sm:py-24 px-4 sm:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div id="syllabus-header" className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>Matriz Curricular Avançada</span>
          </div>
          <h2 id="syllabus-title" className="text-3xl sm:text-5xl font-mono tracking-tighter font-extrabold text-white">
            Grade de Operações & Benefícios
          </h2>
          <p id="syllabus-desc" className="text-sm sm:text-base font-mono text-neutral-400 leading-relaxed">
            Nossos módulos foram pensados como degraus táticos. Da mentalidade investigativa de OpSec até os limites de criptografia extrema de ativos digitais. Selecione um módulo para verificar os protocolos técnicos.
          </p>
        </div>

        {/* Modular Bento Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Module Selector Column (Left) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2 px-1">
              [ SELECIONE O MÓDULO PARA DETALHES ]
            </span>
            {modulesData.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className={`w-full text-left p-4 rounded-sm border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? "border-white bg-white text-black font-semibold shadow-md shadow-white/5"
                      : "border-neutral-900 bg-neutral-950/40 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs ${isSelected ? "text-black" : "text-neutral-500"}`}>
                      {mod.order}
                    </span>
                    <div>
                      <h4 className="font-mono text-sm tracking-tight font-medium uppercase truncate max-w-[280px] sm:max-w-sm">
                        {mod.title.split(" (")[0]}
                      </h4>
                      <p className={`text-[11px] font-mono ${isSelected ? "text-neutral-700" : "text-neutral-500"}`}>
                        {mod.duration}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? "text-black rotate-90" : "text-neutral-600"} transition-all`} />
                </button>
              );
            })}
          </div>

          {/* Module Deep Dive Dashboard Column (Right) */}
          <div className="lg:col-span-7 border border-neutral-900 bg-neutral-950 p-6 sm:p-8 rounded-sm space-y-6 relative overflow-hidden">
            {/* Custom Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 opacity-2 border-b border-l border-neutral-900 text-neutral-900 font-mono text-[9px] p-2 flex justify-end items-end pointer-events-none select-none">
              MATRIX_SEC // {selectedModule.order}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModule.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Module Basic Info */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 border border-white text-white font-mono text-[9px] tracking-widest uppercase">
                      MÓDULO {selectedModule.order}
                    </span>
                    <span className={`px-2 py-0.5 border text-xs font-mono uppercase ${
                      selectedModule.importance === "Crítico" 
                        ? "border-red-900 bg-red-950/20 text-red-500" 
                        : selectedModule.importance === "Essencial"
                          ? "border-white bg-neutral-900/50 text-white"
                          : "border-neutral-700 text-neutral-400"
                    }`}>
                      PRIORIDADE: {selectedModule.importance}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight pt-1">
                    {selectedModule.title}
                  </h3>
                  <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                    {selectedModule.description}
                  </p>
                </div>

                {/* Practical Lessons List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 border-b border-neutral-900 pb-2">
                    <BookOpen className="w-4 h-4 text-white" />
                    <span className="font-mono text-xs text-white uppercase tracking-wider">
                      Conteúdo Prático Liberado
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedModule.lessons.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="font-sans leading-relaxed">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cyber Tooling Ecosystem */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-1.5 border-b border-neutral-900 pb-2">
                    <Hammer className="w-4 h-4 text-white" />
                    <span className="font-mono text-xs text-white uppercase tracking-wider">
                      Tecnologias & Ferramentas Integradas
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedModule.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 border border-neutral-800 bg-neutral-900/40 font-mono text-[10px] text-neutral-300 uppercase hover:border-neutral-500 hover:text-white transition-all rounded-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom interactive action */}
                <div className="pt-2 border-t border-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Tempo estimado de absorção: {selectedModule.duration.split(" • ")[0]}
                  </span>
                  <span className="hidden sm:inline-block">CÂMARA DE TREINAMENTO VIRTUAL</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
