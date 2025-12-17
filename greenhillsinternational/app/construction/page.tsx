import { Metadata } from 'next';
import { Toaster } from "../components/ui/toaster";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialSection";
import ClientsSection from "../components/ClientsSection";
import BookAppointment from "../components/BookAppointment"
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ServicePageSchema from "../components/ServicePageSchema";
import FAQSchema, { constructionFAQs } from "../components/FAQSchema";

import constructionExcellence from "../assets/construction-excellence.jpg";

import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

import user1 from '../assets/testimonials/user-1.jpg';
import user2 from '../assets/testimonials/user-2.jpg';
import user3 from '../assets/testimonials/user-3.jpg';
import user4 from '../assets/testimonials/user-4.jpg';
import user5 from '../assets/testimonials/user-5.jpg';
import user6 from '../assets/testimonials/user-6.jpg';
import user7 from '../assets/testimonials/user7.jpeg';
import user8 from '../assets/testimonials/user8.jpeg';

const constructionTestimonials = [
  {
    name: 'Sheikh Mohammed bin hammad bin tahnoon al nahyan​​',
    role: 'CEO, Premier Construction Group',
    message: 'GKBC delivered exceptional quality on our home renovation. Their work was timely, professional, and within budget.​',
    image: user8,
  },
    {
    name: 'Sheikh Khalifa bin Tahnoon bin mohammed al nahyan​​',
    role: 'CEO, Premier Construction Group',
    message: 'We hired them for a commercial project and were impressed by their clear communication and attention to detail. A reliable team that truly stands by their promises!',
    image: user7,
  },
    {
    name: 'Ahmed Al-Mansouri',
    role: 'CEO, Premier Construction Group',
    message: 'Green Hills exceeded our expectations with their exceptional attention to detail and commitment to quality. Their team delivered our commercial project on time and within budget.',
    image: user1,
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Architect, Design Studio',
    message: 'Working with Green Hills has been a game-changer. Their innovative approach to construction and willingness to embrace cutting-edge technology sets them apart from competitors.',
    image: user2,
  },
  {
    name: 'Mohammed Hassan',
    role: 'Project Manager, Industrial Solutions',
    message: 'The professionalism and expertise demonstrated by Green Hills throughout our industrial facility project was outstanding. They truly understand the complexities of large-scale construction.',
    image: user3,
  },
  {
    name: 'Layla Al-Rashid',
    role: 'Director of Operations, Real Estate Holdings',
    message: 'From concept to completion, Green Hills Building Contracting proved to be a reliable partner. Their commitment to sustainable practices and quality craftsmanship is commendable.',
    image: user4,
  },
  {
    name: 'Omar Abdullah',
    role: 'Property Developer',
    message: 'I have worked with many contractors over the years, but Green Hills stands out for their transparency, communication, and ability to deliver exceptional results consistently.',
    image: user5,
  },
  {
    name: 'Fatima Al-Said',
    role: 'CEO, Hospitality Group',
    message: 'Green Hills transformed our vision into reality with their impeccable execution. Their team\'s dedication to excellence and client satisfaction is truly impressive.',
    image: user6,
  },
    {
    name: 'Khalil Ahmad',
    role: 'Property Developer',
    message: 'I have worked with many contractors over the years, but Green Hills stands out for their transparency, communication, and ability to deliver exceptional results consistently.',
    image: user5,
  },
];

const constructionSlides = [
  {
    image: hero1,
    title: 'A Legacy',
    subtitle: 'Built on Quality.',
  },
  {
    image: hero2,
    title: 'Delivering Functional',
    subtitle: 'and World-Class Projects.',
  },
  {
    image: hero3,
    title: 'Ground-Breaking Innovation',
    subtitle: 'with Robust Engineering.',
  },
];

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
        <HeroCarousel slides={constructionSlides} />
        <AboutSection 
          title="A Passion for Quality, Innovation and Excellence"
          paragraphs={[
            <p key="1">A people-driven company with a passion to redefine quality standards in the region, Green Hills International is a leading construction firm, shaping the industry with state-of-the-art craft and cutting-edge practices.</p>,
            <p key="2">Drawing inspiration from quality-driven industries worldwide, our processes and techniques blend seamlessly to produce world-class and futuristic projects that stand the test of time.</p>,
            <p key="3">With over <strong>9</strong> years of experience, we&apos;ve built a legacy of excellence through superior craftsmanship, innovative engineering solutions, and an unwavering commitment to our clients&apos; visions.</p>
          ]}
          highlightTitle="Green Hills Building Contracting"
          highlightText={
            <p>
              At <span className="font-semibold text-foreground">Green Hills Building Contracting L.L.C.</span>, we specialize in delivering <strong>turnkey construction solutions</strong> across the UAE, from luxury residential properties to sophisticated commercial developments and industrial facilities. Established in 2016, we&apos;ve been at the forefront of the <em>construction, design-build, and facility management</em> industries, using cutting-edge technology, sustainable practices, and world-class craftsmanship.
            </p>
          }
          image={constructionExcellence}
          stats={{ value: "9+", label: "Years of Excellence" }}
        />
        <ServicesSection />
        {/* <ExpertiseSection /> */}
        <ProjectsSection />
        <ClientsSection />
        <TestimonialsSection testimonials={constructionTestimonials} />
        {/* <ContactSection /> */}
        <BookAppointment/>
      </main>

      <Toaster />
    </div>
  );
}
