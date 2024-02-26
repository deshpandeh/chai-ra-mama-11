/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  async rewrites() {
    return [

      {
        source: "/api/:path*",
        destination: "https://the-api.vercel.app/api/:path*",
        /* destination: "http://localhost:8080/api/:path*", */
      },
    ];
  },
};

module.exports = nextConfig
