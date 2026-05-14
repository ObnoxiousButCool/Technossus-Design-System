import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Preserve existing image behaviour — allow any remote domain
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http',  hostname: 'localhost' },
    ],
  },

  // Replicate Vite path aliases → @, @components, @css, @tokens, @ts
  // (handled in tsconfig.json compilerOptions.paths — Next.js reads those automatically)
};

export default nextConfig;
