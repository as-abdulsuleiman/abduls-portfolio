/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  ...nextConfig,
});
