/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          dominant: "#F6F5F5",
          primary: "#D3E0EA",
          secondary: "#1687A7",
          accent: "#276678",
        },
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif']
      }
    },
  },
  plugins: [],
}

