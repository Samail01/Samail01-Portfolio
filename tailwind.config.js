/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#ffbb98",
        light: "#d3d3d3",
        dark: "#344648",
        beige: "#fbe0c3",
      },
    },
  },
  plugins: [],
};
