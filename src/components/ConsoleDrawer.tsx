/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { X, Terminal, ChevronRight, Play, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "motion/react";

interface ConsoleDrawerProps {
  onClose: () => void;
}

export default function ConsoleDrawer({ onClose }: ConsoleDrawerProps) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "🔓 Conexão estabelecida com sucesso.",
    "📱 Insira comandos para auditar seu nível de risco digital.",
    "💡 Digite 'help' para listar os comandos de criptografia e auditoria disponíveis."
  ]);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();
    if (!cmd) return;

    let response: string[] = [];
    switch (cmd) {
      case "help":
        response = [
          "--------------------------------------------------",
          "COMANDOS DISPONÍVEIS NO TERMINAL DARK CIPHER:",
          "  help     - Exibe esta lista de diretrizes.",
          "  opsec    - Audita vulnerabilidades comportamentais básicas.",
          "  network  - Testa integridade de canais VPN e redes Tor.",
          "  monero   - Revela táticas básicas de segurança financeira.",
          "  about    - Informações sobre a comunidade no Telegram.",
          "  clear    - Limpa a saída do buffer do terminal.",
          "--------------------------------------------------"
        ];
        break;
      case "opsec":
        response = [
          "⚠️ AVISO: VERIFICANDO ASSINATURA COMPORTAMENTAL...",
          "  • Uso de email principal em cadastros paralelos: CRÍTICO (92% risco)",
          "  • Armazenamento de senhas no navegador padrão: ALTÍSSIMO (84% risco)",
          "  • Ausência de criptografia nativa no SSD principal: CRÍTICO",
          "🛡️ SOLUÇÃO: Inscreva-se no Módulo 01 para blindar seu comportamento tático."
        ];
        break;
      case "network":
        response = [
          "🌐 PROBING NETWORK LAYER...",
          "  • Identificador de Browser Fingerprinting: ATIVO (Canvas, WebGL expostos)",
          "  • Vazamento de WebRTC: Risco detectado (Revelando IP real sob VPN)",
          "  • DNS Leak: Vazamento para corretores de rede locais (Google / Cloudflare)",
          "🛡️ SOLUÇÃO: Whonix e Tails OS isolam esses vazamentos na raiz física (Módulo 02 e 03)."
        ];
        break;
      case "monero":
        response = [
          "🪙 AUDITANDO SEU RASTRO FINANCEIRO...",
          "  • Uso de criptoativos públicos (e.g. Bitcoin, Ethereum): Totalmente rastreável.",
          "  • Exchanges centralizadas (KYC): Seus fundos estão vinculados ao seu CPF oficial.",
          "🛡️ SOLUÇÃO: Protocolo Monero e DEXs sem cadastro (Haveno, Bisq) salvam sua liberdade (Módulo 05)."
        ];
        break;
      case "about":
        response = [
          "🛡️ DARK CIPHER v12.4.9",
          "  Um curso sistemático de cibersegurança e anonimato integrado à maior",
          "  comunidade fechada VIP de autodefesa digital no Telegram.",
          "  Planos iniciam a partir de R$ 87 mensais. Garantia incondicional de 7 dias."
        ];
        break;
      case "clear":
        setHistory([]);
        setCommand("");
        return;
      default:
        response = [
          `❌ Erro: Comando '${cmd}' não catalogado nos bancos de dados locais.`,
          "Digite 'help' para entender os comandos de auditoria."
        ];
        break;
    }

    setHistory(prev => [...prev, `> ${command}`, ...response]);
    setCommand("");
  };

  return (
    <div id="console-terminal-drawer" className="fixed bottom-0 right-0 left-0 lg:left-auto lg:w-[480px] h-[340px] bg-black border-t lg:border-l border-white z-50 flex flex-col font-mono text-xs text-neutral-300 shadow-2xl">
      
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-900 bg-neutral-950 font-bold text-white relative">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white animate-pulse" />
          <span>TERMINAL DE AUDITORIA RAPIDA</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-neutral-500 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Drawer Logs area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-1.5 bg-black">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed text-[11px] text-neutral-400">
            {line.startsWith("> ") ? (
              <span className="text-white font-bold">{line}</span>
            ) : line.startsWith("🛡️") || line.startsWith("⚠️") || line.startsWith("❌") ? (
              <span className="text-white">{line}</span>
            ) : (
              line
            )}
          </div>
        ))}
        <div ref={consoleBottomRef} />
      </div>

      {/* Drawer Command Form */}
      <form onSubmit={handleCommandSubmit} className="border-t border-neutral-900 bg-neutral-950 p-2 flex items-center gap-2">
        <ChevronRight className="w-4 h-4 text-white shrink-0" />
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="auditar risco... digite 'help'"
          className="flex-1 bg-black text-white font-mono text-xs focus:outline-none border-none py-1.5 focus:ring-0 placeholder:text-neutral-800"
          autoFocus
        />
        <button
          type="submit"
          className="p-1 px-3 border border-neutral-800 text-neutral-400 hover:border-white hover:text-white transition-all text-[11px] rounded-sm flex items-center gap-1 cursor-pointer"
        >
          <Play className="w-2.5 h-2.5" />
          <span>ENTER</span>
        </button>
      </form>

    </div>
  );
}
