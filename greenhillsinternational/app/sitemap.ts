import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://greenhillsinternational.com';

  // All static pages
  const staticRoutes = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/construction', changefreq: 'weekly', priority: 0.9 },
    { path: '/metal', changefreq: 'weekly', priority: 0.9 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  ];

  // Construction Services (14 services)
  const constructionServices = [
    'construction',
    'design',
    'structural',
    'mep',
    'interior',
    'facades',
    'landscaping',
    'waterproofing',
    'modular',
    'maintenance',
    'temporary',
    'specialty',
    'smart',
    'value-added',
  ];

  // Projects (4 projects)
  const projects = [
    'luxury-tower',
    'corporate-hq',
    'premium-penthouse',
    'mixed-use',
  ];

  // Metal Domains (7 domains)
  const metalDomains = [
    'scrap',
    'non-ferrous',
    'steel',
    'ores',
    'containers',
    'wires',
    'packaging',
  ];

  // Metal Services (same as metal domains)
  const metalServices = [
    'scrap',
    'non-ferrous',
    'steel',
    'ores',
    'containers',
    'wires',
    'packaging',
  ];

  // Build all URLs array
  const urls: MetadataRoute.Sitemap = [];

  // Add static pages
  staticRoutes.forEach((route) => {
    urls.push({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changefreq as 'weekly' | 'monthly',
      priority: route.priority,
    });
  });

  // Add construction services
  constructionServices.forEach((service) => {
    urls.push({
      url: `${baseUrl}/construction/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add projects
  projects.forEach((project) => {
    urls.push({
      url: `${baseUrl}/projects/${project}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add metal domains
  metalDomains.forEach((domain) => {
    urls.push({
      url: `${baseUrl}/metal/${domain}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add metal services
  metalServices.forEach((service) => {
    urls.push({
      url: `${baseUrl}/metal/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return urls;
}
