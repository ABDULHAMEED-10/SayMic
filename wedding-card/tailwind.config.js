/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B0F1A',        // Mehroon
        secondary: '#D4AF37',      // Gold
        tertiary: '#FAF9F6',       // Ivory
        ivory: '#FAF9F6',
        charcoal: '#2C3E50',
        gold: '#D4AF37',
        rose: '#C44569',
        emerald: '#0F9D58',
        blush: '#F8D7DA',
        cream: '#FFF8E7',
        sage: '#9CAF88',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'greatvibes': ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
