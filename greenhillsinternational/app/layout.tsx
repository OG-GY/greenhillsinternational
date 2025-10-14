import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "./components/Navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Green Hills International",
  description: "Green Hills",
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
