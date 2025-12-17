import { Metadata } from 'next';
import { Toaster } from "../components/ui/toaster";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialSection";
import BookAppointment from "../components/BookAppointment"
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ServicePageSchema from "../components/ServicePageSchema";
import FAQSchema, { constructionFAQs } from "../components/FAQSchema";

export const metadata: Metadata = {
  title: 'Construction Services Dubai & UAE | Green Hills International',
  description: 'Green Hills International: Best construction company in Dubai & UAE. Civil construction, MEP services, infrastructure & facades. Award-winning contractor with proven track record.',
  keywords: [
    'Green Hills International',
    'Green Hills construction',
    'construction services UAE',
    'construction services Dubai',
    'best construction company in UAE',
    'best construction company Dubai',
    'civil construction UAE',
    'MEP services Dubai',
    'infrastructure construction UAE',
    'building contractor Dubai',
    'commercial construction UAE',
    'residential construction Dubai',
    'villa construction UAE',
    'facade contractor Dubai',
    'fit out contractor UAE',
    'luxury construction Dubai'
  ],
  openGraph: {
    type: 'website',
    url: 'https://greenhillsinternational.com/construction',
    title: 'Construction Services Dubai & UAE | Green Hills International',
    description: 'Green Hills International: Best construction company in Dubai & UAE. Civil construction, MEP services, infrastructure & more.',
    siteName: 'Green Hills International',
    locale: 'en_AE',
    images: [
      {
        url: 'https://greenhillsinternational.com/og/og-construction.png',
        width: 1200,
        height: 630,
        alt: 'Green Hills International - Construction Services in Dubai UAE',
        type: 'image/png',
      },
      {
        url: 'https://greenhillsinternational.com/og/og-construction.png',
        width: 800,
        height: 420,
        alt: 'Green Hills Construction Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Services | Green Hills International',
    description: 'Best construction company in Dubai & UAE - MEP, civil construction, and infrastructure solutions by Green Hills International.',
    images: ['https://greenhillsinternational.com/og/og-construction.png'],
  },
  alternates: {
    canonical: 'https://greenhillsinternational.com/construction',
  },
};

export default function Construction() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://greenhillsinternational.com" },
          { name: "Construction Services", url: "https://greenhillsinternational.com/construction" }
        ]} 
      />
      <ServicePageSchema
        name="Construction Services"
        description="Comprehensive construction services in Dubai and UAE including civil construction, MEP services, infrastructure development, facade work, and luxury residential projects."
        url="https://greenhillsinternational.com/construction"
        category="construction"
        services={[
          { name: "Civil Construction", description: "Complete civil construction services for commercial and residential projects", url: "https://greenhillsinternational.com/construction/services/civil-construction" },
          { name: "MEP Services", description: "Mechanical, electrical, and plumbing solutions for all building types", url: "https://greenhillsinternational.com/construction/services/mep-services" },
          { name: "Infrastructure", description: "Infrastructure development and construction services", url: "https://greenhillsinternational.com/construction/services/infrastructure" },
          { name: "Facade Works", description: "Premium facade design and installation services", url: "https://greenhillsinternational.com/construction/services/facades" }
        ]}
      />
      <FAQSchema faqs={constructionFAQs} />
      <main className="overflow-x-hidden">
        <HeroCarousel />
        <AboutSection />
        <ServicesSection />
        {/* <ExpertiseSection /> */}
        <ProjectsSection />
        <TestimonialsSection />
        {/* <ContactSection /> */}
        <BookAppointment/>
      </main>

      <Toaster />
    </div>
  );
}
