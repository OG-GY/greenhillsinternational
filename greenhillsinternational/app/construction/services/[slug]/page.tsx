import ServiceDetailLayout from '../../../components/ServiceDetailLayout';
import AlternatingSection from '../../../components/AlternatingSection';
import { getAllServiceSlugs, getServiceBySlug } from '../../../lib/servicedata';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
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


