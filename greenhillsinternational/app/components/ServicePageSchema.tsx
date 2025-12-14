"use client";

import Script from "next/script";

interface ServicePageSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  category: "construction" | "metal";
  services?: Array<{
    name: string;
    description: string;
    url: string;
  }>;
}

export default function ServicePageSchema({
  name,
  description,
  url,
  image,
  category,
  services
}: ServicePageSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: name,
    description: description,
    url: url,
    image: image || `https://greenhillsinternational.com/og/og-${category}.png`,
    provider: {
      "@type": "Organization",
      "@id": "https://greenhillsinternational.com/#organization",
      name: "Green Hills International",
      url: "https://greenhillsinternational.com"
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United Arab Emirates"
      },
      {
        "@type": "City",
        name: "Dubai"
      },
      {
        "@type": "City",
        name: "Abu Dhabi"
      }
    ],
    serviceType: category === "construction" 
      ? "Construction & Building Services" 
      : "Metal Trading & Supply Services",
    category: category === "construction" 
      ? "Construction" 
      : "Metal & Industrial Materials",
    termsOfService: "https://greenhillsinternational.com/terms",
    providerMobility: "static",
    hasOfferCatalog: services && services.length > 0 ? {
      "@type": "OfferCatalog",
      name: `${name} Catalog`,
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: service.url
        }
      }))
    } : undefined
  };

  return (
    <Script
      id="service-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema),
      }}
      strategy="afterInteractive"
    />
  );
}
