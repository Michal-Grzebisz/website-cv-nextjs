/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'pl',
    locales: [ 'pl' ],
  },
  images: { domains: [ '' ] },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: [ '@svgr/webpack' ],
    });

    return config;
  },
};
