import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/dialog-map" : "",
  assetPrefix: isGitHubPages ? "/dialog-map/" : "",
};

export default nextConfig;
