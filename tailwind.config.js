/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Josefin Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '992px',
      lg: '1110px',
      xl: '1600px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#062d3e',
          hover: '#021f2C',
        },
        cream: '#ebe3cc',
        teal: '#189cab',
        orange: {
          DEFAULT: '#ed5c01',
          hover: '#e45a03',
        },
        yellow: '#fbbd08',
      },
      backgroundImage: {
        hero: "url('/img/hero/hero-bg.png')",
        pets: "url('/img/pets/pets-bg.png')",
        services: "url('/img/services/bg.png')",
        adoption: "url('/img/adoption/bg.png')",
        newsletterYellow: "url('/img/newsletter/bg-yellow.svg')",
        newsletterOrange: "url('/img/newsletter/bg-orange.svg')",
        footer: "url('/img/footer/bg.svg')",
      },
    },
  },
  plugins: [],
};
