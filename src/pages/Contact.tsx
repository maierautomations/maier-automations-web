import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Lassen Sie uns{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  sprechen
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Haben Sie Fragen zu KI-Automatisierungen? Möchten Sie ein individuelles Angebot? 
                Wir freuen uns auf Ihre Nachricht und antworten innerhalb von 24 Stunden.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
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
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input id="company" placeholder="Mustermann GmbH" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+49 123 456 789" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input id="subject" placeholder="Ihre Anfrage in Kürze..." />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Beschreiben Sie Ihr Anliegen oder Ihre Fragen..."
                      rows={5}
                    />
                  </div>
                  
                  <Button variant="cta" className="w-full" size="lg">
                    Nachricht senden
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. 
                    Ihre Daten werden ausschließlich für die Bearbeitung Ihrer Anfrage verwendet.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Kontaktinformationen
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Maier Automations GmbH<br />
                          Maximilianstraße 35<br />
                          80539 München<br />
                          Deutschland
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <p className="text-muted-foreground">
                          +49 (0) 89 123 456 78<br />
                          Mo-Fr: 9:00 - 18:00 Uhr
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                        <p className="text-muted-foreground">
                          info@maier-automations.de<br />
                          support@maier-automations.de
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Geschäftszeiten</h3>
                        <p className="text-muted-foreground">
                          Montag - Freitag: 9:00 - 18:00 Uhr<br />
                          Samstag: 10:00 - 14:00 Uhr<br />
                          Sonntag: Geschlossen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="bg-primary-light border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-3">
                      💡 Schnelle Hilfe benötigt?
                    </h3>
                    <p className="text-sm text-primary/80 mb-4">
                      Für dringende Anfragen oder technischen Support erreichen Sie uns 
                      auch über unsere Hotline oder buchen direkt einen Termin.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Termin buchen
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        WhatsApp Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cal.com Integration Section */}
            <div className="mt-16">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    Direkt Termin buchen
                  </CardTitle>
                  <CardDescription>
                    Sichern Sie sich jetzt Ihren persönlichen Beratungstermin. Wählen Sie einfach einen passenden Zeitslot aus.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[900px] lg:min-h-[600px]">
                    <Cal
                      namespace="30min"
                      calLink="dominik-maier/30min"
                      style={{width:"100%",height:"100%",overflow:"scroll"}}
                      config={{"layout":"month_view","theme":"auto"}}
                    />
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Hinweis:</strong> Nach der Terminbuchung erhalten Sie eine Bestätigungs-E-Mail mit allen Details und einem Link für die Videokonferenz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}