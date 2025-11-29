// app/sitemap.ts
import { NextResponse } from "next/server";

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://greenhillsinternational.com/</loc>
    <lastmod>2025-11-29T14:33:12.748Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- other <url> entries... -->
</urlset>`;

export async function GET() {
  return new NextResponse(SITEMAP_XML, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400", // optional: cache on CDN for 1 day
    },
  });
}