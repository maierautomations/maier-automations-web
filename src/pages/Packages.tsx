import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Calculator } from "lucide-react";
import { CPTooltip } from "@/components/ui/cp-tooltip";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEO/SEOHead";

export default function Packages() {
  const packages = [
    {
      name: "Starter",
      cp: "3 CP",
      price: "Preis noch nicht fix",
      period: "",
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
      price: "Preis noch nicht fix",
      period: "",
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
      price: "Preis noch nicht fix",
      period: "",
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
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="KI-Automatisierungs-Pakete nach Complexity Points"
        description="Transparente CP-basierte Pakete für KI-Automatisierungen: Starter (3 CP), Core (6 CP), Scale (10 CP). DSGVO-konform, EU-Hosting, n8n-Workflows. Jetzt kostenlose Analyse starten."
        keywords="KI-Automatisierung Pakete, Complexity Points, n8n Workflows, KI-Agenten, RAG Pro, DSGVO-konform, EU-Hosting, Preise"
        url="https://maier-automations.de/pakete"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                <Calculator className="w-4 h-4 mr-2" />
                Transparente CP-Preisgestaltung • Sofortige Umsetzung
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Automatisierungs-Pakete nach{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Komplexitätspunkten
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Faire Preise basierend auf tatsächlicher Komplexität (CP)
                </p>
                <CPTooltip />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alle Pakete sind DSGVO-konform, werden auf EU-Servern gehostet und enthalten transparente Abnahmekriterien.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative group animate-fade-in card-modern border-0 ${
                    pkg.popular 
                      ? 'ring-2 ring-primary/20 shadow-elevated scale-105' 
                      : 'shadow-card hover:shadow-elevated hover:scale-[1.02]'
                  } transition-all duration-300 ease-out`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-6 py-2 font-semibold shadow-soft">
                        <Star className="w-4 h-4 mr-2" />
                        Beliebteste Wahl
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold mb-4 text-foreground">{pkg.name}</CardTitle>
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                          {pkg.cp}
                        </span>
                        <CPTooltip />
                      </div>
                      <Badge variant="outline" className="mb-2">
                        {pkg.price}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-muted-foreground px-4 mb-4">
                      {pkg.description}
                    </CardDescription>
                    <div className="text-sm text-muted-foreground px-4">
                      <strong>Typische Anwendung:</strong> {pkg.cpDetails}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 px-8 pb-8">
                    <ul className="space-y-5 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-4">
                          <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base leading-relaxed text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-sm text-primary mb-2">Typische Anwendungsfälle:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.useCases.map((useCase, ucIndex) => (
                          <Badge key={ucIndex} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/analyse">
                      <Button 
                        variant={pkg.popular ? "default" : "outline"} 
                        className={`w-full h-14 text-lg font-semibold rounded-lg transition-all duration-200 ${
                          pkg.popular 
                            ? 'bg-primary hover:bg-primary-hover shadow-soft hover:shadow-elevated' 
                            : 'border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft'
                        }`}
                        size="lg"
                      >
                        {pkg.name === "Custom" ? "Individuelle Analyse" : "Kostenlose Analyse starten"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welches Paket passt zu Ihnen?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unsere kostenlose Prozess-Analyse ermittelt Ihre benötigten Complexity Points und 
              empfiehlt das optimale Paket. Unverbindlich und in nur 30 Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/analyse">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary-hover shadow-soft btn-modern">
                  <Calculator className="w-5 h-5 mr-2" />
                  CP-Analyse starten
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground btn-modern">
                  Persönliche Beratung
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg max-w-3xl mx-auto">
              <h3 className="font-semibold text-foreground mb-2">💡 CP-Formel verstehen</h3>
              <p className="text-sm text-muted-foreground mb-3">
                CP = (#Workflows) + 2×(#Agenten) + (RAG Pro? 3-4 : 0) + Komplexitäts-Extras
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-blue-600">Beispiel Starter</div>
                  <div className="text-xs text-muted-foreground">2 Workflows + 1 Simple-Task = 3 CP</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-green-600">Beispiel Core</div>
                  <div className="text-xs text-muted-foreground">4 Workflows + 1 Agent = 6 CP</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-purple-600">Beispiel Scale</div>
                  <div className="text-xs text-muted-foreground">3 Workflows + 1 Agent + RAG Pro = 9 CP</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}