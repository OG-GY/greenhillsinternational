import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://greenhillsinternational.com";

  // All static pages
  const staticRoutes = [
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/construction", changefreq: "weekly", priority: 0.9 },
    { path: "/metal", changefreq: "weekly", priority: 0.9 },
    { path: "/contact", changefreq: "monthly", priority: 0.7 },
  ];

  // Construction Services (14 services)
  const constructionServices = [
    "construction",
    "design",
    "structural",
    "mep",
    "interior",
    "facades",
    "landscaping",
    "waterproofing",
    "modular",
    "maintenance",
    "temporary",
    "specialty",
    "smart",
    "value-added",
  ];

  // Projects (4 projects)
  const projects = [
    "luxury-tower",
    "corporate-hq",
    "premium-penthouse",
    "mixed-use",
  ];

  // Metal Domains (7 domains)
  const metalDomains = [
    "scrap",
    "non-ferrous",
    "steel",
    "ores",
    "containers",
    "wires",
    "packaging",
  ];

  // Metal Services (same as metal domains)
  const metalServices = [
    "scrap",
    "non-ferrous",
    "steel",
    "ores",
    "containers",
    "wires",
    "packaging",
  ];

  // Build URL entries
  let urls = "";

  // Static pages
  staticRoutes.forEach((route) => {
    urls += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // Construction services
  constructionServices.forEach((service) => {
    urls += `
  <url>
    <loc>${baseUrl}/construction/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Projects
  projects.forEach((project) => {
    urls += `
  <url>
    <loc>${baseUrl}/projects/${project}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Metal domains
  metalDomains.forEach((domain) => {
    urls += `
  <url>
    <loc>${baseUrl}/metal/${domain}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Metal services
  metalServices.forEach((service) => {
    urls += `
  <url>
    <loc>${baseUrl}/metal/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new NextResponse(xml.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
