module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      colors: {
        accent: "#EF6D58",
        primary: "#B550F8",
        dark: "#391400",
        "dark-bg": "#28293E",
        "light-bg": "#FDF0E9",
        "dark-gray": "rgba(57, 20, 0, 0.64)",
        "light-gray": "rgba(255, 255, 255, 0.64)",
      },
    },
  },
  plugins: [],
};
