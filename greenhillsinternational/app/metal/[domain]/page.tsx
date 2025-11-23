import { notFound } from 'next/navigation';
import { getMetalDomainBySlug, getAllMetalDomainSlugs } from '@/app/lib/metalservicedata';
import MetalServiceDetailClient from './client';

export const generateStaticParams = async () => {
  const slugs = getAllMetalDomainSlugs();
  return slugs.map((slug) => ({
    domain: slug,
  }));
};

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
