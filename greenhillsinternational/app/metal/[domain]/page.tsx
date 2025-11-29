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
    description: `${domain.title} trading solutions by Green Hills International. Quality materials & reliable global supply chain for industries.`,
    keywords: [domain.title, 'metal trading', 'industrial supplier', 'global trade', 'UAE', 'Dubai'],
    openGraph: {
      type: 'website',
      url: `https://greenhillsinternational.com/metal/${domainSlug}`,
      title: `${domain.title} Trading Solutions`,
      description: `${domain.title} trading solutions by Green Hills International. Quality materials & reliable supply chain.`,
      siteName: 'Green Hills International',
      locale: 'en_AE',
      images: [
        {
          url: 'https://greenhillsinternational.com/og/og-metal.png',
          width: 1200,
          height: 630,
          alt: `${domain.title} Trading`,
          type: 'image/png',
        },
        {
          url: 'https://greenhillsinternational.com/og/og-metal.png',
          width: 800,
          height: 420,
          alt: 'Metal Trading',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${domain.title} Trading Solutions`,
      description: `Professional ${domain.title.toLowerCase()} trading with quality materials & reliable supply.`,
      images: ['https://greenhillsinternational.com/og/og-metal.png'],
    },
    alternates: {
      canonical: `https://greenhillsinternational.com/metal/${domainSlug}`,
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
