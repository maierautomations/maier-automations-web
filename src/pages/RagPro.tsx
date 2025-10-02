import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Search, FileText, Zap, Shield, Clock, Cpu, Globe } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";

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
    <div className="min-h-screen flex flex-col bg-slate-950">
      <SEOHead
        title="RAG Pro - Premium KI-Wissensassistent mit Vektordatenbank"
        description="RAG Pro: Intelligenter Wissensassistent für Unternehmen. Semantische Suche, Quellenangaben, Excel-Auswertung, DSGVO-konform. 3-4 Complexity Points. EU-Hosting Frankfurt."
        keywords="RAG Pro, KI-Wissensassistent, Vektordatenbank, semantische Suche, Quellenangaben, DSGVO, pgvector, Supabase, Unternehmenswissen"
        url="https://maier-automations.de/rag-pro"
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-50" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                <Cpu className="w-4 h-4 mr-2" />
                Premium RAG-Technologie • 3-4 Complexity Points
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-50 mb-6 leading-tight">
                RAG Pro: Ihr intelligenter{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  Premium-Wissensassistent
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed">
                Unser fortschrittlichster KI-Agent mit Vektordatenbank, SQL-Tools und Hybrid-Search.
                Verwandelt Ihre komplexesten Unternehmensdaten in präzise, quellenbasierte Antworten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button variant="gradient-primary" size="lg" asChild>
                  <a href="/analyse">
                    <Zap className="w-5 h-5 mr-2" />
                    RAG Pro anfragen
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Globe className="w-5 h-5 mr-2" />
                  Live-Demo ansehen
                </Button>
              </div>

              <div className="glass-card p-4 max-w-2xl mx-auto">
                <strong className="text-emerald-500">Preisband:</strong> <span className="text-slate-300">3.500€ - 6.500€ inkl. Setup + monatliche Betreuung</span>
              </div>
            </div>
          </div>
        </section>

        {/* RAG Process Diagram */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
                So funktioniert RAG Pro
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Ein intelligenter 4-Schritt-Prozess von der Dokumenten-Aufnahme bis zur quellenbasierten Antwort
              </p>
            </div>

            <div className="max-w-4xl mx-auto glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-semibold text-slate-50 mb-2">1. Upload</h3>
                  <p className="text-sm text-slate-400">Dokumente werden automatisch verarbeitet und segmentiert</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-semibold text-slate-50 mb-2">2. Vektorisierung</h3>
                  <p className="text-sm text-slate-400">Inhalte werden in Supabase Vector Store gespeichert</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-semibold text-slate-50 mb-2">3. Hybrid-Search</h3>
                  <p className="text-sm text-slate-400">Top-K Suche kombiniert mit SQL-Analyse</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="font-semibold text-slate-50 mb-2">4. LLM-Antwort</h3>
                  <p className="text-sm text-slate-400">Präzise Antworten mit Quellenangaben</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
                Technische Kernfunktionen
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Unser n8n-RAG-Agent nutzt modernste Technologien für maximale Leistung und Zuverlässigkeit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Supabase Vector Store",
                  description: "Hochperformante Vektordatenbank für semantische Suche mit pgvector-Extension"
                },
                {
                  title: "SQL Analysis Tool",
                  description: "Intelligente Tabellenauswertung und strukturierte Datenanalyse über SQL-Queries"
                },
                {
                  title: "Postgres Chat Memory",
                  description: "Persistente Gesprächshistorie für kontextuelle, aufbauende Dialoge"
                },
                {
                  title: "Multi-Document Upload",
                  description: "Batch-Verarbeitung von PDFs, Word, Excel, PowerPoint, Text- und Markdown-Dateien"
                },
                {
                  title: "Top-K Semantic Search",
                  description: "Konfigurierbare Relevanzschwelle für präzise Suchergebnisse"
                },
                {
                  title: "Hybrid Search Engine",
                  description: "Kombination aus semantischer und Volltext-Suche für optimale Trefferqualität"
                },
                {
                  title: "Source Attribution",
                  description: "Automatische Quellenangaben mit Seitenzahlen und Dokumentenreferenzen"
                },
                {
                  title: "EU-Compliant Hosting",
                  description: "DSGVO-konforme Verarbeitung mit deutschen/EU-Servern und Datenschutz by Design"
                },
                {
                  title: "On-Premise Option",
                  description: "Vollständige lokale Installation für maximale Datensicherheit und Compliance"
                }
              ].map((feature, index) => (
                <div key={index} className="glass-card p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                  <h3 className="font-semibold text-lg text-slate-50 mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="glass-card p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">Verlässliche Quellenangaben</h3>
                <p className="text-slate-300">
                  Jede Antwort wird mit präzisen Quellenangaben, Seitenzahlen und Dokumentenreferenzen geliefert.
                  So können Sie jede Information überprüfen und Ihren Mitarbeitern vertrauen schenken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
                Intelligenz trifft auf Ihr Wissen
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                RAG Pro kombiniert modernste KI-Technologie mit Ihren spezifischen Unternehmensdaten
                für unvergleichliche Wissenszugriffe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                      <feature.icon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-slate-50">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
                Praxisbewährte Anwendungsfälle
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Erfahren Sie, wie Unternehmen RAG Pro erfolgreich einsetzen und ihre Produktivität steigern.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-3 text-slate-50">{useCase.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-slate-300">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-slate-300">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
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
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
                Bereit für intelligentes Wissensmanagement?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam analysieren, wie RAG Pro Ihr Unternehmen revolutionieren kann.
                Kostenlose Demo und individuelle Beratung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient-primary" size="lg" asChild>
                  <a href="/analyse">
                    Kostenlose Demo vereinbaren
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800">
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