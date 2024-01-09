const path = require('path');

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: isProd ? 'https://wyzwanie-security.securitybeztabu.pl' : undefined,
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
}

module.exports = nextConfig