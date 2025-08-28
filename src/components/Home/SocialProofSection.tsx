import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Clock } from "lucide-react";

export function SocialProofSection() {
  const stats = [
    {
      value: "15+",
      label: "Umgesetzte Projekte",
      description: "Erfolgreiche KI-Automatisierungen"
    },
    {
      value: "60%",
      label: "Durchschnittliche Zeitersparnis",
      description: "Weniger manuelle Arbeit"
    },
    {
      value: "100%",
      label: "DSGVO-Compliance",
      description: "Alle Projekte rechtssicher"
    },
    {
      value: "2-3",
      label: "Wochen bis Go-Live",
      description: "Von Analyse bis Produktivbetrieb"
    }
  ];

  const testimonials = [
    {
      text: "Durch die n8n-Automatisierung sparen wir täglich 3 Stunden bei der Lead-Qualifizierung. Die ROI war bereits nach 6 Wochen erreicht.",
      company: "Mittelständisches Softwareunternehmen",
      industry: "IT-Dienstleistung",
      result: "3h/Tag gespart",
      cp: "4 CP"
    },
    {
      text: "Der RAG Pro Assistent hat unseren Kundenservice revolutioniert. Technische Anfragen werden jetzt in Sekunden statt Stunden beantwortet.",
      company: "Maschinenbau-Unternehmen (150 MA)",
      industry: "Fertigung",
      result: "90% schnellere Antworten",
      cp: "6 CP + RAG"
    },
    {
      text: "DSGVO-konforme Automatisierung unserer Compliance-Prozesse. Endlich haben wir die Sicherheit, dass alles rechtlich korrekt abläuft.",
      company: "Steuerberatungsgesellschaft",
      industry: "Beratung",
      result: "100% Compliance-Quote",
      cp: "5 CP"
    }
  ];

  const partners = [
    "n8n Cloud Partner",
    "Supabase Technology Partner", 
    "Microsoft Azure Certified",
    "DSGVO-zertifiziert"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Bewährte Ergebnisse für DACH-Unternehmen
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Vertrauen durch Ergebnisse
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Diese Zahlen sprechen für sich: Unsere KI-Automatisierungen liefern messbare Ergebnisse 
            für Unternehmen im DACH-Raum.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Was unsere Kunden sagen
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elevated transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="w-8 h-8 text-primary/30 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{testimonial.company}</span>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.cp}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{testimonial.industry}</span>
                      <span className="font-medium text-green-600">{testimonial.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners & Trust Badges */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-foreground mb-6">
            Vertrauen uns bereits
          </h4>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-sm font-medium text-muted-foreground px-4 py-2 bg-white rounded-lg border border-gray-200">
                {partner}
              </div>
            ))}
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Referenzen:</strong> Aus Datenschutzgründen können wir nicht alle Kundennamen öffentlich nennen. 
                Gerne stellen wir bei ernsthaftem Interesse anonymisierte Case Studies oder 
                Referenz-Gespräche zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}