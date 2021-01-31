module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FFF1A3",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
