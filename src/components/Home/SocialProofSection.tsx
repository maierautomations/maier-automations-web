import { Badge } from "@/components/ui/badge";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { TrendingUp, Clock, Users, Shield, Zap } from "lucide-react";

export function SocialProofSection() {
  const stats = [
    {
      value: 15,
      suffix: "+",
      label: "Umgesetzte Projekte",
      icon: Users
    },
    {
      value: 60,
      suffix: "%",
      label: "Zeitersparnis",
      icon: Zap
    },
    {
      value: 100,
      suffix: "%",
      label: "DSGVO-Compliance",
      icon: Shield
    },
    {
      value: 3,
      suffix: " Wochen",
      label: "Bis Go-Live",
      icon: Clock
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
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 gradient-emerald-cyan text-slate-900 border-0">
            <TrendingUp className="w-4 h-4 mr-2" />
            Bewährte Ergebnisse für DACH-Unternehmen
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
            Vertrauen durch Ergebnisse
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
            Diese Zahlen sprechen für sich: Unsere KI-Automatisierungen liefern messbare Ergebnisse
            für Unternehmen im DACH-Raum.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-50 mb-12">
            Was unsere Kunden sagen
          </h3>

          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Partners & Trust Badges */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-slate-50 mb-6">
            Vertrauen uns bereits
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-sm font-medium text-slate-300 px-4 py-2 glass-card rounded-lg">
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="glass-card rounded-lg p-4 border-emerald-500/20">
              <p className="text-sm text-slate-300">
                <strong className="text-emerald-500">Referenzen:</strong> Aus Datenschutzgründen können wir nicht alle Kundennamen öffentlich nennen.
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