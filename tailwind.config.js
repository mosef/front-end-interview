module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        regular: '#FFFFFF',
      },
      green: {
        pastel: '#6FEA99',
      },
      purple: {
        dark: '#39244D',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
