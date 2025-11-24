import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Optimization settings for modern browsers */
  swcMinify: true,
  
  /* Target modern browsers - saves ~11 KB by removing ES5 fallbacks */
  onDemandEntries: {
    maxInactiveAge: 25000,
    pagesBufferLength: 2,
  },

  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /* Compression and optimization */
  compress: true,
  
  /* Production source maps disabled for smaller bundle */
  productionBrowserSourceMaps: false,

  /* Experimental optimizations */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
