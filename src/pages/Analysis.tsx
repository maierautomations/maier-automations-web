import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { WizardForm } from "@/components/WizardForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

export default function Analysis() {
  const steps = [
    {
      icon: Users,
      title: "1. Bedarfsanalyse",
      description: "Gemeinsames Gespräch über Ihre aktuellen Prozesse und Herausforderungen"
    },
    {
      icon: Zap,
      title: "2. Potenzialidentifikation",
      description: "Analyse der größten Automatisierungschancen in Ihrem Unternehmen"
    },
    {
      icon: CheckCircle,
      title: "3. Maßgeschneiderter Plan",
      description: "Konkrete Roadmap mit Prioritäten, Zeitplan und ROI-Prognose"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                <Clock className="w-4 h-4 mr-2" />
                100% kostenlos • Unverbindlich • 30 Minuten
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Kostenlose{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Automatisierungs-Analyse
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Entdecken Sie in nur 30 Minuten, welche Automatisierungspotenziale in Ihrem Unternehmen schlummern. 
                Erhalten Sie einen maßgeschneiderten Aktionsplan für mehr Effizienz und Wachstum.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                So läuft Ihre kostenlose Analyse ab
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wizard Form Section */}
        <section className="py-16 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Starten Sie Ihre persönliche Analyse
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Beantworten Sie einige Fragen zu Ihrem Unternehmen und erhalten Sie 
                eine maßgeschneiderte Empfehlung für Ihre KI-Automatisierung.
              </p>
            </div>
            
            <WizardForm />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Das erhalten Sie in der Analyse
                </h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    "Detaillierte Prozessanalyse Ihrer aktuellen Arbeitsabläufe",
                    "Identifikation der 3 größten Automatisierungspotenziale",
                    "Konkrete ROI-Berechnung für jede Automatisierung",
                    "Priorisierte Roadmap mit Zeitplan und Meilensteinen",
                    "Empfehlung der optimalen Tools und Technologien",
                    "Kostenaufstellung für die Implementierung"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Card className="bg-primary-light border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">
                      💡 Kostenloses Bonus-Material
                    </h4>
                    <p className="text-sm text-primary/80">
                      Nach dem Gespräch erhalten Sie unser exklusives Whitepaper 
                      "KI-Automatisierung im Mittelstand" mit 20+ sofort umsetzbaren Ideen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}