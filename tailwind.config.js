import { defineConfig } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#fbf9f6",
        primary: "#171818",
        secondary: "#5e5e5e",
        error: "#ba1a1a",
        "surface-container": "#efeeeb",
        "surface-container-low": "#f5f3f0",
        "surface-container-lowest": "#ffffff"
      },
      spacing: {
        gutter: "24px",
        "container-max": "1200px",
        "margin-desktop": "48px",
        "margin-mobile": "20px",
        "section-gap": "64px"
      },
      borderRadius: {
        xl: "0.75rem",
        full: "9999px"
      }
    }
  },
  plugins: []
};