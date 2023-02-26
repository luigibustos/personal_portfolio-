/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        peachYellow: "#E6CC8F",
        oldLace: "#F7F1E5",
        rust: "#AA3D16",
        blackBean: "#47120D",
        earthYellow: "#E9A657",
        carrotOrange: "#F89925",
        oldGold: "#B8AA28",
        olive: "#6F741B",
        alabaster: "#E7E3DA",
        pumpkin: "#FA690F",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
      },
    },
  },
  plugins: [],
};
