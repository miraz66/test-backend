/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": "url('/assets/gallery_2.jpg')",
      },
    },
  },
  plugins: [],
};
