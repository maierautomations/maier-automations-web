import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Users, Globe, FileCheck, Lock, Eye } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              EU-Hosting (Frankfurt)
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <FileCheck className="w-4 h-4 mr-2" />
              DPA/SCCs verfügbar
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Lock className="w-4 h-4 mr-2" />
              RBAC-Sicherheit
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Eye className="w-4 h-4 mr-2" />
              Keine Tracker ohne Einwilligung
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            KI-Automatisierungen für{" "}
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              intelligente Unternehmen
            </span>
          </h1>

          {/* Subline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Steigern Sie Ihre Effizienz mit maßgeschneiderten KI-Agenten und Automatisierungen auf n8n-Basis. 
            Speziell für DACH-Unternehmen entwickelt – sicher, DSGVO-konform und sofort einsatzbereit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/analyse">
              <Button variant="default" size="lg" className="min-w-[200px]">
                <Zap className="w-5 h-5 mr-2" />
                Kostenlose Analyse starten
              </Button>
            </Link>
            <Link to="/pakete">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <Users className="w-5 h-5 mr-2" />
                Pakete entdecken
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% DSGVO</h3>
              <p className="text-xs text-muted-foreground">
                EU-Server • Privacy by Design • DPA verfügbar
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">2-3 Wochen</h3>
              <p className="text-xs text-muted-foreground">
                Von Analyse bis Go-Live • Vorkonfiguriert
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">DACH-Fokus</h3>
              <p className="text-xs text-muted-foreground">
                Speziell für deutsche Compliance entwickelt
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-3">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">n8n Cloud</h3>
              <p className="text-xs text-muted-foreground">
                Enterprise-Grade • EU-zertifiziert
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}