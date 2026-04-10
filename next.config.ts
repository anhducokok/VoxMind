import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows Next/Image to load remote cover images from Open Library.
    // Note: `domains` is deprecated in Next 16.2; prefer `remotePatterns`.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
      {
        protocol: "https",
        hostname: "naw0f6brpa6yg3dv.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
