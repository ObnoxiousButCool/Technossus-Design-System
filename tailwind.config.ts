import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ED2939',
          black: '#1E1E1E',
        },
      },
      fontFamily: {
        sans: ['"General Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Roboto Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
