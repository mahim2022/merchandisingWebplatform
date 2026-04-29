import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [65, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
