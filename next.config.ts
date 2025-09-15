import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
