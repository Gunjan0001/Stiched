/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2.375rem",
      },
    },
    extend: {
      fontSize: {
        xs: "16px",
        sm: "24px",
        base: "28px",
        md: "31px",
        lg: "39px",
        xl: "40px",
        "2xl": "50px",
        "3xl": "80px",
        "4xl": "120px",
        "5xl": "130px",
      },

      colors: {
        blue: "#105BAC",
        black: "#231F20",
        yellow: "#FFDE3F",
        lightblue: "#69AAD6",
      },
      backgroundImage: {
        herobg: "url('../src/assets/images/webp/herobg.webp')",
        loadingbackground:
          "url('../src/assets/images/png/loadingbackground.png')",
        storybackground: "url('../src/assets/images/png/storybg.png')",
      },
    },
  },
  plugins: [],
};
