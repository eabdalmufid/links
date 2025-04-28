const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hisoka.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dika.greyrat.me',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: false,
};
