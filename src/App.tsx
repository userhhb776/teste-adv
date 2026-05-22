/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import SalesCopySection from "./components/SalesCopySection";
import ModulesSection from "./components/ModulesSection";
import BonusesSection from "./components/BonusesSection";
import PlansSection from "./components/PlansSection";
import ReinforcementCopySection from "./components/ReinforcementCopySection";
import FAQSection from "./components/FAQSection";
import CheckoutModal from "./components/CheckoutModal";
import ConsoleDrawer from "./components/ConsoleDrawer";
import { Plan } from "./types";
import { Shield, Eye, Lock, ArrowUp } from "lucide-react";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  // Directly refer to the generated cyber security banner asset
  const bannerSrc = "/src/assets/images/dark_cipher_banner_1779422164447.png";

  const scrollToCheckout = () => {
    const element = document.getElementById("checkout-pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectPlanForCheckout = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* Decorative Matrix Background Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#090909_1px,transparent_1px),linear-gradient(to_bottom,#090909_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <main className="relative z-10">
        
        {/* SECTION 1 & 2 & 3 & 4 (Title, Banner Image, Copy 1, Buy button 1, Copy 2) */}
        <SalesCopySection
          bannerSrc={bannerSrc}
          onCtaClick={scrollToCheckout}
        />

        {/* SECTION 5: Modules and Benefits */}
        <ModulesSection />

        {/* SECTION 6: Exclusive Bonuses */}
        <BonusesSection />

        {/* SECTION 7: Plans Matrix */}
        <PlansSection onSelectPlan={selectPlanForCheckout} />

        {/* SECTION 8: Final Reinforcement sales copy & urgency */}
        <ReinforcementCopySection onCtaClick={scrollToCheckout} />

        {/* SECTION 9: Frequently Asked Questions - FAQ (fac) */}
        <FAQSection />

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 px-4 text-center font-mono text-[10px] text-neutral-500 relative z-10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex justify-center gap-2 items-center text-[12px] text-white tracking-widest uppercase">
            <Shield className="w-4 h-4" />
            <span>DARK CIPHER • ANONYMOUS VIP GROUP</span>
          </div>
          <p className="max-w-md mx-auto leading-relaxed">
            Nenhuma informação pessoal ou logs de acesso são vendidos ou transferidos para terceiros. Criptografia ponta-a-ponta nativa operando de acordo com padrões Soberanos.
          </p>
          <div className="flex justify-center gap-4 text-neutral-600">
            <span>TERMOS DE ACESSO: AES-256</span>
            <span>•</span>
            <span>DIRETRIZES DE OPSEC: ATIVAS</span>
            <span>•</span>
            <span>SSL SECURE TRADING</span>
          </div>
          <p className="text-[9px] text-neutral-700 pt-4">
            © 2026 Dark Cipher Corporation. Todos os direitos reservados. Garantias estendidas suportadas sob lei civil 10.406.
          </p>
        </div>
      </footer>

      {/* Floating CTA / Back to top bar if checkout open */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block">
        <button
          onClick={() => setIsConsoleOpen(prev => !prev)}
          className="px-3 py-1.5 bg-black border border-white hover:bg-white hover:text-black font-mono text-[10px] uppercase cursor-pointer rounded-sm flex items-center gap-1.5 transition-all shadow-md"
        >
          <span>{isConsoleOpen ? "FECHAR CONSOLE" : "ABRIR CONSOLE TÁTICO"}</span>
        </button>
      </div>

      {/* MODAL & DRAWER PORTALS */}
      {selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {isConsoleOpen && (
        <ConsoleDrawer onClose={() => setIsConsoleOpen(false)} />
      )}

    </div>
  );
}
