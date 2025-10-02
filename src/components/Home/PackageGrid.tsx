import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { PricingCard } from "@/components/ui/pricing-card";
import { motion } from "framer-motion";

export function PackageGrid() {
  const packages = [
    {
      name: "Starter",
      cp: "3 CP",
      price: "Ab €3.000",
      description: "Ideal für erste Automatisierungen in kleinen Unternehmen",
      features: [
        "2-3 einfache Workflows",
        "Grundlegende E-Mail-Automatisierung",
        "Standard-Support",
        "Basis-Dokumentation"
      ],
      useCases: ["E-Mail-Automatisierung", "Lead-Qualifizierung", "Basis-Berichte"],
      isPopular: false
    },
    {
      name: "Core",
      cp: "6 CP",
      price: "Ab €6.000",
      description: "Umfassende Automatisierung für wachsende Unternehmen",
      features: [
        "4-6 komplexe Workflows",
        "1 KI-Agent inklusive",
        "API-Integrationen",
        "Priority Support",
        "3 Monate Optimierung"
      ],
      useCases: ["Vollständige Lead-Pipeline", "Support-Automation", "Compliance-Workflows"],
      isPopular: true
    },
    {
      name: "Scale",
      cp: "10 CP",
      price: "Ab €10.000",
      description: "Maximale Automatisierung mit KI-Agenten für Unternehmen",
      features: [
        "8-10 Workflows & Prozesse",
        "2-3 spezialisierte KI-Agenten",
        "RAG-System optional",
        "Dedicated Support",
        "Kontinuierliche Optimierung"
      ],
      useCases: ["Wissensmanagement", "Compliance-Automation", "Multi-System-Integration"],
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-50">
              Unsere Automatisierungs-Pakete
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="w-6 h-6 rounded-full bg-slate-800/50 hover:bg-slate-800/80 flex items-center justify-center transition-colors border border-slate-700/50">
                    <Info className="w-4 h-4 text-emerald-500" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-sm bg-slate-800 border-slate-700/50">
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-50">Complexity Points (CP) erklärt:</p>
                    <ul className="text-sm space-y-1 text-slate-300">
                      <li>• 1 einfacher Workflow ≈ 1 CP</li>
                      <li>• 1 KI-Agent ≈ 2 CP</li>
                      <li>• 1 RAG-Agent ≈ 3-4 CP</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Transparente Preise basierend auf Complexity Points. Jedes Paket wird individuell
            an Ihre Anforderungen angepasst.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PricingCard
                name={pkg.name}
                cp={pkg.cp}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                useCases={pkg.useCases}
                isPopular={pkg.isPopular}
                href="/analyse"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}