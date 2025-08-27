import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Search, FileText, Zap, Shield, Clock, Cpu, Globe } from "lucide-react";

export default function RagPro() {
  const features = [
    {
      icon: Database,
      title: "Intelligente Wissensbasis",
      description: "Verwandelt Ihre Dokumente in eine durchsuchbare, vernetzte Wissensdatenbank mit semantischem Verständnis."
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Findet relevante Informationen basierend auf Bedeutung, nicht nur Keywords. Versteht Kontext und Zusammenhänge."
    },
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "Verarbeitet PDFs, Word-Dokumente, Excel-Tabellen, Websites, E-Mails und mehr automatisch."
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Liefert präzise Antworten auf komplexe Fragen in unter 2 Sekunden mit Quellenangabe."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Vollständig DSGVO-konforme Verarbeitung mit EU-Hosting und höchsten Datenschutzstandards."
    },
    {
      icon: Clock,
      title: "24/7 Verfügbar",
      description: "Ihr Wissensassistent arbeitet rund um die Uhr und beantwortet Mitarbeiterfragen sofort."
    }
  ];

  const useCases = [
    {
      title: "Kundenservice Excellence",
      description: "Sofortige, präzise Antworten auf Kundenanfragen basierend auf Ihrem gesamten Wissensfundus.",
      benefits: ["95% Reduzierung der Antwortzeit", "Konsistente Servicequalität", "24/7 Verfügbarkeit"]
    },
    {
      title: "Interne Wissensdatenbank",
      description: "Mitarbeiter finden sofort die benötigten Informationen aus Handbüchern, Prozessen und Dokumenten.",
      benefits: ["50% weniger Nachfragen", "Schnellere Einarbeitung", "Bessere Compliance"]
    },
    {
      title: "Compliance & Reporting",
      description: "Automatische Analyse von Compliance-Dokumenten und Generierung regelkonformer Berichte.",
      benefits: ["Reduziertes Compliance-Risiko", "Automatisierte Dokumentation", "Audit-Ready Reports"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                RAG-Technologie • Retrieval-Augmented Generation
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                RAG Pro: Ihr intelligenter{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Wissensassistent
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed">
                Verwandeln Sie Ihre Unternehmensdokumente in eine intelligente, durchsuchbare Wissensbasis. 
                RAG Pro versteht Ihre Daten und liefert präzise Antworten in Sekundenschnelle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Demo vereinbaren
                </Button>
                <Button variant="outline" size="lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Live-Demo ansehen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Intelligenz trifft auf Ihr Wissen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                RAG Pro kombiniert modernste KI-Technologie mit Ihren spezifischen Unternehmensdaten 
                für unvergleichliche Wissenszugriffe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Praxisbewährte Anwendungsfälle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Erfahren Sie, wie Unternehmen RAG Pro erfolgreich einsetzen und ihre Produktivität steigern.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-200">
                  <CardHeader>
                    <CardTitle className="text-xl mb-3">{useCase.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-light to-accent rounded-2xl p-8 lg:p-12 text-center shadow-soft">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Bereit für intelligentes Wissensmanagement?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam analysieren, wie RAG Pro Ihr Unternehmen revolutionieren kann. 
                Kostenlose Demo und individuelle Beratung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg">
                  Kostenlose Demo vereinbaren
                </Button>
                <Button variant="outline" size="lg">
                  Whitepaper herunterladen
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}