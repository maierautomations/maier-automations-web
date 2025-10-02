import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { PricingCard } from "@/components/ui/pricing-card";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { Calculator, ArrowRight } from "lucide-react";
import { CPTooltip } from "@/components/ui/cp-tooltip";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEO/SEOHead";
import { motion } from "framer-motion";

export default function Packages() {
  const packages = [
    {
      name: "Starter",
      cp: "3 CP",
      price: "Ab €3.000",
      period: "Setup + €300-€540/Monat Care",
      description: "Perfekt für erste Automatisierungen. Ideal für kleine Teams, die Routinearbeit reduzieren möchten.",
      features: [
        "3 Basis-Workflows ODER 1 Agent + 1 Workflow",
        "Standard-Integrationen (E-Mail, CRM, Files)",
        "Fehlerpfade & Benachrichtigungen",
        "Basis-Dokumentation & Runbook",
        "E-Mail Support",
        "30 Tage Garantie"
      ],
      popular: false,
      cpDetails: "Typisch: 2-3 Standard-Workflows oder 1 einfacher KI-Agent mit Grundfunktionen",
      useCases: ["E-Mail-Automatisierung", "Lead-Qualifizierung", "Basis-Berichte"]
    },
    {
      name: "Core",
      cp: "6 CP",
      price: "Ab €6.000",
      period: "Setup + €600-€1.125/Monat Care",
      description: "Umfassende Automatisierung für wachsende Unternehmen mit individuellen Anforderungen.",
      features: [
        "6 komplexe Workflows ODER 3 Agenten",
        "API-Integrationen (CRM, ERP, Support-Tools)",
        "Erweiterte KI-Agenten mit Memory",
        "Custom-Validierungen & Freigaben",
        "Telefon & E-Mail Support",
        "3 Monate Optimierung inklusive",
        "Team-Schulung & Dokumentation"
      ],
      popular: true,
      cpDetails: "Mix aus Workflows und Agenten, mehrere System-Integrationen, mittlere Komplexität",
      useCases: ["Vollständige Lead-Pipeline", "Support-Automation", "Compliance-Workflows"]
    },
    {
      name: "Scale",
      cp: "10 CP",
      price: "Ab €10.000",
      period: "Setup + €1.000-€1.800/Monat Care",
      description: "Enterprise-Lösung mit RAG Pro für datenintensive Unternehmen und komplexe Automatisierungen.",
      features: [
        "10 CP flexibel verteilbar",
        "RAG Pro Wissensassistent inklusive",
        "Unbegrenzte System-Integrationen",
        "On-Premise Option verfügbar",
        "Dedicated Success Manager",
        "Priority Support (4h Response)",
        "Kontinuierliche Optimierung",
        "DSGVO-Audit & Compliance-Check"
      ],
      popular: false,
      cpDetails: "Enthält typisch RAG Pro (3-4 CP) + mehrere Workflows/Agenten + komplexe Integrationen",
      useCases: ["Wissensmanagement", "Compliance-Automation", "Multi-System-Integration"]
    },
    {
      name: "Custom",
      cp: "> 10 CP",
      price: "Individuell",
      period: "",
      description: "Maßgeschneiderte Enterprise-Lösungen für besonders komplexe Automatisierungsanforderungen.",
      features: [
        "Unbegrenzte Complexity Points",
        "Vollständig maßgeschneiderte Entwicklung",
        "Multi-RAG-Systeme mit verschiedenen LLMs",
        "Custom UI-Entwicklung",
        "Dedicated Development Team",
        "24/7 Enterprise Support",
        "SLA-Garantien nach Vereinbarung",
        "Vollständige On-Premise-Deployment"
      ],
      popular: false,
      cpDetails: "Für Großunternehmen mit sehr spezifischen Anforderungen und hoher Komplexität",
      useCases: ["Konzern-weite Automation", "Regulierte Branchen", "Multi-Tenant-Systeme"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <SEOHead
        title="KI-Automatisierungs-Pakete nach Complexity Points"
        description="Transparente CP-basierte Pakete für KI-Automatisierungen: Starter (3 CP), Core (6 CP), Scale (10 CP). DSGVO-konform, EU-Hosting, n8n-Workflows. Jetzt kostenlose Analyse starten."
        keywords="KI-Automatisierung Pakete, Complexity Points, n8n Workflows, KI-Agenten, RAG Pro, DSGVO-konform, EU-Hosting, Preise"
        url="https://maier-automations.de/pakete"
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                <Calculator className="w-4 h-4 mr-2" />
                Transparente CP-Preisgestaltung • Sofortige Umsetzung
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
                Automatisierungs-Pakete nach{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  Komplexitätspunkten
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <p className="text-xl text-slate-300 leading-relaxed">
                  Faire Preise basierend auf tatsächlicher Komplexität (CP)
                </p>
                <CPTooltip />
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-2">
                Alle Pakete sind DSGVO-konform, werden auf EU-Servern gehostet und enthalten transparente Abnahmekriterien.
              </p>
              <p className="text-sm text-slate-400">
                Preise netto, zzgl. MwSt. Kosten für Drittanbieter-Lizenzen nicht enthalten.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={pkg.name === "Custom" ? "xl:col-span-1" : ""}
                >
                  <PricingCard
                    name={pkg.name}
                    cp={pkg.cp}
                    price={pkg.price}
                    description={pkg.description}
                    features={pkg.features}
                    useCases={pkg.useCases}
                    isPopular={pkg.popular}
                    href={pkg.name === "Custom" ? "/kontakt" : "/analyse"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-6">
                Welches Paket passt zu Ihnen?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Unsere kostenlose Prozess-Analyse ermittelt Ihre benötigten Complexity Points und
                empfiehlt das optimale Paket. Unverbindlich und in nur 30 Minuten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/analyse">
                  <GradientButton size="lg" className="min-w-[220px] h-14" glow>
                    <Calculator className="w-5 h-5 mr-2" />
                    CP-Analyse starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </GradientButton>
                </Link>
                <Link to="/kontakt">
                  <Button variant="outline" size="lg" className="min-w-[220px] h-14 border-slate-700 text-slate-300 hover:bg-slate-800">
                    Persönliche Beratung
                  </Button>
                </Link>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-8">
                  <h3 className="font-bold text-slate-50 mb-4 text-lg">💡 CP-Formel verstehen</h3>
                  <p className="text-slate-300 mb-6 text-lg">
                    CP = (#Workflows) + 2×(#Agenten) + (RAG Pro? 3-4 : 0) + Komplexitäts-Extras
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                      <div className="font-bold text-emerald-500 text-lg mb-1">Beispiel Starter</div>
                      <div className="text-sm text-slate-400">2 Workflows + 1 Simple-Task = 3 CP</div>
                    </div>
                    <div className="text-center p-6 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                      <div className="font-bold text-cyan-500 text-lg mb-1">Beispiel Core</div>
                      <div className="text-sm text-slate-400">4 Workflows + 1 Agent = 6 CP</div>
                    </div>
                    <div className="text-center p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                      <div className="font-bold text-amber-500 text-lg mb-1">Beispiel Scale</div>
                      <div className="text-sm text-slate-400">3 Workflows + 1 Agent + RAG Pro = 9 CP</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}