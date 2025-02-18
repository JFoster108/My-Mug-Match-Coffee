import { Config } from "tailwindcss";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B4226", // Coffee brown
        secondary: "#D9B382", // Latte beige
        accent: "#A67C52", // Mocha shade
        background: "#FFF5DC", // Light cream
        textDark: "#3D2B1F", // Dark roast shade
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

