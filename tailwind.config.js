/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#213555",
        background: "#F8FAFC",
        primary: "#D9EAFD",
        secondary: "#3E5879",
        accent: "#BCCCDC",
      },
      fontFamily: {
        sans: ["Poppins", "static"],
      },
    },
  },
  plugins: [],
};
