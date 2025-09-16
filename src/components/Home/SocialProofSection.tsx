import { Badge } from "@/components/ui/badge";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { TrendingUp, Clock, Users, Shield, Zap } from "lucide-react";

export function SocialProofSection() {
  const stats = [
    {
      value: 15,
      suffix: "+",
      label: "Umgesetzte Projekte",
      description: "Erfolgreiche KI-Automatisierungen",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      value: 60,
      suffix: "%",
      label: "Durchschnittliche Zeitersparnis",
      description: "Weniger manuelle Arbeit",
      icon: <Zap className="w-6 h-6 text-green-600" />
    },
    {
      value: 100,
      suffix: "%",
      label: "DSGVO-Compliance",
      description: "Alle Projekte rechtssicher",
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      value: 3,
      suffix: " Wochen",
      label: "Bis Go-Live",
      description: "Von Analyse bis Produktivbetrieb",
      icon: <Clock className="w-6 h-6 text-orange-600" />
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
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
            Was unsere Kunden sagen
          </h3>
          
          <TestimonialCarousel testimonials={testimonials} />
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