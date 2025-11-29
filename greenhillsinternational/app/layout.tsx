import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "./components/Navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Green Hills International | Construction & Metal Trading UAE",
  description: "Green Hills International: Premium construction services, metal and industrial materials trading in UAE. Luxury residential, commercial projects and comprehensive scrap trading solutions.",
  keywords: ["construction", "metal trading", "UAE", "Dubai", "industrial materials", "scrap trading", "building contractor"],
  authors: [{ name: "Green Hills International" }],
  creator: "Green Hills International",
  publisher: "Green Hills International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://greenhillsinternational.com",
    siteName: "Green Hills International",
    title: "Green Hills International | Construction & Metal Trading UAE",
    description: "Leading construction and metal trading company in Dubai & UAE. Premium building projects, MEP services, and global metal supply chain solutions. Expert contractors.",
    images: [
      {
        url: "https://greenhillsinternational.com/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Green Hills International - Construction & Metal Trading",
        type: "image/png",
      },
      {
        url: "https://greenhillsinternational.com/og/og-default.png",
        width: 800,
        height: 420,
        alt: "Green Hills International",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@greenhillsintl",
    title: "Green Hills International | Construction & Metal Trading",
    description: "Premium construction and metal trading services in the UAE",
    images: ["https://greenhillsinternational.com/og/og-default.png"],
    creator: "@greenhillsintl",
  },
  other: {
    "linkedin:url": "https://www.linkedin.com/company/greenhillsinternational",
    "facebook:app_id": "YOUR_FACEBOOK_APP_ID",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://greenhillsinternational.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <Navigation/>
          </header>
          <main className="min-h-dvh">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
