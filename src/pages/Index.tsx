import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Home/HeroSection";
import { BentoFeatures } from "@/components/Home/BentoFeatures";
import { WorkflowShowcase } from "@/components/Home/WorkflowShowcase";
import { PackageGrid } from "@/components/Home/PackageGrid";
import { SocialProofSection } from "@/components/Home/SocialProofSection";
import { RagTeaser } from "@/components/Home/RagTeaser";
import { BlogTeaser } from "@/components/Home/BlogTeaser";
import { NewsletterSection } from "@/components/Home/NewsletterSection";
import { SEOHead } from "@/components/SEO/SEOHead";
import { ScrollProgress, CircularScrollProgress } from "@/components/ui/scroll-progress";
import { PerformanceMonitor, useViewportHeight } from "@/components/ui/mobile-optimizations";
import { LazySection } from "@/components/ui/lazy-section";

const Index = () => {
  useViewportHeight();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Maier Automations - KI-Automatisierungen für intelligente Unternehmen"
        description="DSGVO-konforme KI-Automatisierungen und RAG-Systeme für KMU im DACH-Raum. Transparente CP-Preisgestaltung, EU-Hosting Frankfurt, n8n-Workflows. Kostenlose Prozess-Analyse starten."
        keywords="KI-Automatisierung, n8n, RAG, DSGVO, EU-Hosting, Workflows, KMU, Mittelstand, Complexity Points, Frankfurt, KI-Agent, Automation"
        url="https://maier-automations.de/"
      />
      
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      
      {/* Scroll Progress Indicators */}
      <ScrollProgress />
      <CircularScrollProgress />
      
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BentoFeatures />
        
        <LazySection>
          <WorkflowShowcase />
        </LazySection>
        
        <LazySection>
          <PackageGrid />
        </LazySection>
        
        <LazySection>
          <SocialProofSection />
        </LazySection>
        
        <LazySection>
          <RagTeaser />
        </LazySection>
        
        <LazySection>
          <BlogTeaser />
        </LazySection>
        
        <LazySection>
          <NewsletterSection />
        </LazySection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
