import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from /portfolio/ if the repo is named "portfolio"
  // Update this if you use a custom domain or different repo name
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};

export default nextConfig;
