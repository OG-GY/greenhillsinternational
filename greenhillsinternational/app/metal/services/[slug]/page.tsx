import { Metadata } from 'next';
import ServiceDetailLayout from '../../../components/ServiceDetailLayout';
import { getAllMetalDomainSlugs, getMetalDomainBySlug } from '@/app/lib/metalservicedata';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllMetalDomainSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getMetalDomainBySlug(slug);

  if (!service) {
    return {
      title: 'Metal Trading | Green Hills International',
    };
  }

  return {
    title: `${service.title} Trading | Green Hills International`,
    description: `Expert ${service.title.toLowerCase()} trading services. Premium quality materials with competitive pricing & reliable supply chain.`,
    keywords: [service.title, 'metal trading', 'industrial supplier', 'quality materials', 'UAE', 'Dubai'],
    openGraph: {
      type: 'website',
      url: `https://greenhillsinternational.com/metal/services/${slug}`,
      title: `${service.title} Trading Solutions`,
      description: `Expert ${service.title.toLowerCase()} trading services. Premium quality materials with competitive pricing.`,
      siteName: 'Green Hills International',
      locale: 'en_AE',
      images: [
        {
          url: 'https://greenhillsinternational.com/og/og-service.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} Service`,
          type: 'image/png',
        },
        {
          url: 'https://greenhillsinternational.com/og/og-service.jpg',
          width: 800,
          height: 420,
          alt: 'Metal Trading Service',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} Trading Solutions`,
      description: `Expert ${service.title.toLowerCase()} trading with quality materials & reliable supply.`,
      images: ['https://greenhillsinternational.com/og/og-service.jpg'],
    },
    alternates: {
      canonical: `https://greenhillsinternational.com/metal/services/${slug}`,
    },
  };
}

const ServicePage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = getMetalDomainBySlug(slug);

  if (!service) {
    return null;
  }

  return (
    <ServiceDetailLayout title={service.title}>
      {/* Render domain details using tab interface instead */}
      <div className="py-12">
        <p className="text-lg text-muted-foreground">{service.description}</p>
      </div>
    </ServiceDetailLayout>
  );
};

export default ServicePage;


