import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg">Maier Automations</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Ihr Spezialist für KI-Automatisierungen und intelligente Agenten. 
              DSGVO-konform und mit EU-Hosting für maximale Sicherheit.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pakete" className="text-muted-foreground hover:text-primary transition-colors">
                  Automatisierungs-Pakete
                </Link>
              </li>
              <li>
                <Link to="/rag-pro" className="text-muted-foreground hover:text-primary transition-colors">
                  RAG Pro System
                </Link>
              </li>
              <li>
                <Link to="/analyse" className="text-muted-foreground hover:text-primary transition-colors">
                  Kostenlose Analyse
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>München, Deutschland</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+49 (0) 89 123 456 78</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@maier-automations.de</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Bleiben Sie auf dem Laufenden über neue KI-Trends und Automatisierungsmöglichkeiten.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Ihre E-Mail"
                className="flex-1"
              />
              <Button variant="default" size="default">
                Abonnieren
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Maier Automations. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}