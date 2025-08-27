import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

export function PackageGrid() {
  const packages = [
    {
      name: "Starter",
      complexityPoints: 3,
      description: "Ideal für erste Automatisierungen in kleinen Unternehmen",
      features: [
        "2-3 einfache Workflows",
        "Grundlegende E-Mail-Automatisierung",
        "Standard-Support",
        "Basis-Dokumentation"
      ],
      priceRange: "ab 2.400€ - 3.600€",
      popular: false
    },
    {
      name: "Core",
      complexityPoints: 6,
      description: "Umfassende Automatisierung für wachsende Unternehmen",
      features: [
        "4-6 komplexe Workflows",
        "1 KI-Agent inklusive",
        "API-Integrationen",
        "Priority Support",
        "3 Monate Optimierung"
      ],
      priceRange: "ab 4.800€ - 7.200€",
      popular: true
    },
    {
      name: "Scale",
      complexityPoints: 10,
      description: "Maximale Automatisierung mit KI-Agenten für Unternehmen",
      features: [
        "8-10 Workflows & Prozesse",
        "2-3 spezialisierte KI-Agenten",
        "RAG-System optional",
        "Dedicated Support",
        "Kontinuierliche Optimierung"
      ],
      priceRange: "ab 8.000€ - 12.000€",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Unsere Automatisierungs-Pakete
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-6 h-6">
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <div className="space-y-2">
                    <p className="font-semibold">Complexity Points (CP) erklärt:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 1 einfacher Workflow ≈ 1 CP</li>
                      <li>• 1 KI-Agent ≈ 2 CP</li>
                      <li>• 1 RAG-Agent ≈ 3-4 CP</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparente Preise basierend auf Complexity Points. Jedes Paket wird individuell 
            an Ihre Anforderungen angepasst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative group animate-fade-in card-modern border-0 ${
                pkg.popular 
                  ? 'ring-2 ring-primary/20 shadow-elevated scale-105' 
                  : 'shadow-card hover:shadow-elevated hover:scale-[1.02]'
              } transition-all duration-300 ease-out`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 font-medium shadow-soft">
                  Beliebteste Wahl
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                  <Badge variant="outline" className="text-xs font-medium border-primary/30 text-primary bg-primary/5">
                    {pkg.complexityPoints} CP
                  </Badge>
                </div>
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                    {pkg.priceRange}
                  </span>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground px-2">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/analyse" className="w-full block">
                  <Button 
                    variant={pkg.popular ? "default" : "outline"} 
                    className={`w-full h-12 text-base font-medium rounded-lg transition-all duration-200 ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary-hover shadow-soft hover:shadow-elevated' 
                        : 'border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft'
                    }`}
                  >
                    Kostenlose Analyse
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Benötigen Sie mehr als 10 Complexity Points? Wir entwickeln auch individuelle Lösungen.
          </p>
          <Link to="/kontakt">
            <Button variant="outline" size="lg" className="btn-modern border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
              Individuelle Lösung anfragen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}