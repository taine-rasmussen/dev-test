/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#A2DE96',
        'orange': '#FF947B',
        'grey': '#00000029',
        'dark-green': '#4EC6A6',
        'light-green': '#F1F7EA',
      },
    },
  },
  plugins: [],
}

