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
    title: "Green Hills International | Construction & Metal Trading",
    description: "Premium construction and metal trading services in the UAE",
    siteName: "Green Hills International",
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
