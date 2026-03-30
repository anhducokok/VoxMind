import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows Next/Image to load remote cover images from Open Library.
    domains: ["covers.openlibrary.org"],
  },
};

export default nextConfig;
