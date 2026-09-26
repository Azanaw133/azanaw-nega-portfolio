import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        paper: '#f8fafc',
        coral: '#f97316',
        moss: '#0f766e',
        sand: '#e2e8f0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 55px rgba(15, 23, 42, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
