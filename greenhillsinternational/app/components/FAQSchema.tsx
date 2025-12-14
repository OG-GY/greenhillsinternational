"use client";

import Script from "next/script";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
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

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
      strategy="afterInteractive"
    />
  );
}

// Pre-defined FAQs for reuse across pages
export const homeFAQs: FAQ[] = [
  {
    question: "What is Green Hills International?",
    answer: "Green Hills International is a leading construction and metal trading company headquartered in Dubai, UAE. We specialize in premium construction services, MEP solutions, and comprehensive metal and industrial materials trading with a global supply chain network."
  },
  {
    question: "Where is Green Hills International located?",
    answer: "Green Hills International is headquartered in Dubai, United Arab Emirates. We serve clients across the UAE including Dubai, Abu Dhabi, Sharjah, and have trading partnerships worldwide."
  },
  {
    question: "What construction services does Green Hills International offer?",
    answer: "Green Hills International offers comprehensive construction services including civil construction, MEP (Mechanical, Electrical, Plumbing) services, infrastructure development, facade works, interior fit-out, and luxury residential and commercial construction projects."
  },
  {
    question: "What metals does Green Hills International trade?",
    answer: "We trade a wide range of metals including ferrous metals (iron, steel), non-ferrous metals (aluminum, copper, brass, zinc), steel products, metal ores, scrap materials, and recycled metals. We provide global supply chain solutions for industrial clients."
  },
  {
    question: "How can I contact Green Hills International?",
    answer: "You can contact Green Hills International through our website at greenhillsinternational.com, by email at info@greenhillsinternational.com, or by calling our Dubai office. We also have a contact form on our website for inquiries."
  },
  {
    question: "Does Green Hills International work in Dubai?",
    answer: "Yes, Green Hills International is headquartered in Dubai and has completed numerous construction projects throughout Dubai and the broader UAE region. We are one of the leading construction contractors in the Dubai market."
  }
];

export const constructionFAQs: FAQ[] = [
  {
    question: "What types of construction projects does Green Hills International handle?",
    answer: "Green Hills International handles a wide range of construction projects including luxury residential villas, commercial buildings, industrial facilities, infrastructure projects, and mixed-use developments across Dubai and UAE."
  },
  {
    question: "Is Green Hills International a licensed contractor in UAE?",
    answer: "Yes, Green Hills International is a fully licensed and certified construction company in the United Arab Emirates, with all necessary permits and certifications to operate as a main contractor for construction projects."
  },
  {
    question: "What makes Green Hills International different from other construction companies?",
    answer: "Green Hills International combines decades of expertise with innovative construction methods, a commitment to quality, and on-time project delivery. We offer end-to-end construction services from design consultation to project completion."
  }
];

export const metalFAQs: FAQ[] = [
  {
    question: "What types of metals does Green Hills International trade?",
    answer: "We trade ferrous metals (iron, steel, stainless steel), non-ferrous metals (aluminum, copper, brass, bronze, zinc, lead, nickel), precious metals scrap, and various alloys. We also deal in metal ores and recycled materials."
  },
  {
    question: "Does Green Hills International offer scrap metal trading?",
    answer: "Yes, Green Hills International has a comprehensive scrap trading division that deals with ferrous and non-ferrous scrap metals, recycled materials, and industrial surplus. We prioritize sustainable and environmentally responsible trading practices."
  },
  {
    question: "Can Green Hills International supply metals internationally?",
    answer: "Absolutely. While headquartered in Dubai, Green Hills International has a global supply chain network and can source and deliver metals to clients worldwide. We have established partnerships with manufacturers, smelters, and suppliers across multiple continents."
  }
];
