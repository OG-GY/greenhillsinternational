import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import DynamicNavigation from "./components/DynamicNavigation"
import DynamicFooter from "./components/DynamicFooter"
import SEOSchema from "./components/SEOSchema"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "Green Hills International | Construction & Metal Trading UAE",
    template: "%s | Green Hills International"
  },
  description: "Green Hills International is a leading construction and metal trading company in UAE & Dubai. Premium building projects, MEP services, industrial materials, and global metal supply chain solutions.",
  keywords: [
    // Brand keywords (Primary - for ranking #1)
    "Green Hills International",
    "Green Hills International UAE",
    "Green Hills International Dubai",
    "Green Hills construction",
    "Green Hills metal trading",
    "GHI UAE",
    "Green Hills LLC",
    // Construction keywords
    "construction company UAE",
    "construction company Dubai",
    "best construction company in UAE",
    "construction services UAE",
    "construction services Dubai",
    "building contractor UAE",
    "building contractor Dubai",
    "commercial construction UAE",
    "residential construction Dubai",
    "luxury construction UAE",
    "villa construction Dubai",
    "MEP services UAE",
    "MEP contractor Dubai",
    // Metal trading keywords
    "metal trading UAE",
    "metal trading Dubai",
    "best metal services in UAE",
    "metal suppliers UAE",
    "scrap trading UAE",
    "scrap metal Dubai",
    "ferrous metals UAE",
    "non-ferrous metals Dubai",
    "steel trading UAE",
    "aluminum suppliers Dubai",
    "copper trading UAE",
    "industrial materials UAE",
    // Location keywords
    "UAE construction",
    "Dubai contractor",
    "Abu Dhabi construction",
    "Sharjah metal trading"
  ],
  authors: [{ name: "Green Hills International", url: "https://greenhillsinternational.com" }],
  creator: "Green Hills International",
  publisher: "Green Hills International",
  metadataBase: new URL("https://www.greenhillsinternational.com"),
  applicationName: "Green Hills International",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Construction & Metal Trading",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://greenhillsinternational.com",
    siteName: "Green Hills International",
    title: "Green Hills International | Construction & Metal Trading UAE",
    description: "Green Hills International - Leading construction company and metal trading specialists in Dubai, UAE. Premium building projects, MEP services, and global metal supply solutions.",
    images: [
      {
        url: "https://greenhillsinternational.com/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Green Hills International - Construction & Metal Trading Company in UAE",
        type: "image/png",
      },
      {
        url: "https://greenhillsinternational.com/og/og-default.png",
        width: 800,
        height: 420,
        alt: "Green Hills International UAE",
        type: "image/png",
      },
    ],
    countryName: "United Arab Emirates",
  },
  twitter: {
    card: "summary_large_image",
    site: "@greenhillsintl",
    title: "Green Hills International | Construction & Metal Trading UAE",
    description: "Leading construction and metal trading company in Dubai & UAE. Premium projects and global metal solutions.",
    images: ["https://greenhillsinternational.com/og/og-default.png"],
    creator: "@greenhillsintl",
  },
  verification: {
    google: "dcBp0qgqHRQzPc8oFzfm6tDJ8VebMjXj8Zj0q6KLvNg",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
  other: {
    "linkedin:url": "https://www.linkedin.com/company/greenhillsinternational",
    "fb:app_id": "YOUR_FACEBOOK_APP_ID",
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.1857;55.2658",
    "ICBM": "25.1857, 55.2658",
    "DC.title": "Green Hills International",
    "DC.creator": "Green Hills International",
    "DC.subject": "Construction, Metal Trading, UAE",
    "DC.description": "Leading construction and metal trading company in UAE",
    "DC.publisher": "Green Hills International",
    "DC.language": "en",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://greenhillsinternational.com",
    languages: {
      "en-AE": "https://greenhillsinternational.com",
      "en-US": "https://greenhillsinternational.com",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <SEOSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Green Hills Int'l" />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <DynamicNavigation/>
          </header>
          <main className="min-h-dvh">{children}</main>
          <DynamicFooter />
        </Suspense>
      </body>
    </html>
  )
}
