import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL('https://avatar.vercel.sh/shadcn1')],
  },
};

export default nextConfig;
