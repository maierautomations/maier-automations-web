import { Bot, Workflow, Database, MessageSquare } from "lucide-react";

export function WhatWeDoSection() {
  const services = [
    {
      icon: Bot,
      title: "Intelligente KI-Agenten",
      description: "Maßgeschneiderte KI-Assistenten, die Ihre Geschäftsprozesse verstehen und eigenständig optimieren.",
      features: ["Kundenservice-Automatisierung", "Datenanalyse & Reporting", "Prozessoptimierung"]
    },
    {
      icon: Workflow,
      title: "n8n Automatisierungen",
      description: "Professionelle Workflow-Automatisierung auf der bewährten n8n-Plattform für maximale Flexibilität.",
      features: ["API-Integrationen", "Multi-System-Workflows", "Event-basierte Automation"]
    },
    {
      icon: Database,
      title: "RAG-Systeme",
      description: "Retrieval-Augmented Generation für intelligente Wissensdatenbanken und Dokumentenverarbeitung.",
      features: ["Dokumentenanalyse", "Wissensmanagement", "Intelligente Suche"]
    },
    {
      icon: MessageSquare,
      title: "Beratung & Support",
      description: "Umfassende Beratung von der Analyse bis zur Implementierung – mit deutschsprachigem Support.",
      features: ["Kostenlose Erstanalyse", "Implementierungsunterstützung", "Fortlaufende Optimierung"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Was wir für Ihr Unternehmen tun
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir entwickeln maßgeschneiderte KI-Lösungen, die Ihre Geschäftsprozesse 
            intelligent automatisieren und nachhaltig optimieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-semibold text-foreground mb-3 text-lg">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}