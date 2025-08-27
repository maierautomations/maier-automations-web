import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/components/Home/HeroSection";
import { WhatWeDoSection } from "@/components/Home/WhatWeDoSection";
import { PackageTeaser } from "@/components/Home/PackageTeaser";
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
        <PackageTeaser />
        <RagTeaser />
        <BlogTeaser />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
