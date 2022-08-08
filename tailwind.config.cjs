/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-0': '#121212',
        'color-1': '#181818',
        'color-2': '#202020',
        'color-3': '#212121',
        'color-4': '#313131',
        'color-5': '#717171',
      },
    },
  },
  plugins: [],
};
