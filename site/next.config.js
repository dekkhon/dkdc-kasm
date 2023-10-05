/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DKDC-Kasm-Repo',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://dekkhon.github.io/dkdc-kasm/',
    contactUrl: 'https://dekkhon.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/dkdc-kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
