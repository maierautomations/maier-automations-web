import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  
  // In einer echten App würde dieser Content aus einer API oder CMS kommen
  const article = {
    title: "KI-Automatisierung im Mittelstand: 5 sofort umsetzbare Strategien",
    description: "Erfahren Sie, wie mittelständische Unternehmen mit gezielten KI-Automatisierungen ihre Effizienz steigern können und welche Quick Wins sofort möglich sind.",
    date: "15. November 2024",
    readTime: "8 Min.",
    category: "Automatisierung",
    author: "Thomas Maier",
    slug: "ki-automatisierung-mittelstand-strategien"
  };

  const relatedArticles = [
    {
      title: "RAG-Systeme: Warum Ihre Wissensdatenbank intelligenter werden muss",
      slug: "rag-systeme-intelligente-wissensdatenbank",
      date: "12. November 2024"
    },
    {
      title: "DSGVO & KI: Compliance-sichere Automatisierungen implementieren", 
      slug: "dsgvo-ki-compliance-automatisierungen",
      date: "8. November 2024"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Navigation */}
        <section className="py-4 bg-surface border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Zurück zum Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <span>{article.readTime} Lesezeit</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Teilen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {article.description}
                </p>
                
                {/* Placeholder Content */}
                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                  1. Kundenservice-Automatisierung: Der erste Quick Win
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Der Kundenservice ist oft der erste Bereich, in dem Unternehmen von KI-Automatisierung profitieren können. 
                  Durch intelligente Chatbots und automatisierte E-Mail-Antworten lassen sich bis zu 80% der Standardanfragen 
                  vollautomatisch bearbeiten.
                </p>
                
                <Card className="my-8 bg-primary-light border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">
                      💡 Praxis-Tipp
                    </h4>
                    <p className="text-sm text-primary/80">
                      Starten Sie mit den 10 häufigsten Kundenanfragen. Diese eignen sich ideal für eine erste 
                      Automatisierung und zeigen schnell messbaren ROI.
                    </p>
                  </CardContent>
                </Card>
                
                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                  2. Intelligente Dokumentenverarbeitung
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Die Verarbeitung eingehender Dokumente – von Rechnungen bis zu Bewerbungen – kann durch KI 
                  dramatisch beschleunigt werden. Moderne OCR-Systeme in Kombination mit KI erreichen Genauigkeiten 
                  von über 95%.
                </p>
                
                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                  3. Personalisierte Marketing-Automation
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  KI-gesteuerte Marketing-Automatisierung geht weit über einfache E-Mail-Kampagnen hinaus. 
                  Intelligente Systeme analysieren Kundenverhalten und erstellen personalisierte Customer Journeys 
                  in Echtzeit.
                </p>
                
                <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">
                  Fazit: Der Weg zur intelligenten Automatisierung
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  KI-Automatisierung ist kein Zukunftstraum mehr, sondern eine konkrete Möglichkeit für 
                  mittelständische Unternehmen, ihre Effizienz zu steigern. Der Schlüssel liegt darin, 
                  klein anzufangen und kontinuierlich zu optimieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Verwandte Artikel
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle, index) => (
                  <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-200 group">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedArticle.date}
                      </p>
                      <Link 
                        to={`/blog/${relatedArticle.slug}`}
                        className="inline-flex items-center text-sm text-primary hover:text-primary-hover transition-colors"
                      >
                        Artikel lesen <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Bereit für Ihre eigene KI-Automatisierung?
              </h3>
              <p className="text-muted-foreground mb-8">
                Lassen Sie uns gemeinsam analysieren, welche Automatisierungspotenziale 
                in Ihrem Unternehmen stecken.
              </p>
              <Link to="/analyse">
                <Button variant="cta" size="lg">
                  Kostenlose Analyse anfordern
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}