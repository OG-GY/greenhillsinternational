import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.next/'],
      },
    ],
    sitemap: 'https://greenhillsinternational.com/sitemap.xml',
  };
}
