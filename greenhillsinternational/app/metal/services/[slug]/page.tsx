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
    description: `Professional ${service.title.toLowerCase()} trading services. Quality materials and reliable supply chain solutions.`,
    keywords: [service.title, 'metal trading', 'industrial materials', 'supplier', 'UAE', 'Dubai'],
    openGraph: {
      title: service.title,
      description: service.description || `High-quality ${service.title.toLowerCase()} trading solutions.`,
      type: 'website',
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


