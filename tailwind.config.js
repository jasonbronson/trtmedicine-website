/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand: '#4f55ed',
        mint: '#26b862',
        aqua: '#26c2ab',
        amber: '#f59a33',
        ink: '#111318'
      },
      boxShadow: {
        phone: '0 32px 90px rgba(17, 19, 24, 0.18)',
        soft: '0 20px 60px rgba(79, 85, 237, 0.16)'
      }
    }
  },
  plugins: []
};
