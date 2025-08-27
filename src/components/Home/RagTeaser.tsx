import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Search, FileText, Zap, ArrowRight } from "lucide-react";

export function RagTeaser() {
  const features = [
    {
      icon: Database,
      title: "Intelligente Wissensbasis",
      description: "Ihre Dokumente werden zu einer durchsuchbaren Wissensdatenbank"
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Finden Sie relevante Informationen durch Bedeutungsverständnis"
    },
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "PDF, Word, Excel, Websites und mehr automatisch verarbeitet"
    },
    {
      icon: Zap,
      title: "Instant Antworten",
      description: "Sofortige, präzise Antworten auf komplexe Geschäftsfragen"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              RAG-Technologie • Retrieval-Augmented Generation
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              RAG Pro: Ihr intelligenter{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Wissensassistent
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Verwandeln Sie Ihre Unternehmensdokumente in eine intelligente Wissensbasis. 
              RAG Pro kombiniert modernste KI mit Ihren spezifischen Daten und liefert 
              präzise Antworten in Sekundenschnelle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-light rounded-lg flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rag-pro">
                <Button variant="cta" size="lg">
                  RAG Pro entdecken
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/analyse">
                <Button variant="outline" size="lg">
                  Demo anfragen
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-light to-accent rounded-2xl p-8 shadow-soft">
              <div className="space-y-6">
                {/* Mock Chat Interface */}
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">RAG Pro Assistant</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-surface rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        "Wie waren unsere Verkaufszahlen im letzten Quartal?"
                      </p>
                    </div>
                    <div className="bg-primary-light rounded-lg p-3">
                      <p className="text-sm text-primary">
                        Basierend auf den Q3-Berichten: Umsatz stieg um 23% auf 2.4M€. 
                        Haupttreiber waren neue Automatisierungslösungen (+45%).
                      </p>
                      <div className="flex items-center mt-2 text-xs text-primary/70">
                        <FileText className="w-3 h-3 mr-1" />
                        Quelle: Q3_Finanzbericht.pdf
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Antwort-Genauigkeit</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">&lt;2s</div>
                    <div className="text-xs text-muted-foreground">Antwortzeit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}