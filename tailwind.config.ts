import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-border': '#9e9e9e',
        'gray-text': '#71706d',
        'pastel-blue': '#b6ccf5',
        'pastel-orange': '#ffe1d5',
        'pastel-pink': '#e9c4da',
        'pastel-green': '#d0d6ca',
      },
    },
  },
  plugins: [],
};
export default config;
