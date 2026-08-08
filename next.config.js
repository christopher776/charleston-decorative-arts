/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "galaxy-prod.tlcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.chitchatdiner.com",
      },
      {
        protocol: "https",
        hostname: "cdn-webassets.schumacher.com",
      },
    ],
  },
};

module.exports = nextConfig;
