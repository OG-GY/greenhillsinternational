import ServiceDetailLayout from '../../../components/ServiceDetailLayout';
import AlternatingSection from '../../../components/AlternatingSection';
import { getAllMetalDomainSlugs, getMetalDomainBySlug } from '@/app/lib/metalservicedata';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllMetalDomainSlugs().map((slug) => ({ slug }));
}

const ServicePage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = getMetalDomainBySlug(slug);

  if (!service) {
    return null;
  }

  return (
    <ServiceDetailLayout title={service.title} subtitle={service.summary}>
      {/* Render domain details using tab interface instead */}
      <div className="py-12">
        <p className="text-lg text-muted-foreground">{service.description}</p>
      </div>
    </ServiceDetailLayout>
  );
};

export default ServicePage;


