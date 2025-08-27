import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, TrendingUp, Bot, Shield, Zap, Users, Database } from "lucide-react";
import React from "react";

export default function Blog() {
  const categories = [
    "Alle Artikel",
    "Automatisierung",
    "RAG-Technologie", 
    "Compliance",
    "Praxistipps",
    "Trends"
  ];

  const blogPosts = [
    {
      title: "KI-Automatisierung im Mittelstand: 5 sofort umsetzbare Strategien",
      description: "Erfahren Sie, wie mittelständische Unternehmen mit gezielten KI-Automatisierungen ihre Effizienz steigern können und welche Quick Wins sofort möglich sind.",
      date: "15. November 2024",
      readTime: "8 Min.",
      category: "Automatisierung",
      icon: TrendingUp,
      slug: "ki-automatisierung-mittelstand-strategien",
      featured: true
    },
    {
      title: "RAG-Systeme: Warum Ihre Wissensdatenbank intelligenter werden muss",
      description: "Wie Retrieval-Augmented Generation die Art verändert, wie Unternehmen auf ihr Wissen zugreifen und warum das der Game-Changer für Ihren Kundenservice ist.",
      date: "12. November 2024",
      readTime: "6 Min.",
      category: "RAG-Technologie",
      icon: Bot,
      slug: "rag-systeme-intelligente-wissensdatenbank",
      featured: false
    },
    {
      title: "DSGVO & KI: Compliance-sichere Automatisierungen implementieren",
      description: "Ein praktischer Leitfaden für DSGVO-konforme KI-Lösungen in deutschen Unternehmen mit Checklisten und Best Practices.",
      date: "8. November 2024",
      readTime: "10 Min.",
      category: "Compliance",
      icon: Shield,
      slug: "dsgvo-ki-compliance-automatisierungen",
      featured: false
    },
    {
      title: "n8n vs. Zapier: Der ultimative Vergleich für deutsche Unternehmen",
      description: "Detaillierter Vergleich der Automatisierungsplattformen mit Fokus auf DSGVO-Konformität, Kosten und Funktionsumfang.",
      date: "5. November 2024",
      readTime: "12 Min.",
      category: "Praxistipps",
      icon: Zap,
      slug: "n8n-vs-zapier-vergleich-deutsche-unternehmen",
      featured: false
    },
    {
      title: "Erfolgsgeschichte: Wie ein Münchner Startup 70% Zeit im Kundenservice sparte",
      description: "Real Case Study: Vollautomatisierter Kundenservice mit KI-Agenten und die messbaren Ergebnisse nach 6 Monaten.",
      date: "2. November 2024",
      readTime: "7 Min.",
      category: "Praxistipps",
      icon: Users,
      slug: "case-study-muenchner-startup-kundenservice",
      featured: false
    },
    {
      title: "Die Zukunft der Dokumentenverarbeitung: KI trifft auf OCR",
      description: "Wie moderne KI-Systeme traditionelle OCR-Technologie revolutionieren und was das für Ihr Dokumentenmanagement bedeutet.",
      date: "28. Oktober 2024",
      readTime: "9 Min.",
      category: "Trends",
      icon: Database,
      slug: "zukunft-dokumentenverarbeitung-ki-ocr",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                Expertise & Insights
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                KI-Automatisierung{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  für Praktiker
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Praxisnahe Insights, bewährte Strategien und aktuelle Trends aus der Welt der 
                KI-Automatisierung – speziell für DACH-Unternehmen aufbereitet.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Empfohlener Artikel</h2>
              <Card className="shadow-soft overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{blogPosts[0].category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blogPosts[0].date} • {blogPosts[0].readTime} Lesezeit
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl lg:text-3xl mb-4 leading-tight">
                      {blogPosts[0].title}
                    </CardTitle>
                    
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {blogPosts[0].description}
                    </CardDescription>
                    
                    <Link to={`/blog/${blogPosts[0].slug}`}>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        Artikel lesen <ArrowRight className="w-3 h-3 ml-1" />
                      </Badge>
                    </Link>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary-light to-accent p-8 flex items-center justify-center">
                    {React.createElement(blogPosts[0].icon, { className: "w-24 h-24 text-primary" })}
                  </div>
                </div>
              </Card>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Alle Artikel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-200 group hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center justify-center w-8 h-8 bg-primary-light rounded-lg">
                          {React.createElement(post.icon, { className: "w-4 h-4 text-primary" })}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed mb-4">
                        {post.description}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date} • {post.readTime}
                        </div>
                        
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="text-primary hover:text-primary-hover transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Verpassen Sie keine Insights
              </h2>
              <p className="text-muted-foreground mb-8">
                Erhalten Sie die neuesten Artikel und Trends direkt in Ihr Postfach. 
                Monatlich, relevant, actionable.
              </p>
              <Link to="/#newsletter">
                <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer px-6 py-2">
                  Newsletter abonnieren
                </Badge>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}