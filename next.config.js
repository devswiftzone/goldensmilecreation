/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to support API routes
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'ext.same-assets.com'],
  },
  // React optimization
  reactStrictMode: true,
  // This is needed for Netlify deployment
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
