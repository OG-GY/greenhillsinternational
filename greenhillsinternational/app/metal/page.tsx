import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import heroMetal from '../assets/metals/hero-metal.jpg';
import { metalDomains } from '../lib/metalservicedata';
import ServicesSection from '../components/ServicesSection';
import SustainabilitySection from '../components/SustainabilitySection';
import MetalAboutSection from '../components/MetalAboutSection';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ServicePageSchema from '../components/ServicePageSchema';
import FAQSchema, { metalFAQs } from '../components/FAQSchema';

export const metadata: Metadata = {
  title: 'Metal Trading Dubai & UAE | Best Metal Services | Green Hills International',
  description: 'Green Hills International: Best metal trading company in UAE & Dubai. Ferrous, non-ferrous metals, steel, scrap trading & industrial materials. Global supply chain solutions.',
  keywords: [
    'Green Hills International',
    'Green Hills metal trading',
    'metal trading UAE',
    'metal trading Dubai',
    'best metal services in UAE',
    'best metal trading company Dubai',
    'scrap trading UAE',
    'scrap trading Dubai',
    'ferrous metals UAE',
    'non-ferrous metals Dubai',
    'steel trading UAE',
    'aluminum suppliers Dubai',
    'copper trading UAE',
    'metal suppliers Dubai',
    'industrial materials UAE',
    'metal ores trading',
    'recycled metals UAE',
    'metal export Dubai'
  ],
  openGraph: {
    type: 'website',
    url: 'https://greenhillsinternational.com/metal',
    title: 'Metal Trading Dubai & UAE | Best Metal Services | Green Hills International',
    description: 'Green Hills International: Best metal trading company in UAE. Ferrous, non-ferrous metals, steel, scrap & industrial materials.',
    siteName: 'Green Hills International',
    locale: 'en_AE',
    images: [
      {
        url: 'https://greenhillsinternational.com/og/og-metal.png',
        width: 1200,
        height: 630,
        alt: 'Green Hills International - Metal Trading in Dubai UAE',
        type: 'image/png',
      },
      {
        url: 'https://greenhillsinternational.com/og/og-metal.png',
        width: 800,
        height: 420,
        alt: 'Green Hills Metal Trading Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metal Trading | Green Hills International',
    description: 'Best metal trading company in Dubai & UAE providing ferrous, non-ferrous metals, and scrap materials globally.',
    images: ['https://greenhillsinternational.com/og/og-metal.png'],
  },
  alternates: {
    canonical: 'https://greenhillsinternational.com/metal',
  },
};

const Metal = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://greenhillsinternational.com" },
          { name: "Metal Trading", url: "https://greenhillsinternational.com/metal" }
        ]} 
      />
      <ServicePageSchema
        name="Metal Trading & Industrial Materials"
        description="Comprehensive metal trading and industrial materials supply in Dubai and UAE. Ferrous metals, non-ferrous metals, steel products, scrap trading, and recycled materials."
        url="https://greenhillsinternational.com/metal"
        category="metal"
        services={[
          { name: "Ferrous Metals", description: "Iron, steel, and alloy trading services", url: "https://greenhillsinternational.com/metal/ferrous-metals" },
          { name: "Non-Ferrous Metals", description: "Aluminum, copper, brass, and specialty metals", url: "https://greenhillsinternational.com/metal/non-ferrous-metals" },
          { name: "Scrap Trading", description: "Metal scrap and recycled materials trading", url: "https://greenhillsinternational.com/metal/scrap-trading" },
          { name: "Steel Products", description: "Structural steel and steel products supply", url: "https://greenhillsinternational.com/metal/steel-products" }
        ]}
      />
      <FAQSchema faqs={metalFAQs} />
      <Navigation changeOnScroll={false} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src={heroMetal}
            alt="Metal trading and industrial materials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/90 to-deep-navy/70"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <span className="text-sm font-semibold tracking-widest uppercase">
              Global Trade Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mt-4 mb-6">
              Metals & Products Trading
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Forging global trade with quality and integrity. Your trusted partner for metals, industrial materials, and comprehensive scrap trading solutions.
            </p>
          </div>
        </section>

        {/* About Section */}
        <MetalAboutSection
          eyebrow="About Green Hills Metals"
          title="International Trading Excellence"
          paragraphs={[
            "Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered international trading company specializing in metals, industrial materials, and comprehensive scrap trading. With a strong operational presence in Dubai – a global commodities hub – we partner with leading manufacturers, smelters, recyclers, and suppliers to deliver high-quality metals and industrial inputs worldwide.",
            "Our portfolio includes ferrous and non-ferrous metals, steel products, metal ores, cargo containers, industrial packaging, and a complete range of scrap and recycled materials. By combining transparent sourcing, technical expertise, and sustainable practices, we ensure reliable supply chains and long-term value for clients across global markets."
          ]}
          highlight="Dubai"
        />

        {/* Trading Domains (rendered via ServicesSection) */}
        <ServicesSection
          list={metalDomains.map((d) => ({
            iconName: d.iconName,
            title: d.title,
            summary: d.summary,
            path: d.path,
          }))}
          heading={{
            eyebrow: 'Our Trading Portfolio',
            title: 'Comprehensive Metal Trading Solutions',
            subtitle: 'From raw materials to finished products, we deliver excellence across all aspects of metal and industrial trading.'
          }}
        />

        {/* Sustainability Section */}
        <SustainabilitySection
          eyebrow="Our Commitment"
          title="Sustainability & Responsible Trading"
          items={[
            {
              title: 'Environmental Excellence',
              description:
                'We prioritize recycled and reusable materials, reducing environmental impact while ensuring supply chain resilience. Non-ferrous metals can be recycled indefinitely without losing quality, and recycling aluminium saves about 95% of the energy compared to producing new metal.',
            },
            {
              title: 'Quality Assurance',
              description:
                'We adhere to international quality management standards including ISO 9001 to ensure consistency and customer satisfaction. All products are inspected and certified to meet ASTM, DIN or other applicable industry specifications.',
            },
          ]}
        />

        {/* Contact CTA Section */}
        <section className="py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-warm-cream">
              Ready to Partner With Us?
            </h2>
            <p className="text-warm-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact our trading team to discuss your metal and industrial material requirements.
            </p>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-transparent text-warm-cream border-luxury-gold hover:bg-luxury-gold hover:text-deep-navy"
            >
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metal;
