/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Shield, ShieldAlert, ShieldCheck, Cpu, Terminal, RefreshCw, Radio, Lock, Unlock, HelpCircle, Network } from "lucide-react";

interface ThreatItem {
  id: string;
  label: string;
  weight: number;
  category: "OpSec" | "OS" | "Redes" | "Comunicação" | "Finanças";
  fixedByModule: "Mód. 01" | "Mód. 02" | "Mód. 03" | "Mód. 04" | "Mód. 05";
}

const threatItems: ThreatItem[] = [
  { id: "wind", label: "Sistema Operacional Comum (Windows/macOS) sem hardening", weight: 25, category: "OS", fixedByModule: "Mód. 02" },
  { id: "gchrome", label: "Acessar sites pelo Google Chrome ou Safari padrão", weight: 15, category: "Redes", fixedByModule: "Mód. 03" },
  { id: "whatsapp", label: "Usar WhatsApp/Telegram comum sem OpSec de números", weight: 15, category: "Comunicação", fixedByModule: "Mód. 04" },
  { id: "vpncom", label: "Confiar cegamente em VPNs comerciais famosas 'No-Logs'", weight: 15, category: "Redes", fixedByModule: "Mód. 03" },
  { id: "pwdreuse", label: "Reutilizar senhas ou salvar chaves no navegador", weight: 20, category: "OpSec", fixedByModule: "Mód. 01" },
  { id: "fiat", label: "Realizar transações comerciais via Pix/Cartão vinculado", weight: 10, category: "Finanças", fixedByModule: "Mód. 05" }
];

