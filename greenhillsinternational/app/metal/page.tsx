import { Metadata } from 'next';
import heroMetal from '../assets/metals/hero-metal.jpg';
import structuralSteel from '../assets/metals/structural-steel.jpg';
import metalFabrication from '../assets/metals/metal-fabrication.jpg';
import metalExcellence from '../assets/metal-excellence.jpg';
import { metalDomains } from '../lib/metalservicedata';
import ServicesSection from '../components/ServicesSection';
import SustainabilitySection from '../components/SustainabilitySection';
import AboutSection from '../components/AboutSection';
import HeroCarousel from '../components/HeroCarousel';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialSection';
import BookAppointment from '../components/BookAppointment';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ServicePageSchema from '../components/ServicePageSchema';
import FAQSchema, { metalFAQs } from '../components/FAQSchema';

import user1 from '../assets/testimonials/user-1.jpg';
import user2 from '../assets/testimonials/user-2.jpg';
import user3 from '../assets/testimonials/user-3.jpg';
import user4 from '../assets/testimonials/user-4.jpg';
import user5 from '../assets/testimonials/user-5.jpg';
import user6 from '../assets/testimonials/user-6.jpg';

const metalTestimonials = [
  {
    name: 'James Wilson',
    role: 'Operations Director, Heavy Industries Corp',
    message: 'Green Hills Metals has been our go-to supplier for structural steel. Their consistency in quality and delivery schedules is unmatched in the region.',
    image: user3,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Procurement Manager, BuildRight Construction',
    message: 'We rely on Green Hills for all our reinforcement steel needs. Their competitive pricing and professional service make them a valuable partner.',
    image: user2,
  },
  {
    name: 'David Chen',
    role: 'Supply Chain Head, TechComponents Mfg',
    message: 'Sourcing high-grade copper and aluminum was a challenge until we partnered with Green Hills. They understand the specific requirements of the electronics industry.',
    image: user1,
  },
  {
    name: 'Sarah Al-Maktoum',
    role: 'Sustainability Officer, EcoRecycle UAE',
    message: 'Their commitment to responsible scrap trading aligns perfectly with our sustainability goals. A transparent and ethical partner in the recycling sector.',
    image: user4,
  },
  {
    name: 'Robert Thompson',
    role: 'Plant Manager, AutoParts Manufacturing',
    message: 'The quality of ferrous metals we receive is always top-notch. Green Hills International has significantly improved our raw material supply chain efficiency.',
    image: user5,
  },
  {
    name: 'Aisha Khan',
    role: 'Director, MetalWorks Studio',
    message: 'For custom architectural metal needs, Green Hills provides excellent material options. Their team is knowledgeable and always ready to assist.',
    image: user6,
  },
];

const metalSlides = [
  {
    image: heroMetal,
    title: 'Global Trade Solutions',
    subtitle: 'Metals & Products Trading',
  },
  {
    image: structuralSteel,
    title: 'Quality Steel Products',
    subtitle: 'For Industrial Applications',
  },
  {
    image: metalFabrication,
    title: 'Sustainable Scrap Trading',
    subtitle: 'Recycling for the Future',
  },
];

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
      
      <main className="flex-1">
        <HeroCarousel slides={metalSlides} />

        <AboutSection 
          title="International Trading Excellence"
          paragraphs={[
            <p key="1">Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered international trading company specializing in metals, industrial materials, and comprehensive scrap trading. With a strong operational presence in Dubai – a global commodities hub – we partner with leading manufacturers, smelters, recyclers, and suppliers to deliver high-quality metals and industrial inputs worldwide.</p>,
            <p key="2">Our portfolio includes ferrous and non-ferrous metals, steel products, metal ores, cargo containers, industrial packaging, and a complete range of scrap and recycled materials. By combining transparent sourcing, technical expertise, and sustainable practices, we ensure reliable supply chains and long-term value for clients across global markets.</p>
          ]}
          highlightTitle="Green Hills Metals"
          highlightText={
            <p>
              At <span className="font-semibold text-foreground">Green Hills Metals & Its Products Trading L.L.C.</span>, we are your trusted partner for <strong>global metal trading</strong>. From ferrous and non-ferrous metals to industrial scrap, we connect markets with integrity and efficiency.
            </p>
          }
          image={metalExcellence}
          stats={{ value: "Global", label: "Trade Solutions" }}
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

        <ClientsSection />
        <TestimonialsSection testimonials={metalTestimonials} />

        <BookAppointment/>
      </main>
    </div>
  );
};

export default Metal;
