/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505',
          darker: '#020202',
          card: '#0f0f0f',
          cardBorder: '#1c1c1e',
          red: '#E50914',
          'red-glow': 'rgba(229, 9, 20, 0.15)',
          gray: '#1A1A1A',
          lightGray: '#2c2c2e',
          textMuted: '#8e8e93'
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      }
    },
  },
  plugins: [],
}
