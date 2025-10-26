/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        brand:{
          secondary: "#2C442D",      // Herbal Green
          primary: "#B6B6AA",    // Soft Beige
          accent: "#87CEEB",       // Sky Blue
          clay: "#D27D2D",         // Optional warm tone
          darkText: "#333333",     // For headings/body
          white: "#FFF"

        }
      }
    },
  },
  plugins: [],
};
