import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMetalDomainBySlug, getAllMetalDomainSlugs } from '@/app/lib/metalservicedata';
import MetalServiceDetailClient from './client';

export const generateStaticParams = async () => {
  const slugs = getAllMetalDomainSlugs();
  return slugs.map((slug) => ({
    domain: slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string }>;
}): Promise<Metadata> {
  const { domain: domainSlug } = await params;
  const domain = getMetalDomainBySlug(domainSlug);

  if (!domain) {
    return {
      title: 'Metal Trading | Green Hills International',
    };
  }

  return {
    title: `${domain.title} | Metal Trading | Green Hills International`,
    description: domain.summary || `Professional ${domain.title.toLowerCase()} trading solutions by Green Hills International. Global supplier of quality materials.`,
    keywords: [domain.title, 'metal trading', 'industrial materials', 'scrap trading', 'UAE', 'Dubai'],
    openGraph: {
      title: domain.title,
      description: domain.summary,
      type: 'website',
    },
  };
}

export default async function MetalServiceDetail({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain: domainSlug } = await params;
  const domain = getMetalDomainBySlug(domainSlug);

  if (!domain) {
    notFound();
  }

  return <MetalServiceDetailClient domain={domain} />;
}
