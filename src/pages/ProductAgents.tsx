import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Target,
  Shield,
  Brain,
  Database,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProductAgents() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      problem: "Repetitive Aufgaben binden wertvolle Zeit",
      solution: "KI-Agenten übernehmen automatisch Routineaufgaben 24/7",
      outcome: "60% Zeitersparnis bei wiederkehrenden Tätigkeiten"
    },
    {
      icon: <Target className="w-6 h-6" />,
      problem: "Inkonsistente Entscheidungsfindung bei hohem Volumen",
      solution: "Agenten wenden definierte Regeln konsistent an",
      outcome: "Fehlerrate sinkt um 30-50%"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      problem: "Lange Antwortzeiten in Support und Vertrieb",
      solution: "Automatische Priorisierung, Vorqualifizierung und Entwürfe",
      outcome: "Erstreaktion -35%, Reply-Rate +15-25%"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      problem: "Wissenssilos und ineffiziente Informationssuche",
      solution: "KI-Agenten durchsuchen alle Quellen und liefern kontextuelle Antworten",
      outcome: "Suchzeit -60%, schnellere Einarbeitung"
    }
  ];

  const examples = [
    {
      name: "Support-Triage-Agent",
      cp: 2,
      description: "Auto-Kategorisierung und Priorisierung von Kundenanfragen",
      outcome: "Erstreaktion -35%, FCR +10-15%",
      duration: "1-3 Wochen",
      integrations: ["Zendesk", "Freshdesk", "CRM", "Slack/Teams"],
      price: "Ab €2.000"
    },
    {
      name: "Sales-Follow-Up-Agent",
      cp: 2,
      description: "Automatisierte, personalisierte Nachfass-Sequenzen",
      outcome: "Reply-Rate +15-25%",
      duration: "1-2 Wochen",
      integrations: ["HubSpot", "Pipedrive", "Mail", "Calendar"],
      price: "Ab €2.000"
    },
    {
      name: "Meeting-Summarizer",
      cp: 2,
      description: "Automatische Protokolle und Action-Items aus Meetings",
      outcome: "Zeiteinsparung 2-3h/Woche/Team",
      duration: "1-2 Wochen",
      integrations: ["Google Cal", "Drive", "Notion", "PM-Tools"],
      price: "Ab €2.000"
    },
    {
      name: "Compliance-Checker",
      cp: 3,
      description: "Policy-Abgleich und Flagging von Dokumenten und E-Mails",
      outcome: "Fehlerrate -30-50%",
      duration: "2-4 Wochen",
      integrations: ["DMS", "Mail", "Vektorindex"],
      price: "Ab €3.000"
    }
  ];

  const process = [
    {
      step: "Discovery",
      description: "Analyse Ihrer Anforderungen, Systeme und Datenlage"
    },
    {
      step: "Implementierung",
      description: "Entwicklung des Agenten mit Tools, Memory und Regeln"
    },
    {
      step: "QA & Evaluations",
      description: "Umfassende Tests, Halluzinations-Checks und Guardrails"
    },
    {
      step: "Handover",
      description: "Go-Live mit Schulung, Dokumentation und Runbook"
    },
    {
      step: "Care",
      description: "Monitoring, Tuning und Optimierungen (optional)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="KI-Agenten für Unternehmen | Maier Automations"
        description="Intelligente KI-Agenten für Support, Vertrieb, HR und Compliance. 2 CP pro Agent. DSGVO-konform, EU-Hosting. Automatisierung von repetitiven Aufgaben mit messbaren Ergebnissen."
        keywords="KI-Agenten, AI Agents, Automatisierung, Support-Agent, Sales-Agent, n8n, LLM, Chatbot"
        url="https://maier-automations.de/produkte/ki-agenten"
      />

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
                KI-Powered Automatisierung
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Intelligente{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  KI-Agenten
                </span>
                {" "}für Ihr Unternehmen
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Maßgeschneiderte KI-Assistenten, die Ihre Geschäftsprozesse verstehen,
                eigenständig optimieren und 24/7 arbeiten. Von Support-Triage bis Sales-Follow-Up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/analyse">
                  <Button size="lg" className="min-w-[200px]">
                    <Zap className="w-5 h-5 mr-2" />
                    Kostenlose Analyse
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/cp-system">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    CP-System verstehen
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                1 KI-Agent = 2 CP • Ab €2.000 Setup • Preise netto, zzgl. MwSt.
              </p>
            </div>
          </div>
        </section>

        {/* Was sind KI-Agenten? */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Was sind KI-Agenten?</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    KI-Agenten sind zustandsbehaftete Automatisierungen, die mit großen Sprachmodellen (LLMs)
                    arbeiten, um Entscheidungen zu treffen, Kontext zu verstehen und eigenständig zu handeln.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Im Gegensatz zu einfachen Workflows können Agenten Tools verwenden, aus Interaktionen
                    lernen und komplexe Aufgaben koordinieren.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <strong>Tools & Memory:</strong> Zugriff auf Datenbanken, Kalender, APIs
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <strong>Kontextverständnis:</strong> Natürliche Sprachverarbeitung
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <strong>24/7 verfügbar:</strong> Kontinuierliche Automatisierung
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <strong>Skalierbar:</strong> Unbegrenzte parallele Instanzen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Lösung → Outcome */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Typische Herausforderungen & Lösungen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {problems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                            {item.icon}
                          </div>
                          <CardTitle className="text-lg">{item.problem}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <strong className="text-sm text-green-600">Lösung:</strong>
                          <p className="text-muted-foreground">{item.solution}</p>
                        </div>
                        <div>
                          <strong className="text-sm text-blue-600">Ergebnis:</strong>
                          <p className="text-muted-foreground">{item.outcome}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beispiel-Agenten */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Beispiel-Agenten</h2>
                <p className="text-lg text-muted-foreground">
                  Typische Einsatzszenarien mit transparenter CP-Angabe
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {examples.map((agent, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>{agent.name}</CardTitle>
                        <Badge variant="secondary">{agent.cp} CP</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{agent.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm text-blue-600 mb-1">Outcome:</div>
                        <p className="text-sm font-semibold">{agent.outcome}</p>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Dauer:</div>
                        <p className="text-sm">{agent.duration}</p>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Typische Integrationen:</div>
                        <div className="flex flex-wrap gap-1">
                          {agent.integrations.map((integration, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {integration}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-lg font-bold text-primary">{agent.price}</p>
                        <p className="text-xs text-muted-foreground">Setup (netto, zzgl. MwSt.)</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/analyse">
                  <Button size="lg">
                    Ihren Agenten konfigurieren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DSGVO & Compliance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">DSGVO-konform & EU-Hosting</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <strong>EU-Server Frankfurt:</strong> Ihre Daten bleiben in der EU
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <strong>DPA/SCCs:</strong> Verträge nach EU-Standards
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <strong>On-Premise Option:</strong> Für höchste Anforderungen
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <strong>Kein KI-Training:</strong> Ihre Daten bleiben privat
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Zusätzlich: RBAC-Zugriffskontrollen, Verschlüsselung at-rest und in-transit,
                        regelmäßige Security-Audits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wie wir arbeiten */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Unser Vorgehen</h2>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{step.step}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Hinweis:</strong> Typische Umsetzungsdauer für einen KI-Agenten: 1-3 Wochen.
                  Bei komplexeren Anforderungen (RAG, Multi-Agent-Systeme): 2-4 Wochen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Bereit für Ihren ersten KI-Agenten?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Lassen Sie uns in einem kostenlosen Gespräch herausfinden,
                welcher Agent Ihr Team am meisten entlastet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/analyse">
                  <Button size="lg" variant="secondary" className="min-w-[200px]">
                    Kostenlose Analyse starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/kontakt">
                  <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 text-white border-white hover:bg-white/20">
                    Direktkontakt
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
