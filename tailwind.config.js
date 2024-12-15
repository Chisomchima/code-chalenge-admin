/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        co: {
          primary: "#A238FF",
          secondary: "#F2E3FF",
          tertiary: "#28004B",
        },
      },
    },
  },
  plugins: [],
};
