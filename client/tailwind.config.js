/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4aade8",
          secondary: "#57567b",
          accent: "#f27a2b",
          // neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
