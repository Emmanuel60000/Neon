/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenScreen: "#00E599",
        greenHover: "#1AFFB2",
        darkScreen: "#1A1A1A",
        grayLight: "#E3E3E3",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        100: "30rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
