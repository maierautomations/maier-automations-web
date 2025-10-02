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
  GitBranch,
  Database
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProductWorkflows() {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      problem: "Manuelle, zeitraubende Dateneingabe und -übertragung",
      solution: "Workflows automatisieren Datentransfers zwischen Systemen",
      outcome: "Manuelle Arbeit -60-80%"
    },
    {
      icon: <Target className="w-6 h-6" />,
      problem: "Fehler durch manuelle Prozesse und Doppelpflege",
      solution: "Validierungen, automatische Prüfungen und einheitliche Regeln",
      outcome: "Fehlerrate -30-50%"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      problem: "Verzögerungen durch fehlende Benachrichtigungen",
      solution: "Automatische Trigger, Eskalationen und Reminders",
      outcome: "SLA-Verstöße -20-40%"
    },
    {
      icon: <Database className="w-6 h-6" />,
      problem: "Intransparente Prozesse und fehlende Nachvollziehbarkeit",
      solution: "Strukturierte Abläufe mit Logging und Reporting",
      outcome: "Compliance +100%, Transparenz ↑"
    }
  ];

  const examples = [
    {
      name: "Lead-Enrichment & Routing",
      cp: 1,
      description: "Vollständigere Datensätze und schnellere Zuweisung",
      outcome: "MQL-Qualität +10-20%",
      duration: "3-7 Tage",
      integrations: ["CRM", "Enrichment-APIs", "Mail"],
      price: "Ab €1.000"
    },
    {
      name: "Rechnungs-Flow",
      cp: 2,
      description: "Eingang → Prüfung → Buchung automatisiert",
      outcome: "Manuelle Buchung -60-80%",
      duration: "1-2 Wochen",
      integrations: ["ERP/DATEV", "Mail", "Files"],
      price: "Ab €1.200"
    },
    {
      name: "NPS/CSAT-Nachfass",
      cp: 1,
      description: "Automatische Follow-ups bei Feedback",
      outcome: "Response-Rate +15-25%",
      duration: "3-7 Tage",
      integrations: ["Survey-Tool", "Mail/CRM"],
      price: "Ab €1.000"
    },
    {
      name: "CRM↔ERP-Sync",
      cp: 2,
      description: "Stammdaten und Deals synchron halten",
      outcome: "Weniger Doppelpflege/Fehler",
      duration: "1-2 Wochen",
      integrations: ["HubSpot/Pipedrive", "ERP"],
      price: "Ab €1.200"
    }
  ];

  const process = [
    {
      step: "Discovery",
      description: "Zielbild, Datenflüsse und Schnittstellen klären"
    },
    {
      step: "Implementierung",
      description: "Workflow-Entwicklung mit Fehlerpfaden und Validierungen"
    },
    {
      step: "QA",
      description: "Umfassende Tests und Security/Privacy-Checks"
    },
    {
      step: "Handover",
      description: "Go-Live mit Dokumentation, Runbook und Schulung"
    },
    {
      step: "Care",
      description: "Monitoring, Tuning und kleine Änderungen (optional)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="n8n Workflows für Unternehmen | Maier Automations"
        description="Professionelle n8n Workflow-Automatisierung. 1 CP pro Workflow. DSGVO-konform, EU-Hosting. Automatisierung von Geschäftsprozessen mit 500+ Integrationen."
        keywords="n8n Workflows, Automatisierung, Business Process Automation, Integration, DSGVO"
        url="https://maier-automations.de/produkte/workflows"
      />

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-24 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 gradient-emerald-cyan text-slate-900 border-0">
                n8n-Powered Automatisierung
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
                Professionelle{" "}
                <span className="gradient-emerald-cyan bg-clip-text text-transparent">
                  n8n Workflows
                </span>
                {" "}für Ihr Unternehmen
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Automatisieren Sie Geschäftsprozesse mit der bewährten n8n-Plattform.
                500+ native Integrationen, volle Kontrolle, DSGVO-konform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/analyse">
                  <Button size="lg" variant="gradient-primary" className="min-w-[200px] glow-emerald">
                    <Zap className="w-5 h-5 mr-2" />
                    Kostenlose Analyse
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/cp-system">
                  <Button variant="outline" size="lg" className="min-w-[200px] border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-500">
                    CP-System verstehen
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-slate-400 mt-6">
                1 Workflow = 1 CP • Ab €1.000 Setup • Preise netto, zzgl. MwSt.
              </p>
            </div>
          </div>
        </section>

        {/* Was sind n8n Workflows? */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-slate-50 mb-12">Was sind n8n Workflows?</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    n8n ist eine leistungsstarke Open-Source-Plattform für Workflow-Automatisierung.
                    Mit über 500 nativen Integrationen können Sie praktisch jedes Tool verbinden.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Workflows folgen klaren Mustern: Trigger → Verarbeitung → Aktion. Mit Validierungen,
                    Fehlerpfaden und Benachrichtigungen für maximale Zuverlässigkeit.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                    <div className="text-slate-300">
                      <strong className="text-slate-50">500+ Integrationen:</strong> CRM, ERP, Support, Files, Calendar, uvm.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                    <div className="text-slate-300">
                      <strong className="text-slate-50">Fehlerpfade:</strong> Automatische Wiederholungen und Benachrichtigungen
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                    <div className="text-slate-300">
                      <strong className="text-slate-50">Idempotenz:</strong> Doppelausführungen werden verhindert
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                    <div className="text-slate-300">
                      <strong className="text-slate-50">EU-Hosting:</strong> n8n Cloud in Frankfurt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Lösung → Outcome */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-slate-50 mb-12">
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
                    <Card className="h-full glass-card hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-emerald-500/20 text-cyan-500">
                            {item.icon}
                          </div>
                          <CardTitle className="text-lg text-slate-50">{item.problem}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <strong className="text-sm text-emerald-500">Lösung:</strong>
                          <p className="text-slate-300">{item.solution}</p>
                        </div>
                        <div>
                          <strong className="text-sm text-cyan-500">Ergebnis:</strong>
                          <p className="text-slate-300">{item.outcome}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beispiel-Workflows */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-50 mb-4">Beispiel-Workflows</h2>
                <p className="text-lg text-slate-300">
                  Typische Einsatzszenarien mit transparenter CP-Angabe
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {examples.map((workflow, index) => (
                  <Card key={index} className="glass-card hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-slate-50">{workflow.name}</CardTitle>
                        <Badge className="bg-slate-800/50 text-cyan-500 border-cyan-500/30">{workflow.cp} CP</Badge>
                      </div>
                      <p className="text-sm text-slate-300">{workflow.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm text-emerald-500 mb-1">Outcome:</div>
                        <p className="text-sm font-semibold text-slate-50">{workflow.outcome}</p>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Dauer:</div>
                        <p className="text-sm text-slate-300">{workflow.duration}</p>
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Typische Integrationen:</div>
                        <div className="flex flex-wrap gap-1">
                          {workflow.integrations.map((integration, idx) => (
                            <Badge key={idx} className="bg-slate-800/50 text-slate-300 border-slate-700/50 text-xs">
                              {integration}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-700/50">
                        <p className="text-lg font-bold text-cyan-500">{workflow.price}</p>
                        <p className="text-xs text-slate-400">Setup (netto, zzgl. MwSt.)</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/analyse">
                  <Button size="lg" variant="gradient-primary" className="glow-emerald">
                    Ihren Workflow konfigurieren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DSGVO & Compliance */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-card border-cyan-500/30">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-emerald-500/20 text-cyan-500">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-50 mb-4">DSGVO-konform & EU-Hosting</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                          <div className="text-slate-300">
                            <strong className="text-slate-50">n8n Cloud Frankfurt:</strong> Ihre Daten bleiben in der EU
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                          <div className="text-slate-300">
                            <strong className="text-slate-50">DPA/SCCs:</strong> Verträge nach EU-Standards
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                          <div className="text-slate-300">
                            <strong className="text-slate-50">On-Premise Option:</strong> Volle Datenkontrolle
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                          <div className="text-slate-300">
                            <strong className="text-slate-50">RBAC:</strong> Granulare Zugriffskontrollen
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">
                        Alle Workflows werden mit Best Practices für Sicherheit und Datenschutz entwickelt:
                        Verschlüsselung, Logging-Minimierung, klare Datenflüsse.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wie wir arbeiten */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-slate-50 mb-12">Unser Vorgehen</h2>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-slate-50 mb-1">{step.step}</h4>
                      <p className="text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 glass-card rounded-lg">
                <p className="text-sm text-slate-300">
                  <strong className="text-slate-50">Hinweis:</strong> Typische Umsetzungsdauer für einen Workflow: 3-7 Tage.
                  Bei komplexeren Anforderungen (mehrere Integrationen, Approval-Schritte): 1-2 Wochen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="glass-card border-cyan-500/30 p-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-6">
                  Bereit für Ihren ersten Workflow?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Lassen Sie uns in einem kostenlosen Gespräch herausfinden,
                  welcher Prozess am meisten von Automatisierung profitiert.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/analyse">
                    <Button size="lg" variant="gradient-primary" className="min-w-[200px] glow-emerald">
                      Kostenlose Analyse starten
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/kontakt">
                    <Button size="lg" variant="outline" className="min-w-[200px] border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-500">
                      Direktkontakt
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
