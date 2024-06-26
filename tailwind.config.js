/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        24: "24px",
        18: "18px",
      },
      colors: {
        primary: "#27273d",
        blue: "#3958d3",
        gray450: "#8c8c8c",
        gray650: "#272d44",
        blue300: "#9fc9fd",
        blue500: "#3957d3",
        gray750: "#27273d",
        light: '#fff',
        secondary: "#f6f7f9",
        'dark-gray': '#080808',
        gray: {
          660: "#616161",
          670: "#f3f3ff",
          light:"#e8e8ff"
        }
      },
      lineHeight: {
        70: "70px",
      },
      maxHeight: {
        380: "380px",
      },
      maxWidth: {
        475: "475px",
        900: "900px",
        370: "370px",
        340: "340px",
      },
      width: {
        440: "440px",
      },
    },
  },
  plugins: [],
}