/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/edgesof-solutions',
  assetPrefix: '/edgesof-solutions/',
}

module.exports = nextConfig