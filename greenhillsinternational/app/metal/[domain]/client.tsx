'use client';

import { MetalDomainDetail } from '@/app/lib/metalservicedata';
import ServiceDetailLayout from '@/app/components/ServiceDetailLayout';
import AlternatingSection from '@/app/components/AlternatingSection';
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema';
import ServicePageSchema from '@/app/components/ServicePageSchema';

// Import images
import img1 from '@/app/assets/metals/architectural-metal.jpg';
import img2 from '@/app/assets/metals/custom-metalwork.jpg';
import img3 from '@/app/assets/metals/hero-metal.jpg';
import img4 from '@/app/assets/metals/metal-cladding.jpg';
import img5 from '@/app/assets/metals/metal-fabrication.jpg';
import img6 from '@/app/assets/metals/structural-steel.jpg';

const images = [img1, img2, img3, img4, img5, img6];

type Props = {
  domain: MetalDomainDetail;
};

export default function MetalServiceDetailClient({ domain }: Props) {
  return (
    <ServiceDetailLayout title={domain.title}>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.greenhillsinternational.com' },
          { name: 'Metal Trading', url: 'https://www.greenhillsinternational.com/metal' },
          { name: domain.title, url: `https://www.greenhillsinternational.com/metal/${domain.id}` },
        ]}
      />
      <ServicePageSchema
        name={domain.title}
        description={domain.description}
        url={`https://www.greenhillsinternational.com/metal/${domain.id}`}
        category="metal"
      />

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {domain.description}
            </p>
          </div>
        </div>
      </section>

      {domain.subdomains?.map((subdomain, index) => (
        <AlternatingSection
          key={index}
          title={subdomain.title}
          description={subdomain.description}
          imageSrc={images[index % images.length]}
          imageAlt={subdomain.title}
          reverse={index % 2 === 0}
        />
      ))}
    </ServiceDetailLayout>
  );
}
