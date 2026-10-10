import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/city-fix-guide" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
