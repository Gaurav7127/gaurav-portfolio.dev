/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transform: ['group-hover'], // optional, in case you want to flip on hover later
    },
  },
  plugins: [],
};
