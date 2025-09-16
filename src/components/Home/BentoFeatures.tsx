import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Workflow, 
  Database, 
  Shield, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Users
} from "lucide-react";

export function BentoFeatures() {
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

        <BentoGrid className="max-w-7xl mx-auto">
          {/* Large Feature Card - KI-Agenten */}
          <BentoCard size="lg" glowColor="purple" className="md:col-span-2 md:row-span-2">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <Badge variant="secondary">KI-Powered</Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Intelligente KI-Agenten
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Maßgeschneiderte KI-Assistenten, die Ihre Geschäftsprozesse verstehen und eigenständig optimieren. Von Kundenservice bis Datenanalyse.
              </p>
              
              {/* Mini stats in the large card */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="text-center">
                  <AnimatedCounter 
                    end={60} 
                    suffix="%" 
                    size="sm"
                    title="Zeitersparnis"
                    description="Durchschnittlich"
                  />
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    end={24} 
                    suffix="h" 
                    size="sm"
                    title="Verfügbarkeit"
                    description="Rund um die Uhr"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Workflow Automation */}
          <BentoCard size="sm" glowColor="blue">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <Workflow className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">
              n8n Workflows
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professionelle Automatisierung auf der bewährten n8n-Plattform
            </p>
            <div className="mt-auto">
              <AnimatedCounter 
                end={50} 
                suffix="+" 
                size="sm"
                description="Verfügbare Integrationen"
              />
            </div>
          </BentoCard>

          {/* RAG Systems */}
          <BentoCard size="sm" glowColor="green">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <Database className="w-5 h-5 text-green-600" />
              </div>
              <Badge variant="outline" className="text-xs">RAG Pro</Badge>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">
              Wissensassistent
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Intelligente Wissensdatenbank mit Retrieval-Augmented Generation
            </p>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-green-600">
                &lt;2s
              </div>
              <p className="text-xs text-muted-foreground">Antwortzeit</p>
            </div>
          </BentoCard>

          {/* Trust & Security */}
          <BentoCard size="md" glowColor="orange" className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <Badge variant="secondary">100% DSGVO</Badge>
            </div>
            <h3 className="font-semibold text-foreground mb-3 text-xl">
              Sicherheit & Compliance
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-medium">EU-Server</div>
                <div className="text-xs text-muted-foreground">Frankfurt</div>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-medium">DPA/SCCs</div>
                <div className="text-xs text-muted-foreground">Verfügbar</div>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-medium">RBAC</div>
                <div className="text-xs text-muted-foreground">Enterprise</div>
              </div>
            </div>
          </BentoCard>

          {/* Implementation Speed */}
          <BentoCard size="sm" glowColor="purple">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">
              Schnell live
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Von der Analyse bis zum Go-Live in Rekordzeit
            </p>
            <div className="mt-auto">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                Typischer Zeitrahmen: 2-4 Wochen
              </div>
              <p className="text-xs text-muted-foreground">Bis Go-Live</p>
            </div>
          </BentoCard>

          {/* CTA Card */}
          <BentoCard size="sm" glowColor="blue" className="bg-gradient-to-br from-blue-600/5 to-purple-600/5">
            <div className="text-center h-full flex flex-col justify-center">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-3">
                Bereit zu starten?
              </h3>
              <Link to="/analyse" className="mt-auto">
                <Button className="w-full group" variant="default">
                  Analyse starten
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
}