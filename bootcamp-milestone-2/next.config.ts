import type { NextConfig } from "next";

const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = NextConfig;
export default NextConfig;



