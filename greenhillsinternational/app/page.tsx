import { Metadata } from 'next';
import LandingSection from "./components/LandingSection";

export const metadata: Metadata = {
  title: 'Green Hills International | Construction & Metal Trading UAE',
  description: 'UAE-based construction and metal trading company offering world-class building projects and comprehensive metal trading solutions in Dubai.',
  keywords: ['construction', 'metal trading', 'UAE', 'Dubai', 'industrial materials', 'scrap trading', 'building contractor'],
  openGraph: {
    title: 'Green Hills International | Construction & Metal Trading',
    description: 'Leading construction and metal trading company in UAE. Delivering excellence in construction projects and metal trading solutions.',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LandingSection/>
    </div>
  );
}
