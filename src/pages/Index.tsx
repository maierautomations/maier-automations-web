import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Home/HeroSection";
import { WhatWeDoSection } from "@/components/Home/WhatWeDoSection";
import { PackageGrid } from "@/components/Home/PackageGrid";
import { RagTeaser } from "@/components/Home/RagTeaser";
import { BlogTeaser } from "@/components/Home/BlogTeaser";
import { NewsletterSection } from "@/components/Home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <PackageGrid />
        <RagTeaser />
        <BlogTeaser />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
