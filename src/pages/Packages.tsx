import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "Starter",
      price: "1.990€",
      period: "einmalig",
      description: "Perfekt für kleine Unternehmen, die erste Automatisierungen umsetzen möchten.",
      features: [
        "2 Basis-Workflows",
        "E-Mail Integration",
        "Standard Support (E-Mail)",
        "Basis-Dokumentation",
        "1 Monat Garantie"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "4.990€",
      period: "einmalig",
      description: "Umfassende Automatisierungslösung für wachsende Unternehmen mit individuellen Anforderungen.",
      features: [
        "5 komplexe Workflows",
        "API-Integrationen (CRM, ERP)",
        "KI-Agent inklusive",
        "Priority Support (Telefon)",
        "3 Monate Optimierung",
        "Schulung Ihres Teams",
        "Custom Dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Auf Anfrage",
      period: "",
      description: "Maßgeschneiderte Lösungen für Großunternehmen mit komplexen Automatisierungsanforderungen.",
      features: [
        "Unbegrenzte Workflows",
        "Custom KI-Entwicklung",
        "Dedicated Account Manager",
        "SLA-Garantie (99.9%)",
        "Fortlaufende Betreuung",
        "On-Premise Deployment",
        "Compliance-Zertifizierung",
        "24/7 Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                Transparente Preise • Sofortige Umsetzung
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Automatisierungs-Pakete für{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  jeden Bedarf
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wählen Sie das passende Paket für Ihre Automatisierungsanforderungen. 
                Alle Pakete sind DSGVO-konform und werden auf EU-Servern gehostet.
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
                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      {pkg.period && <span className="text-lg text-muted-foreground ml-3">{pkg.period}</span>}
                    </div>
                    <CardDescription className="text-lg leading-relaxed text-muted-foreground px-4">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 px-8 pb-8">
                    <ul className="space-y-5 mb-10">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-4">
                          <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base leading-relaxed text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={pkg.popular ? "default" : "outline"} 
                      className={`w-full h-14 text-lg font-semibold rounded-lg transition-all duration-200 ${
                        pkg.popular 
                          ? 'bg-primary hover:bg-primary-hover shadow-soft hover:shadow-elevated' 
                          : 'border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft'
                      }`}
                      size="lg"
                    >
                      {pkg.name === "Enterprise" ? "Angebot anfragen" : "Paket wählen"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Noch Fragen zu unseren Paketen?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam das optimale Automatisierungspaket für Ihr Unternehmen finden. 
              Kostenlose Beratung und individuelle Anpassungen möglich.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary-hover shadow-soft btn-modern">
                Kostenlose Beratung
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground btn-modern">
                Callback vereinbaren
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}