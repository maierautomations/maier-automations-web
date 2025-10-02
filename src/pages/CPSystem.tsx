import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Zap,
  Package,
  Plus,
  Info,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  Eye
} from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const CPSystem = () => {
  const [selectedCP, setSelectedCP] = useState(3);
  const [cpRate, setCpRate] = useState(1000);
  const [carePercentage, setCarePercentage] = useState(12.5);

  const setupPrice = selectedCP * cpRate;
  const monthlyCareLow = setupPrice * 0.10;
  const monthlyCareMid = setupPrice * (carePercentage / 100);
  const monthlyCareHigh = setupPrice * 0.15;

  const packages = [
    {
      name: "Starter",
      cp: 3,
      setupRange: "€3.000–€3.600",
      careRange: "€300–€540",
      description: "1–3 Kern-Workflows, schneller Start",
      highlights: ["Basis-Automatisierung", "Standard-Integrationen", "Email-Support"]
    },
    {
      name: "Core",
      cp: 6,
      setupRange: "€6.000–€7.500",
      careRange: "€600–€1.125",
      description: "Mehrere Workflows + 1 Agent oder komplexere Kette",
      highlights: ["KI-Agent Integration", "Advanced Workflows", "Priority Support"]
    },
    {
      name: "Scale",
      cp: 10,
      setupRange: "€10.000–€12.000",
      careRange: "€1.000–€1.800",
      description: "Größeres Setup, mehrere Teams/Abteilungen",
      highlights: ["Multi-Team Setup", "Custom Integrationen", "Dedicated Support"]
    }
  ];

  const addons = [
    { name: "Extra Connector (neues System, API)", cp: "0,25–0,5", icon: <Plus /> },
    { name: "Approval/HITL-Schritt", cp: "0,5", icon: <CheckCircle2 /> },
    { name: "On-Prem/Local Deployment", cp: "0,5–1,0", icon: <Shield /> },
    { name: "Advanced Evaluations/Benchmarks", cp: "0,25–0,5", icon: <TrendingUp /> },
    { name: "Custom UI/Frontend", cp: "0,5–1,0", icon: <FileText /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <SEOHead
        title="CP-System - Transparente Preisgestaltung | Maier Automations"
        description="Verstehen Sie unser Complexity Points System: Transparente, faire Preisgestaltung für KI-Automatisierungen. Keine versteckten Kosten, volle Kontrolle."
        keywords="CP-System, Complexity Points, Preisgestaltung, Transparenz, KI-Automatisierung, n8n, Workflows"
        url="https://maier-automations.de/cp-system"
      />

      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-24 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                Maximale Transparenz
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
                Das CP-System:{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  Faire & transparente Preise
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Complexity Points (CP) machen Preise nachvollziehbar, planbar und fair.
                Statt Stunden zu schätzen, bemessen wir Komplexität und Ergebnisumfang.
                So sehen Sie bereits vor Projektstart, was Sie bekommen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="#rechner">
                  <Button variant="gradient-primary" size="lg" className="min-w-[200px]">
                    <Calculator className="w-5 h-5 mr-2" />
                    CP-Rechner testen
                  </Button>
                </Link>
                <Link to="/analyse">
                  <Button variant="outline" size="lg" className="min-w-[200px] border-slate-700 text-slate-300 hover:bg-slate-800">
                    Analyse starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Was ist ein CP? */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-50">Was ist ein Complexity Point?</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Zap className="w-8 h-8 text-emerald-500" />
                      <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">1 CP</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">Standard-Workflow</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Ein klar abgegrenzter, geschäftlich sinnvoller Automationsfluss mit Ein-/Ausgaben,
                      Fehlerpfaden und QA.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Fehlerbehandlung inkl.
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Basis-Dokumentation
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Standard-Tests
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Zap className="w-8 h-8 text-cyan-500" />
                      <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20">2 CP</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">n8n-Agent</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Zustandsbehafteter Agent inkl. Tooling (z.B. Suche, DB, Kalender)
                      und Kurzzeit-Speicher.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        Tools & Memory
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        KI-Integration
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        Zustandsverwaltung
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Zap className="w-8 h-8 text-amber-500" />
                      <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20">3-4 CP</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">RAG-Agent Premium</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Retrieval-Augmented Generation inkl. Vektordatenbank,
                      Chunking/Pipeline, Evaluations und Guardrails.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Vektordatenbank
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Halluzinations-Checks
                      </li>
                      <li className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Guardrails & Evals
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Preislogik */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-slate-50">Unsere Preislogik</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-slate-50">
                        <Calculator className="w-5 h-5 text-emerald-500" />
                        Setup-Preis
                      </h4>
                      <p className="text-slate-300 mb-2">
                        Standard CP-Satz: <strong className="text-slate-50">€1.000–€1.200</strong> pro CP
                      </p>
                      <p className="text-sm text-slate-400">
                        Formel: Setup-Preis = CP-Anzahl × CP-Satz
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-slate-50">
                        <Clock className="w-5 h-5 text-cyan-500" />
                        Monthly Care
                      </h4>
                      <p className="text-slate-300 mb-2">
                        Betreuung: <strong className="text-slate-50">10–15%</strong> des Setup-Preises/Monat
                      </p>
                      <p className="text-sm text-slate-400">
                        Inkl. Monitoring, Tuning & kleine Änderungen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pakete */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-50">Unsere Pakete</h2>
                <p className="text-lg text-slate-300 mb-2">
                  DACH-SMB-freundliche Transparenz mit klaren Leistungen
                </p>
                <p className="text-sm text-slate-400">
                  Alle Preise verstehen sich netto, zzgl. MwSt. Kosten für Drittanbieter-Lizenzen nicht enthalten.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <Card key={pkg.name} className="glass-card hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="text-lg px-3 py-1 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                          {pkg.cp} CP
                        </Badge>
                        <Package className="w-6 h-6 text-slate-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-50">{pkg.name}</h3>
                      <p className="text-sm text-slate-400 mt-2">{pkg.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <div className="mb-3">
                          <div className="text-sm text-slate-400">Setup</div>
                          <div className="text-xl font-semibold text-slate-50">{pkg.setupRange}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">Monthly Care</div>
                          <div className="text-xl font-semibold text-slate-50">{pkg.careRange}</div>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {pkg.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Link to="/analyse">
                        <Button variant="gradient-primary" className="w-full">
                          {pkg.name} auswählen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* RAG Agent Premium */}
              <Card className="mt-8 glass-card border-emerald-500/30">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge className="mb-3 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                        Premium SKU
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 text-slate-50">RAG Agent Premium</h3>
                      <p className="text-slate-300 mb-4">
                        Intelligente Wissensdatenbank mit Retrieval-Augmented Generation
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-slate-400">Setup (3-4 CP)</div>
                          <div className="text-xl font-semibold text-slate-50">€3.500–€6.500</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">Monthly Care</div>
                          <div className="text-xl font-semibold text-slate-50">€350–€800</div>
                        </div>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Vektordatenbank/Index
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Ingestion/Chunking
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Retrieval-Tuning
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Evaluations & Guardrails
                        </li>
                      </ul>
                    </div>
                    <Link to="/rag-pro">
                      <Button variant="gradient-primary" size="lg" className="min-w-[160px]">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CP-Rechner */}
        <section id="rechner" className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-50">CP-Rechner</h2>
                <p className="text-lg text-slate-300">
                  Berechnen Sie Ihren voraussichtlichen Investitionsrahmen
                </p>
              </div>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* CP Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="font-semibold text-slate-50">Complexity Points (CP)</label>
                        <span className="text-2xl font-bold text-emerald-500">{selectedCP} CP</span>
                      </div>
                      <Slider
                        value={[selectedCP]}
                        onValueChange={(value) => setSelectedCP(value[0])}
                        min={1}
                        max={20}
                        step={1}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>1 CP</span>
                        <span>10 CP</span>
                        <span>20 CP</span>
                      </div>
                    </div>

                    {/* CP Rate Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="font-semibold text-slate-50">CP-Satz</label>
                        <span className="text-2xl font-bold text-cyan-500">€{cpRate.toLocaleString('de-DE')}</span>
                      </div>
                      <Slider
                        value={[cpRate]}
                        onValueChange={(value) => setCpRate(value[0])}
                        min={1000}
                        max={1200}
                        step={50}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>€1.000</span>
                        <span>€1.100</span>
                        <span>€1.200</span>
                      </div>
                    </div>

                    {/* Care Percentage */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="font-semibold text-slate-50">Monthly Care</label>
                        <span className="text-2xl font-bold text-amber-500">{carePercentage}%</span>
                      </div>
                      <Slider
                        value={[carePercentage]}
                        onValueChange={(value) => setCarePercentage(value[0])}
                        min={10}
                        max={15}
                        step={0.5}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>10%</span>
                        <span>12.5%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    {/* Ergebnis */}
                    <div className="border-t border-slate-700/50 pt-8">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-sm text-slate-400 mb-2">Setup-Investition</div>
                          <div className="text-3xl font-bold text-emerald-500">
                            €{setupPrice.toLocaleString('de-DE')}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-slate-400 mb-2">Monthly Care</div>
                          <div className="text-3xl font-bold text-cyan-500">
                            €{monthlyCareMid.toLocaleString('de-DE', { maximumFractionDigits: 0 })}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            (€{monthlyCareLow.toLocaleString('de-DE', { maximumFractionDigits: 0 })} -
                            €{monthlyCareHigh.toLocaleString('de-DE', { maximumFractionDigits: 0 })})
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-slate-400 mb-2">Erstes Jahr gesamt</div>
                          <div className="text-3xl font-bold text-amber-500">
                            €{(setupPrice + monthlyCareMid * 12).toLocaleString('de-DE', { maximumFractionDigits: 0 })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Link to="/analyse">
                        <Button variant="gradient-primary" size="lg" className="min-w-[240px]">
                          Individuelle Analyse starten
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-50">Optionale Add-ons</h2>
                <p className="text-lg text-slate-300">
                  Erweitern Sie Ihr Paket bei Bedarf mit transparenten Zusatzleistungen
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {addons.map((addon, idx) => (
                  <Card key={idx} className="glass-card hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                          {addon.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 text-slate-50">{addon.name}</h4>
                          <Badge className="text-xs bg-cyan-500/10 text-cyan-500 border-cyan-500/20">
                            +{addon.cp} CP
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 glass-card p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-emerald-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-50">Was ist inklusive?</h4>
                    <p className="text-sm text-slate-300">
                      Viele "kleine Dinge" sind paketüblich und kosten nichts extra:
                      Sinnvolle Fehlerbehandlung, Logging, Basis-Dokumentation, Standard-Tests und QA.
                      Add-ons fallen erst an, wenn explizit gewünscht oder erhöhte Anforderungen bestehen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-50">Unser transparenter Ablauf</h2>
                <p className="text-lg text-slate-300">
                  Von der ersten Analyse bis zum erfolgreichen Go-Live
                </p>
              </div>

              <Tabs defaultValue="ablauf" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
                  <TabsTrigger value="ablauf" className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50">5-Schritte Ablauf</TabsTrigger>
                  <TabsTrigger value="leistungen" className="data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50">Was ist enthalten?</TabsTrigger>
                </TabsList>

                <TabsContent value="ablauf" className="mt-8">
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "Unverbindlicher Scoping-Call", desc: "30–45 Minuten Bedarfsanalyse", time: "Tag 0" },
                      { step: 2, title: "CP-Schätzung & Angebot", desc: "Transparentes Angebotsband (z.B. 5–6 CP)", time: "Tag 1-2" },
                      { step: 3, title: "Projekt-Kickoff", desc: "Detaillierte Anforderungsaufnahme", time: "Tag 3-5" },
                      { step: 4, title: "Umsetzung mit Zwischenabnahmen", desc: "Agile Entwicklung mit regelmäßigen Reviews", time: "Woche 1-3" },
                      { step: 5, title: "Go-Live & Handover", desc: "Übergabe, Schulung, Start der Care-Phase", time: "Woche 3-4" }
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-lg text-slate-50">{item.title}</h4>
                            <Badge className="border-slate-700 text-slate-300">{item.time}</Badge>
                          </div>
                          <p className="text-slate-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="leistungen" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-50">
                        <Package className="w-5 h-5 text-emerald-500" />
                        Im Setup enthalten
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                          <span className="text-sm text-slate-300">Discovery & Design: Zielbild, Datenflüsse, Schnittstellen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                          <span className="text-sm text-slate-300">Implementierung: Workflows/Agenten, Konnektoren, Fehlerpfade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                          <span className="text-sm text-slate-300">Qualitätssicherung: Tests, Evals, Security/Privacy-Checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1" />
                          <span className="text-sm text-slate-300">Dokumentation & Handover: Technische Doku, Runbooks, Schulung</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2 text-slate-50">
                        <Clock className="w-5 h-5 text-cyan-500" />
                        Monthly Care umfasst
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1" />
                          <span className="text-sm text-slate-300">Proaktives Monitoring und Ausfall-Alarmierung</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1" />
                          <span className="text-sm text-slate-300">Tuning/Optimierungen, kleine Änderungswünsche</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1" />
                          <span className="text-sm text-slate-300">Regelmäßige Reports (Nutzung, Qualität, Auffälligkeiten)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1" />
                          <span className="text-sm text-slate-300">Empfehlung von Verbesserungen (Roadmap)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Warum CP? */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-50">Warum CP statt Stunden?</h2>
                <p className="text-lg text-slate-300">
                  Unser System bietet Ihnen entscheidende Vorteile
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-slate-50">Transparenz</h4>
                        <p className="text-sm text-slate-300">
                          Sie sehen früh, wofür Sie zahlen – konkrete Workflows und Agenten statt abstrakter Stunden.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-slate-50">Planbarkeit</h4>
                        <p className="text-sm text-slate-300">
                          Klare Pakete, fester Rahmen, optionale Add-ons – keine Überraschungen.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-slate-50">Qualität</h4>
                        <p className="text-sm text-slate-300">
                          CP beinhaltet QA/Evals – Qualität wird nicht "weggespart", sondern ist einkalkuliert.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-slate-50">Fairness</h4>
                        <p className="text-sm text-slate-300">
                          Nur tatsächlich gelieferte CP werden abgerechnet. Änderungen nur nach Freigabe.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Garantien */}
              <Card className="glass-card border-emerald-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-slate-50">Unsere Transparenz-Garantien</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                      <div className="text-slate-300">
                        <strong className="text-slate-50">CP-Rahmen:</strong> Wir nennen einen CP-Rahmen (z.B. 5–6 CP).
                        Liegen wir darunter, zahlen Sie nur die tatsächlich gelieferten CP.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                      <div className="text-slate-300">
                        <strong className="text-slate-50">Begründeter CP-Satz:</strong> Der CP-Satz wird transparent begründet
                        (Systemkomplexität, QA-Tiefe). Wir bleiben im vereinbarten Band.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                      <div className="text-slate-300">
                        <strong className="text-slate-50">Flexibler Retainer:</strong> Monthly Care ist monatlich kündbar
                        oder nach Projektphase anpassbar.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="glass-card p-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-50">
                  Bereit für transparente Automatisierung?
                </h2>
                <p className="text-xl mb-8 text-slate-300">
                  Lassen Sie uns gemeinsam herausfinden, wie viele CP Ihr Projekt benötigt.
                  Unverbindlich und kostenfrei.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/analyse">
                    <Button variant="gradient-primary" size="lg" className="min-w-[200px]">
                      Analyse starten
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/kontakt">
                    <Button variant="outline" size="lg" className="min-w-[200px] border-slate-700 text-slate-300 hover:bg-slate-800">
                      Direktkontakt
                    </Button>
                  </Link>
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

export default CPSystem;