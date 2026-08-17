import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL('https://avatar.vercel.sh/shadcn1'),
      new URL(
        'https://images.unsplash.com/photo-**?w=900&auto=format&fit=crop&q=80',
      ),
      new URL(
        'https://images.unsplash.com/photo-**?q=80&w=640&auto=format&fit=crop',
      ),
    ],
  },
};

export default nextConfig;
