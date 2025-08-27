import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

        {/* Form Section */}
        <section className="py-16 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Jetzt Termin vereinbaren</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Vorname *</Label>
                      <Input id="firstName" placeholder="Max" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nachname *</Label>
                      <Input id="lastName" placeholder="Mustermann" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input id="email" type="email" placeholder="max@unternehmen.de" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Unternehmen *</Label>
                    <Input id="company" placeholder="Mustermann GmbH" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+49 123 456 789" />
                  </div>
                  
                  <div>
                    <Label htmlFor="employees">Anzahl Mitarbeiter</Label>
                    <Input id="employees" placeholder="z.B. 25" />
                  </div>
                  
                  <div>
                    <Label htmlFor="challenges">Ihre größten Herausforderungen</Label>
                    <Textarea 
                      id="challenges" 
                      placeholder="Beschreiben Sie kurz, welche Prozesse Sie automatisieren möchten oder wo Sie Effizienzpotenziale sehen..."
                      rows={4}
                    />
                  </div>
                  
                  <Button variant="cta" className="w-full" size="lg">
                    Kostenlose Analyse anfordern
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Mit der Anfrage stimmen Sie unserer Datenschutzerklärung zu. 
                    Ihre Daten werden ausschließlich für die Kontaktaufnahme verwendet.
                  </p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Das erhalten Sie in der Analyse
                  </h3>
                  
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