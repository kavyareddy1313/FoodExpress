/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "on-primary": "#ffffff",
        "error": "#ba1a1a",
        "background": "#f9f9ff",
        "surface": "#f9f9ff",
      }
    },
  },
  plugins: [],
}
