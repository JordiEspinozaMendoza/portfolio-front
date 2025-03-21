/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-jordi.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "portfolio-jordi.s3.us-east-1.amazonaws.com",
      }
    ],
  },
};

module.exports = nextConfig;
