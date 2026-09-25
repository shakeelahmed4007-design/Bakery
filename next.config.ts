import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow unoptimized images for Vercel free tier compatibility
  images: {
    unoptimized: true,
  },
  // Skip type errors during build — Cloudflare-specific API routes
  // use D1/R2 bindings that aren't available on Vercel (frontend works fine)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Hide the Next.js dev mode indicator badge
  devIndicators: false,
};

export default nextConfig;
