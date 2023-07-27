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

module.exports = nextConfig;