export default function CyberSimulator() {
  const [selectedThreats, setSelectedThreats] = useState<string[]>(["wind", "gchrome", "whatsapp"]);
  const [exposureScore, setExposureScore] = useState(0);
  const [routingStep, setRoutingStep] = useState<"idle" | "entry" | "middle" | "exit" | "done">("idle");
  const [ipAddress, setIpAddress] = useState("189.12.210.45 (IP Real)");
  const [onionStatus, setOnionStatus] = useState("Não Protegido");

  useEffect(() => {
    // Calculate total vulnerability score based on checked boxes
    const total = selectedThreats.reduce((acc, currentId) => {
      const item = threatItems.find(t => t.id === currentId);
      return acc + (item ? item.weight : 0);
    }, 0);
    setExposureScore(total);
  }, [selectedThreats]);

  const toggleThreat = (id: string) => {
    setSelectedThreats(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSimulateRouting = () => {
    setRoutingStep("entry");
    setIpAddress("104.244.72.115 (Guarda Tor)");
    setOnionStatus("Apenas Nó de Entrada");

    setTimeout(() => {
      setRoutingStep("middle");
      setIpAddress("185.220.101.4 (Nó de Trânsito)");
      setOnionStatus("Duplo Envelopamento");
    }, 1200);

    setTimeout(() => {
      setRoutingStep("exit");
      setIpAddress("23.129.64.188 (Nó de Saída - Suécia)");
      setOnionStatus("Tráfego Blindado Onion");
    }, 2400);

    setTimeout(() => {
      setRoutingStep("done");
      setOnionStatus("Soberania Total Estabelecida");
    }, 3600);
  };

  const handleResetRouting = () => {
    setRoutingStep("idle");
    setIpAddress("189.12.210.45 (IP Real)");
    setOnionStatus("Não Protegido");
  };

  return (
    <div className="border border-neutral-900 bg-neutral-950 p-6 rounded-sm space-y-8 relative overflow-hidden">
      
      {/* Visual Accent Headers */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 border-b border-l border-neutral-900 flex justify-end items-end p-2 pointer-events-none select-none text-[8px] font-mono text-neutral-800">
        DIAGNOSTIC_v2
      </div>

      <div className="space-y-1.5 border-b border-neutral-900 pb-4">
        <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block font-bold">
          [ LAB INTERATIVO DE ANOMALIA DE SISTEMAS ]
        </span>
        <h3 className="font-mono text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
          <Cpu className="w-5 h-5 text-white animate-pulse" />
          Módulo de Auditoria Dinâmica de Riscos
        </h3>
        <p className="text-xs text-neutral-400 font-sans">
          Clique nas falhas de comportamento abaixo para testar o nível de exposição e ameaça à sua privacidade física e financeira em tempo real.
        </p>
      </div>

      {/* Grid of Two Visualizer Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* WIDGET 1: RISK EXPOSURE DIAL */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase">
              1. Check-up de OpSec Pessoal
            </span>
            <span className="font-mono text-[10px] text-neutral-600">
              Score Limiar
            </span>
          </div>

          <div className="space-y-2">
            {threatItems.map((item) => {
              const checked = selectedThreats.includes(item.id);
              return (
                <label
                  key={item.id}
                  className={`flex items-start gap-3 p-2.5 border rounded-sm transition-all cursor-pointer ${
                    checked
                      ? "border-neutral-800 bg-neutral-950/40 text-neutral-200"
                      : "border-neutral-950 text-neutral-500 hover:border-neutral-900 hover:text-neutral-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleThreat(item.id)}
                    className="mt-1 accent-white cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <span className="font-sans text-xs font-medium leading-snug block">
                      {item.label}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-600 block">
                      Peso de Risco: <strong className="text-neutral-400">+{item.weight}%</strong> | Corrigido em: <strong className="text-white">{item.fixedByModule}</strong>
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* WIDGET 2: EXPOSURE LEVEL GRAPHIC DIAL */}
        <div className="border border-neutral-900 bg-black/60 p-5 rounded-sm flex flex-col justify-between min-h-[300px] relative">
          
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block font-bold">
              ESTADO GERAL DA SUA IDENTIDADE ONLINE:
            </span>

            {/* Simulated analogue exposure meter */}
            <div className="py-6 flex flex-col items-center justify-center border border-dashed border-neutral-900 rounded-sm bg-neutral-950/80 relative">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">EXPOSIÇÃO GERAL</span>
              <span className={`font-mono text-5xl font-extrabold tracking-tighter transition-colors ${
                exposureScore > 70 
                  ? "text-white" 
                  : exposureScore > 40
                    ? "text-neutral-200"
                    : "text-neutral-400"
              }`}>
                {exposureScore}%
              </span>
              <div className="w-4/5 bg-neutral-900 h-1.5 mt-4 rounded-full overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-500"
                  style={{ width: `${exposureScore}%` }}
                />
              </div>
              <span className="text-[9px] font-mono text-neutral-500 uppercase mt-2">
                Nível de Risco: {exposureScore > 65 ? "🚨 CRÍTICO • GRAVÍSSIMO" : exposureScore > 35 ? "⚠️ MODERADO • EXPOSTO" : "🔒 PROTEGIDO"}
              </span>
            </div>

            {/* Context message based on dynamic score */}
            <div className="p-3 border border-neutral-900 bg-neutral-950 text-xs font-mono text-neutral-400 leading-relaxed rounded-sm space-y-1">
              <span className="text-white text-[10px] font-bold block uppercase flex items-center gap-1.5">
                {exposureScore > 50 ? (
                  <>
                    <ShieldAlert className="w-3.5 h-3.5 text-white shrink-0" />
                    STATUS: EXPOSIÇÃO EXTREMA DETECTADA
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                    STATUS: RISCO ESTÁVEL / PARCIAL
                  </>
                )}
              </span>
              <span>
                {exposureScore > 60 
                  ? "Seu tráfego, compras, dispositivos e localização estão interligados por assinaturas de hardware. Metadados revelam sua identidade física no Telegram."
                  : "Nível moderado de vazamento. Embora algumas barreiras existam, o browser fingerprinting e seu provedor de internet continuam rastreando-o."
                }
              </span>
            </div>
          </div>

          <p className="text-[10px] font-mono text-neutral-600 uppercase text-center pt-4">
            *O Grupo VIP Dark Cipher entrega as chaves para reduzir seu score para menos de 10%.
          </p>

        </div>
      </div>

      {/* TUNNEL HOPPING VISUALIZER GRID ROW (Extremely intuitive element gráfico) */}
      <div id="routing-simulator-box" className="border-t border-neutral-900 pt-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-white uppercase font-bold flex items-center gap-1.5">
              <Network className="w-4 h-4 text-white" />
              Simulador Gráfico de Roteamento Onion (Tor Network)
            </span>
            <p className="text-[11px] text-neutral-500 font-mono">
              Entenda como seu tráfego é re-roteado em múltiplos saltos criptografados ocultando sua chave IP.
            </p>
          </div>

          <div className="flex gap-2 shrink-0">
            {routingStep === "idle" ? (
              <button
                onClick={handleSimulateRouting}
                className="px-4 py-2 bg-white text-black font-mono font-bold text-xs uppercase hover:bg-black hover:text-white border border-white transition-all cursor-pointer rounded-sm"
              >
                TESTAR CONEXÃO
              </button>
            ) : (
              <button
                onClick={handleResetRouting}
                className="px-4 py-2 border border-neutral-800 hover:border-white font-mono text-xs uppercase transition-all cursor-pointer rounded-sm flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>LIMPAR / RE-INICIAR</span>
              </button>
            )}
          </div>
        </div>

        {/* Visual Tunnel Node Map layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2 font-mono text-xs">
          
          {/* USER NODE */}
          <div className={`p-3.5 border rounded-sm transition-all text-center space-y-1.5 ${
            routingStep === "idle" ? "border-neutral-500 bg-neutral-900/10 text-neutral-300" : "border-neutral-900 bg-neutral-950/20 text-neutral-500"
          }`}>
            <span className="text-[10px] uppercase block font-bold">Seu Terminal</span>
            <span className="text-[11px] block text-white font-bold">189.12.210.45</span>
            <span className="px-1.5 py-0.5 border border-neutral-900 text-[8px] uppercase tracking-wide inline-block bg-black">
              ORIGEM BRASIL
            </span>
          </div>

          {/* ENTRY NODE */}
          <div className={`p-3.5 border rounded-sm transition-all text-center space-y-1.5 ${
            routingStep === "entry" ? "border-white bg-white/5 text-white shadow-sm" : routingStep === "middle" || routingStep === "exit" || routingStep === "done" ? "border-neutral-800 text-neutral-400" : "border-neutral-950 text-neutral-700"
          }`}>
            <span className="text-[10px] uppercase block font-bold">Guarda (Entry Node)</span>
            <span className="text-[11px] block font-bold">
              {routingStep === "idle" ? "..." : "104.244.72.115"}
            </span>
            <span className="px-1.5 py-0.5 border border-neutral-900 text-[8px] uppercase tracking-wide inline-block bg-black">
              AES-256 LAYER 1
            </span>
          </div>

          {/* MIDDLE NODE */}
          <div className={`p-3.5 border rounded-sm transition-all text-center space-y-1.5 ${
            routingStep === "middle" ? "border-white bg-white/5 text-white shadow-sm" : routingStep === "exit" || routingStep === "done" ? "border-neutral-800 text-neutral-400" : "border-neutral-950 text-neutral-700"
          }`}>
            <span className="text-[10px] uppercase block font-bold">Revezamento (Middle)</span>
            <span className="text-[11px] block font-bold">
              {routingStep === "idle" || routingStep === "entry" ? "..." : "185.220.101.4"}
            </span>
            <span className="px-1.5 py-0.5 border border-neutral-900 text-[8px] uppercase tracking-wide inline-block bg-black">
              LAYER 2 DECR.
            </span>
          </div>

          {/* EXIT NODE */}
          <div className={`p-3.5 border rounded-sm transition-all text-center space-y-1.5 ${
            routingStep === "exit" || routingStep === "done" ? "border-white bg-white/5 text-white shadow-sm" : "border-neutral-950 text-neutral-700"
          }`}>
            <span className="text-[10px] uppercase block font-bold">Saída (Exit Node)</span>
            <span className="text-[11px] block font-bold">
              {routingStep === "idle" || routingStep === "entry" || routingStep === "middle" ? "..." : "23.129.64.188"}
            </span>
            <span className="px-1.5 py-0.5 border border-neutral-900 text-[8px] uppercase tracking-wide inline-block bg-black">
              SWEDEN SOVEREIGN
            </span>
          </div>

        </div>

        {/* Telemetry output status details */}
        <div className="p-3 border border-neutral-900 bg-neutral-950">
          <div className="flex flex-col sm:flex-row justify-between text-[11px] font-mono text-neutral-400 gap-2">
            <span>DADOS DE ENDEREÇO MASCARADO: <strong className="text-white">{ipAddress}</strong></span>
            <span>STATUS DE EMBALAGEM: <strong className="text-white uppercase">{onionStatus}</strong></span>
          </div>
        </div>

      </div>

    </div>
  );
}
