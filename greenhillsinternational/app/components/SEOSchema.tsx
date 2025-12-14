import Script from "next/script";

// Organization Schema - Essential for brand recognition
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://greenhillsinternational.com/#organization",
  name: "Green Hills International",
  alternateName: [
    "Green Hills",
    "GHI",
    "Green Hills International LLC",
    "Green Hills International UAE",
    "Green Hills Construction",
    "Green Hills Metal Trading"
  ],
  url: "https://greenhillsinternational.com",
  logo: {
    "@type": "ImageObject",
    url: "https://greenhillsinternational.com/logo.png",
    width: 300,
    height: 100
  },
  image: "https://greenhillsinternational.com/og/og-default.png",
  description: "Green Hills International is a leading construction and metal trading company in UAE and Dubai. We provide premium construction services, MEP solutions, industrial materials, and global metal supply chain solutions.",
  foundingDate: "2015",
  foundingLocation: {
    "@type": "Place",
    name: "Dubai, United Arab Emirates"
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
    },
    {
      "@type": "City",
      name: "Sharjah"
    }
  ],
  knowsAbout: [
    "Construction Services",
    "Metal Trading",
    "Scrap Trading",
    "MEP Services",
    "Industrial Materials",
    "Building Contractor",
    "Commercial Construction",
    "Residential Construction",
    "Luxury Construction",
    "Ferrous Metals",
    "Non-Ferrous Metals",
    "Steel Trading",
    "Aluminum Trading",
    "Copper Trading"
  ],
  sameAs: [
    "https://www.linkedin.com/company/greenhillsinternational",
    "https://www.facebook.com/greenhillsinternational",
    "https://www.instagram.com/greenhillsinternational",
    "https://twitter.com/greenhillsintl"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-4-XXX-XXXX",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      telephone: "+971-4-XXX-XXXX",
      contactType: "sales",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"]
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  }
};

// LocalBusiness Schema - For local SEO and Google Maps
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://greenhillsinternational.com/#localbusiness",
  name: "Green Hills International",
  alternateName: "Green Hills International LLC",
  image: "https://greenhillsinternational.com/og/og-default.png",
  logo: "https://greenhillsinternational.com/logo.png",
  url: "https://greenhillsinternational.com",
  telephone: "+971-4-XXX-XXXX",
  email: "info@greenhillsinternational.com",
  description: "Green Hills International - Premier construction company and metal trading specialists in Dubai, UAE. Offering luxury residential, commercial construction, MEP services, and comprehensive metal supply chain solutions.",
  priceRange: "$$$",
  currenciesAccepted: "AED, USD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1857,
    longitude: 55.2658
  },
  hasMap: "https://maps.google.com/?q=Green+Hills+International+Dubai",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00"
    }
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 25.1857,
      longitude: 55.2658
    },
    geoRadius: "100000"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  }
};

// WebSite Schema with SearchAction - For sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://greenhillsinternational.com/#website",
  name: "Green Hills International",
  alternateName: "Green Hills International UAE",
  url: "https://greenhillsinternational.com",
  description: "Official website of Green Hills International - Leading construction and metal trading company in UAE",
  publisher: {
    "@id": "https://greenhillsinternational.com/#organization"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://greenhillsinternational.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  inLanguage: "en-AE"
};

// Corporate Contact Schema
const corporateContactSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": "https://greenhillsinternational.com/#corporation",
  name: "Green Hills International",
  alternateName: "Green Hills International LLC",
  url: "https://greenhillsinternational.com",
  logo: "https://greenhillsinternational.com/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-4-XXX-XXXX",
      contactType: "customer support",
      areaServed: ["AE", "SA", "OM", "QA", "KW", "BH"],
      availableLanguage: ["English", "Arabic"]
    }
  ]
};

// Main SEO Schema Component - Add to layout.tsx
export default function SEOSchema() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="corporate-contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(corporateContactSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  );
}

// Service Schema Generator - For service pages
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category: "construction" | "metal";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${service.url}#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image || "https://greenhillsinternational.com/og/og-service.png",
    provider: {
      "@id": "https://greenhillsinternational.com/#organization"
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    serviceType: service.category === "construction" ? "Construction Services" : "Metal Trading Services",
    category: service.category === "construction" ? "Construction & Building" : "Metal & Industrial Materials"
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// FAQ Schema Generator - For pages with FAQs
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

// Project Schema Generator - For project showcase
export function generateProjectSchema(project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${project.url}#project`,
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image || "https://greenhillsinternational.com/og/og-project.png",
    creator: {
      "@id": "https://greenhillsinternational.com/#organization"
    },
    locationCreated: project.location ? {
      "@type": "Place",
      name: project.location
    } : undefined
  };
}
