import { Metadata } from 'next';
import ServiceDetailLayout from '../../../components/ServiceDetailLayout';
import AlternatingSection from '../../../components/AlternatingSection';
import { getAllServiceSlugs, getServiceBySlug } from '../../../lib/servicedata';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Construction Service | Green Hills International',
    };
  }

  return {
    title: `${service.title} | Construction Services | Green Hills International`,
    description: `Expert ${service.title.toLowerCase()} services by Green Hills International. Professional construction solutions with years of industry expertise.`,
    keywords: [service.title, 'construction', 'services', 'Dubai', 'UAE', 'contractor'],
    openGraph: {
      title: service.title,
      description: `Professional ${service.title.toLowerCase()} services tailored to your project needs.`,
      type: 'website',
    },
  };
}

const ServicePage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  return (
    <ServiceDetailLayout title={service.title}>
      {service.sections.map((section, index) => (
        <AlternatingSection
          key={index}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          reverse={index % 2 === 1}
        />
      ))}
    </ServiceDetailLayout>
  );
};

export default ServicePage;


