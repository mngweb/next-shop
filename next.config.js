/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['media.graphassets.com', 'naszsklep-api.vercel.app', 'fakestoreapi.com', 'picsum.photos'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
