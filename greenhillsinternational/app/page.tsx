import { Metadata } from 'next';
import LandingSection from "./components/LandingSection";
import FAQSchema, { homeFAQs } from "./components/FAQSchema";

export const metadata: Metadata = {
  title: 'Green Hills International | Construction & Metal Trading Company UAE',
  description: 'Green Hills International: Premier construction and metal trading company in Dubai & UAE. Luxury building projects, MEP services, and global metal supply chain solutions.',
  keywords: [
    // Primary brand keywords
    'Green Hills International',
    'Green Hills International UAE',
    'Green Hills International Dubai',
    'Green Hills',
    'GHI UAE',
    // Construction keywords
    'construction company UAE',
    'construction company Dubai',
    'building contractor UAE',
    'construction services Dubai',
    // Metal trading keywords
    'metal trading UAE',
    'metal trading Dubai',
    'scrap trading UAE',
    // Combined keywords
    'construction and metal trading UAE',
    'industrial materials Dubai'
  ],
  openGraph: {
    type: 'website',
    url: 'https://greenhillsinternational.com',
    title: 'Green Hills International | Construction & Metal Trading Company UAE',
    description: 'Green Hills International: Premier construction and metal trading company in Dubai & UAE. Luxury building projects, MEP services, and global metal supply.',
    siteName: 'Green Hills International',
    locale: 'en_AE',
    images: [
      {
        url: 'https://greenhillsinternational.com/og/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Green Hills International - Construction & Metal Trading Company in UAE',
        type: 'image/png',
      },
      {
        url: 'https://greenhillsinternational.com/og/og-default.png',
        width: 800,
        height: 420,
        alt: 'Green Hills International UAE',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Hills International | Construction & Metal Trading UAE',
    description: 'Premier construction and metal trading company in Dubai & UAE by Green Hills International.',
    images: ['https://greenhillsinternational.com/og/og-default.png'],
  },
  alternates: {
    canonical: 'https://greenhillsinternational.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <FAQSchema faqs={homeFAQs} />
      <LandingSection/>
    </div>
  );
}
