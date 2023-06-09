/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  colors: {
    blue: '#1fb6ff',
    pink: '#ff49db',
    orange: '#ff7849',
    primary: '#ff7849',
    green: '#13ce66',
    'gray-dark': '#273444',
    gray: '#8492a6',
    'gray-light': '#d3dce6',
  },
  plugins: [],
};
