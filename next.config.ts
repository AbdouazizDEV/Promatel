import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "promatelsn.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/partenaires",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/a-propos-de-nous",
        destination: "/a-propos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
