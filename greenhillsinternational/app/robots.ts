// app/robots.ts
import { NextResponse } from "next/server";

const ROBOTS = `User-agent: *
Allow: /

Sitemap: https://greenhillsinternational.com/sitemap.xml
`;

export async function GET() {
  return new NextResponse(ROBOTS, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
