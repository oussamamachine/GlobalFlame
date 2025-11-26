/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f3e6d8',
          200: '#e7cdbb',
          300: '#d7ad94',
          400: '#c8906d',
          500: '#b87a52',
          600: '#a36447',
          700: '#87503c',
          800: '#6d4234',
          900: '#59372c',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#1a1a1a',
          900: '#0d0d0d',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      }
    },
  },
  plugins: [],
}
