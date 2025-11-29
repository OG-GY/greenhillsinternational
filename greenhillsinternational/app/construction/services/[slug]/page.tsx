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
    title: `${service.title} | Green Hills International`,
    description: `Professional ${service.title.toLowerCase()} by Green Hills International. Expert solutions with proven track record & quality workmanship in Dubai.`,
    keywords: [service.title, 'construction services', 'contractor', 'Dubai', 'UAE', 'professional', 'quality'],
    openGraph: {
      title: `${service.title} Services`,
      description: `Expert ${service.title.toLowerCase()} contractor delivering premium construction solutions tailored to your project needs.`,
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


