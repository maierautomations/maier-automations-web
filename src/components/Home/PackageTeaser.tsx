import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export function PackageTeaser() {
  const packages = [
    {
      name: "Starter",
      price: "1.990€",
      period: "einmalig",
      description: "Perfekt für kleine Unternehmen, die erste Automatisierungen umsetzen möchten.",
      features: [
        "2 Basis-Workflows",
        "E-Mail Integration",
        "Standard Support",
        "Dokumentation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "4.990€",
      period: "einmalig",
      description: "Umfassende Automatisierungslösung für wachsende Unternehmen.",
      features: [
        "5 komplexe Workflows",
        "API-Integrationen",
        "KI-Agent inklusive",
        "Priority Support",
        "3 Monate Optimierung"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Auf Anfrage",
      period: "",
      description: "Maßgeschneiderte Lösungen für Großunternehmen mit individuellen Anforderungen.",
      features: [
        "Unbegrenzte Workflows",
        "Custom KI-Entwicklung",
        "Dedicated Support",
        "SLA-Garantie",
        "Fortlaufende Betreuung"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unsere Automatisierungs-Pakete
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparente Preise, sofortige Umsetzung. Wählen Sie das passende Paket 
            für Ihre Automatisierungsanforderungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative ${pkg.popular ? 'ring-2 ring-primary shadow-soft scale-105' : 'shadow-card hover:shadow-soft'} 
                         transition-all duration-200 hover:scale-[1.02]`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Beliebteste Wahl
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-semibold mb-2">{pkg.name}</CardTitle>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  {pkg.period && <span className="text-muted-foreground ml-2">{pkg.period}</span>}
                </div>
                <CardDescription className="text-sm">{pkg.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/pakete" className="w-full block">
                  <Button 
                    variant={pkg.popular ? "cta" : "outline"} 
                    className="w-full"
                  >
                    Paket wählen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Unsicher, welches Paket das richtige ist?
          </p>
          <Link to="/analyse">
            <Button variant="outline" size="lg">
              Kostenlose Beratung anfragen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}