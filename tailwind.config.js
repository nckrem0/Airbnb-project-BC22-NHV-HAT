/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    screens: {
      nb: "0px",

      mb: "414px",

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
    maxWidth: {
      0: "0rem" /* 0px */,
      none: "none",
      xs: "20rem" /* 320px */,
      sm: "24rem" /* 384px */,
      md: "28rem" /* 448px */,
      lg: "32rem" /* 512px */,
      xl: "36rem" /* 576px */,
      "2xl": "42rem" /* 672px */,
      "3xl": "48rem" /* 768px */,
      "4xl": "56rem" /* 896px */,
      "5xl": "64rem" /* 1024px */,
      "6xl": "72rem" /* 1152px */,
      "7xl": "80rem" /* 1280px */,
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1536px",
      "8xl": "1660px",
    },
  },
  plugins: [],
};
