/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: "#Eaeded",
          lightblue: "#232F3A",
          yellow: "#Febd69",
          default: "#131921",
        },
      },
    },
  },
  plugins: [],
};
