/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Plan } from "../types";
import { X, Terminal, Shield, Check, Copy, AlertCircle, Sparkles, Send, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutModalProps {
  plan: Plan | null;
  onClose: () => void;
}

type CheckoutStep = "details" | "encrypting" | "invoice" | "success";

export default function CheckoutModal({ plan, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>("details");
  const [email, setEmail] = useState("");
  const [telegramHandle, setTelegramHandle] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  
  // Terminal logs simulation
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [logIdx, setLogIdx] = useState(0);

  // Card form details
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const logsSequence = [
    "⚡ INICIANDO PROTOCOLO SECURE_PAY_GATEWAY v10.42.0...",
    "🔑 GERANDO PAR DE CHAVES PONTUAL-EPHEMERAL (ECDH) ... OK",
    "🛡️ VERIFICANDO INTEGRIDADE DOS PACOTES COM SWARM NODE 12 ... STATUS: BLINDADO",
    "📦 CRIPTOGRAFANDO OBJETO DE PEDIDO {" + (plan?.name || "Access Token") + "} ... DONE",
    "🌐 DECRYPTING TUNNEL TUNNEL IPV6 ... SUCCESS",
    "⚙️ SINCRO-COMUNICAÇÃO COM O BOT TELEGRAM DARK_CIPHER_VERIFY_BOT ... OK",
    "⚡ GATEWAY PRONTO PARA RECEBER CRÉDITO SECURE SEC."
  ];

  useEffect(() => {
    if (step === "encrypting") {
      setTerminalLogs([]);
      setLogIdx(0);
    }
  }, [step]);

  useEffect(() => {
    if (step === "encrypting" && logIdx < logsSequence.length) {
      const timer = setTimeout(() => {
        setTerminalLogs(prev => [...prev, logsSequence[logIdx]]);
        setLogIdx(idx => idx + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else if (step === "encrypting" && logIdx === logsSequence.length) {
      const timer = setTimeout(() => {
        setStep("invoice");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step, logIdx]);

  if (!plan) return null;

  const handleStartEncryption = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !telegramHandle.trim()) {
      setErrorMsg("Preencha todos os canais de identificação para gerar seu token.");
      return;
    }
    setErrorMsg("");
    setStep("encrypting");
  };

  const handleCopyPix = () => {
    const pixCode = "00020101021226850014br.gov.bcb.pix2563pix.darkcipher.onion/payment/invoice/f2991a-opsec-secure-key-997";
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber.trim() || !cardName.trim() || !cardExpiry.trim() || !cardCvv.trim()) {
      setErrorMsg("Insira os metadados de pagamento do cartão.");
      return;
    }
    setErrorMsg("");
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setStep("success");
    }, 2000);
  };

  const simulatePixPayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setStep("success");
    }, 1500);
  };

  return (
    <div id="checkout-gateway-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-lg border border-white bg-black rounded-sm relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Terminal Scanline visual decor */}
        <div className="absolute inset-0 pointer-events-none scanlines opacity-10" />

        {/* Modal Header */}
        <div className="border-b border-neutral-900 bg-neutral-950 px-5 py-3.5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-white" />
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
              CONEXÃO DE ENTRADA CLIENTE //
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-500 hover:text-white transition-colors cursor-pointer rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Contents (Scrollable inside max height) */}
        <div className="p-6 overflow-y-auto relative z-10 flex-1 space-y-6">

          {/* STEP 1: COLLECT VISITOR CHANNELS */}
          {step === "details" && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase block">
                    PLANO SELECIONADO:
                  </span>
                  <div className="flex items-center justify-between p-3 border border-neutral-900 bg-neutral-950/40 rounded-sm">
                    <span className="font-mono text-sm uppercase text-white font-bold">{plan.name}</span>
                    <span className="font-mono text-xs text-neutral-300">R$ {plan.price},00 / {plan.billing}</span>
                  </div>
                </div>

                <form onSubmit={handleStartEncryption} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-neutral-400 block">
                      SEU EMAIL DE CADASTRO:
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@protonmail.com"
                      className="w-full bg-black border border-neutral-900 rounded-sm px-3.5 py-2.5 font-mono text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                    />
                    <span className="font-mono text-[9px] text-neutral-600 block">
                      *Usado para rastrearmos sua garantia e envio de atualizações criptografadas de segurança.
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-neutral-400 block">
                      SEU USERNAME DO TELEGRAM (@):
                    </label>
                    <input
                      type="text"
                      required
                      value={telegramHandle}
                      onChange={(e) => {
                        let text = e.target.value;
                        if (text && !text.startsWith("@")) text = "@" + text;
                        setTelegramHandle(text);
                      }}
                      placeholder="@seudownload"
                      className="w-full bg-black border border-neutral-900 rounded-sm px-3.5 py-2.5 font-mono text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                    />
                    <span className="font-mono text-[9px] text-neutral-600 block">
                      *Imprescindível. Nosso bot validará seu cadastro e liberará seu acesso exclusivo.
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 border border-red-900/40 bg-red-950/10 text-red-500 font-mono text-xs rounded-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-black hover:text-white border border-white transition-all cursor-pointer rounded-sm flex items-center justify-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    <span>GERAR GATEWAY DE PAGAMENTO ENCRIPTADO</span>
                  </button>
                </form>
              </motion.div>
            </AnimatePresence>
          )}

          {/* STEP 2: SIMULATED CIPHER CONNECTING TERMINAL */}
          {step === "encrypting" && (
            <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-sm font-mono text-xs text-neutral-300 min-h-[220px] flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 border-b border-neutral-900 pb-1.5 text-[10px] text-neutral-500 uppercase font-bold">
                  <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                  <span>NEGOTIATING HANDSHAKE LOGS...</span>
                </div>
                <div className="space-y-1 max-h-[170px] overflow-y-auto">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className="whitespace-pre-wrap leading-relaxed text-[11px] font-mono">
                      <span className="text-white">↳</span> {log}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-900 text-[10px] text-neutral-500 text-right">
                IP_LOCAL: IN_TUNNEL_ESTABLISHED
              </div>
            </div>
          )}

          {/* STEP 3: MOCK INVOICE PAYMENT PANEL */}
          {step === "invoice" && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Switch between Pix and Credit Card */}
                <div className="flex border border-neutral-900 rounded-sm overflow-hidden font-mono text-xs">
                  <button
                    onClick={() => { setPaymentMethod("pix"); setErrorMsg(""); }}
                    className={`flex-1 py-2.5 text-center cursor-pointer transition-all ${
                      paymentMethod === "pix"
                        ? "bg-white text-black font-bold"
                        : "bg-black text-neutral-400 hover:text-white hover:bg-neutral-900/40"
                    }`}
                  >
                    ⚡ PIX IMEDIATO
                  </button>
                  <button
                    onClick={() => { setPaymentMethod("card"); setErrorMsg(""); }}
                    className={`flex-1 py-2.5 text-center cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "bg-white text-black font-bold"
                        : "bg-black text-neutral-400 hover:text-white hover:bg-neutral-900/40"
                    }`}
                  >
                    💳 CARTÃO DE CRÉDITO
                  </button>
                </div>

                {/* PIX ROUTE SCREEN */}
                {paymentMethod === "pix" && (
                  <div className="space-y-5 text-center">
                    <p className="font-sans text-xs text-neutral-400">
                      Escaneie o QR Code abaixo pelo aplicativo do seu banco para confirmação imediata. Seu login no Telegram será liberado assim que o crédito for processado pelo Bot.
                    </p>

                    {/* QR Code Container styled elegantly */}
                    <div className="w-48 h-48 mx-auto border border-neutral-800 bg-white p-2.5 rounded-sm relative group flex items-center justify-center">
                      {/* Using an elegant dummy visual QR */}
                      <svg className="w-full h-full text-black" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M5,5 h30 v30 h-30 z M15,15 h10 v10 h-10 z M65,5 h30 v30 h-30 z M75,15 h10 v10 h-10 z M5,65 h30 v30 h-30 z M15,75 h10 v10 h-10 z M45,45 h10 v10 h-10 z M45,25 h10 v10 h-10 z M65,45 h10 v10 h-10 z M25,45 h10 v10 h-10 z" />
                        <path d="M50,10 h5 v5 h-5 z M55,15 h5 v5 h-5 z M45,60 h5 v5 h-5 z M80,60 h10 v10 h-10 z M60,80 h10 v10 h-10 z M80,80 h15 v5 h-15 z M65,65 h5 v5 h-5 z M85,75 h5 v5 h-5 z" />
                      </svg>
                    </div>

                    {/* Copy Pix block */}
                    <div className="space-y-2 max-w-sm mx-auto">
                      <button
                        onClick={handleCopyPix}
                        className="w-full py-2.5 border border-dashed border-neutral-700 bg-neutral-950/40 font-mono text-xs text-neutral-300 hover:text-white hover:border-white transition-all cursor-pointer rounded-sm flex items-center justify-center gap-2"
                      >
                        {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? "COPIADO COM SUCESSO!" : "COPIAR CHAVE PIX COPIA E COLA"}</span>
                      </button>
                    </div>

                    <div className="pt-2 border-t border-neutral-900 max-w-sm mx-auto">
                      <button
                        onClick={simulatePixPayment}
                        disabled={isPaying}
                        className="w-full py-3 bg-white text-black font-semibold font-mono text-xs tracking-widest uppercase hover:bg-neutral-900 transition-all cursor-pointer rounded-sm flex items-center justify-center gap-2"
                      >
                        {isPaying ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>VERIFICANDO PAGAMENTO...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4" />
                            <span>CONFIRMAR PAGAMENTO SIMULADO</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* CREDIT CARD ROUTE SCREEN */}
                {paymentMethod === "card" && (
                  <form onSubmit={handleCardPayment} className="space-y-4 text-left max-w-sm mx-auto">
                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-neutral-500 uppercase block">NÚMERO DO CARTÃO:</label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                        placeholder="4556 1234 5678 9010"
                        className="w-full bg-black border border-neutral-900 rounded-sm px-3.5 py-2 font-mono text-xs text-white focus:outline-none focus:border-white placeholder:text-neutral-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[10px] text-neutral-500 uppercase block">NOME IMPRESSO:</label>
                      <input
                        type="text"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value.toUpperCase())}
                        placeholder="NOME DO OPERADOR"
                        className="w-full bg-black border border-neutral-900 rounded-sm px-3.5 py-2 font-mono text-xs text-white focus:outline-none focus:border-white placeholder:text-neutral-800"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-neutral-500 uppercase block">VALIDADE (MM/AA):</label>
                        <input
                          type="text"
                          required
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value.slice(0, 5))}
                          placeholder="12/29"
                          className="w-full bg-black border border-neutral-900 rounded-sm px-3.5 py-2 font-mono text-xs text-white focus:outline-none focus:border-white placeholder:text-neutral-800"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-neutral-500 uppercase block">CVV (SEGURANÇA):</label>
                        <input
                          type="password"
                          required
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                          placeholder="***"
                          className="w-full bg-black border border-neutral-900 rounded-sm px-3.5 py-2 font-mono text-xs text-white focus:outline-none focus:border-white placeholder:text-neutral-800"
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="p-2 border border-red-910 bg-red-950/20 text-red-500 font-mono text-[10px] rounded-sm">
                        {errorMsg}
                      </div>
                    )}

                    <div className="pt-2 border-t border-neutral-900">
                      <button
                        type="submit"
                        disabled={isPaying}
                        className="w-full py-3 bg-white text-black font-semibold font-mono text-xs tracking-widest uppercase hover:bg-neutral-900 transition-all cursor-pointer rounded-sm flex items-center justify-center gap-2"
                      >
                        {isPaying ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>PROCESSANDO TRANSAÇÃO SECURE_NET...</span>
                          </>
                        ) : (
                          <>
                            <Shield className="w-4 h-4" />
                            <span>CONFIRMAR CADASTRO DIGITAL (SIMULAÇÃO)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* STEP 4: ACCESS TICKET TENDERED (SUCCESS) */}
          {step === "success" && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                <div className="inline-flex items-center justify-center p-3 border border-white bg-white/5 rounded-full mb-2">
                  <Check className="w-8 h-8 text-white animate-bounce" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-mono font-bold text-white uppercase tracking-tight">
                    Infiltração Confirmada!
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 max-w-sm mx-auto">
                    Parabéns, seu canal seguro foi estabelecido com sucesso. Suas credenciais foram sincronizadas para o Telegram handle <strong>{telegramHandle}</strong>.
                  </p>
                </div>

                {/* Cyber Access Ticket Render */}
                <div className="border border-white bg-neutral-950 p-5 rounded-sm relative overflow-hidden font-mono text-left space-y-3 shadow-xl">
                  <div className="absolute top-0 right-0 px-2 py-0.5 border-b border-l border-neutral-800 text-[8px] text-neutral-500">
                    SURETY TOKEN
                  </div>

                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                    [ DARK CIPHER VIP INGRESS ]
                  </span>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">OPERADOR:</span>
                      <span className="text-white font-semibold">{telegramHandle}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">COMPRA:</span>
                      <span className="text-white uppercase">{plan.name}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">IP DE INGRESSO:</span>
                      <span className="text-white">109.112.5.210 (ONION DECR.)</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">ACESSO KEY:</span>
                      <span className="text-white tracking-widest">CIPHER-OPSEC-XMR-77a8b2</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-900 border-dashed text-[10px] text-neutral-600">
                    *Apresente esta chave criptográfica se solicitado pelo Bot de entrada.
                  </div>
                </div>

                {/* Core Telegram join Action */}
                <div className="pt-2">
                  <a
                    href="https://t.me/dark_cipher_official"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-white text-black font-semibold font-mono text-xs tracking-widest uppercase hover:bg-black hover:text-white border border-white transition-all rounded-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>ENTRAR NO GRUPO VIP DO TELEGRAM</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </a>
                  <p className="font-mono text-[9px] text-neutral-500 mt-2.5 uppercase">
                    Ou verifique seu e-mail cadastrado ({email}) com os links alternativos.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

        </div>

      </div>
    </div>
  );
}
