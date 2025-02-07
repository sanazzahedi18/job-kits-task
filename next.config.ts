import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jobs-kit.com',
        port: '',
        pathname: '*/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
