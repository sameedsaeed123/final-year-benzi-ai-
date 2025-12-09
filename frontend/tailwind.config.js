/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F3A4F',
        secondary: '#2D6A8E',
        accent: '#3AA6A0',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'serif'],
      },
      maxWidth: {
        hero: '1100px',
      },
      boxShadow: {
        nav: '0 20px 45px -20px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
