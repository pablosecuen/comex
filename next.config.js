/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["i.postimg.cc"], // Add any other domains as needed
  },
};

module.exports = nextConfig;
