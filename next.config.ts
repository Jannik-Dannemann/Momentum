import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',            // needed for next export
  basePath: "/Momentum",       // just your repo name, with a leading slash
  assetPrefix: "/Momentum/",   // same here, ensure CSS/JS load correctly
};

export default nextConfig;