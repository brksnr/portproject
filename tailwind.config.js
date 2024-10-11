/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
      colors: {
        "#7B61FF" : "#7B61FF",
        "#3730A3" : "#3730A3",
        "#6B7280" : "#6B7280",
        "#1F2937" : "#1F2937",
        "#4338CA" : "#4338CA",
        "#BAB2E7" : "#BAB2E7",
        "#F9F9F9" : "#F9F9F9",
        "#00AB6B" : "#00AB6B",
        "#0077B5" : "#0077B5",
        "#0A0A14" : "#0A0A14",
        "#AF0C48" : "#AF0C48",
        "#AEBCCF" : "#AEBCCF",
        "#E1E1FF" : "#E1E1FF",
        "#17D18B" : "#17D18B",
        "#0BA6F6" : "#0BA6F6",
        "#383838" : "#383838",
        "#B7AAFF" : "#B7AAFF",
        "#FFFFFF" : "#FFFFFF",
        "#777777" : "#777777",
        "#3730A3" : "#3730A3",
        "#8F88FF" : "#8F88FF",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
  },
  plugins: [],
}

