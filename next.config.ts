import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "farm9.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm8.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm1.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm2.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm3.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm4.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm5.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm6.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "farm7.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
      },
    ],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
  },
};

export default nextConfig;
