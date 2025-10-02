import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp, Bot, Shield } from "lucide-react";

export function BlogTeaser() {
  const blogPosts = [
    {
      title: "KI-Automatisierung im Mittelstand: 5 sofort umsetzbare Strategien",
      description: "Erfahren Sie, wie mittelständische Unternehmen mit gezielten KI-Automatisierungen ihre Effizienz steigern können.",
      date: "15. November 2024",
      category: "Automatisierung",
      icon: TrendingUp,
      slug: "ki-automatisierung-mittelstand-strategien"
    },
    {
      title: "RAG-Systeme: Warum Ihre Wissensdatenbank intelligenter werden muss",
      description: "Wie Retrieval-Augmented Generation die Art verändert, wie Unternehmen auf ihr Wissen zugreifen.",
      date: "12. November 2024",
      category: "RAG-Technologie",
      icon: Bot,
      slug: "rag-systeme-intelligente-wissensdatenbank"
    },
    {
      title: "DSGVO & KI: Compliance-sichere Automatisierungen implementieren",
      description: "Ein praktischer Leitfaden für DSGVO-konforme KI-Lösungen in deutschen Unternehmen.",
      date: "8. November 2024",
      category: "Compliance",
      icon: Shield,
      slug: "dsgvo-ki-compliance-automatisierungen"
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 gradient-emerald-cyan text-slate-900 border-0">
            Expertise & Insights
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4">
            KI-Wissen für Praktiker
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Bleiben Sie auf dem neuesten Stand der KI-Automatisierung.
            Praxisnahe Insights, Trends und Anleitungen direkt von unseren Experten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="glass-card hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="text-xs bg-slate-800/50 text-emerald-500 border-emerald-500/30">
                    {post.category}
                  </Badge>
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/20 rounded-lg">
                    <post.icon className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight text-slate-50 group-hover:text-emerald-500 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4 text-slate-300">
                  {post.description}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-slate-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>

                  <Link to={`/blog/${post.slug}`} className="text-emerald-500 hover:text-emerald-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button variant="outline" size="lg">
              Alle Artikel lesen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}