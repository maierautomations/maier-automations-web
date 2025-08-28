import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-accent to-surface rounded-2xl p-8 lg:p-12 shadow-soft relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  KI-Newsletter
                </Badge>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Bleiben Sie der Automatisierung voraus
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Erhalten Sie monatlich die neuesten Trends, Praxistipps und Erfolgsgeschichten 
                  aus der Welt der KI-Automatisierung – speziell für DACH-Unternehmen aufbereitet.
                </p>
              </div>

              <div className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="ihre.email@unternehmen.de"
                    className="flex-1 bg-background border-primary/20 focus:border-primary"
                  />
                  <Button variant="cta" className="sm:px-8">
                    <Mail className="w-4 h-4 mr-2" />
                    Anmelden
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Monatlich, nicht mehr</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Jederzeit abbestellbar</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">DSGVO-konform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}