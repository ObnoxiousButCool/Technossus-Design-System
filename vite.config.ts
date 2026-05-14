import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',

  resolve: {
    alias: {
      '@': '/src',
      '@components': '/components',
      '@css': '/css',
      '@tokens': '/tokens',
      '@ts': '/ts',
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react/') ||
              id.includes('react-dom') ||
              id.includes('react-router') ||
              id.includes('react-helmet')
            ) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          // Page-level code splitting
          if (id.includes('/src/pages/services/')) return 'pages-services';
          if (id.includes('/src/pages/industries/')) return 'pages-industries';
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
