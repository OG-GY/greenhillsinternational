import { Metadata } from 'next';
import LandingSection from "./components/LandingSection";

export const metadata: Metadata = {
  title: 'Green Hills International | Construction & Metal Trading UAE',
  description: 'Leading construction and metal trading company in Dubai & UAE. Premium building projects, MEP services, and global metal supply chain solutions. Expert contractors.',
  keywords: ['construction', 'metal trading', 'UAE', 'Dubai', 'industrial materials', 'scrap trading', 'building contractor'],
  openGraph: {
    type: 'website',
    url: 'https://greenhillsinternational.com',
    title: 'Green Hills International | Construction & Metal Trading UAE',
    description: 'Leading construction and metal trading company in Dubai & UAE. Premium building projects, MEP services, and global metal supply chain solutions.',
    siteName: 'Green Hills International',
    locale: 'en_AE',
    images: [
      {
        url: 'https://greenhillsinternational.com/og/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Green Hills International - Construction & Metal Trading',
        type: 'image/png',
      },
      {
        url: 'https://greenhillsinternational.com/og/og-default.png',
        width: 800,
        height: 420,
        alt: 'Green Hills International',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Hills International | Construction & Metal Trading',
    description: 'Premium construction and metal trading services in the UAE',
    images: ['https://greenhillsinternational.com/og/og-default.png'],
  },
  alternates: {
    canonical: 'https://greenhillsinternational.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LandingSection/>
    </div>
  );
}
