/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Generate static HTML files
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
  };

export default nextConfig;
