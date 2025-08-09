/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#E89C1E',
        maroon: '#6E2C00',
        cream: '#FFF8E1',
        gold: '#C6A24C',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};