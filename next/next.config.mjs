/** @type {import('next').NextConfig} */

const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dokumentacja-iso-27001',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;