import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Bot,
  Workflow,
  Database,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  FileText,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function FeatureSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie sicher sind meine Daten?",
      answer: "Ihre Daten werden ausschließlich auf EU-Servern in Frankfurt gespeichert. Wir sind vollständig DSGVO-konform und bieten DPA/SCCs für alle Kunden."
    },
    {
      question: "Kann ich die Lösung auch On-Premise betreiben?",
      answer: "Ja, alle unsere Lösungen können auf Wunsch auch in Ihrer eigenen Infrastruktur betrieben werden. Wir unterstützen Sie bei der Installation und Wartung."
    },
    {
      question: "Wie kontrolliere ich die Kosten?",
      answer: "Unser transparentes CP-System zeigt Ihnen vorab genau, was Sie bekommen. Keine versteckten Kosten, keine Überraschungen."
    },
    {
      question: "Wie lange läuft der Vertrag?",
      answer: "Wir bieten flexible Laufzeiten ab 3 Monaten. Bei größeren Projekten können individuelle Vereinbarungen getroffen werden."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            Was wir für Ihr Unternehmen tun
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Intelligente Automatisierung mit{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              messbaren Ergebnissen
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir entwickeln maßgeschneiderte KI-Lösungen, die Ihre Geschäftsprozesse intelligent automatisieren und nachhaltig optimieren.
          </p>

          {/* Trust-Leiste */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              EU-Server Frankfurt
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              DPA/SCCs
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              RBAC
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              n8n Cloud
            </span>
          </div>
        </div>

        {/* 3 Feature-Karten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Link to="/ki-agenten">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Bot className="w-8 h-8 text-purple-600" />
                  <Badge variant="secondary">KI-Powered</Badge>
                </div>
                <h3 className="text-xl font-bold">Intelligente KI-Agenten</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Maßgeschneiderte KI-Assistenten, die Ihre Geschäftsprozesse verstehen und eigenständig optimieren.
                </p>
                <div className="text-sm font-semibold text-purple-600">
                  60% Zeitersparnis
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/workflows">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Workflow className="w-8 h-8 text-blue-600" />
                  <Badge variant="secondary">n8n</Badge>
                </div>
                <h3 className="text-xl font-bold">n8n Workflows</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professionelle Automatisierung auf der bewährten n8n-Plattform mit Enterprise-Support.
                </p>
                <div className="text-sm font-semibold text-blue-600">
                  500+ Integrationen
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/rag-pro">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Database className="w-8 h-8 text-green-600" />
                  <Badge variant="secondary">RAG Pro</Badge>
                </div>
                <h3 className="text-xl font-bold">Wissensassistent</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intelligente Wissensdatenbank mit Retrieval-Augmented Generation für präzise Antworten.
                </p>
                <div className="text-sm font-semibold text-green-600">
                  &lt;2s Antwortzeit
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* KPI-Zeile */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Messbare Ergebnisse</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Zeitersparnis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Verfügbarkeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Integrationen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">&lt;3s</div>
              <div className="text-sm text-muted-foreground">Antwortzeit</div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Block */}
        <Card className="max-w-6xl mx-auto mb-16">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Sicherheit & Compliance</h3>
                  <p className="text-muted-foreground">
                    Höchste Sicherheitsstandards und vollständige DSGVO-Konformität für Ihre Daten.
                  </p>
                </div>
              </div>
              <Link to="/sicherheit">
                <Button variant="outline">
                  Details ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 4-Schritte Prozess */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Unser Ablauf in 4 Schritten</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Discovery", description: "Analyse Ihrer Anforderungen", icon: <FileText /> },
              { title: "Blueprint", description: "Konzeption der Lösung", icon: <Users /> },
              { title: "Build", description: "Entwicklung & Testing", icon: <Workflow /> },
              { title: "Handover", description: "Go-Live & Schulung", icon: <CheckCircle2 /> }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full mx-auto mb-4">
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-4 h-4 mx-auto mt-4 text-gray-400 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ-Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Häufig gestellte Fragen</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{faq.question}</h4>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/faq">
              <Button variant="outline">
                Alle FAQs ansehen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Link to="/analyse">
            <Button size="lg" className="shadow-lg">
              Analyse starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}