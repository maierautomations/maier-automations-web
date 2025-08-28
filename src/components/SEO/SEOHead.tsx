import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

export function SEOHead({
  title = "Maier Automations - KI-Automatisierungen für intelligente Unternehmen",
  description = "DSGVO-konforme KI-Automatisierungen und RAG-Systeme für KMU. Transparente CP-Preisgestaltung, EU-Hosting, n8n-Workflows. Kostenlose Prozess-Analyse.",
  keywords = "KI-Automatisierung, n8n, RAG, DSGVO, EU-Hosting, Workflows, KMU, Mittelstand, Complexity Points, Frankfurt",
  image = "https://maier-automations.de/og-image.jpg",
  url = "https://maier-automations.de",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Maier Automations",
  noIndex = false
}: SEOProps) {
  const fullTitle = title.includes('Maier Automations') 
    ? title 
    : `${title} | Maier Automations`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta tags
    const updateMeta = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', author);
    
    // Open Graph
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:url', url, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:site_name', 'Maier Automations', 'property');
    updateMeta('og:locale', 'de_DE', 'property');
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    
    // Language and region
    updateMeta('language', 'de');
    
    // Robots
    if (noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    }
    
    // Structured data
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? "Article" : "Organization",
      "name": type === 'article' ? title : "Maier Automations",
      "description": description,
      "url": url,
      "image": image,
      ...(type === 'website' && {
        "@type": "Organization",
        "name": "Maier Automations",
        "url": "https://maier-automations.de",
        "logo": "https://maier-automations.de/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": ["DE", "AT", "CH"],
          "availableLanguage": "German"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "DE"
        }
      }),
      ...(type === 'article' && {
        "@type": "Article",
        "headline": title,
        "author": {
          "@type": "Organization",
          "name": "Maier Automations"
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime
      })
    };
    
    structuredData.textContent = JSON.stringify(schemaData);
  }, [fullTitle, description, keywords, image, url, type, publishedTime, modifiedTime, author, noIndex]);

  return null;
}