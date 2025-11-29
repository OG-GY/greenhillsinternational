import { Metadata } from 'next';
import LandingSection from "./components/LandingSection";

export const metadata: Metadata = {
  title: 'Green Hills International | Construction & Metal Trading UAE',
  description: 'Leading construction and metal trading company in Dubai & UAE. Premium building projects, MEP services, and global metal supply chain solutions. Expert contractors.',
  keywords: ['construction', 'metal trading', 'UAE', 'Dubai', 'industrial materials', 'scrap trading', 'building contractor'],
  openGraph: {
    title: 'Green Hills International | Construction & Metal Trading',
    description: 'Trusted construction contractor and metal trading partner delivering world-class projects and industrial solutions in UAE.',
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
