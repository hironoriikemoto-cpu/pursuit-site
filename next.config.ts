import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // microCMSの画像アセット
      { protocol: "https", hostname: "images.microcms-assets.io" },
    ],
  },
};

export default nextConfig;
