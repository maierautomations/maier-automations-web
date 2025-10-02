import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  Euro,
  Server,
  Users,
  Zap,
  Lock,
  CheckCircle2,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon?: React.ReactNode;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    // Datenschutz & Sicherheit
    {
      category: "Datenschutz & Sicherheit",
      question: "Wie sicher sind meine Daten bei Ihnen?",
      answer: "Ihre Daten sind bei uns in besten Händen. Wir nutzen ausschließlich EU-Server in Frankfurt, sind vollständig DSGVO-konform und bieten DPA/SCCs für alle Kunden. Zusätzlich implementieren wir RBAC (Role-Based Access Control) für granulare Zugriffsrechte. Ihre Daten verlassen niemals die EU, es sei denn, Sie wünschen dies explizit.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      category: "Datenschutz & Sicherheit",
      question: "Werden meine Daten für KI-Training verwendet?",
      answer: "Nein, Ihre Daten werden niemals für das Training von KI-Modellen verwendet. Wir nutzen ausschließlich fertige Modelle von etablierten Anbietern (OpenAI, Anthropic, etc.) mit Enterprise-Vereinbarungen, die explizit das Training mit Kundendaten ausschließen.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      category: "Datenschutz & Sicherheit",
      question: "Kann ich die Lösung auch On-Premise betreiben?",
      answer: "Ja, alle unsere Lösungen können auf Wunsch auch in Ihrer eigenen Infrastruktur betrieben werden. Wir unterstützen Sie bei der Installation, Konfiguration und Wartung. Der Aufpreis beträgt typischerweise +0,5-1,0 CP für die zusätzliche Komplexität.",
      icon: <Server className="w-5 h-5" />
    },
    {
      category: "Datenschutz & Sicherheit",
      question: "Welche Compliance-Standards erfüllen Sie?",
      answer: "Wir sind vollständig DSGVO-konform und bieten standardmäßig DPA (Data Processing Agreement) und SCCs (Standard Contractual Clauses) an. Zusätzlich implementieren wir Best Practices wie Verschlüsselung at-rest und in-transit, regelmäßige Security-Audits und Penetrationstests.",
      icon: <CheckCircle2 className="w-5 h-5" />
    },

    // Kosten & Transparenz
    {
      category: "Kosten & Transparenz",
      question: "Wie kontrolliere ich die Kosten?",
      answer: "Unser transparentes CP-System zeigt Ihnen vorab genau, was Sie bekommen. Keine versteckten Kosten, keine Überraschungen. Sie erhalten ein verbindliches Angebot mit CP-Rahmen (z.B. 5-6 CP). Liegen wir darunter, zahlen Sie nur die tatsächlich gelieferten CP. Darüber gehen wir nur nach schriftlicher Freigabe.",
      icon: <Euro className="w-5 h-5" />
    },
    {
      category: "Kosten & Transparenz",
      question: "Was kostet ein typisches Projekt?",
      answer: "Ein Starter-Paket (3 CP) liegt bei €3.000-€3.600 Setup plus €300-€540 monatliche Betreuung. Das Core-Paket (6 CP) bei €6.000-€7.500 Setup plus €600-€1.125 monatliche Betreuung. Die genauen Kosten hängen von Systemkomplexität und QA-Anforderungen ab. Nutzen Sie unseren CP-Rechner für eine individuelle Schätzung.",
      icon: <Euro className="w-5 h-5" />
    },
    {
      category: "Kosten & Transparenz",
      question: "Welche laufenden Kosten entstehen?",
      answer: "Neben der optionalen Monthly Care (10-15% des Setup-Preises) fallen nur die Kosten für Drittanbieter an (z.B. OpenAI API, n8n Cloud-Lizenz). Diese rechnen Sie direkt mit den Anbietern ab. Wir beraten Sie gerne zur Kostenschätzung basierend auf Ihrem erwarteten Volumen.",
      icon: <Euro className="w-5 h-5" />
    },

    // Vertrag & Laufzeit
    {
      category: "Vertrag & Laufzeit",
      question: "Wie lange läuft der Vertrag?",
      answer: "Wir bieten flexible Laufzeiten ab 3 Monaten. Die Monthly Care ist monatlich kündbar. Bei größeren Projekten können individuelle Vereinbarungen getroffen werden. Nach der Setup-Phase können Sie jederzeit entscheiden, ob Sie die Betreuung fortsetzen möchten.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      category: "Vertrag & Laufzeit",
      question: "Kann ich die Betreuung pausieren?",
      answer: "Ja, die Monthly Care kann nach der Mindestlaufzeit pausiert werden. Sie können die Betreuung jederzeit wieder aktivieren. Während der Pause haben Sie weiterhin Zugriff auf alle entwickelten Lösungen, erhalten aber keinen Support oder Updates.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      category: "Vertrag & Laufzeit",
      question: "Wem gehört der entwickelte Code?",
      answer: "Der gesamte für Sie entwickelte Code gehört Ihnen. Sie erhalten alle Rechte an den erstellten Workflows, Agenten und Konfigurationen. Lediglich unser generisches Framework und wiederverwendbare Komponenten bleiben unser geistiges Eigentum.",
      icon: <Lock className="w-5 h-5" />
    },

    // Technik & Implementation
    {
      category: "Technik & Implementation",
      question: "Wie lange dauert die Umsetzung?",
      answer: "Typischerweise 2-4 Wochen vom Kickoff bis zum Go-Live, abhängig vom Projektumfang. Voraussetzung: Inhalte und Zugänge liegen vor, Umfang gemäß Paketbeschreibung. Der Kickoff erfolgt meist innerhalb von 48 Stunden nach Beauftragung.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      category: "Technik & Implementation",
      question: "Welche Systeme können angebunden werden?",
      answer: "Über n8n stehen Ihnen 500+ native Integrationen zur Verfügung (Salesforce, HubSpot, SAP, Microsoft 365, Google Workspace, etc.). Zusätzlich können wir via API, Webhooks oder Custom-Konnektoren praktisch jedes System anbinden. Die ersten 3-5 Integrationen sind im Paket enthalten.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      category: "Technik & Implementation",
      question: "Benötige ich technisches Know-how?",
      answer: "Nein, wir übernehmen die komplette technische Umsetzung. Nach dem Go-Live erhalten Sie eine Schulung zur Bedienung. Die Workflows laufen vollautomatisch. Bei Bedarf können Sie über das n8n-Interface kleinere Anpassungen selbst vornehmen - wir zeigen Ihnen wie.",
      icon: <Users className="w-5 h-5" />
    },
    {
      category: "Technik & Implementation",
      question: "Was passiert bei Ausfällen?",
      answer: "Unsere Lösungen sind hochverfügbar konzipiert mit automatischen Wiederholungen bei temporären Fehlern. Die Monthly Care beinhaltet proaktives Monitoring mit sofortiger Alarmierung bei Problemen. SLA-Reaktionszeiten: Critical < 2h, High < 4h, Normal < 24h.",
      icon: <Shield className="w-5 h-5" />
    },

    // KI & RAG
    {
      category: "KI & RAG",
      question: "Welche KI-Modelle nutzen Sie?",
      answer: "Wir arbeiten mit den führenden Modellen von OpenAI (GPT-4), Anthropic (Claude), Google (Gemini) und Open-Source-Alternativen. Die Modellauswahl erfolgt nach Ihren Anforderungen bezüglich Leistung, Kosten und Datenschutz. Auf Wunsch auch komplett EU-basierte Modelle.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      category: "KI & RAG",
      question: "Was ist ein RAG-System?",
      answer: "RAG (Retrieval-Augmented Generation) kombiniert Ihre Unternehmensdaten mit KI. Das System durchsucht erst Ihre Wissensdatenbank und generiert dann präzise, faktenbasierte Antworten. Ideal für Kundenservice, interne Wissensdatenbanken oder Compliance-Dokumentation.",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      category: "KI & RAG",
      question: "Wie genau sind die KI-Antworten?",
      answer: "Durch RAG und Guardrails erreichen wir sehr hohe Genauigkeit. Wir implementieren Halluzinations-Checks, Quellenangaben und Confidence-Scores. Bei kritischen Anwendungen fügen wir Human-in-the-Loop-Mechanismen hinzu. Typische Genauigkeit: >95% bei gut trainierten Systemen.",
      icon: <CheckCircle2 className="w-5 h-5" />
    },

    // Support & Wartung
    {
      category: "Support & Wartung",
      question: "Was beinhaltet die Monthly Care?",
      answer: "Proaktives Monitoring, Tuning/Optimierungen, kleine Änderungswünsche (im Retainer-Rahmen), regelmäßige Reports (Nutzung, Qualität, Auffälligkeiten) und Empfehlungen für Verbesserungen. Außerdem Priority-Support mit garantierten Reaktionszeiten.",
      icon: <Users className="w-5 h-5" />
    },
    {
      category: "Support & Wartung",
      question: "Kann ich Workflows selbst anpassen?",
      answer: "Ja, nach einer Einführung können Sie über das n8n-Interface selbst Anpassungen vornehmen. Wir empfehlen aber, größere Änderungen mit uns abzustimmen, um die Stabilität zu gewährleisten. Die Monthly Care deckt auch Ihre Änderungswünsche ab.",
      icon: <Users className="w-5 h-5" />
    },
    {
      category: "Support & Wartung",
      question: "Wie erreiche ich den Support?",
      answer: "Je nach Paket per E-Mail, Telefon oder dediziertem Slack-Channel. Reaktionszeiten: Starter-Paket < 48h, Core-Paket < 24h, Scale-Paket < 4h. Bei kritischen Problemen ist auch außerhalb der Geschäftszeiten ein Notfall-Support verfügbar.",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="FAQ - Häufig gestellte Fragen | Maier Automations"
        description="Antworten auf häufige Fragen zu KI-Automatisierung, Datenschutz, Kosten, Implementation und Support. DSGVO-konforme Lösungen für den Mittelstand."
        keywords="FAQ, Häufige Fragen, KI-Automatisierung, DSGVO, Datenschutz, Kosten, Support, n8n, RAG"
        url="https://maier-automations.de/faq"
      />

      {/* Add FAQ Schema to head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                Transparenz & Klarheit
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Häufig gestellte Fragen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Alle wichtigen Antworten zu KI-Automatisierung, Datenschutz,
                Kosten und Implementation – transparent und verständlich erklärt.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    const element = document.getElementById(category.replace(/ /g, '-'));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {categories.map(category => (
                <div key={category} id={category.replace(/ /g, '-')} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    {faqs.find(f => f.category === category)?.icon}
                    {category}
                  </h2>
                  <div className="space-y-4">
                    {faqs
                      .filter(faq => faq.category === category)
                      .map((faq, index) => {
                        const globalIndex = faqs.indexOf(faq);
                        const isOpen = openItems.includes(globalIndex);

                        return (
                          <Card key={globalIndex} className="overflow-hidden">
                            <CardHeader
                              className="cursor-pointer hover:bg-gray-50 transition-colors"
                              onClick={() => toggleItem(globalIndex)}
                            >
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                                <motion.div
                                  animate={{ rotate: isOpen ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                </motion.div>
                              </div>
                            </CardHeader>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <CardContent className="pt-0">
                                    <p className="text-muted-foreground leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </CardContent>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Card>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Questions CTA */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Noch Fragen?</h2>
                  <p className="text-muted-foreground mb-6">
                    Lassen Sie uns in einem unverbindlichen Gespräch klären,
                    wie wir Ihre spezifischen Anforderungen umsetzen können.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/kontakt">
                      <Button size="lg" className="min-w-[200px]">
                        Direktkontakt
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/analyse">
                      <Button variant="outline" size="lg" className="min-w-[200px]">
                        Analyse starten
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Schnelle Hilfe</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium mb-1">Datenschutz</h4>
                    <p className="text-sm text-muted-foreground">
                      100% DSGVO-konform
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-medium mb-1">Reaktionszeit</h4>
                    <p className="text-sm text-muted-foreground">
                      Antwort in &lt; 24h
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium mb-1">Persönlich</h4>
                    <p className="text-sm text-muted-foreground">
                      Direkter Ansprechpartner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;