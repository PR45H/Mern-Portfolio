/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { 'max': '639px' },
      // => @media (min-width: 640px) { ... }

      md:{ 'max': '767px' },
      // => @media (min-width: 768px) { ... }

      lg:{ 'max': '1023px' },
      // => @media (min-width: 1024px) { ... }

      xl:{ 'max': '1279px' },
      // => @media (min-width: 1280px) { ... }

      "2xl":{ 'max': '1535px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "primary": "#0A192F",
        "secondary": "#F97316",
        "tertiary": "#54D688",
        "selection": "#7D79D9",
      }
    },
  },
  plugins: [],
}

