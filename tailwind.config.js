/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4.375rem",
        "2xl": "12.375rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
