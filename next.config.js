/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  experimental: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-jordi.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
