/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        'var(--vf-recursive)',
        {
          fontFeatureSettings: "'dlig', 'titl', 'ss09', 'ss11'",
          fontVariationSettings: "'MONO' 0.001, 'CASL' 0.001",
        },
      ],
    },
    fontSize: {
      sm: ['10px', '16px'],
      base: ['16px', '24px'],
      lg: ['24px', '40px'],
      xl: ['40px', '48px'],
      '2xl': ['64px', '72px'],
      '3xl': ['104px', '120px'],
      '4xl': ['168px', '200px'],
      '5xl': ['272px', '320px'],
    },
    fontWeight: {
      normal: 'var(--rec-normal-wght)',
      semibold: 'var(--rec-semibold-wght)',
      bold: 'var(--rec-heavy-wght)',
    },
    spacing: {
      '2xs': '4px',
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '40px',
      xl: '64px',
      '2xl': '104px',
      '3xl': '168px',
      '4xl': '272px',
      '5xl': '440px',
    },
  },
  plugins: [],
}
