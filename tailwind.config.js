module.exports = {
  theme: {
    fontFamily: {
      serif: ["Libre Baskerville", "serif"],
      sans: ["Work Sans", "sans-serif"],
    },
    colors: {
      black: "#000",
      blue: "#1a1b46",
      white: "#fff",
      grey: "#f4f7f6",
    },
    extend: {
      fontSize: {
        super: "3rem",
        huge: "2.5rem",
        tiny: "10px",
      },
      width: {
        articleImageWidth: "24rem",
      },
    },
  },
  plugins: [require("glhd-tailwindcss-transitions")()],
};
